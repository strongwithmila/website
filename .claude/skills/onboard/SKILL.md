---
name: onboard
description: Get up to speed on the Strong with Mila website project in a new account, project or chat. Reads HANDOFF.md (if present), the decision logs and the roadmap, checks the repo and set-up, then gives Mila a short status summary and asks what to work on. Use when Mila types /onboard, or says she migrated, started fresh, or asks "where did we stop?".
---

# /onboard — read the website project and report where we stopped

Read only; change nothing. CLAUDE.md is already loaded and applies (concise, accessible language, approval gates).

1. Read `HANDOFF.md` at the project root in full, if it exists. If it doesn't, say so and mention `/handoff` creates it.
2. Read `decision-log.md` (project root): the header, "At a glance: where things stand" and the two most recent date sections.
3. Read `03Develop/website/docs/DECISIONS.md` in full (the short table of approved decisions).
4. Read `03Develop/website/docs/ROADMAP.md` in full, especially the Phase 1 launch checklist.
5. Skim `03Develop/website/README.md` for set-up and deployment notes.
6. Check the repo quietly: `git status --short`, `git log --oneline -10`, current branch. Note uncommitted work or commits newer than the latest decision-log date.
7. Don't read `00Context/` source documents or the site source code yet; open them only when a task needs them.
8. Check set-up quietly and report only what's missing: `node --version` and whether `03Develop/website/node_modules` exists; is `.claude/launch.json` present (for the browser preview)? Is the Figma tool available?
9. Reply to Mila (concise, plain language):
   - what's live (Vercel URL) and what changed most recently
   - open decisions (offer name, price, founding offer, domain, etc.) and who they wait on
   - launch checklist items still blocking (legal pages, DPA, domain…)
   - uncommitted work or set-up gaps from steps 6 and 8
   - if `HANDOFF.md` or `decision-log.md` looks out of date compared with git history, say so and offer `/handoff`
10. Ask what to work on with a questionnaire (AskUserQuestion), e.g. a blocking launch item, an open decision, a design change, or `/handoff`.
