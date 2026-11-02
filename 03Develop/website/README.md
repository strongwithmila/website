# Strong with Mila — website v1

A single-page landing site for English-speaking women in Berlin. Built from
`00Context/Strong With Mila Website Design.pdf` and the FigJam flow
"Website visitor → enquiry flow — v1".

**Stack:** [Astro](https://astro.build) (static HTML, almost no JavaScript), TypeScript,
plain CSS with brand tokens, self-hosted fonts (no Google Fonts requests, no cookies, no trackers).

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # type check + production build into dist/
npm run preview    # serve the built site
```

## Editing content (for Mila)

Almost everything you'd want to change lives in **one file: `src/content/site.ts`**.

| Want to change… | Look for |
| --- | --- |
| Offer name, price, location, what's included | `offer` |
| Turn the founding-client offer on/off | `founding.enabled` |
| Button wording | `cta` |
| About text, photo, credentials | `about` (put the photo in `public/images/`) |
| FAQ | `faq` |
| Email / Instagram | `contact` |
| Page title & Google description | `seo` |

Every `TODO(Mila)` comment marks something unconfirmed. Search for it before launch.

## Enquiry form

Fields: name, email, broad goal, optional message, consent. No health data is collected.

The form opens in a pop-up and sends to the site's own server function, `src/pages/api/enquiry.ts`.
That function re-checks the details, drops spam (hidden "company" field) and emails the enquiry to
Mila through **Brevo** (EU email service). Reply-to is the visitor, so Mila can just press Reply.
Nothing is stored or logged; the enquiry only exists in the inbox.

Setup (already done in Vercel → Settings → Environments, for Production and Preview):

| Variable | What it is |
| --- | --- |
| `BREVO_API_KEY` | Brevo API key (Secret). Replace it in Brevo → Settings → SMTP & API if it leaks. |
| `ENQUIRY_TO_EMAIL` | Where enquiries arrive |
| `ENQUIRY_FROM_EMAIL` | Sender address verified in Brevo |

- The function region is set to Frankfurt (fra1) in Vercel → Settings → Functions.
- Locally there is no Brevo key, so sending shows the error message. That is expected.
- `PUBLIC_FORM_ENDPOINT` can point the form somewhere else; set it to an empty value to fall back
  to opening a pre-filled email.
- Privacy policy must name Vercel and Brevo as processors and state how long enquiries are kept.

## Before going live

See `docs/ROADMAP.md` → "Launch checklist". In short: confirm offer/price/location, add real
photo + logo, write and legally review Impressum and
Datenschutzerklärung, set `SITE_URL`.

## Structure

```
src/content/site.ts     all editable copy and settings
src/components/         one file per page section
src/layouts/            page shell (SEO tags) and legal-page shell
src/pages/              index, privacy, imprint
src/styles/global.css   design tokens and base styles
```
