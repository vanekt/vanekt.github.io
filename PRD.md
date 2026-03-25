# PRD — vanekt.github.io

## 1. Overview

**Видение:** Персональный сайт-визитка Ивана Ткаченко — минималистичный, быстрый и запоминающийся портфолио, который конвертирует посетителей в контакты.

**Целевая аудитория:**
- Технические рекрутеры и hiring managers (поиск senior-разработчиков для удалённой работы)
- CTO/VP Engineering стартапов и продуктовых компаний
- Потенциальные клиенты на freelance/контракт

**Метрики успеха:**
- Lighthouse Performance ≥ 95, Accessibility ≥ 95, SEO ≥ 95
- LCP < 2.5s, INP < 200ms, CLS < 0.1
- Страница удерживает посетителя — чёткий CTA виден above the fold без скролла

---

## 2. Goals & Non-Goals

### Goals

- Redesign layout на sticky split-screen (левая панель фиксирована, правая скроллится)
- Добавить scroll-aware навигацию с подсветкой активной секции
- Реализовать cursor spotlight (radial gradient, следующий за курсором)
- Переписать все тексты в формат достижений с числами и результатами
- Добавить Projects секцию (2–3 проекта)
- Провести font audit — перейти на Inter/Geist + Geist Mono
- Добавить personality signal (easter egg, кастомная 404 или сайдбар-виджет)
- Обеспечить полноценный dark/light mode
- Поддержать i18n: EN (`/`) и RU (`/ru/`)

### Non-Goals

- Блог / статьи
- CMS или бэкенд
- Контактная форма с отправкой
- Анимации на основе WebGL/Three.js
- Социальный фид / обновления в реальном времени

---

## 3. User Personas

### Persona A — Технический рекрутер (первичная)

**Имя:** Анна, Technical Recruiter в продуктовой компании
**Цель:** За 30 секунд понять стек, опыт и доступность кандидата
**Боли:** Шаблонные сайты без конкретики; нет CTA; непонятно, открыт ли кандидат к работе
**Ожидания:** Имя + роль + стек + контакт — выше fold; ссылка на LinkedIn; ясный сигнал "open to remote"

### Persona B — CTO / технический интервьюер (вторичная)

**Имя:** Дмитрий, CTO стартапа
**Цель:** Оценить глубину опыта, технические решения, проекты
**Боли:** Перечни ответственностей вместо достижений; непонятно, что человек реально построил
**Ожидания:** Experience с конкретными результатами; Projects с описанием проблемы и технических решений; ссылки на GitHub/demo

---

## 4. User Stories

1. Как рекрутер, я хочу видеть имя, роль и CTA выше fold, чтобы за 5 секунд решить, связываться ли с кандидатом.
2. Как рекрутер, я хочу видеть статус "открыт к удалённой работе" на видном месте, чтобы не тратить время на нерелевантных кандидатов.
3. Как CTO, я хочу читать опыт в формате достижений с цифрами, чтобы оценить реальный вклад, а не обязанности.
4. Как посетитель, я хочу быстро перейти к нужной секции (Experience, Skills, Projects), не скроллируя всё с начала.
5. Как посетитель с телефона, я хочу удобно читать сайт и находить контакты, не теряясь в навигации.
6. Как русскоязычный посетитель, я хочу переключиться на русский язык.
7. Как посетитель, предпочитающий светлую тему, я хочу переключить тему и чтобы мой выбор сохранялся.
8. Как посетитель, я хочу видеть 2–3 ключевых проекта с описанием проблемы и стека, чтобы оценить уровень разработчика.
9. Как посетитель, я хочу легко найти ссылки на GitHub, Telegram, LinkedIn, чтобы связаться удобным способом.

---

## 5. Features & Requirements

### 5.1 Sticky Split-Screen Layout

**Описание:** Левая панель (~40% ширины на десктопе) фиксирована: имя, роль, навигация, соцсети. Правая панель (~60%) скроллируется — все секции контента. На мобайле: стандартная вертикальная прокрутка, левая панель становится хедером.

**User story:** #1, #4

**Acceptance criteria:**
- Левая панель остаётся видимой при любой глубине скролла на десктопе (≥1024px)
- На мобайле (< 768px) левая панель трансформируется в sticky header с hamburger-меню
- На планшете (768–1023px) решение на усмотрение — допустимо top navbar
- Левая панель содержит: имя, роль/title, краткое bio (1–2 строки), nav, соцсети, theme toggle

**Priority: P0**

---

### 5.2 Scroll-Aware Navigation

**Описание:** Навигационные ссылки в левой панели автоматически подсвечивают активную секцию по мере скролла правой панели.

**User story:** #4

**Acceptance criteria:**
- Активная секция определяется через `IntersectionObserver`
- Порог срабатывания: секция занимает ≥ 30% вьюпорта
- Активный пункт nav визуально выделен (цвет accent `violet-700` / `violet-400`, смещение или underline)
- Плавная смена активного пункта без задержек

**Priority: P0**

---

### 5.3 Cursor Spotlight

**Описание:** Radial gradient (radial spotlight) следует за курсором мыши по тёмному фону — эффект "подсветки".

**User story:** Personality signal

**Acceptance criteria:**
- Реализован через `mousemove` + CSS `radial-gradient` на background или pseudo-element
- Видим только в dark mode и только на десктопе
- Не влияет на производительность: `requestAnimationFrame` или CSS custom properties для позиции
- Не мешает кликам и выделению текста (pointer-events: none)
- Радиус gradient: ~300–400px, opacity ~0.07–0.12 от accent-цвета (`violet`)

**Priority: P1**

---

### 5.4 Hero Section (Copy Rewrite)

**Описание:** Hero по паттерну: Имя → Роль → Value prop → CTA primary + CTA secondary.

**User story:** #1, #2

**Acceptance criteria:**
- H1: "Ivan Tkachenko" (крупный, weight 700)
- Subtitle: "Senior Frontend & Full Stack Engineer" (weight 500)
- Value prop: одна строка, содержит опыт в годах + основной стек + "open to remote" (пример: "14 years building products teams actually ship — React, Vue 3, TypeScript, Node.js, Go. Open to remote.")
- Primary CTA: кнопка/ссылка на email или Telegram
- Secondary CTA: ссылка на LinkedIn или Download CV
- Все три блока видны above the fold на десктопе 1280px
- На мобайле (375px) — имя + subtitle + CTA без скролла

**Priority: P0**

---

### 5.5 Experience Section (Achievement Format)

**Описание:** Опыт переписан по формату достижений: конкретные результаты с цифрами вместо описания обязанностей.

**User story:** #3

**Acceptance criteria:**
- Каждая запись: company, title, period, 2–4 bullet-поинта
- Каждый bullet — в формате результата: "Сократил bundle на 40%…", "Мигрировал 200k LOC…"
- Исключены фразы "ответственен за", "занимался", "участвовал в"
- Одно предложение per bullet о том, *почему* выбрано техническое решение (сигнал сениорити)
- Reverse-chronological order
- Технологии выделены визуально (tag/badge), но не как прогресс-бары

**Priority: P0**

---

### 5.6 Projects Section

**Описание:** 2–3 курированных проекта с описанием проблемы, стека и ссылками.

**User story:** #8

**Acceptance criteria:**
- 2–3 проекта, не больше
- Каждый проект: название, краткое описание проблемы (1–2 предложения), стек (теги), ссылка на GitHub и/или live demo
- Нет проектов без описания проблемы — только "что сделал" недостаточно
- Если live demo нет — GitHub ссылка обязательна
- Секция добавлена в навигацию и i18n

**Priority: P1**

---

### 5.7 Skills Section (Semantic Groups)

**Описание:** Навыки сгруппированы семантически, без прогресс-баров.

**User story:** #3

**Acceptance criteria:**
- Группы по ключам: `frontend`, `css`, `state`, `backend`, `infra`, `tools`, `ai`
- Каждый скилл — текстовый тег/badge, без числового рейтинга
- Нет технологий, с которыми опыт < 6 месяцев (нет "всего, что когда-либо трогал")
- Визуально читабельно, не перегружено

**Priority: P0** (уже существует, нужен audit)

---

### 5.8 Font Audit & Typography

**Описание:** Переход на Inter или Geist для body + Geist Mono для кода/тегов.

**User story:** визуальный полиш

**Acceptance criteria:**
- Body/UI font: Inter 400/500 или Geist 400/500 (загрузка через `@font-face` self-hosted или Google Fonts с `display: swap` и latin subset)
- Heading font: Cal Sans 700 или Geist 700 (может быть тот же Geist)
- Code/mono: Geist Mono для code snippets и tech tags
- Type scale соответствует: H1 48–72px / H2 32–40px / body 16–18px
- Без произвольных значений — только Tailwind-классы (`text-5xl`, `text-2xl` и т.д.)

**Priority: P1**

---

### 5.9 Scroll Animations

**Описание:** Fade-in + slide-up при появлении секций во вьюпорте.

**Acceptance criteria:**
- Реализовано через `IntersectionObserver` (не CSS scroll-driven — для совместимости)
- Анимация: `opacity 0→1` + `translateY 20px→0`, duration 300–400ms, easing ease-out
- Срабатывает один раз при входе в вьюпорт
- `prefers-reduced-motion`: анимация полностью отключается
- Нет лишнего JS — минимальный inline script или Astro-компонент без client-side framework

**Priority: P1**

---

### 5.10 Dark/Light Mode Toggle

**Описание:** Переключатель темы, сохраняющий выбор.

**User story:** #7

**Acceptance criteria:**
- Toggle в левой панели (десктоп) и в header (мобайл)
- Сохранение в `localStorage`
- По умолчанию — системная тема (`prefers-color-scheme`)
- Реализован через `client:idle` (zero JS до idle)
- Нет FOUC (flash of unstyled content) — inline script в `<head>` для применения темы до рендера

**Priority: P0** (уже частично реализован, нужна проверка FOUC)

---

### 5.11 Personality Signal / Easter Egg

**Описание:** Один запоминающийся элемент, выражающий личность.

**Acceptance criteria:**
- Один из вариантов (на выбор при реализации):
  - Кастомная 404-страница с юмором/отсылкой
  - Easter egg в консоли браузера (ASCII art + "You found me. I'm hiring... wait, you are hiring")
  - Сайдбар-виджет (например: "Currently listening to…" или мини-терминал)
  - Кастомный cursor (не системный дефолт)
- Не мешает основному UX
- Реализован без внешних зависимостей

**Priority: P2**

---

### 5.12 Custom 404 Page

**Acceptance criteria:**
- Страница `src/pages/404.astro` существует
- Содержит: сообщение об ошибке, ссылку "вернуться на главную", опционально — юмор
- Использует Layout.astro, поддерживает тему

**Priority: P2**

---

### 5.13 i18n — RU/EN

**Описание:** Полная поддержка двух языков.

**User story:** #6

**Acceptance criteria:**
- `/` — EN, `/ru/` — RU
- Все UI-строки в `src/i18n/en.ts` / `src/i18n/ru.ts`
- Language switcher в навигации (десктоп: левая панель; мобайл: header)
- switcher сохраняет текущую секцию при переключении (если возможно через anchor)
- Контент (experience, projects, skills) локализован в i18n-файлах

**Priority: P0** (уже реализован, нужна проверка completeness)

---

## 6. UX & Design Requirements

### Layout

- Desktop (≥1024px): sticky split-screen, левая панель ~35–40%, правая ~60–65%
- Tablet (768–1023px): top sticky navbar + single column
- Mobile (<768px): sticky header + hamburger menu, single column, tap-friendly (min 44px tap targets)

### Visual Design

- Dark mode: background `slate-950`, accent `violet-400`, primary text ~`slate-100`
- Light mode: background `white`, accent `violet-700`, primary text ~`slate-900`
- Два вспомогательных оттенка текста: основной и приглушённый (~`slate-400` в dark / ~`slate-500` в light)
- Карточки/секции: subtle border (`border-slate-800` / `border-slate-200`) без box-shadow в flat-стиле
- Hover на карточках: background tint reveal (`bg-slate-800/50` в dark mode)

### Micro-interactions

- Nav ссылки: underline animate-in from-left on hover (не fade)
- Соцсети: scale 1→1.1 + color shift to accent on hover
- CTA кнопки: fill animation on hover (background fill слева направо)
- Experience card: slight background tint on hover

### Accessibility

- WCAG AA contrast minimum для всего текста
- Корректная heading hierarchy (один H1, затем H2 для секций)
- Alt text для всех изображений
- Keyboard navigation: tab order логичен, focus visible (не убирать outline)
- Все интерактивные элементы имеют aria-label если нет видимого текста

---

## 7. Content Requirements

### Тон и голос

- First person, прямой, без корпоративного жаргона
- Конкретные числа и результаты везде где возможно
- Не "passionate developer" — конкретная ценность: что строишь, для кого, с каким результатом
- Bio: 60–80 слов, от первого лица

### Обязательные секции и правила

| Секция | Требование |
|---|---|
| Hero | Имя + роль + value prop + 2 CTA, всё above the fold |
| About | 60–80 слов, личный нарратив, фото (опционально) |
| Experience | Reverse-chrono, achievement bullets, даты, теги технологий |
| Projects | 2–3 проекта, problem statement + stack + links |
| Skills | Группы без прогресс-баров, ≤ 40 технологий суммарно |
| Contact | Email + Telegram + LinkedIn + GitHub, без формы |

### i18n

- EN — основной язык, RU — полная локализация
- Числа и даты: формат адаптируется под локаль (en: "14 years" / ru: "14 лет")
- Period в experience: em dash только в `period` полях

---

## 8. Technical Requirements

### Performance

| Метрика | Цель |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |

### Astro / Stack

- Нулевой JS по умолчанию; только `client:idle` для theme toggle и cursor spotlight
- Все изображения через `<Image />` (auto WebP/AVIF, предотвращает CLS)
- LCP-изображение (если есть): `<link rel="preload" as="image">` в `<head>`
- Шрифты: self-hosted или Google Fonts с `font-display: swap`, subset Latin
- Inline script в `<head>` для инициализации темы (предотвращение FOUC)
- Tailwind CSS 4: только встроенные классы, без arbitrary values, без `style=""`, без `var(--*)`

### SEO

- `<title>` уникальный для каждой страницы
- `<meta name="description">` — краткое и информативное
- `<meta property="og:*">` для social sharing (og:title, og:description, og:image)
- `<html lang="en">` / `<html lang="ru">` в зависимости от страницы
- Canonical URL
- Structured data (JSON-LD): `Person` schema с именем, ролью, соцсетями

### CI/CD

- Push to `main` → format check (oxfmt) + lint (oxlint) + typecheck (astro check) + build + deploy
- Никаких новых внешних зависимостей без явного обоснования

---

## 9. Out of Scope (v1)

- Блог / статьи / MDX
- Контактная форма с бэкендом
- Аналитика (GA, Plausible и т.д.)
- CMS (Contentful, Sanity и т.д.)
- WebGL / Three.js анимации
- RSS feed
- Sitemap (опционально добавить позже)
- PDF резюме (download CV) — можно добавить как P2 без реализации генерации

---

## 10. Open Questions

1. **Фото в About** — пока без фото. Решение отложено.
2. **Projects** — Иван добавит позже. Задача в TODO.md.
3. **Primary CTA** — email (может измениться в будущем).
4. **Easter egg** — console.log (решено в DESIGN_BRIEF.md).
5. **Font** — Cal Sans + Geist Sans + Geist Mono (решено в DESIGN_BRIEF.md).
6. **Tablet layout** — sticky top navbar (решено в TECH_PLAN.md).
7. **Download CV** — в будущем: генерация PDF из контента сайта, скачивание на соответствующей языковой странице (EN/RU). Задача в TODO.md.

---

## 11. Milestones

### Phase 1 — Layout & Navigation (P0 core)
- Sticky split-screen layout (desktop + mobile responsive)
- Scroll-aware navigation с IntersectionObserver
- Dark/light mode без FOUC

### Phase 2 — Content (P0 content)
- Hero copy rewrite (value prop + CTA)
- Experience rewrite в achievement format
- i18n completeness check (EN + RU)

### Phase 3 — Visual Polish (P1)
- Font audit — Inter/Geist + Geist Mono
- Scroll animations (fade-in/slide-up, prefers-reduced-motion)
- Cursor spotlight
- Hover micro-interactions (nav underline, card tint, social icons)

### Phase 4 — Projects & Skills Audit (P1)
- Projects section (2–3 проекта)
- Skills audit (убрать лишнее, добавить в i18n)

### Phase 5 — SEO & Performance (P1)
- Meta tags, OG tags, structured data
- Image optimization (`<Image />`)
- Font preload, FOUC fix
- Lighthouse audit → достижение ≥ 95

### Phase 6 — Personality & Extras (P2)
- Easter egg (console, 404, или иное)
- Кастомная 404 страница
- Language switcher polish
