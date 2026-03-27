# PRD — Ivan Tkachenko CV (Web + PDF)

## 1. Overview

**Product vision:** A senior-level CV that passes the 10-second recruiter scan, signals technical leadership and business impact, and exists in two consistent forms — a rich interactive web page and a clean ATS-compatible PDF — both generated from a single source of truth.

**Target audience:**
- International remote clients and recruiters reviewing the portfolio site
- Hiring managers at tech companies receiving a PDF attachment
- ATS systems processing submitted applications

**Success metrics:**
- Every experience bullet contains at least one quantified metric (number, %, $, team size)
- PDF renders cleanly as 2 pages, single-column, no tables
- Web CV includes context sentences per role, visible career progression, AI tooling section
- Skills section contains 15-20 targeted skills, categorized into 5 groups
- Summary block fits 3 lines and communicates: title + years + differentiator + availability

---

## 2. Goals & Non-Goals

### Goals

- Rewrite all experience bullets from responsibility statements to achievement statements (PAR format)
- Add quantified metrics to every bullet where possible (estimates acceptable)
- Add a one-line company context sentence to each role (product type, team size, scope)
- Restructure the Summary to open with seniority signal + core stack + key differentiator
- Separate Skills into 5 focused categories: Frontend, Backend, Infrastructure, Tools, AI
- Compress old roles (ICT LLC, Bonusway) to 2-3 bullets each
- Expand Gymteam to 6-7 bullets — it is the most important role
- Add explicit AI/LLM tooling to the Skills section as a standalone category
- Produce two language versions (EN, RU) from the same `src/data/` source of truth
- Ensure the PDF version is single-column and ATS-parseable (no tables, no skill bars)
- Ensure the web version is richer: context paragraphs, tech stack tags per role, visible career arc

### Non-Goals

- Adding certifications (no current certifications to list)
- Adding a photo (international remote target audience — photo is inappropriate)
- Skill bar charts or visual skill-level indicators
- Adding a "References" section
- Changing the site's overall design system or color palette
- Tailoring CV per specific job application (that is a manual step, out of scope)

---

## 3. User Personas

### Primary Persona — Remote Client / Recruiter

**Name:** Sarah, Technical Recruiter
**Role:** Recruiter at a product company or agency looking to hire a senior frontend/full-stack engineer
**Needs:**
- Quickly understand seniority level and years of experience
- Confirm the tech stack matches their requirements (React, TypeScript, Node, Go)
- See evidence of impact, not just responsibilities
- Get contact info and a PDF link instantly

**Pain points:**
- Scans 100+ CVs per week — needs signal in first 10 seconds
- Frustrated by CVs that list 30 technologies with no depth signal
- Cannot assess seniority from vague bullet points like "worked on backend"

### Secondary Persona — Direct Client (Freelance / Contract)

**Name:** Marco, CTO at a startup
**Role:** Technical decision-maker evaluating contractors for a project
**Needs:**
- See project examples that are close to his domain
- Understand whether Ivan can lead, not just execute
- Find GitHub / portfolio link to validate code quality
- Evaluate English proficiency for async remote collaboration

**Pain points:**
- Doesn't have time for a long call — wants to pre-qualify from the CV alone
- Concerned about contractor reliability and communication
- Needs to see evidence of ownership ("led," "architected"), not just participation

---

## 4. User Stories

- As a recruiter, I want to see Ivan's title and years of experience in the first line so that I can immediately assess seniority without reading the full document.
- As a recruiter, I want to see 2-3 quantified achievements on the first screen so that I can decide whether to read further in under 10 seconds.
- As a recruiter, I want a downloadable PDF link prominently placed so that I can attach it to my ATS or share with a hiring manager.
- As a direct client, I want a one-line description of each company so that I understand the context of Ivan's work without prior knowledge of the companies.
- As a direct client, I want to see evidence of team leadership and architecture decisions so that I can trust Ivan to work independently.
- As a direct client, I want to see AI tooling listed explicitly so that I know Ivan is working with modern development practices.
- As a hiring manager, I want the PDF to be ATS-parseable (single column, no tables) so that it processes correctly through our applicant tracking system.
- As a hiring manager receiving a RU-language application, I want a Russian version of the CV with identical content so that it reads naturally.
- As Ivan, I want all CV content to live in `src/data/` so that updates propagate to both the web and PDF versions automatically.
- As Ivan, I want the web CV to show more context than the PDF so that the portfolio site leaves a stronger impression than the plain document.

---

## 5. Features & Requirements

### 5.1 Summary Block

**Description:** A 2-3 sentence opening block positioned immediately after the contact header. Replaces the current generic "О себе" / "Summary" text.

**Acceptance criteria:**
- First sentence: "Senior Full Stack Engineer with 14+ years of experience in [core stack]."
- Second sentence: one concrete differentiator — team leadership signal OR notable scale/impact metric
- Third sentence (optional): availability context — "Open to remote, EU/LATAM time zones"
- No phrases: "passionate," "team player," "excellent communicator," "responsible"
- Maximum 60 words total
- Same structure in both EN and RU versions
- Stored in `src/i18n/en.ts` and `src/i18n/ru.ts`

**Priority:** P0

---

### 5.2 Skills Section — Categorized, Trimmed

**Description:** Skills listed in 5 flat category groups. No bars, no percentages. 15-20 total skills surfaced per version.

**Acceptance criteria:**
- Categories: **Frontend**, **Backend**, **Infrastructure**, **Tools**, **AI**
- Frontend: TypeScript, JavaScript, React, Vue 3, Next.js, React Native, HTML/CSS, Tailwind
- Backend: Node.js, Go, PostgreSQL, Redis, REST, gRPC, WebSocket
- Infrastructure: Docker, Docker Compose, Nginx, Git, CI/CD
- Tools: Figma, Storybook, Webpack, Vite, Jira
- AI: Cursor, Claude, GitHub Copilot, OpenAI API, n8n
- No skill bars, progress indicators, or percentage labels
- Outdated skills removed from primary display: jQuery, PHP, Gulp, Grunt, Backbone, AngularJS
- Stored in `src/data/skills.ts`, keys matching existing convention: `frontend`, `backend`, `infra`, `tools`, `ai`

**Priority:** P0

---

### 5.3 Experience Bullets — Achievement Format

**Description:** Rewrite all experience bullets from responsibility descriptions to PAR (Problem-Action-Result) format with quantified metrics.

**Acceptance criteria:**
- Every bullet starts with a strong action verb: Architected, Led, Designed, Reduced, Implemented, Introduced, Migrated, Scaled, Mentored, Automated
- No bullet starts with: "Participated in," "Was responsible for," "Helped with," "Assisted"
- Every bullet contains at least one of: percentage, count, team size, time period, scale metric
- Estimates are acceptable where exact numbers are unavailable
- Each role begins with a one-line company context sentence (product type, team size, scale)
- Gymteam: 6-7 bullets
- Citeck: 5-6 bullets
- IRecommend: 3-4 bullets
- Bonusway: 2-3 bullets
- ICT LLC: 2-3 bullets
- Stored in `src/data/experience.ts`
- Both EN and RU versions updated

**Priority:** P0

---

### 5.4 Company Context Sentences

**Description:** Each role entry in both web and PDF versions begins with a one-line italicized or muted-color context sentence describing the product and scope.

**Examples:**
- Gymteam: "Online fitness platform with 100K+ subscribers; team of ~15 engineers."
- Citeck: "Enterprise BPM/ECM system used by Russian government agencies and corporations; frontend team of 5."
- IRecommend: "Consumer reviews platform with millions of monthly visitors; full-stack role."
- Bonusway: "Leading cashback service in Europe (Finland); remote contractor role."
- ICT LLC: "Regional IT company; sole developer on two web service projects."

**Acceptance criteria:**
- One sentence per role, max 15 words
- Visible in both web CV and PDF
- Stored as a `context` field in `src/data/experience.ts`
- Displayed in a visually distinct style (italic or muted color) below the role title

**Priority:** P1

---

### 5.5 PDF — Single-Column, ATS-Compatible Layout

**Description:** The PDF version (`/cv/` and `/ru/cv/`) must use a strict single-column layout with no tables, no absolute-positioned elements, and standard section headings.

**Acceptance criteria:**
- Single-column layout only — no sidebar in the PDF version
- Section headings use standard labels: "Work Experience," "Skills," "Education," "Summary"
- No tables used for layout (use `<div>` flex/grid, or plain block flow)
- No icons inside experience bullets (icons only in contact header if at all)
- No skill bar charts or graphical elements in the body
- PDF generates cleanly to 2 pages at A4 / Letter via Playwright
- Font used is a system-safe or embedded serif/sans-serif (not a decorative font)
- Body text 10-11pt, name 20-22pt, section headings 13-14pt
- Accent color limited to one tone for headings (violet-700 matches brand)
- `noindex` meta tag present on `/cv/` pages (already implemented)

**Priority:** P0

---

### 5.6 Web CV — Richer Display

**Description:** The web version (`/` and `/ru/`) can show more detail than the PDF: expanded project descriptions, tech stack tags per role, and a visible career arc.

**Acceptance criteria:**
- Company context sentence visible per role (see 5.4)
- Tech stack tags displayed per role (small pill-shaped tags for main technologies used)
- "Download CV" button prominently placed — links to `/cv.pdf` (EN) or `/cv-ru.pdf` (RU)
- Projects section shows live links and tech tags
- Skills section uses the 5-category structure from 5.2
- GitHub, LinkedIn, Telegram links in the contact block
- Language switcher accessible (EN ↔ RU)

**Priority:** P1

---

### 5.7 Languages Section

**Description:** Keep the languages section but position it at the bottom of the CV, after Education.

**Acceptance criteria:**
- Format: "English — B1 (Limited Working Proficiency) | Spanish — A1 | Russian — Native"
- One line only
- Positioned last, after Education
- Present in both EN and RU PDF and web versions

**Priority:** P1

---

### 5.8 Contact Block

**Description:** The top contact block must include all relevant links and location/availability signal.

**Acceptance criteria:**
- Fields: Full name, job title, location (Buenos Aires, Argentina), email (obfuscated per existing convention), phone (optional — can omit for privacy), LinkedIn, GitHub, portfolio URL
- Time zone or availability note: "Remote · UTC-3 (Buenos Aires)"
- No photo
- GitHub link: https://github.com/vanekt
- LinkedIn: https://www.linkedin.com/in/-ivan-tkachenko-/
- Email: decoded from `src/utils/email.ts` at render time

**Priority:** P0

---

## 6. UX & Design Requirements

### Layout

- **Web version**: two-column layout (sidebar + main) as currently implemented — preserved
- **PDF version**: strict single-column — no sidebar
- Section order (both): Summary → Skills → Experience → Projects (web only or brief) → Education → Languages

### Typography

- PDF body text: 10-11pt, system font (Inter or system-ui)
- PDF name: 20-22pt bold
- PDF section headings: 13-14pt, semibold, accent color (violet-700)
- Web: inherits existing Tailwind typography scale
- No decorative fonts in PDF

### Visual Hierarchy

- Name is the largest element
- Section headings visually distinct, consistent style
- Company name + title + dates on one scannable line per role
- Context sentence in muted/italic style below role header
- Bullets with 1-2 lines max each

### Color

- PDF: white background, near-black text, violet-700 accent on headings and name
- Web: existing light/dark theme (white/violet-700, slate-950/violet-400)
- No color blocks, no skill bar colors

### Responsive (Web)

- Mobile: single-column stacked layout
- No hover-only interactions (tooltips, group-hover labels) — hover doesn't work on touch
- Download button tappable on mobile

### Accessibility

- All text meets WCAG AA contrast ratio
- PDF generated from semantic HTML — proper heading hierarchy
- Skills tags and role titles are readable without color

---

## 7. Content Requirements

### Copy Tone and Voice

- Professional, direct, confident — not humble or passive
- Action-first: every sentence starts with what was done, not who did it
- Specific over general: "1M+ DAUs" beats "large user base"
- Avoid buzzwords: "synergy," "passionate," "dynamic," "self-starter"
- Both EN and RU versions must read naturally — RU is not a literal translation

### Required Sections and Content Rules

| Section | EN | RU | Rule |
|---|---|---|---|
| Summary | ✓ | ✓ | ≤60 words, no generic phrases |
| Skills | ✓ | ✓ | 5 categories, 15-20 skills, no bars |
| Experience | ✓ | ✓ | PAR bullets, context sentence, metrics |
| Education | ✓ | ✓ | 1 line: degree + year |
| Languages | ✓ | ✓ | 1 line, positioned last |
| Projects | ✓ | ✓ | Web only (expanded); PDF: optional brief mention |

### Localization / i18n

- All content stored in `src/data/experience.ts`, `src/data/skills.ts` with EN/RU fields
- UI labels in `src/i18n/en.ts` and `src/i18n/ru.ts`
- RU version uses native Russian professional terminology — not translated EN
- Section headings in RU: "Опыт работы," "Навыки," "Образование," "Обо мне," "Языки"

---

## 8. Technical Requirements

### Performance

- Web CV pages: Lighthouse score ≥ 90 on all metrics
- PDF generation: Playwright script produces output in < 30s per file
- PDF file size: < 500KB per file

### Tech Stack Constraints

- Framework: Astro 6 — static output only
- CSS: Tailwind CSS 4, built-in classes only, no arbitrary values, no `style=""`, no CSS variables in templates
- Language: TypeScript strict
- PDF layout: `CvLayout.astro` — no dark mode, noindex, print-optimized styles
- Content source of truth: `src/data/experience.ts`, `src/data/skills.ts`
- Single-column PDF: achieved via a separate print layout, not by disabling the sidebar via JS

### SEO

- Web CV pages (`/`, `/ru/`): indexable, meta title + description set per locale
- PDF pages (`/cv/`, `/ru/cv/`): `noindex` (already implemented)
- PDF download: served at `/cv.pdf` and `/cv-ru.pdf`

### Analytics

- No tracking requirements for v1

---

## 9. Out of Scope (for v1)

- Tailored versions of the CV per job application or industry vertical
- Interactive timeline or animated career arc
- A/B testing of different summary phrasings
- GitHub activity widget or contribution graph
- Testimonials / recommendations section
- Video introduction
- "Hire me" contact form integration
- Certifications (none currently applicable)
- Third-party CV hosting (LinkedIn Easy Apply, Indeed profile sync)

---

## 10. Open Questions

1. **Metrics for Gymteam**: What are the approximate numbers for the fitness platform? (MAU, number of widgets deployed, SSR performance gain, component library size?) Estimates are acceptable.
2. **Metrics for Citeck**: Team size managed? Number of custom form components built? Migration timeline/scope?
3. **IRecommend scale**: Any traffic numbers for the reviews platform? Microservice count or protobuf schemas generated?
4. **Phone number in contact block**: Should the Buenos Aires number be included or omitted from the public web CV?
5. **GitHub profile**: Is https://github.com/vanekt active enough to feature prominently in the contact block?
6. **Projects section in PDF**: Should the Projects section be included in a condensed form in the PDF, or omitted entirely to stay within 2 pages?
7. **`context` field in `experience.ts`**: Add a new `context` field to the existing experience data shape, or handle it as part of the existing `description` field?

---

## 11. Milestones

### Phase 1 — Content Rewrite (P0)
- Rewrite Summary block (EN + RU) using the 3-line formula
- Rewrite all experience bullets in PAR format with metrics
- Add company context sentences to all 5 roles
- Update Skills section: 5 categories, trim to 15-20 skills, add AI category
- Update `src/data/experience.ts`, `src/data/skills.ts`, `src/i18n/en.ts`, `src/i18n/ru.ts`

### Phase 2 — PDF Layout (P0)
- Audit `CvLayout.astro` and `CvDocument.astro` for any tables, sidebar, or non-ATS-safe elements
- Enforce single-column layout in the PDF version
- Verify PDF generates cleanly at 2 pages
- Confirm section headings use standard labels

### Phase 3 — Web Enhancements (P1)
- Add tech stack tags per role to the web experience section
- Add company context sentence display (italic/muted style)
- Verify Download CV button is prominent and functional on both locales
- Verify contact block includes all required links + availability note

### Phase 4 — Review & Polish
- Run `/review` on all modified components
- Verify Lighthouse scores ≥ 90
- Proofread both EN and RU versions for passive voice, generic phrases, typos
- Final PDF generation check — 2 pages, clean output
