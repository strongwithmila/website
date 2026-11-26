---
name: handoff
description: Read every Claude Code conversation in this website project, find what still needs wrapping up, addressing or recording, and update HANDOFF.md (creating it on first run). Use when Mila types /handoff, before migrating to a new account, or at the end of a long stretch of work. Optional argument: --since YYYY-MM-DD to read only recent sessions.
---

# /handoff — sweep all conversations and update HANDOFF.md

CLAUDE.md applies (concise, plain language, approval gates). This command **only writes to `HANDOFF.md`** at the project root. It never changes site code, the decision logs, Figma or Vercel itself; it lists what needs doing and offers the follow-ups.

## 1. Digest the conversations

Run (temporary files go in the session scratchpad, never the project folders):

```bash
python3 -I "$CLAUDE_PROJECT_DIR/.claude/skills/handoff/scripts/digest.py" "<scratchpad>/handoff-digest" [--since YYYY-MM-DD]
```

It reads `~/.claude/projects/<this project>/*.jsonl` (all Claude Code sessions in this folder) and writes one short text file per session (Mila's messages + Claude's replies, no tool output) and `index.txt`. If Mila gave `--since`, pass it on. If HANDOFF.md §5 has a "Last swept" date and Mila gave no date, ask with a questionnaire: since last sweep (recommended) / all sessions.

## 2. Read what's already recorded

Read these so you only report what's **not** already there: `HANDOFF.md` (if present), `decision-log.md` (header, "At a glance", recent dates), `03Develop/website/docs/DECISIONS.md`, `03Develop/website/docs/ROADMAP.md`, and `git log --oneline -30`.

## 3. Sweep the digests

Small digests: read them yourself. Large sets (over ~150k characters in total, see `index.txt`): split the files across up to 4 subagents (general-purpose), each given the file list, the summary from step 2, and the checklist below, and asked to return findings as `session id · date · finding · category · evidence quote (≤15 words)`.

Look for:
- **Unfinished:** tasks started but not completed, "next I'll…", failing builds or checks left open, files waiting for Mila (photos, copy, logo exports).
- **Waiting on Mila:** questions she never answered, choices offered without a reply, approvals pending (offer name, price, founding offer, domain, copy).
- **Not recorded:** decisions Mila stated that aren't in `decision-log.md`, `DECISIONS.md` or CLAUDE.md; preferences that only lived in Claude's memory.
- **Reported, not fixed:** problems Claude flagged outside the task (contrast, layout bugs on mobile, accessibility, SEO, privacy).
- **Inconsistencies:** two sessions (or a session and the docs) saying different things. Flag both; the newest is not automatically right.
- **Outside Claude:** Vercel settings, Brevo DPA, domain/DNS, Impressum and Datenschutz legal review, GitHub, Figma.

Drop anything later resolved in a newer session, in git history or already in the files from step 2. Never copy client names or personal details; write "a client".

## 4. Update HANDOFF.md

If it doesn't exist, create it with this shape; otherwise refresh §1 and replace §5, leaving other sections alone unless a fact is now wrong (then ask first).

```
# Strong with Mila Website — Handoff

## 1. Where we stopped
(date · what's live · last changes · open decisions · blocking launch items · uncommitted work)

## 2. Key files
decision-log.md (story) · 03Develop/website/docs/DECISIONS.md (approved table) · docs/ROADMAP.md · 03Develop/website/README.md

## 3. How to run
(from README: install, dev, build, deploy via Vercel from 03Develop/website)

## 4. Commands and skills
/onboard · /handoff · /build-flow

## 5. Loose ends from conversations

Last swept: YYYY-MM-DD (sessions <first date> → <last date>, N sessions)

### To finish
- [ ] <item> — <session id>, <date>
### Waiting on Mila
### To record (decision not yet in the log files)
### Reported, not fixed
### Inconsistencies to check
### Outside Claude (Vercel, Brevo, domain, legal review)
```

When replacing §5, keep any unchecked item from the old list that is still open.

## 5. Report and offer

Reply briefly: how many sessions read, counts per category, the top items. Then one questionnaire (AskUserQuestion) offering the follow-ups: add the "To record" items to `decision-log.md` and `DECISIONS.md` · start on a "To finish" item · commit HANDOFF.md · leave it. Do none of them without her yes.
