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
- **i18n:** `src/i18n/en.ts` and `src/i18n/ru.ts` — UI strings + mappings from `src/data/`
- **Themes:** Tailwind `dark:` + `.dark` class on `<html>` + `@custom-variant dark` in global.css
- **Colors:** light — `white` / `violet-700`; dark — `slate-950` / `violet-400`
- **Package manager:** pnpm
- **Formatter:** oxfmt (`pnpm format` → `oxfmt src`)
- **Linter:** oxlint (`pnpm lint` → `oxlint src`)
- **Typecheck:** astro check (`pnpm typecheck`)
- **Deploy:** GitHub Pages (`.github/workflows/deploy.yml` — push to `main` → format check + lint + typecheck + build + deploy)
- **Routing:** `/` = EN, `/ru/` = RU

## Project structure

```
src/
├── components/   # Header, Hero, About, Experience, Skills, Contact
├── data/         # experience.ts, skills.ts — single source of truth for content
├── i18n/         # en.ts, ru.ts, types.ts — UI strings + imports from data/
├── layouts/      # Layout.astro
├── pages/        # index.astro (EN), ru/index.astro (RU)
└── styles/       # global.css — @custom-variant dark + base styles
```

## Backlog

Tasks and ideas are tracked in `TODO.md` at the repo root. When new ideas come up — add them there, do not implement without an explicit request.

## Git

Never commit without explicit user approval. Always confirm the commit message before running `git commit`.

## Conventions

- All content (experience, skills) — only in `src/data/experience.ts` and `src/data/skills.ts`
- UI strings (headings, nav, hero text) — in `src/i18n/en.ts` / `src/i18n/ru.ts`
- Pages import translations directly: `import { en as t } from '../i18n/en'`
- Components accept `t: Translations` as a prop
- Colors — via Tailwind classes only, no `style=""` or `var(--*)` in templates
- Em dashes `—` are allowed only in `period` fields (dates); use a regular hyphen `-` elsewhere
- Skill group keys in `skills.ts`: `frontend`, `css`, `state`, `backend`, `infra`, `tools`, `ai`
