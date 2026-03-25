# Design Brief — vanekt.github.io

> Минималистичный, молниеносный и запоминающийся портфолио старшего инженера — каждый элемент либо несёт смысл, либо не существует.

---

## 1. Design Principles

**Доверие через конкретику** — ни одного абстрактного слова: вместо "опытный разработчик" — цифры, названия и результаты. Дизайн поддерживает этот принцип: никаких decorative elements без функции.

**Скорость как аргумент** — сайт должен загружаться быстрее, чем рекрутер успевает вздохнуть. Lighthouse 95+ — не цель, а минимум. Производительность сама по себе — демонстрация квалификации.

**Левая панель — это CV, правая — детали** — на десктопе всё самое важное (имя, роль, контакты, навигация) видно постоянно. Правая часть — разворот. Рекрутер никогда не теряет ориентацию.

**Один акцент, одно настроение** — фиолетовый (`violet`) единственный цвет с характером. Всё остальное — нейтральный slate. Это сигнал уверенности, а не дизайнерского хаоса.

**Личность в деталях** — большой дизайн сдержан и профессионален. Личность проявляется в одном неожиданном месте — и запоминается.

---

## 2. Color System

### Палитра

| Роль | Dark mode | Light mode |
|---|---|---|
| Background primary | `#020617` | `#ffffff` |
| Background secondary | `#0f172a` | `#f8fafc` |
| Surface (cards, panels) | `#0f172a` + 50% opacity | `#f1f5f9` |
| Border | `#1e293b` | `#e2e8f0` |
| Text primary | `#f1f5f9` | `#0f172a` |
| Text secondary | `#94a3b8` | `#475569` |
| Text muted | `#64748b` | `#94a3b8` |
| Accent primary | `#a78bfa` | `#7c3aed` |
| Accent hover | `#c4b5fd` | `#6d28d9` |
| Cursor spotlight | `rgba(139,92,246,0.08)` | — (отключён) |

### Правила использования

- Accent (`violet`) — только для: активный пункт nav, hover-состояния ссылок, CTA-кнопка, tech tags при hover
- Text muted — для: даты, period, вспомогательные подписи, placeholder в nav
- Background secondary — для: карточки опыта при hover, левая панель в light mode
- **Никогда:** accent на accent, text muted на background primary (низкий контраст), больше одного accent-цвета

### Tailwind Mapping

| Роль | Dark mode class | Light mode class |
|---|---|---|
| Background primary | `bg-slate-950` | `bg-white` |
| Background secondary | `bg-slate-900` | `bg-slate-50` |
| Surface hover | `bg-slate-800/50` | `bg-slate-100` |
| Border | `border-slate-800` | `border-slate-200` |
| Text primary | `text-slate-100` | `text-slate-900` |
| Text secondary | `text-slate-400` | `text-slate-600` |
| Text muted | `text-slate-500` | `text-slate-400` |
| Accent | `text-violet-400` | `text-violet-700` |
| Accent hover | `text-violet-300` | `text-violet-800` |
| Accent bg (CTA) | `bg-violet-400` | `bg-violet-700` |
| Accent bg hover | `bg-violet-300` | `bg-violet-600` |

---

## 3. Typography

### Font Stack

**Display / Name (H1):**
- Шрифт: **Cal Sans** — weight 700
- Источник: self-hosted, загрузить с [cal.com/open-source](https://github.com/calcom/font) — OFL лицензия, бесплатно
- Обоснование: Cal Sans имеет характер при крупном размере (используется Cal.com, заметен в потоке), при этом не кричит — в отличие от сжатых display-шрифтов
- Fallback: `'Cal Sans', system-ui, -apple-system, sans-serif`

**Body / UI:**
- Шрифт: **Geist Sans** — weights 400, 500
- Источник: self-hosted, [vercel.com/font](https://vercel.com/font) — OFL лицензия, бесплатно
- Обоснование: Geist читабельнее Inter при мелких размерах на Retina, имеет чуть теплее apertures — менее "корпоративный" при тех же преимуществах
- Fallback: `'Geist', 'Inter', system-ui, sans-serif`

**Mono (tech tags, code):**
- Шрифт: **Geist Mono** — weight 400
- Источник: self-hosted вместе с Geist Sans
- Fallback: `'Geist Mono', 'JetBrains Mono', monospace`

**Загрузка шрифтов:**
```css
/* global.css */
@font-face {
  font-family: 'Cal Sans';
  src: url('/fonts/CalSans-SemiBold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
/* аналогично для Geist 400, 500 и Geist Mono 400 */
```
Subset: только Latin (`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`).

### Type Scale

| Элемент | Размер | Weight | Line-height | Letter-spacing | Tailwind классы |
|---|---|---|---|---|---|
| Name / H1 | 48px (desktop) / 36px (mobile) | 700 | 1.1 | -0.02em | `text-5xl lg:text-6xl font-bold tracking-tight` |
| Section headings / H2 | 24px | 600 | 1.3 | 0 | `text-2xl font-semibold` |
| Job title / H3 | 18px | 500 | 1.4 | 0 | `text-lg font-medium` |
| Value prop / subtitle | 18px | 400 | 1.6 | 0 | `text-lg font-normal` |
| Body text | 16px | 400 | 1.7 | 0 | `text-base` |
| Small / captions | 14px | 400 | 1.5 | 0 | `text-sm` |
| Nav labels | 13px | 500 | 1 | 0.08em | `text-xs font-medium tracking-widest uppercase` |
| Tech tags | 12px | 400 | 1 | 0.03em | `text-xs font-mono tracking-wide` |
| CTA button | 15px | 500 | 1 | 0.01em | `text-sm font-medium` |

### Правила типографики

- Максимальная длина строки body text: 65–70 символов (`max-w-prose` в Tailwind ≈ 65ch)
- H1 (имя): всегда Cal Sans, никогда не uppercase программно — только как написано
- Nav labels: uppercase + letter-spacing 0.08em — только для секций в sidebar nav
- Tech tags: всегда Geist Mono — визуальный сигнал "это код, а не маркетинг"
- Мобайл: H1 уменьшается с `text-6xl` до `text-4xl` (36px); остальная шкала не меняется
- Widow prevention: важные строки (value prop, CTA) — max 2 строки, проверять на 375px viewport

---

## 4. Layout & Grid

### Overall Structure

**Паттерн:** Sticky Split-Screen (Brittany Chiang pattern) — единственный правильный выбор для этого сайта.

**Desktop (≥ 1024px):**
- Левая панель: `w-2/5` (40% ширины), `position: fixed`, `height: 100vh`, padding `px-12 py-16`
- Правая панель: `ml-[40%]` (offset = ширина левой), скроллируется, padding `px-12 py-16`
- Максимальная ширина всего layout: `max-w-6xl` (1152px), центрирован `mx-auto`
- Внутри левой панели: flexbox column, `justify-between` — шапка (имя + роль + bio) вверху, nav в середине, соцсети + controls внизу

**Tablet (768px–1023px):**
- Sticky top navbar с именем слева, hamburger справа
- Контент в single column, `max-w-2xl mx-auto`, padding `px-6`
- Навигация — drawer sliding in from right, full-height, `bg-slate-900/95 backdrop-blur`

**Mobile (< 768px):**
- Sticky header: высота 56px, имя (text-base font-semibold) слева, hamburger + theme toggle справа
- Hamburger открывает overlay: полноэкранное меню, секции как крупные ссылки (`text-2xl`), соцсети снизу
- Контент: `px-5`, секции разделены `py-16`
- Минимальный tap target: 44px × 44px для всех интерактивных элементов

### Spacing System

Base unit: 4px (Tailwind default). Ключевые значения:

| Назначение | Значение | Tailwind |
|---|---|---|
| Между секциями (правая панель) | 96px | `mb-24` / `space-y-24` |
| Padding секции | 64px top/bottom | `py-16` |
| Внутри карточки опыта | 24px | `p-6` |
| Gap между tech tags | 8px | `gap-2` |
| Gap между пунктами nav | 4px | `space-y-1` |
| Отступ иконок соцсетей | 16px | `gap-4` |
| Отступ левой панели | 48px sides / 64px top | `px-12 py-16` |

### Container

```
max-w-6xl mx-auto px-6 lg:px-0
```
На десктопе padding убирается — левая и правая панели управляют своим padding самостоятельно.

---

## 5. Components

### Navigation (sidebar — desktop)

**Default:** `text-slate-500 text-xs font-medium tracking-widest uppercase` + горизонтальная линия слева (4px wide, `bg-slate-800`, высота = 1px)

**Hover:** `text-slate-200` + линия расширяется до 32px — `transition-all duration-200 ease-out`

**Active (scroll-aware):** `text-violet-400 dark:text-violet-400 text-violet-700` + линия 32px `bg-violet-400` — переход `transition-colors duration-150`

**Mobile variant:** в overlay, `text-2xl font-medium`, tap target 48px, active = `text-violet-400`, разделитель `border-b border-slate-800`

### Section Heading (H2)

**Default:** `text-slate-100 text-2xl font-semibold` + sticky поведение при скролле — `sticky top-0 py-4 bg-slate-950/80 backdrop-blur-sm z-10` (только в правой панели, desktop)

**Light mode:** `text-slate-900` + `bg-white/80`

Sticky section header — дополнительный ориентир при скролле внутри правой панели.

### Experience Card

**Default:** `rounded-lg p-6 border border-transparent`

**Hover:** `border-slate-800 bg-slate-800/30 dark:bg-slate-800/30` — transition `border-color background-color 200ms ease-out`

**Light mode hover:** `border-slate-200 bg-slate-50`

Внутри карточки:
- Period: `text-xs text-slate-500 font-mono tracking-wide uppercase` — слева
- Company + title: `text-base font-medium text-slate-200` — справа
- Bullets: `text-sm text-slate-400 leading-relaxed` — стандартный `<ul>` с кастомным marker `text-violet-400`
- Tech tags: `text-xs font-mono bg-violet-400/10 text-violet-400 rounded-full px-3 py-1` (dark) / `bg-violet-100 text-violet-700` (light)

### Skill Tag / Badge

**Default:** `text-xs font-mono bg-slate-800 text-slate-300 rounded-full px-3 py-1` (dark) / `bg-slate-100 text-slate-700` (light)

**Hover:** `bg-violet-400/15 text-violet-300` — `transition-colors duration-150`

Нет прогресс-баров. Нет числовых рейтингов. Нет звёздочек.

### CTA Button (Primary)

**Default:** `inline-flex items-center gap-2 bg-transparent border border-violet-400 text-violet-400 rounded-lg px-5 py-2.5 text-sm font-medium`

**Hover:** background fill слева направо — реализуется через `::before` pseudo-element с `width: 0 → 100%`, `transition: width 250ms ease-out`. Текст меняется: `text-slate-950` (dark) / `text-white` (light) — `transition-colors 250ms`

**Focus:** `outline-2 outline-offset-2 outline-violet-400` — видимый focus ring, не убирать

**Mobile:** тот же компонент, `w-full` на мобайле если в секции Contact

### CTA Button (Secondary)

**Default:** `text-slate-400 text-sm font-medium underline underline-offset-4 decoration-slate-600`

**Hover:** `text-slate-200 decoration-slate-400` — `transition-colors 150ms`

### Social Icon Link

**Default:** `text-slate-500 w-5 h-5` (icon size), `p-2` (tap target)

**Hover:** `text-violet-400 scale-110` — `transition: color 150ms, transform 150ms ease-out`

**Focus:** `outline-2 outline-violet-400 outline-offset-2 rounded`

Иконки: [Lucide](https://lucide.dev/) — stroke-width 1.5, size 20px. Обоснование: Lucide — стандарт в экосистеме (shadcn, Astro стартеры), минималистичный stroke-стиль совпадает с общим visual language.

### Contact Link (inline)

**Default:** `text-slate-300 font-medium` + animated underline: `bg-gradient-to-r from-violet-400 to-violet-400 bg-no-repeat bg-[length:0%_1px] bg-bottom`

**Hover:** `bg-[length:100%_1px]` — `transition: background-size 250ms ease-out` — underline grows from left

---

## 6. Motion & Interactions

### Principles

**Только вход, никакого выхода** — элементы появляются при входе в viewport, но не анимируются при выходе. Exit animations создают визуальный шум.

**Ничего не движется без цели** — каждая анимация либо помогает ориентироваться (scroll-aware nav), либо даёт тактильный фидбэк (hover), либо направляет внимание (fade-in при первом показе секции).

**Скорость: быстро-in, мгновенно-out** — hover-on всегда медленнее hover-off. Правило: hover enter ≥ 150ms, hover leave ≤ 100ms.

### Scroll Animations

Реализация: `IntersectionObserver`, threshold `0.15`, `rootMargin: "0px 0px -50px 0px"`.

| Элемент | Анимация | Duration | Delay | Easing |
|---|---|---|---|---|
| Section heading | `opacity: 0→1` | 400ms | 0ms | `ease-out` |
| Experience card | `opacity: 0→1` + `translateY: 16px→0` | 400ms | 0, 80, 160ms (stagger) | `ease-out` |
| Skill group | `opacity: 0→1` + `translateY: 12px→0` | 300ms | stagger 60ms per group | `ease-out` |
| Project card | `opacity: 0→1` + `translateY: 16px→0` | 400ms | stagger 100ms | `ease-out` |

Анимация срабатывает один раз. Класс `is-visible` добавляется через JS, начальное состояние задаётся CSS:

```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 400ms ease-out, transform 400ms ease-out;
}
.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Micro-interactions

**Cursor Spotlight:**
- Только dark mode + только `pointer: fine` (не touch devices)
- Реализация: `mousemove` на `document` → обновление CSS-переменных `--x`, `--y` через `requestAnimationFrame`
- Псевдо-элемент `::before` на `<body>` или overlay `<div>`: `background: radial-gradient(600px at var(--x) var(--y), rgba(139,92,246,0.07), transparent 80%)`
- `pointer-events: none`, `position: fixed`, `inset: 0`, `z-index: 0`
- **Исключение из правила Tailwind:** позиция spotlight требует `style=""` с inline CSS-переменными для динамической координаты мыши — это единственное исключение из запрета на `var(--*)` в шаблонах, т.к. значения вычисляются в runtime

**Link hover underline (animated):**
- Направление: слева направо (`background-position: left bottom`, `background-size: 0% 1px → 100% 1px`)
- Duration enter: 250ms `ease-out`; Duration leave: 150ms `ease-in`

**Button fill (Primary CTA):**
- Псевдо-элемент `::before`, `width: 0 → 100%`, origin left
- Duration: 250ms `cubic-bezier(0.4, 0, 0.2, 1)`

**Card hover:**
- `transition: border-color 200ms ease-out, background-color 200ms ease-out`
- Нет `transform: scale` на карточках — слишком суетливо

**Social icons:**
- `transition: color 150ms ease-out, transform 150ms ease-out`
- `hover:scale-110` — Tailwind класс, нет кастомного JS

**Nav active state:**
- `transition: color 150ms ease-in-out`
- Линия (ширина): `transition: width 200ms ease-out`

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

Cursor spotlight: не инициализируется если `window.matchMedia('(prefers-reduced-motion: reduce)').matches`.

Hover micro-interactions (underline, scale, fill): сокращаются до `transition-duration: 0ms` через глобальный `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { transition-duration: 0.01ms !important; } }` в `global.css`.

---

## 7. Dark / Light Mode

### Switch Behavior

Переключение мгновенное — `transition: none` на `<html>`. Плавный crossfade темы на практике выглядит как баг (мерцание во время перехода). Исключение: иконка toggle — анимируется (`rotate-180` солнце/луна, 200ms).

Порядок инициализации:
1. Inline `<script>` в `<head>` (до рендера): читает `localStorage.theme`, применяет `.dark` на `<html>` — FOUC исключён
2. Astro-компонент `ThemeToggle` с `client:idle` — инициализируется после load

### Mode-Specific Adjustments

| Элемент | Dark | Light |
|---|---|---|
| Cursor spotlight | `rgba(139,92,246,0.07)` | отключён |
| Card border при hover | `border-slate-700` | `border-slate-300` |
| Sticky section heading backdrop | `bg-slate-950/80` | `bg-white/80` |
| Левая панель bg | `bg-slate-950` | `bg-white` (граница `border-r border-slate-100`) |
| Box-shadows | нет — flat design | нет — flat design |
| `backdrop-blur` | `backdrop-blur-sm` | `backdrop-blur-sm` |

Flat design без box-shadow в обеих темах — принципиальное решение. Глубина создаётся цветом background, а не тенями.

---

## 8. Imagery & Icons

### Photo / Avatar

- Форма: круг (`rounded-full`), ширина 128px desktop / 96px mobile (`w-32 h-32` / `w-24 h-24`)
- Граница: `ring-2 ring-violet-400/30` (dark) / `ring-2 ring-violet-700/20` (light)
- Позиция: в левой панели под именем и subtitle, над bio
- Обязательно реальное фото — не avatar/illustration. Реальное лицо конвертирует лучше у рекрутеров
- Загрузка: `<Image />` Astro component, WebP/AVIF, `loading="eager"` (LCP элемент), `fetchpriority="high"`

### Icons

- Библиотека: **Lucide** (`lucide-astro` или inline SVG)
- Size: 20px × 20px (nav, socials), 16px × 16px (inline в тексте)
- Stroke-width: 1.5
- Цвет: наследует currentColor — управляется через Tailwind text-классы
- Иконки соцсетей: GitHub (`Github`), Telegram (`Send`), LinkedIn (`Linkedin`) из Lucide
- Theme toggle: `Sun` / `Moon`

### Illustrations / Decorative Elements

Никаких иллюстраций. Никаких decorative blob/gradient backgrounds. Никаких abstract shapes. Единственный декоративный элемент — cursor spotlight. Обоснование: Ivan — senior engineer, не дизайнер и не creative agency. Сдержанность — сигнал уверенности в содержании.

---

## 9. Accessibility

### Color Contrast

| Пара | Ratio | WCAG |
|---|---|---|
| `slate-100` on `slate-950` | 17.5:1 | AAA ✓ |
| `slate-400` on `slate-950` | 5.3:1 | AA ✓ |
| `violet-400` on `slate-950` | 5.9:1 | AA ✓ |
| `slate-900` on `white` | 19.1:1 | AAA ✓ |
| `slate-600` on `white` | 5.7:1 | AA ✓ |
| `violet-700` on `white` | 6.8:1 | AA ✓ |
| `slate-400` on `slate-800` (muted on card) | 4.6:1 | AA ✓ |

⚠️ Проверить: `violet-400` на `slate-800/30` (surface hover) — может не пройти AA, избегать текста accent-цвета на tinted surface.

### Focus Ring

```css
/* global.css */
:focus-visible {
  outline: 2px solid theme('colors.violet.400');
  outline-offset: 2px;
  border-radius: 4px;
}
```
В dark mode — `violet-400`, в light mode — `violet-700`. Никогда не `outline: none` без кастомного focus стиля.

### Структура документа

- Один `<h1>` на страницу — имя "Ivan Tkachenko"
- `<h2>` — заголовки секций (About, Experience, Projects, Skills, Contact)
- `<h3>` — должности в Experience, названия проектов
- Skip-to-content: `<a href="#main-content" class="sr-only focus:not-sr-only">` — первый элемент в `<body>`
- `<nav>` с `aria-label="Main navigation"` для sidebar nav
- `<main id="main-content">` — правая панель

### Alt Text

- Фото: `alt="Ivan Tkachenko — Senior Full Stack Engineer"`
- Иконки соцсетей: `aria-label="GitHub"`, `aria-hidden="true"` на SVG
- Декоративные элементы (если появятся): `aria-hidden="true"`

### Keyboard Navigation

- Tab order: skip-link → левая панель (nav links → theme toggle → lang switcher → socials) → правая панель (Experience → Projects → Skills → Contact)
- Hamburger на мобайле: `aria-expanded`, `aria-controls="mobile-menu"`, закрытие по Escape
- Все интерактивные элементы достигаются Tab, активируются Enter/Space

---

## 10. Personality & Differentiators

### The Signature Moment

**Console Easter Egg** — при открытии DevTools в консоли браузера появляется:

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Привет, коллега.                                  │
│                                                     │
│   Ivan Tkachenko — Senior Full Stack Engineer       │
│   React · Vue 3 · TypeScript · Node.js · Go         │
│                                                     │
│   Если ты смотришь исходник — уже понятно,          │
│   что мы думаем похоже.                             │
│                                                     │
│   → t.me/vanekt0                                    │
│   → github.com/vanekt                               │
│                                                     │
└─────────────────────────────────────────────────────┘
```

Реализация: inline `<script>` в `<body>` (не `client:*` — нет Astro overhead), `console.log` с цветами через `%c` форматирование. Фиолетовый `#a78bfa` для имени, серый для текста.

Обоснование выбора: консольный easter egg виден только тем, кто открыл DevTools — т.е. именно техническим людям, которые уже достаточно заинтересованы чтобы смотреть код. Точная аудитория. Не мешает никому другому.

### Voice in Design

Дизайн говорит: "Я знаю, что делаю, и мне не нужно кричать об этом". Сдержанная палитра, точная типографика, отсутствие decoration — сигнал инженерного мышления. Единственный "сюрприз" (console egg) адресован правильным людям. Violet как акцент — не случайно: это цвет, который уже был выбран в проекте, и дизайн уважает это решение вместо того чтобы всё переизобретать.

---

## Design Decisions Log

| Решение | Выбрано | Отклонено | Причина |
|---|---|---|---|
| Layout pattern | Sticky split-screen | Single column, top nav | Split-screen — единственный паттерн, при котором рекрутер никогда не теряет ориентацию и не скроллит вверх |
| Accent color | `violet` (сохранён) | Teal, cyan, green | Violet уже установлен в проекте; смена ради смены — не аргумент |
| Display font | Cal Sans | Söhne (платный), Inter (слишком нейтральный) | Cal Sans бесплатный, узнаваемый, характерный при крупных размерах |
| Body font | Geist Sans | Inter | Geist чуть теплее Inter, "свежее" визуально, самодостаточная система с Geist Mono |
| Cursor effect | Spotlight (radial gradient) | Custom cursor shape, particle effects | Spotlight — максимальный визуальный эффект при минимальном JS; custom cursor меняет UX модель |
| Easter egg | Console log | Custom 404, sidebar widget | Console — точная аудитория (технари с DevTools); не мешает основному UX |
| Box shadows | Нет (flat) | Neumorphism, subtle shadows | Flat design с цветовой глубиной — чище, не теряет читаемость в обеих темах |
| Skill display | Text tags (font-mono) | Progress bars, radar chart | Прогресс-бары лженаучны; radar chart — избыточно; теги читаются мгновенно |
| Section heading | Sticky при скролле | Static | Sticky heading — дополнительный ориентир внутри длинной правой панели |
| Illustrations | Нет | Abstract blobs, grid lines | Ivan — engineer, не дизайн-агентство; сдержанность сигнализирует уверенность |
