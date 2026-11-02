import type { APIRoute } from 'astro';
import { BREVO_API_KEY, ENQUIRY_TO_EMAIL, ENQUIRY_FROM_EMAIL } from 'astro:env/server';
import { enquiry } from '../../content/site';

// Runs on Vercel as a server function (not built into a static page).
export const prerender = false;

// Receives the enquiry form and emails it to Mila through Brevo (EU email service).
// Nothing is stored or logged here: the enquiry only exists in Mila's inbox.

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export const POST: APIRoute = async ({ request }) => {
  // Only accept submissions from this website. Vercel passes the visited address in
  // x-forwarded-host, which can differ from the internal request URL.
  const origin = request.headers.get('origin');
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? new URL(request.url).host;
  if (origin && new URL(origin).host !== host) {
    console.error('Enquiry refused: sent from another website.');
    return json(403, { ok: false });
  }

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    console.error('Enquiry refused: the request was not valid JSON.');
    return json(400, { ok: false, error: 'invalid' });
  }

  // Spam bots fill in the hidden field; pretend it worked and send nothing
  if (typeof data.company === 'string' && data.company.trim()) return json(200, { ok: true });

  // Same checks as the form in the browser
  const name = typeof data.name === 'string' ? data.name.trim() : '';
  const email = typeof data.email === 'string' ? data.email.trim() : '';
  const goal = typeof data.goal === 'string' ? data.goal : '';
  const message = typeof data.message === 'string' ? data.message.trim() : '';
  const valid =
    name.length > 0 &&
    name.length <= 80 &&
    isEmail(email) &&
    email.length <= 120 &&
    enquiry.goals.includes(goal) &&
    message.length <= 1500 &&
    data.consent === true;
  if (!valid) {
    console.error('Enquiry refused: the details did not pass the checks.');
    return json(400, { ok: false, error: 'invalid' });
  }

  if (!BREVO_API_KEY || !ENQUIRY_TO_EMAIL || !ENQUIRY_FROM_EMAIL) {
    // Names only, never the values
    const missing = Object.entries({ BREVO_API_KEY, ENQUIRY_TO_EMAIL, ENQUIRY_FROM_EMAIL })
      .filter(([, value]) => !value)
      .map(([key]) => key);
    console.error(`Enquiry email is not configured. Missing in Vercel: ${missing.join(', ')}.`);
    return json(503, { ok: false });
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Would most like help with: ${goal}`,
    '',
    message ? `Message:\n${message}` : 'No message added.',
    '',
    'The sender agreed to the privacy policy so you can reply to this enquiry.',
    'Reply to this email to answer them directly.',
  ];

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': BREVO_API_KEY, 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      sender: { name: 'Strong with Mila website', email: ENQUIRY_FROM_EMAIL },
      to: [{ email: ENQUIRY_TO_EMAIL }],
      replyTo: { email, name },
      subject: `New coaching enquiry from ${name}`,
      textContent: lines.join('\n'),
      htmlContent: `<div style="font-family:sans-serif;line-height:1.6">${lines
        .map((l) => (l ? escapeHtml(l).replace(/\n/g, '<br>') : '<br>'))
        .join('<br>')}</div>`,
    }),
  }).catch(() => null);

  if (!res?.ok) {
    // Log Brevo's reason (e.g. unverified sender, blocked IP), never the visitor's details
    const reason = res ? await res.json().then((b) => b?.message ?? '', () => '') : 'network error';
    console.error(`Brevo could not send the enquiry email (status ${res?.status ?? '-'}): ${reason}`);
    return json(502, { ok: false });
  }

  return json(200, { ok: true });
};
