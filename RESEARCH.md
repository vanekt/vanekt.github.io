# Portfolio Website Research — 2025

> Research base for PRD and redesign. Compiled March 2025.

---

## Executive Summary

Personal portfolio/CV sites for senior developers in 2025 split into two archetypes:

- **Minimal-professional** — content-first, fast, accessible, trust-building
- **Creative-interactive** — 3D/WebGL, animations, strong personality

For a senior full-stack engineer targeting clients and employers, **minimal-professional consistently converts better**. Creative experiments impress peers but can slow hiring conversion.

---

## 1. Design Trends

### Dominant Visual Style

**Neo-minimalism with purposeful accents** — dark background, near-neutral text, one saturated accent, generous whitespace. Every element earns its place.

**Neo-Brutalism** is a current trend in developer portfolios — bold borders, high contrast, raw grids. Signals personality and confidence over corporate polish.

Glassmorphism/Claymorphism work as accents (card backgrounds) but feel gimmicky as the full shell.

### Color Palettes (real-world examples)

| Portfolio | Background | Text | Accent |
|---|---|---|---|
| Brittany Chiang | `#11172a` (deep dark blue) | `#626c7d` / `#dfe5ec` | `#599692` (muted teal) |
| Josh Comeau | `#0d0f12` (near black) | `#c7cacc` | `#c91b68` + `#809fff` |
| Ryan Jacobson | `#000000` | `#ffffff` | `#6049ea` (pastel purple) |
| Jean de Dieu | `#111827` (dark blue-gray) | `#ffffff` | `#01c16a` (bright green) |

**Pattern:**
- Background: `#0d0d0d`–`#1c1c2e`
- Secondary text: 40–50% opacity over white
- One accent: teal, cyan, violet, or green
- Primary text: `#dfe5ec`–`#f8fafc`

**Two-color system + one accent** outperforms four-color palettes in clarity and recall.

**Dark/light mode toggle is now baseline** — omitting it reads as incomplete.

### Layout

- **Sticky split-screen** (Brittany Chiang pattern): left panel fixed (name, role, nav, social), right panel scrolls — most praised UX pattern for senior dev portfolios
- **Single-page with anchor nav** — dominant for CV/business card sites
- **Full-width centered single-column** — simpler alternative, sections stack vertically

---

## 2. Structure & Content

### Optimal Section Order

1. **Hero** — name, role, one-line value prop, CTA (email / resume), social links
2. **About** — 2–4 sentences personal narrative + photo; personality, not just credentials
3. **Experience** — reverse chronological; company, title, dates, 2–4 achievement bullets
4. **Projects** — 3–5 curated with problem statement + stack + live link (optional for senior)
5. **Skills** — grouped by category; visual but not gimmicky
6. **Contact** — direct email + social; optional form

### What Converts

- Single clear CTA above the fold: "Open to remote work. Let's talk."
- Experience bullets in **achievement format**: "Reduced bundle size by 40% migrating to Vite" > "Responsible for build tooling"
- 3–5 curated projects > listing 15
- One sentence on *why* a technical choice was made — signals seniority
- Skills grouped semantically (Frontend / Backend / Infrastructure / Tools)

### What to Avoid

- Progress bars for skills (no one knows what "JavaScript 85%" means)
- Generic "passionate developer" copy
- Listing every technology ever touched
- Wall-of-text bios — 80 words max
- Listing responsibilities instead of outcomes

### Hero Copy Pattern

```
[Name]
[Title] / [Role descriptor]
[One-line value prop — what you build + for whom + optional unique angle]
[Primary CTA] [Secondary CTA]
```

Example: "Ivan Tkachenko. Senior Frontend & Full Stack Engineer. 14 years building products teams actually ship — React, Vue 3, TypeScript, Node.js, Go. Open to remote."

---

## 3. UX Patterns

### Navigation

- **Sticky sidebar** with scroll-aware active section highlighting — most praised pattern
- **Sticky top navbar** that hides on scroll-down, reappears on scroll-up — simpler alternative
- **Mobile:** hamburger with full-screen overlay or drawer

### Scroll Experience

- **Scroll-triggered fade-in/slide-in** on viewport entry — baseline expectation in 2025; use `IntersectionObserver`
- **Section-aware nav highlighting** — active link updates as section enters viewport — strongly recommended
- **Parallax** — hero background only, sparingly; full-section parallax feels dated

### Micro-interactions

- **Cursor spotlight** — radial gradient following mouse over background (widely copied from Brittany Chiang)
- **Card hover** — subtle elevation (`box-shadow` lift) or background tint reveal
- **Link underlines** — animate in from left on hover (not fade)
- **Social icons** — scale + color shift on hover
- **CTA button** — fill animation on hover > simple color change

---

## 4. Performance

### Core Web Vitals 2025 Targets

| Metric | Good |
|---|---|
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |

**Realistic goal for a static Astro portfolio: Lighthouse 95–100 on all metrics.** Anything below 90 on Performance is a red flag.

### Astro-Specific

1. Zero JS by default — only hydrate interactive components (`client:idle` for theme toggle)
2. `<Image />` component for all non-SVG — auto WebP/AVIF, prevents CLS
3. Preload LCP image with `<link rel="preload" as="image">`
4. Self-host fonts or `font-display: swap`; subset to Latin if possible
5. Inline critical CSS — Astro does this automatically for scoped styles

---

## 5. Typography

### Recommended Font Stacks

**Zero-load alternative:**
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Top picks for developer portfolios:**

| Font | Use | Notes |
|---|---|---|
| **Inter** | Body / UI | Designed for screens; used by Vercel, Linear, Tailwind docs |
| **Geist** | Body + headings | Vercel's font; free; rounder than Inter |
| **Geist Mono** | Code snippets | Pairs perfectly with Geist |
| **Cal Sans** | Display headings | Free; distinctive; used by Cal.com |
| **Poppins** | All-purpose | Friendly geometric; Google Fonts |

**Recommended pairing:** Cal Sans or Geist 700 for headings + Inter 400/500 for body + Geist Mono for code.

### Type Scale

| Element | Size | Weight |
|---|---|---|
| Name / H1 | 48–72px | 700 |
| Section headings | 32–40px | 600–700 |
| Job title / subheading | 20–24px | 500 |
| Body text | 16–18px | 400 |
| Labels / captions | 12–14px | 400–500 |

Letter-spacing: `0.05–0.1em` for all-caps labels and nav items; default for body.

---

## 6. Notable Portfolios to Study

| Developer | URL | Why |
|---|---|---|
| **Brittany Chiang** | brittanychiang.com | Benchmark — sticky split-layout, cursor glow, scroll-active nav, easter egg |
| **Josh Comeau** | joshwcomeau.com | Engineering authority + content + interactive demos |
| **Sara Soueidan** | sarasoueidan.com | Accessibility-first; proves you don't need animation to signal seniority |
| **Brad Frost** | bradfrost.com | Simple, content-focused, achievements above the fold |
| **Patrick David** | bepatrickdavid.com | Neo-brutalist; bold typography; strong personality statement |
| **Sam Goddard** | samgoddard.co.uk | Understated dark minimal; hover image reveals |
| **Lynn Fisher** | lynnandtonic.com | Redesigns every year — extreme personality expression |

---

## 7. What Separates "Meh" from "Wow"

### The Brittany Chiang Effect (most-cited benchmark)

1. **Sticky left panel** — name, role, bio, scroll-aware nav, social links; never need to scroll up to navigate
2. **Cursor spotlight** — radial gradient follows cursor; tactile feel on a dark background
3. **Scroll-aware navigation** — section titles highlight as content enters viewport
4. **Easter egg** — personality moment that makes the site memorable
5. **Stack alignment** — portfolio is built with the same tech as the developer's expertise

### Universal Differentiators

- **Narrative over listing** — "joined when team was 3 engineers, helped scale to 50" > "responsible for frontend"
- **Specificity** — "40% bundle reduction" > "improved performance"; "migrated 200k LOC" > "large codebase"
- **Personality signal** — custom cursor, 404 page, sidebar widget, unexpected animation — the most-mentioned factor in "why I remember this portfolio"
- **Performance as proof** — 0.8s load time says more than any "I care about performance" claim
- **Accessibility** — heading hierarchy, alt text, keyboard nav, WCAG AA contrast

### "Meh" Patterns

- Skill progress bars claiming "JavaScript: 90%"
- Generic Bootstrap/template with zero customization
- No live demos — only GitHub links
- Third-person About bio
- No CTA above the fold
- Cookie-cutter hero: "Hi, I'm X, a passionate developer who loves coding"
- Skills as a flat tag cloud with 40 technologies

---

## 8. Priority Recommendations for This Project

Given current stack (Astro 6, Tailwind CSS 4, dark/light, violet/slate palette) and Ivan's profile (senior full-stack, 14y experience, remote-open):

| Priority | Action |
|---|---|
| 1 | **Sticky split-layout** — left panel fixed (name + nav + social), right panel scrolls |
| 2 | **Scroll-aware navigation** — active section highlights in left nav |
| 3 | **Cursor spotlight** — radial gradient on dark bg following cursor |
| 4 | **Rewrite copy** — outcomes and numbers everywhere, not role descriptions |
| 5 | **Personality signal** — easter egg, custom 404, sidebar widget, or similar |
| 6 | **Font audit** — Inter or Geist + Geist Mono for code snippets |
| 7 | **Lighthouse 95+** — images via `<Image />`, fonts with `display:swap`, minimal JS hydration |
| 8 | **Projects section** — 2–3 curated projects with live demo links |

---

## Sources

- wearedevelopers.com — Web Developer Portfolio Inspiration, March 2025
- dev.to/siddheshcodes — Frontend Developer Portfolio Tips for 2025
- colorlib.com — 19 Best Portfolio Design Trends
- muz.li — Top 100 Creative Portfolio Websites 2025
- alvarotrigo.com — 27 Web Developer Portfolio Examples
- webportfolios.dev — Best Color Palettes and Fonts for Developer Portfolios
- tietalent.com — How to Build a Tech Portfolio That Gets You Hired
- nathatype.com — Web Animation Trends 2025
- shakuro.com — Best Fonts for Web Design 2025
- stan.vision — Micro Interactions in Web Design 2025
- enfuse-solutions.com — Core Web Vitals 2025 Benchmarks
- eastondev.com — Astro Performance Optimization Guide
