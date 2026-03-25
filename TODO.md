# TODO

## In progress

## Backlog

- [ ] **Location & status** — add a block with current location (Buenos Aires, Argentina, UTC−3) and job search status ("Open to remote")
- [ ] **Bullet alignment** — fix marker alignment in lists (skills section, job responsibilities, etc.)
- [ ] **Social icons** — add icons to GitHub / LinkedIn / Telegram links in the header and "Get in touch" section
- [ ] **Contact email** — replace with real address (ask at implementation time); protect from bots (e.g. CSS obfuscation or assembling the address from parts in JS, no raw `mailto:` in HTML)
- [ ] **Hero heading** — revisit/rephrase "Hi, I'm Ivan" (or translate in the RU version)
- [ ] **Redesign** — research references, rethink the layout concept; idea: fixed left column (hero + key info) + right scrollable column (experience and other content)
  - conduct research and collect references
  - write a PRD
  - involve multiple skills (copywriting, design, code, etc. — to be decided later)
- [ ] **Projects section** — add 2-3 curated projects to `src/data/projects.ts`; each needs: title, problem description (1-2 sentences), tech stack tags, GitHub link (required), live demo (optional)
- [ ] **PDF resume** — generate PDF from site content (always up-to-date); language-specific download on each locale page (`/` → EN pdf, `/ru/` → RU pdf)
- [ ] **Spanish locale (ES)** — add `/es/` route mirroring `/ru/`; generate translation automatically from `en.ts`
- [ ] **Auto theme** — three-mode toggle: light / dark / auto; in auto mode follow `prefers-color-scheme`

## Done
