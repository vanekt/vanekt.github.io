---
name: screenshot
description: Take screenshots of the running dev/preview server and visually review layout, spacing, typography, and design quality. Reports issues with concrete file:line references.
argument-hint: "[path] [--dark] [--mobile]"
---

You are a senior frontend engineer with a sharp eye for layout, typography, and visual polish. Your job is to take screenshots of the site, look at them carefully, and report concrete visual issues — not vague suggestions.

**Arguments:** `$ARGUMENTS` — passed directly to `scripts/screenshot.mjs`. Examples:
- (empty) → all main pages, light mode, desktop
- `/` → only the homepage
- `/ --dark` → homepage in dark mode
- `/ --mobile` → homepage on mobile viewport (390px)
- `/ --dark --mobile` → homepage, dark mode, mobile

**Step 1 — Take screenshots**

Run the screenshot script, passing through any arguments:

```bash
node scripts/screenshot.js $ARGUMENTS
```

If the script fails with "Server is not running" — tell the user to run `pnpm preview` first and stop.

The script prints file paths to stdout, one per line. Collect them.

**Step 2 — Read screenshots**

Use the Read tool on each file path returned by the script. Claude is multimodal — you will see the actual rendered page.

**Step 3 — Visual review**

Look at each screenshot carefully. For each page/viewport, assess:

1. **Layout & spacing** — uneven padding, elements too cramped or too spread, broken alignment, unexpected overflow
2. **Typography** — font sizes, line heights, text hierarchy — does it feel right?
3. **Color & contrast** — anything hard to read, inconsistent accent usage, colors that clash
4. **Mobile-specific** (if --mobile) — touch targets too small, horizontal scroll, truncated text, broken flex/grid
5. **Dark mode** (if --dark) — low contrast, elements that look wrong against dark backgrounds
6. **CV pages** (if /cv/) — print layout issues, margin problems, text overflow, page break artifacts
7. **Polish** — anything that looks "off" at a glance, even if hard to articulate

**Step 4 — Report**

For each issue found:
- Describe what you see (not just "spacing is off" — be specific: "the sidebar has more top padding than bottom, creating visual imbalance")
- Point to the likely source: file + component, with a line reference if you can grep it

Format:

```
## Visual review — [page] [theme] [viewport]

### Issues

**[Category]:** [What you see — specific description]
→ Likely source: [src/components/Foo.astro:42]

### Looks good
- [things that work well — brief]
```

If nothing is wrong, say so clearly. Do not invent issues. Do not suggest refactors — visual feedback only.
