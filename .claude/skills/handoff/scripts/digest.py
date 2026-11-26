#!/usr/bin/env python3
"""Turn Claude Code transcripts for this project into short text digests.
Keeps only Mila's own messages and Claude's text replies (no tool output).
Usage: digest.py <out_dir> [--since YYYY-MM-DD]
Writes one <date>_<session>.txt per session plus index.txt."""
import json, os, sys, glob, re

proj = os.environ.get("CLAUDE_PROJECT_DIR") or os.getcwd()
slug = re.sub(r"[^A-Za-z0-9]", "-", proj)
src = os.path.expanduser(f"~/.claude/projects/{slug}")
out = sys.argv[1]
since = sys.argv[sys.argv.index("--since") + 1] if "--since" in sys.argv else ""
os.makedirs(out, exist_ok=True)

def text_of(content):
    if isinstance(content, str):
        return content
    return "\n".join(c.get("text", "") for c in content if isinstance(c, dict) and c.get("type") == "text")

rows = []
for f in sorted(glob.glob(os.path.join(src, "*.jsonl"))):
    sid = os.path.basename(f)[:8]
    lines, first, last, title = [], None, None, ""
    for raw in open(f, encoding="utf-8", errors="ignore"):
        try:
            d = json.loads(raw)
        except Exception:
            continue
        if d.get("type") == "custom-title":
            title = d.get("customTitle") or d.get("title") or title
        if d.get("type") not in ("user", "assistant") or d.get("isSidechain"):
            continue
        ts = (d.get("timestamp") or "")[:16].replace("T", " ")
        first = first or ts
        last = ts or last
        msg = d.get("message", {})
        t = text_of(msg.get("content", "")).strip()
        if not t:
            continue
        if d["type"] == "user":
            if d.get("origin", {}).get("kind") not in (None, "human") or t.startswith("Base directory for this skill") or "<system-reminder>" in t[:40]:
                continue
            t = re.sub(r"<command-message>.*?</command-message>\s*", "", t, flags=re.S)
            lines.append(f"\n[{ts}] MILA: {t[:3000]}")
        else:
            lines.append(f"[{ts}] CLAUDE: {t[:2000]}")
    if not lines or (since and (last or "") < since):
        continue
    day = (first or "unknown")[:10]
    name = f"{day}_{sid}.txt"
    with open(os.path.join(out, name), "w") as w:
        w.write(f"Session {sid} · {first} → {last} · {title}\n" + "\n".join(lines))
    rows.append(f"{name}\t{first} → {last}\t{title}\t{sum(len(l) for l in lines)} chars")

with open(os.path.join(out, "index.txt"), "w") as w:
    w.write("\n".join(sorted(rows)))
print(f"{len(rows)} sessions digested from {src} into {out}")
