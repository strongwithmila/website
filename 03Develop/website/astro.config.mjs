import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';

// SITE_URL: the site's domain (used for canonical URL and social tags).
// BASE_PATH: the sub-folder the site lives in, e.g. '/my-portfolio' on GitHub Pages.
// Both are set automatically by the GitHub Pages workflow; leave them empty locally.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
  // Pages stay static; only /api/enquiry runs as a small server function on Vercel.
  adapter: vercel(),
  // Private settings for sending enquiry emails, set in Vercel (Settings → Environments).
  // Read on the server only, never sent to the browser.
  env: {
    schema: {
      BREVO_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      ENQUIRY_TO_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
      ENQUIRY_FROM_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
});
