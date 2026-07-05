# CLAUDE.md

Instructions and context for Claude when working on this repository.

## Project goal

Personal business card / portfolio / CV site for Ivan Tkachenko ([@vanekt](https://github.com/vanekt)).
Deployed via GitHub Pages: `vanekt.github.io` → `https://vanekt.github.io`

## Status

🚧 In progress — base structure is ready, content and polish ongoing.

## About the owner

Senior Frontend / Full Stack Engineer, 14+ years of experience. Stack: React, Vue 3, TypeScript, Next.js, Node.js, Go. Open to remote work. Full profile in `src/data/experience.ts`.

Contacts:
- GitHub: https://github.com/vanekt
- Telegram: https://t.me/vanekt0
- LinkedIn: https://www.linkedin.com/in/-ivan-tkachenko-/

## Tech stack

- **Framework:** Astro 6 (static output)
- **CSS:** Tailwind CSS 4 — built-in classes only, no arbitrary values or CSS variables in templates
- **Language:** TypeScript (strict)
- **i18n:** `src/i18n/en.ts`, `src/i18n/ru.ts`, `src/i18n/es.ts` — UI strings + mappings from `src/data/`
- **Themes:** Tailwind `dark:` + `.dark` class on `<html>` + `@custom-variant dark` in global.css
- **Colors:** light — `white` / `violet-700`; dark — `slate-950` / `violet-400`
- **Package manager:** pnpm
- **Formatter:** oxfmt (`pnpm format` → `oxfmt src`)
- **Linter:** oxlint (`pnpm lint` → `oxlint src`)
- **Typecheck:** astro check (`pnpm typecheck`)
- **Deploy:** GitHub Pages (`.github/workflows/deploy.yml` — push to `main` → format check + lint + typecheck + build → Playwright generates PDFs into `dist/` → deploy)
- **Routing:** `/` = EN, `/ru/` = RU, `/es/` = ES, `/cv/` = EN PDF page, `/ru/cv/` = RU PDF page, `/es/cv/` = ES PDF page, `/cv/fullstack/` = EN CV variant repositioned for fullstack roles (separate content in `cvContent.ts`, no PDF yet); `/blog/` + `/blog/[slug]/` = EN blog; `/ru/blog/` + `/ru/blog/[slug]/` = RU blog (no ES blog)
- **PDF generation:** `pnpm build && pnpm preview` then `pnpm pdf`; PDFs served at `/cv.pdf`, `/cv-ru.pdf`, `/cv-es.pdf`
- **Blog:** Astro Content Collections (Content Layer API) — `src/content.config.ts` at repo root; posts in `src/content/blog/*.md`; Shiki dual-theme code highlighting (`github-light-high-contrast`/`github-dark-high-contrast`); `@tailwindcss/typography` for prose styles
- **Blog covers:** optional `cover` field in frontmatter (filename only, e.g. `hoisting-tdz.webp`); WebP files in `public/blog/covers/`; displayed as `aspect-video` at top of post and as thumbnail in list; used as `og:image`; `pnpm compress-cover <input> <slug>` to convert; `node scripts/generate-covers.js` to regenerate from LinkedIn HTML slides
- **Sitemap:** custom endpoint `src/pages/sitemap.xml.ts` — generates `/sitemap.xml` with hreflang alternates + lastmod for blog posts; auto-updates on build; CV pages excluded
- **Content schema:** `src/content.config.ts` uses `import { z } from "astro/zod"` — NOT `zod` directly (Zod v4 breaks Astro's type inference)

## Project structure

```
src/
├── content.config.ts # Content Collections schema (blog) — at src/ root, NOT src/content/
├── content/
│   └── blog/         # Blog posts: *.en.md / *.ru.md — use urlSlug field (not slug — reserved by Astro)
├── components/       # Sidebar, About, Experience, Skills, Projects, Contact, CvDocument, etc.
│   └── icons/        # IconDownload, IconEmail, IconGitHub, IconTelegram, IconLinkedIn
├── data/             # experience.ts, skills.ts, projects.ts — single source of truth for content
│                     # cvContent.ts — CV-specific copy (summary, skills, education, languages) for /cv/ pages
├── i18n/             # en.ts, ru.ts, es.ts, types.ts — UI strings + imports from data/
├── layouts/          # Layout.astro (main), CvLayout.astro (print/PDF, no dark mode, noindex), BlogLayout.astro
├── pages/            # index.astro (EN), ru/index.astro (RU), es/index.astro (ES)
│                     # cv.astro (EN), ru/cv.astro (RU), es/cv.astro (ES)
│                     # blog/index.astro + blog/[slug].astro (EN); ru/blog/index.astro + ru/blog/[slug].astro (RU)
├── styles/           # global.css — @custom-variant dark + base styles
└── utils/            # email.ts — obfuscated contacts (base64); locale.ts — homeUrl/PDF path helpers
scripts/
├── generate-pdf.js     # Playwright script — generates dist/cv.pdf + dist/cv-ru.pdf + dist/cv-es.pdf
├── generate-covers.js  # Playwright script — screenshots LinkedIn HTML slides → WebP covers in public/blog/covers/
├── compress-cover.js   # CLI helper — converts any image to WebP cover: pnpm compress-cover <input> <slug>
└── screenshot.js       # Playwright script — takes screenshots for visual review; saves to .screenshots/
```

## Planning docs

Full design and technical planning is documented in the project root:

- `RESEARCH.md` — research base: design trends, UX patterns, performance, notable portfolios (compiled March 2025)
- `PRD.md` — product requirements: personas, user stories, features with acceptance criteria, milestones
- `DESIGN_BRIEF.md` — design decisions: color system, typography, layout, components, motion, accessibility
- `TECH_PLAN.md` — technical implementation plan: stack audit, component architecture, CSS strategy, JS approach, performance, file structure, risks

Before implementing anything non-trivial — read the relevant doc first.

## Skills

Custom Claude Code skills are in `.claude/skills/`. Use them in this order when starting a redesign or new feature:

- `/prd [research-file]` — generates `PRD.md` from a research file
- `/design-brief [research-file]` — generates `DESIGN_BRIEF.md` (typography, colors, layout, motion)
- `/architect` — reads PRD + Design Brief + source code, generates `TECH_PLAN.md`
- `/review [path]` — code quality review: inline styles, dead code, console.log, unnecessary indirection, JS spaghetti. Fixes in-place.
- `/cv-hr [en|ru|both]` — senior HR review: scores the CV across 6 dimensions, outputs prioritized list of issues for the copywriter
- `/cv-copy [section|all]` — senior CV copywriter: rewrites/improves CV copy (summary, bullets, role descriptions) using PAR formula, ATS-ready, metric-driven
- `/screenshot [path] [--dark] [--mobile]` — takes screenshots of the running dev/preview server and does visual review of layout, spacing, typography, dark mode

## Backlog

Tasks and ideas are tracked in `TODO.md` at the repo root. When new ideas come up — add them there, do not implement without an explicit request.

## Git

Never commit without explicit user approval. Always confirm the commit message before running `git commit`.

## Conventions

- All content (experience, skills, projects) — only in `src/data/experience.ts`, `src/data/skills.ts`, `src/data/projects.ts`
- CV-specific content (summary, skills, education, languages for /cv/ pages) — only in `src/data/cvContent.ts`. Do NOT put this in i18n files — it would affect the main site. Experience context and bullets are shared: stored in `experience.ts`, used by both the main site and CV pages.
- UI strings (headings, nav, hero text) — in `src/i18n/en.ts` / `src/i18n/ru.ts` / `src/i18n/es.ts`
- Pages import translations directly: `import { en as t } from '../i18n/en'`
- Components accept `t: Translations` as a prop
- Colors — via Tailwind classes only, no `style=""` or `var(--*)` in templates
- No hover-only interactions (tooltips, `group-hover` labels) in mobile components — hover doesn't work on touch devices
- Em dashes `—` are allowed only in `period` fields (dates); use a regular hyphen `-` elsewhere
- Skill group keys in `skills.ts`: `frontend`, `css`, `state`, `backend`, `infra`, `tools`, `ai`
- Contact email and WhatsApp number are stored base64-encoded in `src/utils/email.ts` — never put raw values in templates. To update email: `btoa('new@email.com')` → `ENCODED_EMAIL`. To update WhatsApp: `btoa('+number')` → `ENCODED_WHATSAPP`.
- Locale-derived URLs (homeUrl, cvPdfPath, cvPdfName) — use `getLocaleUrls(t.lang)` from `src/utils/locale.ts`. Do not inline ternary chains in components.
- Blog posts — `src/content/blog/*.md`; use `urlSlug` field for URL routing (NOT `slug` — reserved by Astro Content Layer and causes deduplication); EN+RU only, no ES
- Blog i18n strings — in `Translations` interface under `blog:` key; BlogLayout accepts `t`, `title`, `description`, `slug?`, `canonicalUrl?`, `alternates?`, `cover?`, `publishedTime?`
- hreflang alternates — Layout and BlogLayout both accept `alternates?: Array<{ hreflang: string; href: string }>` passed from pages; all pages must pass correct alternates for SEO
