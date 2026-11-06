# Decisions

Status key: **Confirmed** (Mila approved) · **Proposed** (built this way, awaiting approval) · **Open** · **Superseded** (replaced by a later row)

| Date | Decision | Status | Notes |
| --- | --- | --- | --- |
| 2026-10-29 | Astro static site, no backend | Superseded | Pages are still static; one server function (`/api/enquiry`) added 2026-11-02. |
| 2026-10-29 | Self-host fonts (Playfair Display, Montserrat, Allura) | Proposed | Avoids sending visitor IPs to Google (German GDPR case law). |
| 2026-10-29 | Offer shown as "Your 4-week strength & nutrition foundation" | Proposed | Name unconfirmed: PDF says "Strong Through Your Cycle", business facts say "Strong Foundations". Set `offer.name` once decided. |
| 2026-10-29 | No price shown; "shared after a short fit check" | Proposed | ~€599 standard and founding price are not confirmed. |
| 2026-10-29 | Founding-client section and "limited spots" wording off by default | Proposed | Turn on with `founding.enabled` only with real availability. No testimonials shown. |
| 2026-10-29 | Minimal enquiry form (name, email, goal, message, consent) | Proposed | PDF's 10 fields incl. health/location deferred to the post-fit-check intake, per CLAUDE.md. |
| 2026-10-29 | Form falls back to pre-filled email until a form service is chosen | Superseded | Brevo chosen 2026-11-02 (see below). DPA still to sign. |
| 2026-10-29 | About copy uses the PDF draft; photo placeholder | Proposed | No invented credentials. Mila's real portrait has since replaced the placeholder. |
| 2026-10-29 | Hosting provider | Superseded | Vercel chosen 2026-11-02 (see below). |
| 2026-11-06 | Figma "Website Design System" page: colour variables with Light and Dark modes, Breakpoint modes (Desktop 1440 / Tablet 834 / Mobile 390) and components matching the website | Confirmed | Dark palette (approved by Mila): page `#1D1418`, surface `#271B21`, raised card `#33242C`, deep plum `#38182C`, text `#EDE4DC`, muted `#C4B5AB`, headings `#EFD9E6`, rose accent `#E7A7B1`, navy `#A9BACF`, forest `#A3C2AC`, border `#5A4650`; clay unchanged. For design use; the website has no dark mode yet. |
| 2026-11-06 | Second testimonial added (M., 28 — Berlin) with the "plum hair and glasses" illustration; quotes shown as a carousel, one card at a time with arrows and dots (swipe on phones) | Confirmed | Wording approved by M. Illustration is decorative, not a likeness of the client. |
| 2026-11-06 | Removed the unused GitHub Pages publish workflow | Confirmed | Vercel builds and hosts the site from `03Develop/website`. Do not move or rename that folder without also updating Vercel → Settings → Root Directory. |
| 2026-11-02 | Hosting on Vercel (strong-website.vercel.app), function region Frankfurt | Confirmed | Custom domain still open; set `SITE_URL` once connected. |
| 2026-11-02 | Enquiries emailed via a Vercel function and Brevo (EU); nothing stored | Confirmed | Privacy policy must name Vercel and Brevo and the retention period. |
| 2026-11-02 | One testimonial shown (N., 41 — Berlin) with a decorative illustration | Confirmed | Wording approved by N. Add more only when real and approved. |
| 2026-11-02 | Brand colours use the brand board codes: brown `#4A332C`, burgundy `#7A2E3A`, navy `#2F3B4A`, clay `#C68876` (with cream `#F7F3EE`, off-white `#EDE7E1`, plum `#4B1F3B`, forest `#3F5F4A`) | Confirmed | Replaces the web brief's brown/burgundy/navy/clay. CLAUDE.md §7 updated to match. |
| 2026-11-02 | Helper tints kept as approved shades: near-white `#FFFDFA` cards, plum hover `#3A172D`, taupe field border `#B9A9A2`, wheel tints, see-through brown/cream | Confirmed | Clay is decorative only, never for text. |
| 2026-11-02 | Typography: Playfair Display headings at regular weight (400) on one size scale; small section labels in soft spaced brown capitals (Montserrat); Allura only for the wordmark and short notes | Confirmed | The "You care…" section keeps its two-voice headline by design. |
