# Technical Implementation Plan — vanekt.github.io

> Минимум зависимостей, максимум контроля — каждое техническое решение обосновано требованием, а не предпочтением.

---

## 1. Stack Audit

### Framework: Astro 6 (static output)
**Decision: keep as-is**
Astro 6 + static output — идеальный выбор для портфолио. Zero JS по умолчанию, встроенная оптимизация изображений, scoped CSS, SSG без компромиссов. Lighthouse 95+ достижим без дополнительных усилий.

### CSS: Tailwind CSS 4 (`@tailwindcss/vite ^4.2.2`)
**Decision: keep + добавить `@theme` конфигурацию в global.css**

Tailwind 4 отличается от v3: нет `tailwind.config.js`, конфигурация через `@theme {}` в CSS-файле. Кастомные шрифты, цвета и spacing-значения нужно объявить там — тогда они станут полноценными Tailwind-классами без arbitrary values в шаблонах.

Что добавить в `global.css`:
- `@theme` блок с кастомными шрифтами (`--font-cal`, `--font-geist`, `--font-mono`)
- CSS-классы для layout (sidebar ширина + main offset) — это единственный способ реализовать 40/60 split без arbitrary values в шаблонах
- Анимации, cursor spotlight, animated underline — всё через CSS-классы, не inline styles

### Fonts: нет (сейчас system-ui де-факто)
**Decision: добавить Cal Sans + Geist Sans + Geist Mono, self-hosted**

Текущее состояние: шрифты не подключены явно — используются системные. Нужно добавить.

Как:
1. Скачать и положить в `public/fonts/`: `CalSans-SemiBold.woff2`, `Geist-Regular.woff2`, `Geist-Medium.woff2`, `GeistMono-Regular.woff2`
2. `@font-face` объявления в `global.css` с `font-display: swap`
3. `@theme` блок для создания Tailwind-классов `font-cal`, `font-geist`, `font-mono`
4. Preload в `<head>` Layout.astro: Cal Sans (LCP font) + Geist Regular

### Icons: сейчас inline SVG в Header.astro
**Decision: добавить `astro-icon` + `@iconify-json/lucide`**

Почему: inline SVG в компонентах — это копипаста. `astro-icon` резолвит иконки Lucide на этапе сборки в inline SVG, ноль рантайм-кода, нет сетевых запросов. Это единственная новая зависимость, и она dev-time only.

```
pnpm add astro-icon @iconify-json/lucide
```

В `astro.config.mjs` добавить интеграцию. В шаблонах: `<Icon name="lucide:github" />`.

### Animations: нет
**Decision: vanilla CSS + JS, никаких библиотек**

GSAP/Framer Motion — избыточно для этого проекта. Все анимации — CSS transitions + `IntersectionObserver`. Итого 0 KB runtime animation library.

### i18n: кастомный TypeScript подход
**Decision: keep + расширить типы**

Текущий подход (typed objects в `en.ts`/`ru.ts`) — правильный для статического сайта. TypeScript проверяет полноту переводов на этапе сборки. Нужно только добавить новые ключи для Projects секции и nav.projects.

### Images: нет изображений в проекте сейчас
**Decision: добавить `<Image />` для аватара, подготовить к OG-image**

Когда появится аватар — только через Astro `<Image />`. Форматы: WebP + AVIF fallback (Astro делает автоматически). OG image — статичный файл в `public/`.

---

## 2. Component Architecture

Текущая архитектура (single-column) полностью меняется на split-screen. Header.astro уходит, появляется Sidebar.astro.

```
src/components/
├── Sidebar.astro          — СОЗДАТЬ   — фиксированная левая панель (имя, nav, socials, controls)
├── MobileHeader.astro     — СОЗДАТЬ   — sticky header для mobile/tablet
├── MobileMenu.astro       — СОЗДАТЬ   — full-screen overlay меню для mobile
├── Hero.astro             — ИЗМЕНИТЬ  — убрать секцию-обёртку, контент переносится в Sidebar
├── About.astro            — ИЗМЕНИТЬ  — новая разметка под split-layout
├── Experience.astro       — ИЗМЕНИТЬ  — hover-состояния карточек, animate-on-scroll
├── Projects.astro         — СОЗДАТЬ   — новая секция, 2-3 проекта
├── Skills.astro           — ИЗМЕНИТЬ  — hover на тегах, animate-on-scroll
├── Contact.astro          — ИЗМЕНИТЬ  — новый стиль ссылок
├── ThemeToggle.astro      — СОЗДАТЬ   — выделить в отдельный компонент
├── LangSwitcher.astro     — СОЗДАТЬ   — кнопка EN/RU
├── CursorSpotlight.astro  — СОЗДАТЬ   — overlay для cursor glow эффекта
└── ConsoleEasterEgg.astro — СОЗДАТЬ   — inline script с console.log
```

### Sidebar.astro
```typescript
interface Props {
  t: Translations;
}
// client-side JS: нет (scroll-aware nav — отдельный is:inline script)
// зависимости: ThemeToggle, LangSwitcher, Icon (lucide)
```
Содержит: имя (Cal Sans, text-5xl), role/title, bio (1-2 строки), `<nav>` с anchor links, social icons, ThemeToggle, LangSwitcher.

### MobileHeader.astro
```typescript
interface Props {
  t: Translations;
}
// client-side JS: is:inline (toggle mobile menu open/close)
```
Высота h-14 (56px), sticky top-0 z-50. Имя слева, hamburger + ThemeToggle справа.

### MobileMenu.astro
```typescript
interface Props {
  t: Translations;
}
// Управляется через aria-expanded на hamburger button
// CSS: translate-x-full → translate-x-0 при open
```

### ThemeToggle.astro
```typescript
// Props: нет
// client:idle — НЕ нужен. is:inline script уже в Layout.astro управляет темой
// Компонент — только разметка кнопки + sun/moon иконки
// onclick="toggleTheme()" — вызывает глобальную функцию из Layout.astro
```

### CursorSpotlight.astro
```typescript
// Props: нет
// Рендерит <div id="cursor-spotlight"> с position:fixed + pointer-events:none
// is:inline script: mousemove listener → обновляет CSS custom props на элементе
// ИСКЛЮЧЕНИЕ из правила "no style=": позиция spotlight — единственный inline style
```

### Projects.astro
```typescript
interface Props {
  t: Translations;
}
// Props.t будет содержать t.projects.items — массив ProjectItem
// client-side JS: нет
```

---

## 3. CSS & Styling Strategy

### Что живёт в `global.css`

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

/* 1. Font faces */
@font-face { font-family: 'Cal Sans'; src: url('/fonts/CalSans-SemiBold.woff2'); font-weight: 700; font-display: swap; }
@font-face { font-family: 'Geist'; src: url('/fonts/Geist-Regular.woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Geist'; src: url('/fonts/Geist-Medium.woff2'); font-weight: 500; font-display: swap; }
@font-face { font-family: 'Geist Mono'; src: url('/fonts/GeistMono-Regular.woff2'); font-weight: 400; font-display: swap; }

/* 2. Theme — создаёт Tailwind-классы font-cal, font-geist, font-mono */
@theme {
  --font-cal: 'Cal Sans', system-ui, sans-serif;
  --font-geist: 'Geist', system-ui, sans-serif;
  --font-mono: 'Geist Mono', 'JetBrains Mono', monospace;
}

/* 3. Layout — sidebar split без arbitrary values в шаблонах */
@media (min-width: 1024px) {
  .sidebar { width: 40%; }
  .main-content { margin-left: 40%; }
}

/* 4. Animated underline (nav links, contact links) */
.link-underline {
  background-image: linear-gradient(currentColor, currentColor);
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: 0% 1px;
  transition: background-size 250ms ease-out;
}
.link-underline:hover { background-size: 100% 1px; }

/* 5. CTA button fill animation */
.btn-fill {
  position: relative;
  overflow: hidden;
  z-index: 0;
}
.btn-fill::before {
  content: '';
  position: absolute;
  inset: 0;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
.btn-fill:hover::before { transform: scaleX(1); }

/* 6. Scroll animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 400ms ease-out, transform 400ms ease-out;
}
.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* 7. Cursor spotlight overlay */
#cursor-spotlight {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  transition: opacity 300ms;
}

/* 8. Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll {
    opacity: 1;
    transform: none;
    transition: none;
  }
  *, *::before, *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}

/* 9. Base styles */
html { scroll-behavior: smooth; }
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
::selection { background-color: theme(colors.violet.600); color: #fff; }

/* 10. Focus ring global */
:focus-visible {
  outline: 2px solid;
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Что НЕ идёт в global.css

Цвета, spacing, типографика конкретных компонентов — всё через Tailwind-классы в шаблонах.

### Dark mode

Стратегия уже реализована корректно (`.dark` класс на `<html>` + `@custom-variant dark`). Нужно исправить баг FOUC (см. раздел 4).

**Убрать `transition-colors` с `<body>` в Layout.astro** — вызывает плавный переход при первой загрузке страницы.

### Split-screen в Tailwind без arbitrary values

```html
<!-- Layout.astro -->
<body class="bg-white dark:bg-slate-950">
  <aside class="sidebar hidden lg:block fixed top-0 left-0 h-screen overflow-y-auto
                 border-r border-slate-100 dark:border-slate-800/50
                 bg-white dark:bg-slate-950 z-40">
    <Sidebar t={t} />
  </aside>
  <main id="main-content" class="main-content min-h-screen">
    <slot />
  </main>
</body>
```

`.sidebar` и `.main-content` — кастомные CSS-классы из global.css (см. выше). На `< 1024px` медиа-запрос не применяется, aside скрыт через `hidden lg:block`.

---

## 4. JavaScript & Interactivity

### 4.1 FOUC Prevention — исправить баг

**Текущий баг в Layout.astro:**
```js
// НЕПРАВИЛЬНО: игнорирует prefers-color-scheme
const saved = localStorage.getItem("theme");
if (saved === "light") {
  document.documentElement.classList.remove("dark");
} else {
  document.documentElement.classList.add("dark"); // добавляет dark даже если system preference = light
}
```

**Исправление:**
```js
// ПРАВИЛЬНО
(function() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = saved === "dark" || (!saved && prefersDark);
  document.documentElement.classList.toggle("dark", isDark);
})();
```

Также убрать `class="dark"` из `<html>` в Layout.astro — теперь скрипт управляет этим.

### 4.2 Theme Toggle

Текущая реализация через `window.toggleTheme` — работает, но загрязняет global scope. Оставляем подход (is:inline, не client:*), но оборачиваем в IIFE и вешаем обработчик через addEventListener:

```js
// Layout.astro <body> script
(function() {
  function updateThemeIcon() {
    const isDark = document.documentElement.classList.contains("dark");
    document.querySelectorAll("[data-theme-icon]").forEach(el => {
      el.style.display = el.dataset.themeIcon === (isDark ? "dark" : "light") ? "block" : "none";
    });
  }

  window.toggleTheme = function() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeIcon();
  };

  updateThemeIcon();
})();
```

Иконки через `data-theme-icon="dark"` / `data-theme-icon="light"` — убирает зависимость от ID, позволяет иметь несколько toggle-кнопок (desktop sidebar + mobile header).

### 4.3 Cursor Spotlight

Живёт в `CursorSpotlight.astro`. Рендерит только в dark mode (проверка через JS после mount):

```js
// CursorSpotlight.astro — is:inline script
(function() {
  // Не запускать на touch-устройствах
  if (!window.matchMedia("(pointer: fine)").matches) return;
  // Не запускать при reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const el = document.getElementById("cursor-spotlight");
  if (!el) return;

  let raf;
  let x = 0, y = 0;

  document.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;
    if (!raf) {
      raf = requestAnimationFrame(() => {
        const isDark = document.documentElement.classList.contains("dark");
        if (isDark) {
          el.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(139,92,246,0.07), transparent 80%)`;
        } else {
          el.style.background = "none";
        }
        raf = null;
      });
    }
  });

  // Следим за сменой темы
  const observer = new MutationObserver(() => {
    const isDark = document.documentElement.classList.contains("dark");
    el.style.opacity = isDark ? "1" : "0";
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
})();
```

**Примечание:** `el.style.background` и `el.style.opacity` — единственные допустимые inline styles в проекте. Они устанавливаются JS в рантайме для динамических значений, не через Astro-шаблон.

### 4.4 IntersectionObserver — единый экземпляр для двух задач

Один observer, два набора целей. Живёт в `is:inline` скрипте внизу Layout.astro:

```js
(function() {
  // --- Scroll animations ---
  const animatables = document.querySelectorAll(".animate-on-scroll");
  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        animObserver.unobserve(entry.target); // once
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  animatables.forEach(el => animObserver.observe(el));

  // --- Scroll-aware nav ---
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("[data-nav-link]");

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          const isActive = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("nav-active", isActive);
        });
      }
    });
  }, { threshold: 0.3, rootMargin: "0px 0px -60% 0px" });

  sections.forEach(s => navObserver.observe(s));
})();
```

Nav links в Sidebar.astro получают `data-nav-link` атрибут. Активное состояние через CSS-класс `nav-active`, который добавляется в global.css:

```css
[data-nav-link].nav-active { @apply text-violet-400 dark:text-violet-400; }
/* или в light: text-violet-700 */
```

### 4.5 Mobile Menu

Vanilla JS, никакого фреймворка. Кнопка hamburger с `aria-expanded` + overlay с `data-mobile-menu`:

```js
// MobileHeader.astro — is:inline script
(function() {
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("translate-x-full", isOpen);
    menu.classList.toggle("translate-x-0", !isOpen);
    document.body.classList.toggle("overflow-hidden", !isOpen);
  });

  // Закрытие по Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
      btn.click();
      btn.focus();
    }
  });

  // Закрытие при клике по ссылке внутри меню
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => btn.click());
  });
})();
```

### 4.6 Console Easter Egg

`ConsoleEasterEgg.astro` — `is:inline` script внизу body:

```js
(function() {
  const s = "color: #a78bfa; font-weight: bold; font-size: 14px;";
  const m = "color: #64748b; font-size: 12px;";
  console.log(
    "%c┌─────────────────────────────────────────────┐\n│                                             │\n│   Ivan Tkachenko                            │\n│   Senior Full Stack Engineer                │\n│                                             │\n│   React · Vue 3 · TypeScript · Go           │\n│                                             │\n│   Если смотришь исходник — уже понятно,     │\n│   что мы думаем похоже.                     │\n│                                             │\n│   → t.me/vanekt0                            │\n│   → github.com/vanekt                       │\n│                                             │\n└─────────────────────────────────────────────┘",
    s
  );
})();
```

---

## 5. Performance Strategy

### Fonts

| Файл | Размер (ориентировочно) | Preload |
|---|---|---|
| `CalSans-SemiBold.woff2` | ~20 KB | ДА (LCP font) |
| `Geist-Regular.woff2` | ~25 KB | ДА (body text) |
| `Geist-Medium.woff2` | ~25 KB | нет (загрузится по css) |
| `GeistMono-Regular.woff2` | ~30 KB | нет (below fold) |

Preload в Layout.astro:
```html
<link rel="preload" href="/fonts/CalSans-SemiBold.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/Geist-Regular.woff2" as="font" type="font/woff2" crossorigin>
```

Subset: только Latin — уменьшает размер ~40%. Использовать `pyftsubset` или `glyphhanger` офлайн для создания subset вариантов.

### Images

Сейчас изображений нет. При добавлении:

| Изображение | Компонент | Атрибуты |
|---|---|---|
| Аватар (sidebar) | `<Image src={avatar} alt="..." width={128} height={128} loading="eager" fetchpriority="high" />` | LCP — eager + fetchpriority |
| OG Image | статичный файл `public/og.png` 1200×630 | не через `<Image />` |
| Скриншоты проектов | `<Image ... loading="lazy" />` | lazy — below fold |

LCP preload в Layout.astro (добавить когда появится аватар):
```html
<link rel="preload" href="/images/avatar.webp" as="image" fetchpriority="high">
```

### JavaScript Budget

| Что | Размер | Когда |
|---|---|---|
| FOUC prevention script | ~200 B | синхронно в `<head>` |
| Theme toggle script | ~400 B | синхронно в `<body>` |
| Cursor spotlight script | ~500 B | синхронно в `<body>` |
| IntersectionObserver (nav + anims) | ~600 B | синхронно в `<body>` |
| Mobile menu script | ~400 B | синхронно в `<body>` |
| Console easter egg | ~300 B | синхронно в `<body>` |
| **Итого** | **~2.4 KB** | |

Нет `client:*` компонентов. Нет фреймворков в рантайме. `astro-icon` — build-time only, 0 KB в рантайме.

### CSS

Tailwind CSS 4 + Astro выдаёт только используемые классы (tree-shaking из коробки). Scoped стили в `.astro` компонентах инлайнятся в `<head>`. Ожидаемый размер финального CSS: ~15–25 KB gzip.

**CLS риски — устранить:**

| Элемент | Риск | Митигация |
|---|---|---|
| Шрифты | FOUT (Font Of Unstyled Text) | `font-display: swap` + preload |
| Аватар | нет `width`/`height` | Astro `<Image />` всегда ставит размеры |
| Sidebar (fixed) | не влияет на document flow | `position: fixed` — вне flow |
| Mobile menu overlay | при неправильном CSS | `position: fixed` + `inset-0` |
| Theme toggle иконки | display:none → display:block | задать одинаковую высоту контейнеру |

### Core Web Vitals

**LCP:** Hero-секция (имя "Ivan Tkachenko") рендерится как текст — нет изображения LCP. Текст появляется мгновенно после шрифта. Preload Cal Sans гарантирует быстрый LCP. Если добавляется аватар — он становится LCP, нужен `fetchpriority="high"` + preload.

**INP:** Все взаимодействия (theme toggle, hamburger, nav clicks) — синхронные обработчики без тяжёлых вычислений. `requestAnimationFrame` в cursor spotlight — не блокирует main thread. INP < 200ms гарантирован.

**CLS:** Основные риски устранены выше. `position: fixed` для sidebar не влияет на document flow.

---

## 6. Mobile Implementation

### Breakpoint Strategy

| Breakpoint | Tailwind prefix | Что происходит |
|---|---|---|
| < 768px (mobile) | default | MobileHeader + single column, sidebar скрыт |
| 768px–1023px (tablet) | `md:` | MobileHeader (без hamburger nav — показать nav inline), single column |
| ≥ 1024px (desktop) | `lg:` | Sidebar visible + fixed, main-content с ml, MobileHeader скрыт |

На tablet (768–1023px): sticky top header без hamburger, nav links показаны горизонтально в header, sidebar не показывается. Это проще и надёжнее чем сжатый sidebar.

### Mobile-specific Gotchas

**iOS position:fixed + soft keyboard:** Когда открывается mobile menu и пользователь пытается скроллить, на старых iOS это ломает fixed positioning. Решение: `overflow-hidden` на `<body>` при открытом меню (уже учтено в mobile menu JS).

**iOS vh units:** `h-screen` = `100vh` — на iOS включает адресную строку, контент обрезается. Использовать `min-h-svh` (small viewport height) или `h-dvh` вместо `h-screen` для full-height элементов. Tailwind 4 поддерживает `min-h-svh`, `min-h-dvh`.

**Sidebar на desktop:** `h-screen` для sidebar + `overflow-y-auto` — чтобы если контент sidebar длиннее вьюпорта, можно было проскроллить sidebar независимо.

### Touch Targets Audit

Минимум 44×44px для всех интерактивных элементов:
- Hamburger button: `w-11 h-11` (44px) — ✓
- Theme toggle button: `w-11 h-11` — сейчас `w-7 h-7` → **исправить** на `w-11 h-11` с `flex items-center justify-center`
- Social icon links: добавить `p-2` для увеличения tap target — ✓ (уже есть паддинг)
- Nav links в mobile menu: `py-3` минимум → ✓ при `text-2xl`
- Language switcher: добавить `px-3 py-2` — нужно проверить

### Viewport Meta

Текущий `<meta name="viewport" content="width=device-width, initial-scale=1.0">` — корректно. Не нужен `user-scalable=no` — это антипаттерн для accessibility.

---

## 7. Animation Implementation

### Scroll Animations (fade-in + slide-up)

Реализуются через CSS класс `.animate-on-scroll` + JS IntersectionObserver (описан в разделе 4.4).

Добавить класс на элементы в компонентах:
- `<section>` — не анимировать сам, анимировать внутренние элементы
- Experience cards: каждая карточка `.animate-on-scroll` с CSS `transition-delay` для stagger
- Skill groups: каждая группа `.animate-on-scroll`
- Project cards: каждая карточка `.animate-on-scroll`

Stagger через Tailwind delay-классы (встроены в Tailwind 4):
```html
<div class="animate-on-scroll delay-0">...</div>
<div class="animate-on-scroll delay-75">...</div>
<div class="animate-on-scroll delay-150">...</div>
```

### Hover Transitions

Все hover transitions — Tailwind-классы:
- Card hover background: `transition-colors duration-200`
- Social icons: `transition-[color,transform] duration-150`
- Nav links color: `transition-colors duration-150`

Animated underline и button fill — CSS классы `.link-underline` и `.btn-fill` из global.css (см. раздел 3).

### Astro Script Ordering

Все `is:inline` скрипты размещаются в порядке зависимостей:
1. `<head>` — FOUC prevention (первый, до рендера)
2. Конец `<body>` — theme toggle + cursor spotlight + IntersectionObserver
3. Компонент `MobileHeader.astro` — mobile menu script (после рендера элементов)
4. Компонент `ConsoleEasterEgg.astro` — последний

Astro гарантирует, что `is:inline` скрипты вставляются в том порядке, в котором компоненты рендерятся.

---

## 8. i18n Architecture

### Текущее состояние

✅ Структура данных хорошая: `experience.ts` + `skills.ts` как source of truth, `en.ts`/`ru.ts` импортируют и трансформируют.

✅ TypeScript типы полные для текущих секций.

⛔ Нет: `nav.projects`, `projects` секция в `Translations`, `ProjectItem` тип.

### Что добавить

**`src/i18n/types.ts` — новые интерфейсы:**
```typescript
export interface ProjectItem {
  slug: string;         // уникальный id, не переводится
  title: string;
  description: string;  // 1-2 предложения о проблеме
  url?: string;         // live demo
  repo?: string;        // GitHub
  tags: string[];       // стек — не переводятся
}

// Расширить Translations:
export interface Translations {
  // ... существующее ...
  nav: {
    about: string;
    experience: string;
    projects: string;   // новое
    skills: string;
    contact: string;
  };
  projects: {           // новая секция
    title: string;
    items: ProjectItem[];
  };
}
```

**`src/data/projects.ts` — новый файл:**
```typescript
export interface ProjectData {
  slug: string;
  tags: string[];
  url?: string;
  repo?: string;
  en: { title: string; description: string; };
  ru: { title: string; description: string; };
}

export const projects: ProjectData[] = [
  // 2-3 проекта — заполняет Иван
];
```

**`src/i18n/en.ts` и `ru.ts`** — добавить импорт `projects` и маппинг.

### Language Switcher — роутинг

Текущая реализация корректная: `isRu ? "/" : "/ru/"`. Сохраняется в Sidebar.astro и MobileHeader.astro. Никаких изменений в логике.

Единственное улучшение: добавить `<link rel="alternate" hreflang="en" href="/">` и `<link rel="alternate" hreflang="ru" href="/ru/">` в `<head>` Layout.astro — это нужно для SEO.

---

## 9. File Structure Plan

```
src/
├── components/
│   ├── Sidebar.astro          — СОЗДАТЬ   — фиксированная левая панель
│   ├── MobileHeader.astro     — СОЗДАТЬ   — sticky header для < 1024px
│   ├── MobileMenu.astro       — СОЗДАТЬ   — full-screen overlay
│   ├── ThemeToggle.astro      — СОЗДАТЬ   — выделить из Header.astro
│   ├── LangSwitcher.astro     — СОЗДАТЬ   — выделить из Header.astro
│   ├── CursorSpotlight.astro  — СОЗДАТЬ   — cursor glow overlay
│   ├── ConsoleEasterEgg.astro — СОЗДАТЬ   — console.log easter egg
│   ├── Header.astro           — УДАЛИТЬ   — заменяется Sidebar + MobileHeader
│   ├── Hero.astro             — УДАЛИТЬ   — контент переносится в Sidebar
│   ├── About.astro            — ИЗМЕНИТЬ  — убрать max-w-3xl/mx-auto (layout теперь в родителе)
│   ├── Experience.astro       — ИЗМЕНИТЬ  — animate-on-scroll, hover-состояния
│   ├── Projects.astro         — СОЗДАТЬ   — новая секция
│   ├── Skills.astro           — ИЗМЕНИТЬ  — hover на тегах, animate-on-scroll
│   └── Contact.astro          — ИЗМЕНИТЬ  — убрать footer, link-underline стили
├── data/
│   ├── experience.ts          — оставить as-is
│   ├── skills.ts              — АУДИТ: убрать редко используемые, оставить ≤40 итемов
│   └── projects.ts            — СОЗДАТЬ   — 2-3 проекта
├── i18n/
│   ├── types.ts               — ИЗМЕНИТЬ  — добавить ProjectItem, projects в Translations, nav.projects
│   ├── en.ts                  — ИЗМЕНИТЬ  — добавить projects маппинг
│   └── ru.ts                  — ИЗМЕНИТЬ  — добавить projects маппинг
├── layouts/
│   └── Layout.astro           — ИЗМЕНИТЬ  — новая структура (sidebar + main), исправить FOUC, SEO теги
├── pages/
│   ├── index.astro            — ИЗМЕНИТЬ  — новый состав компонентов
│   ├── ru/
│   │   └── index.astro        — ИЗМЕНИТЬ  — синхронно с index.astro
│   └── 404.astro              — СОЗДАТЬ   — кастомная страница ошибки
└── styles/
    └── global.css             — ИЗМЕНИТЬ  — @font-face, @theme, layout CSS, анимации, focus ring

public/
├── fonts/                     — СОЗДАТЬ   — CalSans-SemiBold.woff2, Geist-*.woff2, GeistMono-*.woff2
└── og.png                     — СОЗДАТЬ   — OG image 1200×630 (статичный файл)
```

---

## 10. Implementation Phases

### Phase 1 — Layout & Navigation Core (PRD Phase 1)

**Файлы:** `Layout.astro`, `Sidebar.astro`, `MobileHeader.astro`, `MobileMenu.astro`, `global.css`, `index.astro`, `ru/index.astro`

**Порядок:**
1. `global.css` — добавить layout CSS (`.sidebar`, `.main-content`), focus ring, убрать transition-colors с body
2. `Layout.astro` — новая структура, исправить FOUC script, убрать `class="dark"` из `<html>`, убрать `transition-colors` с body
3. `Sidebar.astro` — разметка, nav links с `data-nav-link`, без активного состояния пока
4. `MobileHeader.astro` + `MobileMenu.astro` — hamburger + overlay
5. `index.astro` / `ru/index.astro` — подключить новые компоненты, убрать Header + Hero
6. IntersectionObserver script для scroll-aware nav

**Acceptance test:**
- Desktop: sidebar фиксирован, правая часть скроллируется
- Tablet: top sticky header, нет sidebar
- Mobile: hamburger открывает меню, Escape закрывает
- Dark/light toggle работает в обоих местах (sidebar + mobile header)
- Нет FOUC — при light preference страница открывается светлой

**Pitfall:** `overflow-y-auto` на sidebar + `position: fixed` — не добавлять `overflow: hidden` на родителя, иначе fixed перестаёт работать. Layout.astro body не должен иметь `overflow-hidden` глобально.

---

### Phase 2 — Content (PRD Phase 2)

**Файлы:** `i18n/en.ts`, `i18n/ru.ts`, `src/data/experience.ts` (только контент)

**Порядок:**
1. Переписать hero copy в Sidebar.astro
2. Переписать bullets в `experience.ts` — формат достижений с цифрами (это делает Иван, технически — просто строки)
3. Проверить i18n completeness: все новые ключи в обоих файлах

**Acceptance test:** Lighthouse SEO ≥ 95, все тексты переведены, нет консольных ошибок.

**Pitfall:** После изменения структуры `Translations` TypeScript сразу покажет все места где нужно добавить переводы — `pnpm typecheck` обязателен после каждого изменения типов.

---

### Phase 3 — Visual Polish (PRD Phase 3)

**Файлы:** `global.css`, все компоненты, `public/fonts/`

**Порядок:**
1. Скачать и подключить шрифты — `@font-face` + `@theme` + preload в Layout.astro
2. Добавить `.animate-on-scroll` классы в Experience, Skills компоненты
3. Добавить IntersectionObserver для анимаций в Layout.astro script
4. Hover micro-interactions: `.link-underline` на nav links и контактах, card hover tint
5. `CursorSpotlight.astro` — cursor glow
6. ThemeToggle.astro — анимация иконки (rotate)

**Acceptance test:** Lighthouse Performance ≥ 95. Анимации работают. При `prefers-reduced-motion` анимаций нет. Cursor spotlight только в dark + только desktop.

**Pitfall:** Tailwind 4 `@theme` — синтаксис отличается от v3 `theme.extend`. Не смешивать. Проверить: после добавления `--font-cal` в `@theme`, класс `font-cal` должен работать. Если нет — значит `@theme` объявлен после `@import "tailwindcss"` в неправильном порядке (должен быть после импорта).

---

### Phase 4 — Projects & Skills Audit (PRD Phase 4)

**Файлы:** `src/data/projects.ts`, `i18n/types.ts`, `en.ts`, `ru.ts`, `Projects.astro`, `skills.ts`

**Порядок:**
1. `types.ts` — добавить `ProjectItem` + расширить `Translations`
2. `en.ts` / `ru.ts` — добавить `nav.projects` + `projects` секцию
3. `src/data/projects.ts` — создать (Иван заполняет данные)
4. `Projects.astro` — компонент
5. `skills.ts` — аудит: текущих 89 навыков → оставить ≤40 наиболее релевантных
6. Добавить `#projects` якорь, добавить в nav

**Acceptance test:** TypeScript без ошибок (`pnpm typecheck`). Projects секция показывает 2-3 проекта в EN и RU. Skills не более 40 итемов суммарно.

**Pitfall:** При аудите skills — не удалять технологии из реального опыта, только те которые хочется двигать вперёд. Согласовать список с Иваном до внесения в код.

---

### Phase 5 — SEO & Performance (PRD Phase 5)

**Файлы:** `Layout.astro`, `global.css`, `public/og.png`

**Порядок:**
1. `Layout.astro` — добавить OG теги, canonical, hreflang, `<html lang>` (уже есть), JSON-LD `Person` schema
2. Проверить Lighthouse — устранить замечания
3. Создать OG image (`public/og.png`)

**Acceptance test:** Lighthouse ≥ 95 по всем метрикам. OG preview корректно отображается при шеринге ссылки.

**Pitfall:** JSON-LD script должен быть `type="application/ld+json"`, не `is:inline` — иначе Astro может его экранировать. Использовать `<script type="application/ld+json" set:html={JSON.stringify(schema)} />`.

---

### Phase 6 — Personality & Extras (PRD Phase 6)

**Файлы:** `ConsoleEasterEgg.astro`, `src/pages/404.astro`

**Acceptance test:** В DevTools консоли виден easter egg. `/404-test` (несуществующий путь) показывает кастомную страницу с ссылкой на главную.

---

## 11. Risks & Pitfalls

### Tailwind CSS 4 — ключевые отличия от v3

| Проблема | Детали | Решение |
|---|---|---|
| `@theme` синтаксис | В v4 нет `tailwind.config.js`. Кастомные значения через `@theme {}` в CSS | Читать docs v4, не v3 |
| `theme()` функция | В v4 синтаксис немного изменён | Проверять что `theme(colors.violet.600)` работает — в текущем global.css используется |
| Arbitrary values | Запрещены соглашением проекта | Все нестандартные значения — в `@theme` или кастомный CSS класс |
| `@apply` в v4 | Работает, но с ограничениями в некоторых контекстах | Тестировать каждое использование |

### Astro-specific

| Проблема | Детали | Решение |
|---|---|---|
| `is:inline` script ordering | Скрипты выполняются в порядке появления в DOM | FOUC script — строго в `<head>`, остальные — конец `<body>` |
| Глобальные ID | `id="icon-sun"` в Header — конфликтует если компонент рендерится дважды | Заменить на `data-*` атрибуты |
| Astro scoped styles | Scoped стили добавляют `data-astro-xxx` — не использовать CSS-селекторы для cross-component стилей | Все cross-component стили — в global.css |
| Static output 404 | `404.astro` должен быть в `src/pages/` — GitHub Pages поддерживает custom 404 | Проверить что build выдаёт `404.html` в корне |

### Mobile / iOS

| Проблема | Детали | Решение |
|---|---|---|
| `100vh` на iOS | Включает адресную строку браузера | `h-screen` → `h-dvh` или `min-h-svh` для full-height элементов |
| Fixed в overflow | `position: fixed` ломается внутри элемента с `overflow: hidden` или `transform` | Layout.astro body не должен иметь `overflow: hidden`, transform на родителе sidebar |
| Scroll в fixed overlay | iOS инерционный скролл в fixed overlay | Добавить `-webkit-overflow-scrolling: touch` или `overscroll-contain` на overlay |

### Performance

| Проблема | Детали | Решение |
|---|---|---|
| Font FOUT | `font-display: swap` вызывает layout shift при загрузке шрифта | Preload + подбор fallback font-size/line-height близко к основному |
| `transition-colors` на body | Вызывает цветовой переход при загрузке | Убрать с body, оставить только на конкретных интерактивных элементах |
| Cursor spotlight + scroll | При скролле `mousemove` не срабатывает — spotlight замирает | Норм поведение, не баг |
| Много `is:inline` | Astro не минифицирует `is:inline` скрипты | Писать компактный код, или использовать Vite для external скрипта |

---

## 12. Open Technical Questions

### ~~Q1: Как реализовать sticky section heading в правой панели?~~
**Решено:** скролл остаётся на `window`. Sticky headings работают нативно, дополнительная сложность не нужна.

### ~~Q2: Нужен ли `overflow-y-auto` на sidebar?~~
**Решено:** не нужен. Nav содержит ≤6 пунктов, переполнения не будет.

### ~~Q3: Какие 2-3 проекта включить в Projects секцию?~~
**Решено:** Иван добавит позже. Задача в TODO.md.

### ~~Q4: `astro-icon` или inline SVG для иконок?~~
**Решено:** `astro-icon` + `@iconify-json/lucide`. Если при аудите bundle окажется значительным — пересмотреть в пользу inline SVG.

---

### Q1: Как реализовать sticky section heading в правой панели?

**Вопрос:** Design Brief предлагает `sticky top-0` для заголовков секций в правой панели — но при split-layout правая панель скроллируется как `<main>`, а не окно браузера.

**Варианты:**
- A) Sticky на `<main>` как scrolling container (`overflow-y-auto h-screen`) — sticky работает относительно него. Но тогда нужен `overflow-y-auto` на main, что меняет скролл-контекст для мобайла.
- B) Не делать sticky headings совсем — упростить реализацию.
- C) Sticky headings на десктопе (sticky top-0 работает если main — scrollport), на мобайле без sticky.

**Рекомендация:** Вариант B для v1 — sticky headings красиво, но усложняет layout. Если основной скролл остаётся на `window`, sticky работает нормально (вариант C). Зависит от финального решения по scroll контексту.

---

### Q2: Нужен ли `overflow-y-auto` на sidebar?

**Вопрос:** Если у Ивана длинный список в sidebar (много опыта в навигации), и экран маленький по высоте — sidebar выйдет за пределы.

**Варианты:**
- A) `overflow-y-auto` на sidebar — sidebar независимо скроллируется
- B) Ограничить nav в sidebar только 4-5 пунктами (About, Experience, Projects, Skills, Contact) — не переполнится

**Рекомендация:** Вариант B — nav в sidebar всегда будет ≤6 пунктов. `overflow-y-auto` не нужен.

---

### Q3: Как хранить данные о проектах?

**Вопрос:** `src/data/projects.ts` — какая структура, если нет живых проектов с публичным репо?

**Варианты:**
- A) `url` и `repo` опциональны — показывать карточку без ссылок
- B) Включать только проекты с хотя бы одной ссылкой
- C) GitHub репо обязателен, live demo опционален

**Рекомендация:** Вариант C — GitHub ссылка обязательна (показывает реальный код), live demo опционален. Проекты без репо не включать — они не верифицируемы.

---

### Q4: `astro-icon` или inline SVG для иконок?

**Вопрос:** `astro-icon` — новая зависимость. Стоит ли добавлять ради ~6 иконок?

**Варианты:**
- A) `astro-icon` + `@iconify-json/lucide` — чистый DX, build-time SVG
- B) Inline SVG в компонентах — ноль зависимостей, но копипаста

**Рекомендация:** Вариант A — иконки будут в нескольких местах (sidebar, mobile header, contact). `astro-icon` убирает дублирование, никакого рантайм-кода. Это единственная новая зависимость и она оправдана.
