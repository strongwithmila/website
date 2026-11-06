# Roadmap

## Phase 1 — public landing page (in progress)

- [x] Single page following the FigJam flow: hero → resonance → method → package → fit →
      about → cycle-aware → (founding CTA) → FAQ → enquiry → footer
- [x] Enquiry with Instagram / email alternatives, error and success states
- [x] Mobile-first, keyboard accessible, reduced-motion support
- [x] Placeholder privacy and imprint pages

### Launch checklist (blocking)

- [ ] Confirm offer name, price, onsite location, response time (`TODO(Mila)` in `src/content/site.ts`)
- [ ] Verify contact email
- [x] Add real photo with alt text
- [ ] Approve or edit About copy
- [ ] Replace typographic wordmark with the official logo file
- [x] Choose form service (Brevo via a Vercel function)
- [ ] Sign Brevo and Vercel DPAs; test a real submission on the live site
- [x] Choose host (Vercel)
- [ ] Connect custom domain; set `SITE_URL`; add sitemap
- [ ] Write Impressum and Datenschutzerklärung; professional legal review
- [ ] Decide enquiry retention period
- [ ] Final visual QA on real phones (iOS Safari, Android Chrome)

## Phase 2 — after launch (ideas, not commitments)

- ~~Social share image (og:image)~~ done 2026-11-02
- Privacy-friendly analytics only if needed (cookie-free, EU-hosted)
- Optional booking link (Calendly/TidyCal) after fit-check flow is proven
- German version, human-reviewed
- Testimonials section, only with real, consented quotes
