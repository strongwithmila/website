# Strong with Mila Website — Handoff

## 1. Where we stopped

*Updated 26 Nov 2026.*

- **Live:** [strong-website.vercel.app](https://strong-website.vercel.app/). This is a single-page Astro site hosted on Vercel. Enquiries go through the site's own form, a Vercel function and Brevo, and land in Mila's inbox. Nothing is stored.
- **Last site change (7 Nov):** new hero and About photo edits, and a rebuilt link-preview image. "Serene Tree Pose in a Cozy Living Room" is in the images folder but not used yet.
- **Since then:**
  - 24 Nov: `decision-log.md` added (it covers every chat up to 11 Nov).
  - 26 Nov: `/onboard` and `/handoff` skills added in commit `93e8368`. That commit is **not pushed yet**.
- **Open decisions:**
  - offer name
  - price and founding-client offer
  - onsite location and reply time
  - final About copy
  - official logo and its tagline
  - whether the Train photo can stay
  - whether the repository stays public
  - the team review flow
  Full list: `decision-log.md` → "Open decisions and launch blockers".
- **Blocking launch:**
  - Impressum and Datenschutzerklärung, plus a professional legal review
  - Brevo and Vercel data-processing agreements (DPAs)
  - how long enquiries are kept
  - custom domain, `SITE_URL` and sitemap
  - verify the contact email
  - test a real form submission on the live site
  - check the site on real phones
- **Uncommitted work:** none, apart from this file.

## 2. Key files

- `decision-log.md`: the story and reasoning behind each decision
- `03Develop/website/docs/DECISIONS.md`: the short table of approved decisions
- `03Develop/website/docs/ROADMAP.md`: phases and the launch checklist
- `03Develop/website/README.md`: set-up, editing content and the enquiry form
- `03Develop/website/src/content/site.ts`: almost all editable copy. Search it for `TODO(Mila)`.

## 3. How to run

From `03Develop/website`:

- `npm install`
- `npm run dev` starts the site at http://localhost:4321
- `npm run build` runs the type check and production build

Pushing to `main` deploys the site: Vercel builds from `03Develop/website`. If that folder is moved or renamed, update Vercel → Settings → Root Directory too. Locally, the form shows its error message because there is no Brevo key on this Mac; that is expected.

## 4. Commands and skills

- `/onboard`: reads this file and the logs, then reports where we stopped
- `/handoff`: reads every chat in this folder and updates this file
- `/build-flow`: draws the website user flow in FigJam (still a command, not a skill)

## 5. Loose ends from conversations

Last swept: 2026-11-26 (sessions 2026-10-29 → 2026-11-26, 5 sessions in this folder; chats before 24 Nov were already summarised in `decision-log.md`)

### To finish
- [ ] Push commit `93e8368` (the two new skills) to GitHub — this session, 26 Nov
- [ ] Delete the old `email-enquiries` test branch, both on this Mac and on GitHub — 24 Nov log

### Waiting on Mila
- [ ] Team review flow (11 Nov). This needs the reviewer's GitHub username (an email address isn't enough), a yes or no on protecting `main`, and what goes into the pull request. The unpushed skills commit could serve as the test pull request: move it onto a branch instead of pushing it straight to `main`. — df71e48d, 11 Nov
- [ ] The open decisions and launch blockers listed in §1

### To record (decision not yet in the log files)
- [x] 26 Nov: `/onboard` and `/handoff` skills added to `.claude/skills/`, adapted from the Instagram project. Not yet in `decision-log.md` or `DECISIONS.md`. — this session

### Reported, not fixed
- [ ] The repository is public, including the `00Context` documents, source photos and `decision-log.md`, which mentions the unconfirmed price. — 24 Nov
- [ ] About 15 `00Context` reference documents listed in CLAUDE.md haven't been added to the project. — decision log

### Inconsistencies to check
- [x] `decision-log.md` (11 Nov entry) says "the project has no `.claude/skills/` folder". That is no longer true since 26 Nov.
- [x] Testimonials are live, but `ROADMAP.md` still lists them as a Phase 2 idea.
- [x] Some items in the decision log's blocker list are missing from the `ROADMAP.md` launch checklist: logo tagline, Train photo, repository visibility, and limiting the Brevo key to sending only.

### Outside Claude (Vercel, Brevo, domain, legal review)
- [ ] Sign the Brevo DPA and the Vercel DPA. Limit the Brevo API key to sending only.
- [ ] Buy or connect a custom domain, set `SITE_URL` in Vercel, and send email from that domain.
- [ ] Have the Impressum, Datenschutzerklärung and form consent text professionally reviewed.
- [ ] GitHub: invite the reviewer as a collaborator, and add a protection rule to `main` if Mila wants one.
