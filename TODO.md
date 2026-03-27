# TODO

## In progress

- [ ] **PDF resume** — generate PDF from site content (always up-to-date); language-specific download on each locale page (`/` → EN pdf, `/ru/` → RU pdf)
  - [x] Infrastructure: `/cv/`, `/ru/cv/` pages, Playwright CI step, download button in sidebar/mobile header/Contact
  - [x] **PDF download button** — "Download CV" label + icon in sidebar and Contact; icon-only in mobile header
  - [x] **PDF layout polish** — check real output, fix spacing, page breaks, typography
  - [ ] **PDF content** — finalize which experience entries (last 3-4?) and skill groups to include; align with previous resume
  - [ ] **CI optimization** — cache Playwright Chromium install to reduce deploy time (~1-2 min overhead)

## Backlog

- [ ] **About section** — add mention that I can build a startup prototype from scratch, including with LLM integration
- [ ] **Spanish locale (ES)** — add `/es/` route mirroring `/ru/`; generate translation automatically from `en.ts`

## Done

- [x] **Redesign** — split-screen layout (40% fixed sidebar / 60% scrollable main), Geist font, dark/light mode, cursor spotlight, console easter egg, scroll-aware nav, scroll animations
- [x] **Location & status** — Buenos Aires, Argentina · UTC-3 · Open to remote in sidebar
- [x] **Social icons** — email, GitHub, Telegram, LinkedIn icons in sidebar bottom section
- [x] **Hero heading** — removed Hero section entirely; name/title moved to sidebar
- [x] **Projects section** — 8 projects with logos, descriptions (EN+RU), stack tags, links
- [x] **Bullet alignment** — added `items-start` to experience list items
- [x] **Auto theme** — three-mode toggle: auto (sun-moon icon) → light → dark → auto; system preference listener in auto mode
- [x] **Contact email** — real address set, bot-protected: no raw `mailto:` in HTML; base64-encoded in `src/utils/email.ts`, decoded in JS on click
- [x] **SVG icon components** — extracted 5 duplicate icons into `src/components/icons/`; removed unused `astro-icon` + `@iconify-json/lucide` packages
