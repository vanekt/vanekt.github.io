// CV-specific content from CV_FINAL.md.
// Used only on /cv/ and /ru/cv/ pages — main site is unaffected.

import { experience } from "./experience";

export interface CvExperienceItem {
  company: string;
  url?: string;
  role: string;
  period: string;
  location: string;
  context?: string;
  bullets: string[];
  skills: string[];
}

// ─── EN ──────────────────────────────────────────────────────────────────────

export const cvSummaryEn =
  "Senior Full Stack Engineer with 14+ years at startups and enterprise companies. Expert in React, Vue 3, TypeScript, Node.js, and Go. Sole frontend engineer on a 4-year product engagement, shipped 2 full redesigns and a 30-component library. Shipped products solo and led teams of up to 4 engineers across startups and an enterprise BPM platform. Open to remote, UTC-3 (Buenos Aires).";

export const cvSkillsEn = [
  {
    name: "Frontend",
    items: ["TypeScript", "JavaScript", "React", "Vue 3", "Next.js", "React Native"],
  },
  { name: "CSS & UI", items: ["Tailwind CSS", "Chakra UI", "Ant Design"] },
  { name: "State & Data", items: ["Zustand", "Pinia", "TanStack Query", "Redux", "Redux Saga"] },
  { name: "Backend", items: ["Node.js", "Go", "PHP", "Express", "Fastify", "PostgreSQL", "Redis"] },
  {
    name: "Tools",
    items: ["Docker", "Vite", "Webpack", "Jest", "Git", "Storybook", "REST", "gRPC", "WebSocket"],
  },
  { name: "AI", items: ["Claude Code", "Cursor", "GitHub Copilot", "Codex"] },
];

const contextsEn = [
  "Client portal for a hosting provider (VPS, dedicated servers, VPN, S3, domains). Mix of Django-templated pages and Vue 2 Options API components; full migration to Vue 3 Composition API in a standalone frontend repo.",
  "Online fitness platform. Sole frontend engineer for the full 4-year engagement.",
  "Enterprise BPM/ECM platform for large-scale business: Unilever, DHL, Raiffeisen Bank, JCB. Led a team of up to 4 frontend engineers.",
  "Consumer reviews platform with millions of monthly visitors. Full-stack work across frontend, mobile, and backend.",
  "Europe's leading e-commerce cashback service. Remote contractor.",
  "Regional IT company. Sole developer on two independent web platforms.",
];

const bulletsEn = [
  [
    "Shipped production features within the first week of joining a live Vue 2 to Vue 3 migration, despite a React-only background",
    "Drove the frontend extraction from the Django monolith: migrated core modules to Composition API, Pinia, and Headless UI, moving from a backend-coupled codebase to a standalone frontend repo",
    "Replaced Highcharts with a custom SVG chart component (4 KB gzip vs ~90 KB): zoom, multi-series, touch, tooltips",
    "Built a client-side caching layer: before, every API call fired fresh on each page load; after, most data is cached and only refreshes on server events or user actions",
    "Migrated hundreds of components with full support for dark/light theming, 6 locales, and responsive breakpoints",
    "Used Claude Code and Cursor to automate the repetitive parts of migration: i18n extraction, Options API to Composition API rewrites, boilerplate generation — hours of manual work reduced to a few commands",
  ],
  [
    "Built the web platform and admin panel from scratch as the only frontend engineer on the product; delivered 2 full redesigns over 4 years",
    "Designed a reusable component library (~30 components, Storybook-documented, rollup-packaged for embedding on third-party sites) used internally and by external partners for seamless embedding",
    "Migrated the platform to Next.js SSR: pages that were previously invisible to search engines became fully indexable",
    "Built 10+ Go + PostgreSQL API endpoints on own initiative, expanding beyond the primary frontend role",
    "Built a UI/UX design system from scratch with 2 designers and a PM: design tokens, component specs, and implementation adopted across the full web platform",
  ],
  [
    "Architected a full SPA rewrite and UI redesign of Citeck ECOS: replaced Apache FreeMarker, Knockout.js, ES5, and Gulp with a React / ES6+ / Webpack application; added widget-based configurable dashboards, filterable paginated tables, and dynamic column layouts",
    "Integrated the Flowable BPM engine into ECOS, giving enterprise clients a visual drag-and-drop interface for building and managing workflows",
    "Built a BPMN/CMMN process editor on bpmn-js and cmmn-js, replacing manual XML configuration with a visual authoring tool",
    "Built a no-code form builder on formio.js (~12 custom + ~22 extended components) so non-technical configurators could create forms without writing code",
    "Led a team of up to 4 frontend engineers, ran technical interviews, introduced unit testing and code review practices across the team",
  ],
  [
    "Built the React SPA rewrite for a high-traffic consumer reviews platform",
    "Built a React Native mobile app and delivered it to internal review within ~3 months",
    "Developed ~10 Go microservices including a large API composition framework; reduced new service bootstrap time from days to hours",
    "Authored protobuf compilers for Go, PHP, and JavaScript, a font compressor, and Go/TypeScript code generators: replaced manual multi-step boilerplate with a single command",
  ],
  [
    "Built cross-browser extensions that detected cashback and discount offers on partner sites and showed a one-click activation widget; also delivered a full UI redesign of the main platform",
    "Automated affiliate network integrations (Admitad, Adtraction, Tradedoubler, Tradetracker) via ~20 background scripts processing partner data in multiple formats",
    "Developed admin panel modules for reporting and partner network management",
  ],
  [
    "Sole developer: designed, built, and deployed two full-scale production web services from zero within 3 years",
    "Delivered a property management portal (utility readings, maintenance requests, emergency alerts, live camera feeds, online payments) integrated with housing company APIs",
    "Built a real-time communication service (live chat, video calls, browser-to-phone calls, callbacks) with custom billing, payment gateway integrations, and SIP/Asterisk server infrastructure",
  ],
];

export const cvExperienceEn: CvExperienceItem[] = experience.map((e, i) => ({
  company: e.company,
  url: e.en.url ?? e.url,
  role: e.en.role,
  period: e.en.period,
  location: e.en.location,
  context: contextsEn[i],
  bullets: bulletsEn[i]!,
  skills: e.skills,
}));

// ─── RU ──────────────────────────────────────────────────────────────────────

export const cvSummaryRu =
  "Senior Full Stack Engineer с 14+ годами в стартапах и enterprise-компаниях. Глубокая экспертиза в React, Vue 3 и TypeScript; большой опыт в Node.js, Go, PHP и React Native. Строил веб-приложения и мобильные продукты от идеи до релиза; руководил frontend-командой до 4 инженеров. Открыт к удалённой работе, UTC-3 (Буэнос-Айрес).";

export const cvSkillsRu = [
  {
    name: "Frontend",
    items: ["TypeScript", "JavaScript", "React", "Vue 3", "Next.js", "React Native"],
  },
  { name: "CSS & UI", items: ["Tailwind CSS", "Chakra UI", "Ant Design"] },
  { name: "State & Data", items: ["Zustand", "Pinia", "TanStack Query", "Redux", "Redux Saga"] },
  { name: "Backend", items: ["Node.js", "Go", "PHP", "Express", "Fastify", "PostgreSQL", "Redis"] },
  {
    name: "Инструменты",
    items: ["Docker", "Vite", "Webpack", "Jest", "Git", "Storybook", "REST", "gRPC", "WebSocket"],
  },
  { name: "AI", items: ["Claude Code", "Cursor", "GitHub Copilot", "Codex"] },
];

const contextsRu = [
  "Личный кабинет хостинг-провайдера (VPS, выделенные серверы, VPN, S3, домены). Часть страниц на Django-шаблонах, часть на Vue 2 (Options API); полный перенос на Vue 3 Composition API в отдельный фронтенд-репозиторий.",
  "Платформа онлайн-фитнеса. Единственный frontend-инженер на протяжении 4 лет.",
  "Enterprise BPM/ECM-платформа для крупного бизнеса: Unilever, DHL, Raiffeisen Bank, JCB. Руководил командой до 4 frontend-инженеров.",
  "Платформа отзывов с миллионами ежемесячных посетителей. Full-stack: фронтенд, мобайл, бэкенд.",
  "Ведущий европейский e-commerce кешбэк-сервис. Аутсорс.",
  "Региональная IT-компания. Единственный разработчик на двух независимых веб-платформах.",
];

const bulletsRu = [
  [
    "Поставлял продакшен-фичи с первой недели в активной миграции Vue 2 в Vue 3, несмотря на React-бэкграунд",
    "Вынес фронтенд из Django-монолита: перенёс ключевые модули на Composition API, Pinia и Headless UI, перейдя от привязки к бэкенд-стеку к отдельному фронтенд-репозиторию",
    "Заменил Highcharts кастомным SVG-компонентом (4 KB gzip вместо ~90 KB): zoom, multi-series, touch, подсказки",
    "Построил клиентский кэш: раньше каждый API-запрос отправлялся заново при открытии страницы, теперь большинство данных кешируется и обновляется только по событиям с сервера или действиям пользователя",
    "Перенёс сотни компонентов с полной поддержкой тёмной/светлой темы, 6 языков (i18n) и адаптивных брейкпоинтов",
    "Применял Claude Code и Cursor для автоматизации рутины: извлечение i18n-строк, переписывание с Options API на Composition API, генерация boilerplate; часы ручной работы сводились к паре команд",
  ],
  [
    "Разработал веб-платформу и панель администратора с нуля как единственный frontend-инженер; провёл 2 полных редизайна",
    "Собрал переиспользуемую библиотеку (~30 компонентов, Storybook-документация, rollup-пакеты): использовалась внутри продукта и у внешних партнёров",
    "Перевёл платформу на Next.js SSR: страницы, которые поисковики раньше не видели, стали полностью индексируемы",
    "По собственной инициативе реализовал более десятка API-эндпоинтов на Go + PostgreSQL, расширив зону ответственности за пределы основной фронтенд-роли",
    "Выстроил UI/UX дизайн-систему с нуля совместно с 2 дизайнерами и продактом: от токенов до компонентов, внедрённых по всей платформе",
  ],
  [
    "Провёл полный рефакторинг и редизайн интерфейса Citeck ECOS: заменил Apache FreeMarker, Knockout.js, ES5 и Gulp на React / ES6+ / Webpack с виджетными конфигурируемыми дашбордами, фильтруемыми таблицами с пагинацией и гибкой настройкой колонок",
    "Встроил BPM-движок Flowable в ECOS: корпоративные клиенты получили визуальный drag-and-drop инструмент для создания и управления бизнес-процессами",
    "Разработал редактор BPMN/CMMN-процессов на bpmn-js и cmmn-js: вместо ручной правки XML теперь визуальный инструмент",
    "Написал no-code конструктор форм на formio.js (~12 кастомных + ~22 доработанных компонента): нетехнические сотрудники получили возможность создавать формы без написания кода",
    "Руководил командой до 4 frontend-разработчиков, проводил технические интервью, внедрил юнит-тестирование и практику код-ревью в команде",
  ],
  [
    "Разработал React SPA для редизайна высоконагруженной платформы отзывов",
    "Разработал мобильное приложение на React Native и сдал на внутреннее ревью за ~3 месяца",
    "Написал ~10 Go-микросервисов, включая фреймворк для компоновки API; время запуска нового сервиса сократилось с дней до часов",
    "Создал protobuf-компиляторы для Go, PHP и JavaScript, компрессор шрифтов и генераторы кода на Go/TypeScript: докеризированные CLI-утилиты, которые свели многошаговый ручной boilerplate к одной команде",
  ],
  [
    "Разработал кросс-браузерные расширения, которые находили кешбэк и скидки на сайтах партнёров и показывали виджет с активацией в один клик; параллельно сделал полный редизайн основной платформы",
    "Автоматизировал интеграции с партнёрскими сетями (Admitad, Adtraction, Tradedoubler, Tradetracker) через ~20 фоновых скриптов, обрабатывавших данные в разных форматах",
    "Разработал модули admin-панели для отчётности и управления партнёрскими интеграциями",
  ],
  [
    "Единственный разработчик: спроектировал, разработал и запустил два полноценных продакшен-сервиса с нуля за 3 года",
    "Разработал платформу для управляющих компаний: передача показаний счётчиков, обработка заявок, аварийные уведомления, трансляции с камер, онлайн-оплата ЖКУ, интеграция с системой ТСЖ",
    "Создал веб-сервис коммуникации для сайтов: живой чат, видеозвонки, звонки из браузера на телефон, обратный звонок; биллинг, платёжные шлюзы и серверная инфраструктура на SIP/Asterisk",
  ],
];

export const cvExperienceRu: CvExperienceItem[] = experience.map((e, i) => ({
  company: e.company,
  url: e.ru.url ?? e.url,
  role: e.ru.role,
  period: e.ru.period,
  location: e.ru.location,
  context: contextsRu[i],
  bullets: bulletsRu[i]!,
  skills: e.skills,
}));

// ─── Education & Languages ────────────────────────────────────────────────────

export const cvEducationEn =
  "Kemerovo State University — Specialist, Applied Mathematics and Computer Science · 2006–2011";
export const cvEducationRu =
  "Кемеровский государственный университет — Специалист, Прикладная математика и информатика · 2006–2011";

export const cvLanguagesEn = "Russian — native · English — B1 (working proficiency) · Spanish — A1";
export const cvLanguagesRu =
  "Русский — родной · Английский — B1 (рабочий уровень) · Испанский — A1";
