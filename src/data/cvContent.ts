// CV-specific content from CV_FINAL.md.
// Used only on /cv/, /ru/cv/, and /es/cv/ pages — main site is unaffected.

export interface CvExperienceItem {
  company: string;
  url?: string;
  role: string;
  period: string;
  location: string;
  context: string;
  bullets: string[];
  skills: string[];
}

// ─── EN ──────────────────────────────────────────────────────────────────────

export const cvSummaryEn =
  "Senior Full Stack Engineer with 15 years at startups and enterprise companies. Deep expertise in React, Vue, and TypeScript; backend experience in Node.js, Go, and PHP, plus mobile apps in React Native. Built web and mobile products end to end, from API to production frontend; led a frontend team of up to 5 engineers. Open to remote, UTC-3 (Buenos Aires).";

export const cvSkillsEn = [
  {
    name: "Frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Vue 3",
      "Next.js",
      "Astro",
      "React Native",
      "Tailwind CSS",
      "CSS Modules",
      "Styled Components",
    ],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "Go", "PHP", "PostgreSQL", "Redis", "Supabase"],
  },
  {
    name: "Infra & DevOps",
    items: ["Docker", "AWS", "Cloudflare", "GitHub Actions", "CI/CD", "nginx", "RabbitMQ"],
  },
  {
    name: "APIs & Protocols",
    items: ["REST", "GraphQL", "gRPC", "JSON-RPC", "WebSocket", "OAuth2", "JWT"],
  },
  { name: "State & Data", items: ["Zustand", "Pinia", "TanStack Query", "Redux", "Thunk", "Saga"] },
  {
    name: "Practices",
    items: [
      "Micro Frontends",
      "Microservices Architecture",
      "FSD",
      "Atomic Design",
      "Responsive Design",
      "Web Accessibility (a11y)",
      "Semantic HTML",
      "Web Vitals",
      "SDD/BDD",
    ],
  },
  { name: "Tools", items: ["Vite", "Webpack", "Jest", "Playwright", "Git", "Chrome DevTools"] },
  { name: "AI", items: ["Claude Code", "Codex", "Cursor", "AI-Driven Development"] },
];

export const cvExperienceEn: CvExperienceItem[] = [
  {
    company: "Fornex Hosting",
    url: "https://fornex.com/",
    role: "Senior Frontend Developer",
    period: "Sep 2025 — Mar 2026",
    location: "Remote",
    context:
      "Client portal for a hosting provider (VPS, dedicated servers, VPN, S3, domains). Full migration from Django-templated pages and Vue 2 Options API components to Vue 3 Composition API in a standalone frontend repo.",
    bullets: [
      "Drove the frontend extraction from the Django monolith: migrated core modules to Composition API, Pinia, and Headless UI (338 new files, 279 Vue components), moving from a backend-coupled codebase to a standalone frontend repo",
      "Designed 18 domain-scoped Pinia stores across the client portal's 10+ product sections (VPS, dedicated servers, hosting, domains, AntiDDoS, S3, and more)",
      "Replaced Highcharts with a custom SVG chart component (4 KB gzip vs ~90 KB) without losing any required functionality",
      "Implemented custom SSR (Vite SSR API, no meta-framework) for the portal's public and landing pages, making them indexable by search engines",
      "Automated the repetitive parts of migration with Claude Code and Cursor: migrating localization strings from YAML to JSON with clean key structure while expanding coverage from 2 to 6 locales, Options API to Composition API rewrites, boilerplate generation; hours of manual work reduced to a few commands",
    ],
    skills: [
      "TypeScript",
      "Vue 3",
      "Pinia",
      "Tailwind CSS",
      "Vite",
      "Vue Router",
      "VueUse",
      "Fastify",
      "Claude Code",
      "Kanban",
    ],
  },
  {
    company: "GymTeam",
    url: "https://gymteam.ru/sections",
    role: "Fullstack Engineer / Frontend Tech Lead",
    period: "Mar 2021 — Mar 2025",
    location: "Remote",
    context: "Online fitness platform with 130,000+ users.",
    bullets: [
      "Solely built the web platform and admin panel frontend from scratch",
      "Designed and built ~25% of all API methods (Go, Node.js, PL/pgSQL)",
      "Implemented online payments and autopayments across 5 providers (YooKassa, Prodamus, PayPal, Tinkoff Credit, Robokassa) to support cards, installment plans, and mobile/web subscriptions in a single unified checkout; multi-item order model for several offers in one purchase, event-driven architecture, cron jobs",
      "Introduced a UI/UX design system from scratch with 2 designers and a PM: from atoms to components, adopted across the full web platform",
      "Established a reusable component library (~30 components, Storybook-documented, rollup‑packaged) used internally and by external partners",
      "Migrated the platform to Next.js SSR: pages that were previously invisible to search engines became fully indexable; ran 2 complete redesigns",
    ],
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Chakra UI",
      "Ant Design",
      "Node.js",
      "Express.js",
      "Go",
      "PostgreSQL",
      "Storybook",
      "n8n",
      "Kanban",
    ],
  },
  {
    company: "Citeck",
    url: "https://github.com/Citeck",
    role: "Lead Frontend Engineer",
    period: "Sep 2018 — Feb 2021",
    location: "Remote",
    context:
      "Open-source enterprise BPM/ECM platform with up to 600,000 users per deployment. Clients: Unilever, DHL, Raiffeisen Bank, JCB. Led a team of up to 5 frontend engineers.",
    bullets: [
      "Architected a full SPA rewrite and UI redesign of Citeck ECOS: migrated the stack from Apache FreeMarker, Knockout.js, ES5, and Gulp to a React / ES6+ / Webpack application; added widget-based configurable dashboards, filterable paginated tables, and dynamic column layouts",
      "Integrated the Flowable BPM engine into ECOS, giving enterprise clients a visual drag‑and‑drop interface for building and managing workflows",
      "Developed a BPMN/CMMN process editor on bpmn-js and cmmn-js, replacing manual XML configuration with a visual authoring tool",
      "Built a no-code form builder on formio.js (~12 custom + ~22 extended components), replacing the prior code-and-redeploy workflow: configurators with no coding skills now create and publish forms directly in production with one click",
      "Added SSO authentication via Keycloak, including a local dev proxy bridging the frontend to the auth server",
      "Embedded the new React SPA into a legacy Java enterprise portal via a custom webpack build (a micro-frontend approach), enabling incremental migration without a full-platform rewrite",
      "Led a team of up to 5 frontend engineers, ran technical interviews, introduced unit testing and code review practices across the team",
    ],
    skills: [
      "JavaScript",
      "React",
      "Redux",
      "Redux Saga",
      "Webpack",
      "Jest",
      "React Testing Library",
      "Enzyme",
      "Bootstrap",
      "SCSS",
      "Agile",
    ],
  },
  {
    company: "irecommend.ru",
    url: "https://irecommend.ru/",
    role: "Senior Full Stack Developer",
    period: "Sep 2016 — Aug 2018",
    location: "Krasnodar",
    context:
      "Consumer reviews platform with millions of monthly visitors. Full-stack work across frontend, mobile, and backend.",
    bullets: [
      "Developed a React SPA; delivered a full UI redesign for irecommend.ru (millions of monthly visitors)",
      "Built a React Native mobile app solo, from scratch to internal review, within ~3 months",
      "Owned ~10 Go microservices including a large API composition framework; reduced new service bootstrap time from days to hours",
      "Authored protobuf compilers for Go, PHP, and JavaScript, a font compressor, and Go/TypeScript code generators: dockerized CLI utilities that replaced manual multi-step boilerplate with a single command",
      "Designed and built an OAuth2 authorization server in Go with token storage in Tarantool (in‑memory database), bridged to a legacy PHP/Drupal backend over mutual TLS",
      "Ran a native bridge (Android/iOS) connecting the mobile app to a Go backend service through a custom binary RPC protocol (Protocol Buffers), with offline caching (SQLite, TTL-based) and long-polling sync",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Express.js",
      "Go",
      "PHP",
      "PostgreSQL",
      "gRPC",
      "Tarantool",
      "Docker",
      "Agile",
    ],
  },
  {
    company: "Bonusway",
    url: "https://bonusway.com/",
    role: "Full Stack Developer",
    period: "Dec 2014 — Sep 2016",
    location: "Helsinki · Remote",
    context: "Europe's leading e-commerce cashback service. Remote contractor.",
    bullets: [
      "Built a browser extension for Chrome, Opera, and Firefox that detected cashback and discount offers on partner sites and showed a one-click activation widget; also delivered a full UI redesign of the main platform",
      "Automated integrations with ~20-25 affiliate networks (Admitad, Adtraction, Tradedoubler, Tradetracker, CJ, and others) via background scripts processing partner data in multiple formats",
      "Built admin panel modules for report generation and managing hundreds of partner stores across those affiliate networks",
    ],
    skills: [
      "JavaScript",
      "React",
      "jQuery",
      "Backbone",
      "PHP",
      "MySQL",
      "AWS",
      "Bootstrap",
      "Ionic",
    ],
  },
  {
    company: "ICT LLC",
    role: "Full Stack Developer",
    period: "Aug 2011 — Dec 2014",
    location: "Kemerovo",
    context: "Regional IT company. Sole developer on two independent web platforms.",
    bullets: [
      "Delivered a property management portal (utility readings, maintenance requests, emergency alerts, live camera feeds, online utility payments) integrated with housing company APIs",
      "Built a real-time communication service (live chat, video calls, browser-to-phone calls, callbacks) with custom billing, a Robokassa payment gateway integration, and SIP/Asterisk server infrastructure",
    ],
    skills: [
      "JavaScript",
      "jQuery",
      "CSS",
      "PHP",
      "MySQL",
      "Linux",
      "SIP",
      "Asterisk",
      "Red5",
      "RTCKit",
      "VideoWhisper",
    ],
  },
];

// ─── RU ──────────────────────────────────────────────────────────────────────

export const cvSummaryRu =
  "Senior Full Stack Engineer, 15 лет production-опыта в стартапах и enterprise-компаниях. Глубокая экспертиза в React, Vue и TypeScript; большой опыт разработки бэкенда на Node.js, Go и PHP, а также мобильных приложений на React Native. Строил веб- и мобильные продукты от идеи до релиза, от API до продакшен-интерфейса; руководил frontend-командой до 5 инженеров. Открыт к удалённой работе, UTC-3 (Буэнос-Айрес).";

export const cvSkillsRu = [
  {
    name: "Frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Vue 3",
      "Next.js",
      "Astro",
      "React Native",
      "Tailwind CSS",
      "CSS Modules",
      "Styled Components",
    ],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "Go", "PHP", "PostgreSQL", "Redis", "Supabase"],
  },
  {
    name: "Infra & DevOps",
    items: ["Docker", "AWS", "Cloudflare", "GitHub Actions", "CI/CD", "nginx", "RabbitMQ"],
  },
  {
    name: "APIs & Protocols",
    items: ["REST", "GraphQL", "gRPC", "JSON-RPC", "WebSocket", "OAuth2", "JWT"],
  },
  { name: "State & Data", items: ["Zustand", "Pinia", "TanStack Query", "Redux", "Thunk", "Saga"] },
  {
    name: "Практики",
    items: [
      "Micro Frontends",
      "Microservices Architecture",
      "FSD",
      "Atomic Design",
      "Responsive Design",
      "Web Accessibility (a11y)",
      "Semantic HTML",
      "Web Vitals",
      "SDD/BDD",
    ],
  },
  {
    name: "Инструменты",
    items: ["Vite", "Webpack", "Jest", "Playwright", "Git", "Chrome DevTools"],
  },
  { name: "AI", items: ["Claude Code", "Codex", "Cursor", "AI-Driven Development"] },
];

export const cvExperienceRu: CvExperienceItem[] = [
  {
    company: "Fornex Hosting",
    url: "https://fornex.com/",
    role: "Senior Frontend Developer",
    period: "Сен 2025 — Мар 2026",
    location: "Удалённо",
    context:
      "Личный кабинет хостинг-провайдера (VPS, выделенные серверы, VPN, S3, домены). Полный перенос с Django-шаблонов / Vue 2 (Options API) на Vue 3 Composition API в отдельный фронтенд-репозиторий.",
    bullets: [
      "Вынес фронтенд из Django-монолита: перенёс ключевые модули на Composition API, Pinia и Headless UI (338 новых файлов, 279 Vue-компонентов), перейдя от привязки к бэкенд-стеку к отдельному фронтенд-репозиторию",
      "Спроектировал 18 доменных Pinia-хранилищ для 10+ разделов личного кабинета (VPS, выделенные серверы, хостинг, домены, AntiDDoS, S3 и другие)",
      "Заменил Highcharts кастомным SVG-компонентом (4 KB gzip вместо ~90 KB) без потери необходимого функционала",
      "Внедрил кастомный SSR (Vite SSR API, без метафреймворка) для публичных и лендинговых страниц личного кабинета, сделав их доступными для индексации поисковиками",
      "Автоматизировал рутинные части миграции с помощью Claude Code и Cursor: перенос строк локализации из YAML в JSON с чистой структурой ключей и расширением покрытия с 2 до 6 языков, переписывание с Options API на Composition API, генерация boilerplate; часы ручной работы сводились к паре команд",
    ],
    skills: [
      "TypeScript",
      "Vue 3",
      "Pinia",
      "Tailwind CSS",
      "Vite",
      "Vue Router",
      "VueUse",
      "Fastify",
      "Claude Code",
      "Kanban",
    ],
  },
  {
    company: "GymTeam",
    url: "https://gymteam.ru/sections",
    role: "Fullstack Engineer / Frontend Tech Lead",
    period: "Мар 2021 — Мар 2025",
    location: "Удалённо",
    context: "Платформа для занятий онлайн-фитнесом, 130 000+ пользователей.",
    bullets: [
      "В одиночку разработал frontend основного продукта и frontend админ-панели с нуля",
      "Спроектировал и разработал ~25% от всего кол-ва API-методов (Go, Node.js, PL/pgSQL)",
      "Реализовал приём онлайн-платежей и автоплатежей через 5 провайдеров (ЮKassa, Prodamus, PayPal, Тинькофф Кредит, Робокасса) для карт, рассрочки и мобильной/веб-подписки в едином чекауте; модель много-позиционных заказов с несколькими офферами в одной покупке, event-driven архитектура, cron-джобы",
      "Выстроил UI/UX дизайн-систему с нуля совместно с 2 дизайнерами и продукт-менеджером: от атомов до компонентов, внедрённых по всей платформе",
      "Создал переиспользуемую библиотеку (~30 компонентов, Storybook-документация, rollup‑пакеты): использовалась внутри продукта и у внешних партнёров",
      "Перевёл платформу на Next.js SSR: страницы, которые поисковики раньше не видели, стали полностью индексируемы; провёл 2 полных редизайна",
    ],
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Chakra UI",
      "Ant Design",
      "Node.js",
      "Express.js",
      "Go",
      "PostgreSQL",
      "Storybook",
      "n8n",
      "Kanban",
    ],
  },
  {
    company: "Citeck",
    url: "https://www.citeck.ru/",
    role: "Lead Frontend Engineer",
    period: "Сен 2018 — Фев 2021",
    location: "Удалённо",
    context:
      "Open-source enterprise BPM/ECM-платформа с нагрузкой до 600 000 пользователей на инсталляцию. Клиенты: Unilever, DHL, Raiffeisen Bank, JCB. Руководил командой до 5 frontend-инженеров.",
    bullets: [
      "Провёл полный рефакторинг и редизайн интерфейса Citeck ECOS: мигрировал стек с Apache FreeMarker, Knockout.js, ES5 и Gulp на React / ES6+ / Webpack с виджетными конфигурируемыми дашбордами, фильтруемыми таблицами с пагинацией и гибкой настройкой колонок",
      "Встроил BPM-движок Flowable в ECOS: корпоративные клиенты получили визуальный drag‑and‑drop инструмент для создания и управления бизнес-процессами",
      "Разработал редактор BPMN/CMMN-процессов на bpmn-js и cmmn-js: визуальный инструмент вместо ручной правки XML",
      "Написал no-code конструктор форм на formio.js (~12 кастомных + ~22 доработанных компонента), заменив процесс правки конфига и деплоя: теперь сотрудники без навыков написания кода создают и публикуют формы прямо на проде в один клик",
      "Внедрил SSO-аутентификацию через Keycloak, включая настройку dev-прокси между локальным окружением и сервером",
      "Перенёс новый React SPA в legacy Java-портал через кастомную webpack-сборку (микрофронтенд-подход), обеспечив постепенную миграцию без полного переписывания платформы",
      "Руководил командой до 5 frontend-разработчиков, проводил технические интервью, внедрил юнит-тестирование и практику код-ревью в команде",
    ],
    skills: [
      "JavaScript",
      "React",
      "Redux",
      "Redux Saga",
      "Webpack",
      "Jest",
      "React Testing Library",
      "Enzyme",
      "Bootstrap",
      "SCSS",
      "Agile",
    ],
  },
  {
    company: "irecommend.ru",
    url: "https://irecommend.ru/",
    role: "Senior Full Stack Developer",
    period: "Сен 2016 — Авг 2018",
    location: "Краснодар",
    context:
      "Платформа отзывов с миллионами ежемесячных посетителей. Full-stack: фронтенд, мобайл, бэкенд.",
    bullets: [
      "Разработал React SPA; провёл полный редизайн интерфейса irecommend.ru (миллионы ежемесячных посетителей)",
      "В одиночку построил мобильное приложение на React Native с нуля до внутреннего ревью за ~3 месяца",
      "Отвечал за ~10 Go-микросервисов, включая фреймворк для компоновки API; время запуска нового сервиса сократилось с дней до часов",
      "Создал protobuf-компиляторы для Go, PHP и JavaScript, компрессор шрифтов и генераторы кода на Go/TypeScript: докеризированные CLI-утилиты, которые свели многошаговый ручной boilerplate к одной команде",
      "Спроектировал и реализовал сервер авторизации OAuth2 на Go с хранением токенов в Tarantool (in‑memory база данных), связанный с legacy PHP/Drupal-бэкендом через mutual TLS",
      "Поддерживал нативный мост (Android/iOS), связывающий мобильное приложение с Go-сервисом через кастомный бинарный RPC-протокол (Protocol Buffers), с оффлайн-кэшем (SQLite, TTL) и long-polling синхронизацией",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Express.js",
      "Go",
      "PHP",
      "PostgreSQL",
      "gRPC",
      "Tarantool",
      "Docker",
      "Agile",
    ],
  },
  {
    company: "Bonusway",
    url: "https://bonusway.com/",
    role: "Full Stack Developer",
    period: "Дек 2014 — Сен 2016",
    location: "Хельсинки · Удалённо",
    context: "Ведущий европейский e-commerce кешбэк-сервис. Аутсорс.",
    bullets: [
      "Разработал расширение для браузеров (Chrome, Opera, Firefox), которое находило кешбэк и скидки на сайтах партнёров и показывало виджет с активацией в один клик; параллельно сделал полный редизайн основной платформы",
      "Автоматизировал интеграции с ~20-25 партнёрскими сетями (Admitad, Adtraction, Tradedoubler, Tradetracker, CJ и другие) через фоновые скрипты, обрабатывавшие данные в разных форматах",
      "Разработал модули admin-панели: генерация отчётов и управление сотнями магазинов-партнёров по этим партнёрским сетям",
    ],
    skills: [
      "JavaScript",
      "React",
      "jQuery",
      "Backbone",
      "PHP",
      "MySQL",
      "AWS",
      "Bootstrap",
      "Ionic",
    ],
  },
  {
    company: "ICT LLC",
    role: "Full Stack Developer",
    period: "Авг 2011 — Дек 2014",
    location: "Кемерово",
    context:
      "Региональная IT-компания. Единственный разработчик на двух независимых веб-платформах.",
    bullets: [
      "Разработал платформу для управляющих компаний: передача показаний счётчиков, обработка заявок, аварийные уведомления, трансляции с камер, онлайн-оплата ЖКУ, интеграция с системой ТСЖ",
      "Создал веб-сервис коммуникации для сайтов: живой чат, видеозвонки, звонки из браузера на телефон, обратный звонок; биллинг, интеграция платёжного шлюза Робокасса и серверная инфраструктура на SIP/Asterisk",
    ],
    skills: [
      "JavaScript",
      "jQuery",
      "CSS",
      "PHP",
      "MySQL",
      "Linux",
      "SIP",
      "Asterisk",
      "Red5",
      "RTCKit",
      "VideoWhisper",
    ],
  },
];

// ─── ES ──────────────────────────────────────────────────────────────────────

export const cvSummaryEs =
  "Senior Full Stack Engineer con 15 años en startups y empresas enterprise. Expertise profundo en React, Vue y TypeScript; amplia experiencia en Node.js, Go, PHP y React Native. Desarrollé aplicaciones web y productos móviles de principio a fin; lideré un equipo frontend de hasta 5 ingenieros. Disponible para trabajo remoto, UTC-3 (Buenos Aires).";

export const cvSkillsEs = [
  {
    name: "Frontend",
    items: ["TypeScript", "JavaScript", "React", "Vue 3", "Next.js", "Astro", "React Native"],
  },
  {
    name: "CSS & UI",
    items: ["Tailwind CSS", "CSS Modules", "Styled Components", "Chakra UI", "Ant Design"],
  },
  { name: "State & Data", items: ["Zustand", "Pinia", "TanStack Query", "Redux", "Thunk", "Saga"] },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "Go", "PHP", "PostgreSQL", "Redis", "Supabase"],
  },
  {
    name: "Prácticas",
    items: [
      "Micro Frontends",
      "FSD",
      "Atomic Design",
      "Responsive Design",
      "Web Accessibility",
      "Semantic HTML",
      "Web Vitals",
      "SDD/BDD",
    ],
  },
  {
    name: "Herramientas",
    items: [
      "Docker",
      "GitHub Actions",
      "Vite",
      "Webpack",
      "Jest",
      "Playwright",
      "REST",
      "GraphQL",
      "gRPC",
      "WebSocket",
    ],
  },
  { name: "AI", items: ["Claude Code", "Codex", "Cursor", "AI-Driven Development"] },
];

export const cvExperienceEs = cvExperienceEn;

// ─── Education & Languages ────────────────────────────────────────────────────

export const cvEducationEn =
  "Kemerovo State University, Specialist, Applied Mathematics and Computer Science · 2006–2011";
export const cvEducationRu =
  "Кемеровский государственный университет, Специалист, Прикладная математика и информатика · 2006–2011";

export const cvLanguagesEn = "Russian - native · English - B1 · Spanish - A1";
export const cvLanguagesRu = "Русский - родной · Английский - B1 · Испанский - A1";

export const cvEducationEs =
  "Universidad Estatal de Kémerovo, Especialista, Matemáticas Aplicadas e Informática · 2006–2011";
export const cvLanguagesEs = "Ruso - nativo · Inglés - B1 · Español - A1";
