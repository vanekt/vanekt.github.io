# CLAUDE.md

Инструкции и контекст для Claude при работе над этим репозиторием.

## Цель проекта

Личный сайт-визитка / портфолио / CV для Ивана Ткаченко ([@vanekt](https://github.com/vanekt)).
Сайт размещён через GitHub Pages: `vanekt.github.io` → `https://vanekt.github.io`

## Статус

🚧 В разработке — базовая структура готова, идёт наполнение и полировка.

## Описание владельца

Senior Frontend / Full Stack Engineer, 14+ лет опыта. Специализация: React, Vue 3, TypeScript, Next.js, Node.js, Go. Открыт к удалённой работе. Полный профиль — в `src/data/experience.ts`.

Контакты:
- GitHub: https://github.com/vanekt
- Telegram: https://t.me/vanekt0
- LinkedIn: https://www.linkedin.com/in/-ivan-tkachenko-/

## Стек сайта

- **Framework:** Astro 6 (static output)
- **CSS:** Tailwind CSS 4 — только встроенные классы, без arbitrary values и CSS-переменных в шаблонах
- **Language:** TypeScript (strict)
- **i18n:** `src/i18n/en.ts` и `src/i18n/ru.ts` — UI-строки + маппинг из `src/data/`
- **Темы:** Tailwind `dark:` + класс `.dark` на `<html>` + `@custom-variant dark` в global.css
- **Цвета:** светлая — `white` / `violet-700`; тёмная — `slate-950` / `violet-400`
- **Package manager:** pnpm
- **Formatter:** oxfmt (`pnpm format` → `oxfmt src`)
- **Linter:** oxlint (`pnpm lint` → `oxlint src`)
- **Typecheck:** astro check (`pnpm typecheck`)
- **Deploy:** GitHub Pages (`.github/workflows/deploy.yml` — push to `main` → format check + lint + typecheck + build + deploy)
- **Роутинг:** `/` = EN, `/ru/` = RU

## Структура проекта

```
src/
├── components/   # Header, Hero, About, Experience, Skills, Contact
├── data/         # experience.ts, skills.ts — единственный источник правды для контента
├── i18n/         # en.ts, ru.ts, types.ts — UI-строки + импорт из data/
├── layouts/      # Layout.astro
├── pages/        # index.astro (EN), ru/index.astro (RU)
└── styles/       # global.css — @custom-variant dark + базовые стили
```

## Соглашения

- Весь контент (опыт, навыки) — только в `src/data/experience.ts` и `src/data/skills.ts`
- UI-строки (заголовки, nav, hero-текст) — в `src/i18n/en.ts` / `src/i18n/ru.ts`
- Страницы импортируют переводы напрямую: `import { en as t } from '../i18n/en'`
- Компоненты принимают `t: Translations` как пропс
- Цвета — только через Tailwind-классы, без `style=""` и `var(--*)` в шаблонах
- Длинные тире `—` допустимы только в полях `period` (даты), в остальных текстах — обычный дефис `-`
- Группы навыков в `skills.ts` имеют ключи: `frontend`, `css`, `state`, `backend`, `infra`, `tools`, `ai`
