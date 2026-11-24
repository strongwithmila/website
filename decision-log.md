# Strong with Mila Website — Decision Log

A record of the discussions and decisions from every Claude chat about this project, from the first folder setup on 28 Oct 2026 to the review-flow discussion on 11 Nov 2026.

- **Compiled:** 24 Nov 2026, from the chat transcripts, the git history and `03Develop/website/docs/DECISIONS.md`.
- **Scope:** the website project only: chats run in `Desktop/Claude Code`, `Desktop/Claude Strong Website` and this folder. The separate **Claude Code Brand Project** (Instagram content, photo edits, content calendar) is not included.
- **Status key:** **Decided** (Mila chose or approved it in the chat) · **Proposed** (built this way, not yet confirmed) · **Open** (still needs a decision) · **Superseded** (replaced by a later decision).
- The short, maintained table of approved decisions is still [03Develop/website/docs/DECISIONS.md](03Develop/website/docs/DECISIONS.md). This log has more of the story and the reasoning.

---

## At a glance: where things stand

| Area | Current state | Status |
| --- | --- | --- |
| Stack | Astro static site plus one server function (`/api/enquiry`) | Decided |
| Hosting | Vercel, `strong-website.vercel.app`, function region Frankfurt (fra1) | Decided |
| Repository | `github.com/strongwithmila/website` (public), work goes straight to `main` | Decided |
| Enquiries | Own form → Vercel function → Brevo (EU) → strongwithmila@gmail.com, nothing stored | Decided |
| Brand colours | Brand-board codes (see 2 Nov) | Decided |
| Typography | Playfair Display 400 headings, Montserrat body/labels, Allura only for wordmark and short notes | Decided |
| Offer name | "Your 4-week strength & nutrition foundation" shown as a neutral title | Open |
| Price | Not shown; "Pricing shared after a short fit check" | Open |
| Founding-client / "limited spots" | Switched off | Open |
| Testimonials | N., 41 and M., 28 (both approved), as a carousel | Decided |
| Custom domain, `SITE_URL`, sitemap | Not connected | Open |
| Impressum, Datenschutzerklärung, legal review | Placeholders | Open |
| Brevo and Vercel DPAs, retention period | Not done | Open |

---

## 28 Oct 2026 — Project setup

**Chats:** "New session", "Current time", "Claude folder structure setup"

**Folder structure (Decided)**
- All source files moved into `00Context/`, with empty `01Discover/`, `02Define/`, `03Build/`.
- `03Build` renamed to `03Develop`, and `04Deliver` added, following the Double Diamond phases.
- `CLAUDE.md` stays at the top level. It was updated to point to `00Context/` and now has a folder table telling Claude to save new work in the folder for its phase.
- A `.claude/` folder was created with `commands/` and `skills/` subfolders.

**Noted:** CLAUDE.md lists about 15 reference files (e.g. `Brand-Facts-and-Business-Info.txt`, nutrition and safety frameworks) that aren't in `00Context/`. Claude is told to ask for them rather than pretend to have read them. **Still open.**

### `/build-flow` command and FigJam user flow

**Chat:** "Build-flow FigJam command"

- **Decided:** a `/build-flow` command (`.claude/commands/build-flow.md`) that derives the visitor flow from the website design PDF and draws it in FigJam: left to right, diamonds for decisions, rectangles for steps, rounded exits, one labelled arrow per branch, brand colours.
- **Decided:** it only ever adds a new versioned section ("— v1", "— v2"); it never edits or deletes anything on the board.
- **Result:** "Website visitor → enquiry flow — v1" drawn on the *Strong with Mila flow* FigJam board: 1 entry, 5 steps, 5 decisions, 3 conversions (form, Instagram DM, email), 2 drop-offs, 1 error-retry loop.
- **Claude's call, flagged:** the hero's main button goes straight to the form (PDF §10 says the primary CTA should lead to the application form).
- **Truth guardrails written onto the board:** offer name, price, founding discount and "limited spots" are unconfirmed, so the flow uses neutral labels; the PDF's 10-field form conflicts with CLAUDE.md's minimal form; form service and booking tool undecided.

---

## 29 Oct 2026 — First version, Git and GitHub

**Chats:** "Build-flow FigJam command" (continued), main build session

### First website build
- **Decided:** Astro, self-hosted fonts (no Google Fonts requests, for GDPR), no cookies or trackers.
- **Decided:** almost all editable content lives in one file, `src/content/site.ts`; anything unconfirmed is marked `TODO(Mila)`.
- **Page order:** hero → resonance → Train • Fuel • Understand → 4-week package → who it's for / not for → About → cycle-aware → FAQ → enquiry → footer.
- **Proposed, then kept:** package titled "Your 4-week strength & nutrition foundation" instead of either disputed name ("Strong Through Your Cycle" in the PDF vs "Strong Foundations" in the business facts).
- **Proposed, then kept:** no price shown; founding-client section switched off by default (`founding.enabled`).
- **Decided:** minimal enquiry form (name, email, broad goal, optional message, consent) and a note asking people not to share health details. The PDF's longer form with health and location questions is deferred to a secured intake after the fit check.
- **Superseded:** until a form service existed, submitting opened the visitor's email app with a pre-filled message.

### Git and GitHub
- **Decided:** the folder became a Git repository with a `.gitignore` (excludes `node_modules`, `.env`, build output). First commit: "First version of my design".
- A public repo `my-portfolio` was created on the personal GitHub account, published to GitHub Pages, then **unpublished**: Pages turned off, repo made private and the publish workflow paused.
- **Decided:** switch the GitHub CLI to the **strongwithmila** account (via log out / log in). A new public `strongwithmila/my-portfolio` was created there, with the publish workflow kept disabled.
- **Discussed:** a public repo exposes `00Context` documents and CLAUDE.md's internal notes. Mila kept it public.
- **Decided:** commit straight to `main` (no feature branches) while the site isn't live.

### Logo, images folder and icons
- **Decided:** replace the hero's right-hand illustration with the logo (`Simple-Logo.svg`). *Later superseded by the photo hero on 30 Oct.*
- **Noted:** the logo says "Strength • Nutrition • Cycle Aware", which differs from the "Train • Fuel • Understand" method wording. Not resolved.
- **Decided:** brand images live in `00Context/Images/{Logo, Photos, Graphics}` as untouched originals; the website gets its own optimised copies in `03Develop/website`.
- **Decided:** browser-tab and home-screen icons use the emblem from `Full-logo.svg` on a cream circle, with slightly thicker lines in the tab icon so it stays legible at 32 px.

---

## 30 Oct 2026 — Homepage design iterations

### Hero
- **Decided:** redesign from a reference image, using Mila's photo (then "Portrait water drinking"): text left, photo right inside a curve, reference copy replaces the old wording, "Berlin" moves from the headline to the small line above.
- **Decided (after preview on a `hero-redesign` branch):**
  - a blurred copy of the photo runs behind the text on the left
  - the menu is centred, and the old menu button removed
  - "Meet Mila" sits next to "Explore coaching" and links to About
  - on phones the photo goes on top
  - "Explore coaching" scrolls to the package
- **Decided:** a plum **Enquire** button returns to the far right of the top bar and opens the form in a pop-up (one form that moves into the dialog, so there's never a second copy).
- **Decided:** on big monitors, the header and hero use the full width, and the headline scales with screen width (fix for text running into the photo).
- **Decided:** "Meet Mila" is an underlined text link with no arrow; the photo edge is **wavy** with a soft gradient fade; the line is **crisp dark plum**, not blurred.
- **Decided:** on phones the photo is cropped head to waist, with a wavy fade and wavy plum line before the text.

### Process rule
- **Decided:** after `Portrait 2.png` was committed without being checked, Claude checks for unexpected new files before every commit. Mila was fine with that photo being public.

### About
- **Decided:** `Portrait 2` goes in the About arch, framed with deep plum lines. *Simplified on 2 Nov; photo replaced on 7 Nov.*

### "A different approach" (resonance) section
- **Decided:** Mila's new copy ("You care about your health. You just want an approach that makes sense.", three numbered statements, closing line) with an editorial, typography-led layout and no cards, icons or photos.
- **Decided:** a two-column desktop layout (about 43% headline / 50% list), vertically centred, with a stronger contrast: "You care about your health." becomes a quiet lead-in and the italic plum sentence is the focal point.
- **Decided:** a thin plum vertical line leads into the method section instead of a button.

### Method section
- **Decided:** three image-led editorial features (01 / TRAIN, 02 / FUEL, 03 / UNDERSTAND), each with a 3:4 photo, serif heading, bold benefit line and a short paragraph, following Mila's brief inspired by The Good Trade.
- **Decided:** accent colours: Train plum, Fuel forest, Understand navy. Each image has a 3 px coloured top edge, and the section background is off-white.
- Photos started as labelled placeholders ("Photo coming soon"), never fake images.

### Package section
- **Decided:** "Four weeks to build your foundation." with four phases (not four weeks) and no "Week 1/Week 4" labels.
- **Decided inclusions:** 1 digital goal-setting call, 3 onsite sessions, 1 nutrition coaching session, personalised training direction, weekly check-ins, cycle-aware guidance when relevant, 1 final onsite progression review (shown separately, so it's clearly on top of the 3 sessions).
- Removed from the list: "Macro-informed meal suggestions" and "Next-step recommendations".
- **Decided:** "Where: Berlin · In-person and digital"; "Investment: Pricing shared after a short fit check."
- **Decided:** the panel comes first on phones; on desktop the panel is wider (equal columns) and matches the journey's height.
- **Decided:** the package background is cream at this point, kept flowing into the "Is this coaching for you?" section. *Changed again on 2 Nov.*

---

## 2 Nov 2026 — Remaining sections, email sending and brand audit

### Naming and hosting
- **Decided:** the GitHub repo was renamed from `my-portfolio` to **`strongwithmila/website`**. Old links redirect.
- **Decided:** **Vercel** hosts the site (`strong-website.vercel.app`) and builds from `03Develop/website`.

### Section-by-section
- **Who this is for (Decided):** a full-width deep plum section with cream text and two cream cards: "A good fit if…" (forest heading, soft checks) and "Probably not for you if…" (burgundy heading, soft crosses), plus a scope note and a cream button that opens the enquiry pop-up. The old cycle line in the intro list was replaced by energy, recovery and body signals.
- **About (Decided):** an editorial profile with Mila's new copy ("Hi, I'm Mila.", italic opening statement, three paragraphs, closing philosophy line), a single fine plum line around a true half-circle arch, and the "support changed everything" note kept. No credentials or results.
- **Cycle-aware (Decided):** moved to directly after the method section and before the package, with the eyebrow "A closer look at Understand", new copy and the closing line "Your cycle is information, not instructions."
  - **Wheel:** redrawn in code instead of the 4.5 MB PNG, with a closed outer ring and gaps between segments. Mila tried navy, then chose **dark plum** for the lines.
  - **Accessibility:** screen readers describe it as a wheel of everyday signals, not a medical chart.
- **FAQ (Decided):** Mila's nine approved questions with unchanged wording and a new intro. Plum plus/minus icons, no numbers. The old contact question was replaced by a closing line, "Still have a question? I'd love to hear from you. Get in touch", which opens the form.
  - **Later the same day:** all questions start closed.
- **Final enquiry section (Decided):** a centred invitation ("Your strength journey starts with a conversation.", "No commitment. Just a first conversation.").
  - **The form** moved fully into a dialog: full-screen on phones, it keeps typed text if closed and reopened, and focus returns to the button that opened it.
  - **Every enquiry button** across the site opens the same dialog.
  - **Removed:** the unconfirmed "I usually reply within a few working days" line.
- **Testimonial (Decided):** a "Kind words" section between About and FAQ, with N., 41 — Berlin's wording used exactly. Shown in a soft card with a decorative, faceless illustration (not a likeness).
  - **Illustration:** the first was the plum curly portrait; it was replaced by the "Elegant Maroon Curly Portrait".
  - **Approval:** N. approved the wording on 2 Nov.
  - **Flagged:** the first illustration resembled Mila, which the replacement avoids.
- **Thank-you state (Decided):** a green tick, "Thank you for reaching out!", two paragraphs and a "Back to the website" button. The visitor's email isn't shown, and the message appears only after the server confirms the send.
- **Method photos (Decided):** Mila's Train, Fuel and Understand photos replace the placeholders.
  - **Flagged:** the Train photo shows a specific-looking gym, which visitors may take for the actual studio. Its alt text was kept neutral.
- **Form detail (Decided):** the dropdown arrow is a custom plum arrow, inset from the edge.

### Enquiry email delivery
- **Discussed:** Tally (rejected: the form would look like Tally instead of the site's design), Formspree (US company, more GDPR paperwork), Web3Forms.
- **Decided:** keep the site's own form and send each enquiry through a **Vercel function and Brevo** (French, EU servers), with the function region set to **Frankfurt**. Nothing is stored; reply-to is the visitor; there's a spam honeypot and an origin check.
- **Settings:** `BREVO_API_KEY` (secret), `ENQUIRY_TO_EMAIL` and `ENQUIRY_FROM_EMAIL` live only in Vercel.
- **Security incident, handled:** the Brevo key appeared in a screenshot in the chat. Mila was told to delete it and create a new one.
- **Troubleshooting led to these fixes:**
  - the origin check was made to work behind Vercel
  - every refusal is logged (names only, never visitor data)
  - the settings had been added for Production only, so testing moved to the live site
  - a typo in a setting name was fixed
  - Brevo's IP blocking and sender verification were fixed in Brevo
- **Result:** the live test email arrived. The `email-enquiries` test branch is no longer needed.
- **Still open:** limit the Brevo key to sending emails only, sign the Brevo and Vercel DPAs, update the privacy policy to name Vercel and Brevo, and decide the retention period. With a custom domain, send from an address on that domain for better deliverability.

### SEO and sharing
- **Decided:**
  - **Title:** "Strong with Mila | Women's Strength Coaching"
  - **Meta description:** Mila's wording
  - **Link-preview title:** "Strong with Mila | Build Strength. Understand Your Body."
  - **Image:** a 1200 × 630 share image with the **full logo**, the headline "Build strength. *Understand* your body." and the hero photo behind the wavy plum line
  - **Other tags:** X large-image card, canonical URL
- The site URL defaults to the Vercel address; set `SITE_URL` once a custom domain is connected.
- **Discussed:** ChatGPT couldn't fetch the site. Nothing on the site blocks it; the recommendation was to share a PDF or screenshots.

### Brand colour and typography audit
- **Decided:** use the **brand-board codes**: brown `#4A332C`, burgundy `#7A2E3A`, navy `#2F3B4A`, clay `#C68876`, with cream `#F7F3EE`, off-white `#EDE7E1`, plum `#4B1F3B` and forest `#3F5F4A`. These replace the web brief's values.
- **Decided:** keep the helper tints: near-white `#FFFDFA` cards, plum hover `#3A172D`, taupe field border `#B9A9A2`, wheel tints, see-through brown/cream.
- **Decided:** clay is decorative only, never for text; the resonance numbers became burgundy.
- **Decided:** all section labels use one style (small, spaced, soft brown capitals). All section headlines are Playfair Display at weight 400 on one size scale, except the resonance section, which keeps its two-voice headline on purpose.
- **Decided:** CLAUDE.md §7 updated with the approved codes (2 Nov 2026).

### Section rhythm
- **Decided (all four suggestions applied):**
  1. package → off-white, and the thin line under the cycle section removed
  2. final enquiry → plum with a cream button
  3. footer → cream
  4. Instagram and email links removed from the enquiry section, since they're already in the footer
- **Resulting order:** cream → cream → off-white → cream → off-white (package) → plum (fit) → off-white → cream → off-white → plum (enquiry) → cream (footer).
- **Decided not to change:** no wavy dividers between sections, since the hero's wave stays a signature.

### Hero photo
- **Superseded:** the hero and share image switched to "Portrait 3". *Replaced on 7 Nov.*

---

## 6 Nov 2026 — Folder rename, cleanup, Figma design systems, second testimonial

### Folder rename and cleanup
- **Decided:** renaming the Desktop folder `Claude Code` → `Claude Strong Website` is safe. Nothing depends on the folder name. (The project now lives at `Documents/Strong with Mila/Claude Strong Website`.)
- **Decided:** removed the unused GitHub Pages workflow. Vercel builds from `03Develop/website`; **don't move or rename that folder** without also updating Vercel → Settings → Root Directory.
- Source images in `00Context/Images` are now committed, and placeholders keep `01Discover`, `02Define` and `04Deliver` in git.
- DECISIONS.md and ROADMAP.md updated (superseded rows marked, finished items ticked).

### Figma "Website Design System" page
- **Decided:** a design system built from the live website's code in the *Strong-With-Mila* Figma file:
  - colour variables with **Light and Dark** modes
  - **Breakpoint** modes (Desktop 1440 / Tablet 834 / Mobile 390)
  - spacing and shape variables, and 26 "Web/…" text styles
  - 22 component sets (88 variants) named like the code
- **Decided:** Mila approved the **dark palette**: page `#1D1418`, surface `#271B21`, raised card `#33242C`, deep plum `#38182C`, text `#EDE4DC`, muted `#C4B5AB`, headings `#EFD9E6`, rose accent `#E7A7B1`, navy `#A9BACF`, forest `#A3C2AC`, border `#5A4650`; clay unchanged. It's for design use only; the website has no dark mode yet.
- Not yet in Figma: the patterns wheel, and the resonance and cycle sections as components. The header uses the typographic wordmark, as the site does.

### Hero blur on tablet and phone
- **Decided:** show the blurred photo backdrop on tablets and phones too (it was desktop-only), with a cream wash strong enough to keep text contrast above 4.5:1. Applied to both the website and the Figma components.

### Figma "Presentation Design System" page
- **Decided:** a 16:9 slide library for talks that uses the website's variables. It includes:
  - **slides:** title, section, statement, content, pillars, myth vs fact, evidence (well established / emerging / mixed), takeaways, a disclaimer with 112, and closing
  - **building blocks:** footer, bullets, evidence tags and Train/Fuel/Understand chips
  - **guidance:** a Read me and an 8-slide sample talk
- **Guardrail:** sample copy isn't research-checked, and the evidence slides keep placeholder citations instead of invented studies.

### Second testimonial and carousel
- **Decided:** M., 28 — Berlin's testimonial was added word for word with the "Faceless Woman with Plum Hair and Glasses" illustration. **M. approved the wording on 6 Nov.**
- **Decided:** testimonials now show as a **carousel**: one card at a time, with arrows, dots, swipe on phones, keyboard arrows and equal card heights. New entries in `site.ts` get their own slide automatically.
- **New way of working:** "commit and promote" means commit, push to `main` and check the Vercel production deploy.

---

## 7 Nov 2026 — New photo edits

- **Decided:** the hero uses "Woman on Sofa with Cascading Ivy" (`mila-hero.jpg`), and About uses "Cozy Portrait with Ivy and Snake Plant" (`mila-about.jpg`). The share image was rebuilt with the new hero photo, and the alt text rewritten.
- **Decided:** the outdated edits were removed from the site and from `00Context/Images/Photos` ("Portrait 2", "Portrait 3", "Portrait water drinking"). They can be recovered from git history.
- "Serene Tree Pose in a Cozy Living Room" is in the images folder but not used yet.

---

## 11 Nov 2026 — Team review flow (discussion only)

**Chat:** "New testimonial for website"

Mila asked to try an official team flow: a new branch with only the commands and skills folders, a pull request and a second person as reviewer.

**What Claude found and proposed:**
- **Nothing new to review yet.** `build-flow.md` is already on `main` and there's no skills folder, so GitHub won't open an empty pull request. The suggestion was to convert `build-flow` into a skill (`.claude/skills/build-flow/SKILL.md`) or make a small edit to the command.
- **GitHub can't add a reviewer by email.** The reviewer needs a GitHub account and an invite as a collaborator.
- **For a real approval gate,** `main` needs a branch-protection rule (one approving review required). After that, every change, including "commit and promote", would need approval before going live.

**Status: Open.** No branch, invite or protection rule was created. It still needs the PR content, the reviewer's GitHub username and a yes/no on protecting `main`.

*As of 24 Nov, `build-flow` is still a command (`.claude/commands/build-flow.md`) and the project has no `.claude/skills/` folder.*

---

## Open decisions and launch blockers

From the chats and [ROADMAP.md](03Develop/website/docs/ROADMAP.md):

1. **Offer name:** "Strong Foundations" vs "Strong Through Your Cycle" (or keep the neutral title).
2. **Price and founding-client offer:** about €599 and a founding price are not confirmed. "Limited spots" stays off until availability is real.
3. **Onsite location** (studio) and the expected **reply time**.
4. **Contact email:** verify strongwithmila@gmail.com before launch.
5. **About copy:** final approval (the current text is Mila's 2 Nov copy).
6. **Official logo in the header:** the site still uses a typographic wordmark.
7. **Logo tagline:** "Strength • Nutrition • Cycle Aware" vs "Train • Fuel • Understand".
8. **Train photo:** confirm it's acceptable, since it may read as the actual studio.
9. **Privacy and legal:** Impressum, Datenschutzerklärung (naming Vercel and Brevo), enquiry retention period, and a professional legal review.
10. **Data processing:** sign the Brevo and Vercel DPAs, and limit the Brevo key to sending only.
11. **Domain:** connect a custom domain, set `SITE_URL`, add a sitemap, and send email from the domain.
12. **QA:** final check on real phones (iOS Safari, Android Chrome) and the home-screen icon.
13. **Repository visibility:** it's public, including `00Context` documents and source photos. Reconsider before sharing widely.
14. **Missing reference files:** about 15 `00Context` documents listed in CLAUDE.md haven't been added.
15. **Team review flow:** see 11 Nov.
16. **Housekeeping:** delete the `email-enquiries` branch, which still exists locally and on GitHub.

## Ideas parked for later (not commitments)

- Privacy-friendly, cookie-free analytics, only if needed.
- An optional booking link (Calendly/TidyCal) once the fit-check flow is proven.
- A human-reviewed German version.
- A dark mode for the website (the palette is already approved in Figma).
- The patterns wheel and the resonance and cycle sections as Figma components.
