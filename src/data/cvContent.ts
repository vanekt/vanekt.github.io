// CV-specific content from CV_FINAL.md.
// Used only on /cv/, /ru/cv/, and /es/cv/ pages — main site is unaffected.

import { experience } from "./experience";

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
  "Senior Full Stack Engineer with 14+ years at startups and enterprise companies. Deep expertise in React, Vue, and TypeScript; strong experience in Node.js, Go, PHP, and React Native. Built web applications and mobile products end-to-end; led a frontend team of up to 5 engineers. Open to remote, UTC-3 (Buenos Aires).";

export const cvSkillsEn = [
  {
    name: "Frontend",
    items: ["TypeScript", "JavaScript", "React", "Vue 3", "Next.js", "Astro", "React Native"],
  },
  {
    name: "CSS & UI",
    items: ["Tailwind CSS", "CSS Modules", "Styled Components", "Chakra UI", "Ant Design"],
  },
  { name: "State & Data", items: ["Zustand", "Pinia", "TanStack Query", "Redux", "Thunk", "Saga"] },
  { name: "Backend", items: ["Node.js", "Go", "PHP", "PostgreSQL", "Redis", "Supabase"] },
  {
    name: "Practices",
    items: [
      "Micro Frontends",
      "FSD",
      "Atomic Design",
      "Web Accessibility",
      "Semantic HTML",
      "Web Vitals",
    ],
  },
  {
    name: "Tools",
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
  { name: "AI", items: ["Claude Code", "Codex", "Cursor"] },
];

export const cvExperienceEn: CvExperienceItem[] = experience.map((e) => ({
  company: e.company,
  url: e.en.url ?? e.url,
  role: e.en.role,
  period: e.en.period,
  location: e.en.location,
  context: e.en.context,
  bullets: e.en.bullets,
  skills: e.skills,
}));

// ─── EN — Fullstack variant (/cv/fullstack/) ─────────────────────────────────
// Separate positioning: same job history, backend/fullstack-weighted bullets and skills.
// Does not affect /cv/, /ru/cv/, /es/cv/, or the main site.

export const cvSummaryEnFullstack =
  "Senior Full Stack Engineer with 14+ years at startups and enterprise companies. Deep expertise in React, Vue, and TypeScript; backend experience in Node.js, Go, and PHP, plus mobile apps in React Native. Built web and mobile products end to end, from API to production frontend; led a frontend team of up to 5 engineers. Open to remote, UTC-3 (Buenos Aires).";

export const cvSkillsEnFullstack = [
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
  { name: "Backend", items: ["Node.js", "Go", "PHP", "PostgreSQL", "Redis", "Supabase"] },
  {
    name: "Infra & DevOps",
    items: ["Docker", "AWS", "Cloudflare", "GitHub Actions", "nginx", "RabbitMQ", "Kafka"],
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
      "Web Accessibility (a11y)",
      "Semantic HTML",
      "Web Vitals",
    ],
  },
  { name: "Tools", items: ["Vite", "Webpack", "Jest", "Playwright", "Git", "Chrome DevTools"] },
  { name: "AI", items: ["Claude Code", "Codex", "Cursor"] },
];

export const cvExperienceEnFullstack: CvExperienceItem[] = [
  {
    company: "Fornex Hosting",
    url: "https://fornex.com/",
    role: "Senior Frontend Developer",
    period: "Sep 2025 — Mar 2026",
    location: "Remote",
    context:
      "Client portal for a hosting provider (VPS, dedicated servers, VPN, S3, domains). Mix of Django-templated pages and Vue 2 Options API components; full migration to Vue 3 Composition API in a standalone frontend repo.",
    bullets: [
      "Drove the frontend extraction from the Django monolith: migrated core modules to Composition API, Pinia, and Headless UI (338 new files, 279 Vue components), moving from a backend-coupled codebase to a standalone frontend repo",
      "Designed 18 domain-scoped Pinia stores encapsulating order, subscription, and pricing logic across the client portal's 10+ product sections (VPS, dedicated servers, hosting, domains, AntiDDoS, S3, and more)",
      "Replaced Highcharts with a custom SVG chart component (4 KB gzip vs ~90 KB): zoom, multi-series, touch, tooltips",
      "Built a client-side caching layer: before, every API call fired fresh on each page load; after, most data is cached and only refreshes on server events or user actions",
      "Shipped a web-based remote console (noVNC/KVM-IPMI) for VPS and dedicated servers, covering power control, admin access, and rescue mode",
      "Automated the repetitive parts of migration with Claude Code and Cursor: i18n extraction, Options API to Composition API rewrites, boilerplate generation; hours of manual work reduced to a few commands",
    ],
    skills: [
      "TypeScript",
      "Vue 3",
      "Pinia",
      "Tailwind CSS",
      "Vite",
      "Vue Router",
      "VueUse",
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
    context: "Online fitness platform. Sole frontend engineer for the full 4-year engagement.",
    bullets: [
      "Built the web platform and admin panel from scratch; shipped two complete redesigns as the product evolved",
      "Designed and built 40 JSON-RPC API methods (Go) from scratch and extended 24 more, on own initiative beyond the primary frontend role, covering offers, purchases, subscriptions, CMS pages, and audience segmentation; also implemented backend logic in PostgreSQL (PL/pgSQL) and automated business processes via n8n workflows",
      "Implemented online payments and autopayments through PayPal and Robokassa, including a multi-item order model supporting several offers in a single purchase, plus cron-driven background jobs (gocron) for subscription renewals and notifications",
      "Established a reusable component library (~30 components, Storybook-documented, rollup-packaged) used internally and by external partners",
      "Migrated the platform to Next.js SSR: pages that were previously invisible to search engines became fully indexable",
      "Introduced a UI/UX design system from scratch with 2 designers and a PM: from atoms to components, adopted across the full web platform",
    ],
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Chakra UI",
      "Ant Design",
      "Node.js",
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
    role: "Lead Frontend Developer",
    period: "Sep 2018 — Feb 2021",
    location: "Remote",
    context:
      "Enterprise BPM/ECM platform for large-scale business: Unilever, DHL, Raiffeisen Bank, JCB. Led a team of up to 5 frontend engineers.",
    bullets: [
      "Architected a full SPA rewrite and UI redesign of Citeck ECOS: migrated the stack from Apache FreeMarker, Knockout.js, ES5, and Gulp to a React / ES6+ / Webpack application; added widget-based configurable dashboards, filterable paginated tables, and dynamic column layouts",
      "Integrated the Flowable BPM engine into ECOS, giving enterprise clients a visual drag-and-drop interface for building and managing workflows",
      "Developed a BPMN/CMMN process editor on bpmn-js and cmmn-js, replacing manual XML configuration with a visual authoring tool",
      "Built a no-code form builder on formio.js (~12 custom + ~22 extended components) so configurators could create forms without writing code",
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
      "Agile",
    ],
  },
  {
    company: "irecommend.ru",
    url: "https://irecommend.ru/",
    role: "Senior Software Developer",
    period: "Sep 2016 — Aug 2018",
    location: "Krasnodar",
    context:
      "Consumer reviews platform with millions of monthly visitors. Full-stack work across frontend, mobile, and backend.",
    bullets: [
      "Developed a React SPA; delivered a full UI redesign for irecommend.ru (millions of monthly visitors)",
      "Built a React Native mobile app and delivered it to internal review within ~3 months",
      "Owned ~10 Go microservices including a large API composition framework; reduced new service bootstrap time from days to hours",
      "Authored protobuf compilers for Go, PHP, and JavaScript, a font compressor, and Go/TypeScript code generators: dockerized CLI utilities that replaced manual multi-step boilerplate with a single command",
      "Designed and built an OAuth2 authorization server in Go with token storage in Tarantool (in-memory database), bridged to a legacy PHP/Drupal backend over mutual TLS",
      "Ran a native bridge (Android/iOS) connecting the mobile app to a Go backend service through a custom binary RPC protocol (Protocol Buffers), with offline caching (SQLite, TTL-based) and long-polling sync",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
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
    role: "Software Developer",
    period: "Dec 2014 — Sep 2016",
    location: "Helsinki · Remote",
    context: "Europe's leading e-commerce cashback service. Remote contractor.",
    bullets: [
      "Built a browser extension for Chrome, Opera, and Firefox that detected cashback and discount offers on partner sites and showed a one-click activation widget; also delivered a full UI redesign of the main platform",
      "Automated affiliate network integrations (Admitad, Adtraction, Tradedoubler, Tradetracker) via ~20 background scripts processing partner data in multiple formats",
      "Built admin panel modules for report generation, store management, and partner network operations",
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
    role: "Software Developer",
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

// ─── EN — Frontend variant (/cv/frontend/) ───────────────────────────────────
// Separate positioning: same job history as /cv/, backend mentions minimized,
// stronger fact-checked bullets carried over from the fullstack variant where
// they're frontend-appropriate. Does not affect /cv/, /ru/cv/, /es/cv/, the
// fullstack variant, or the main site.

export const cvSummaryEnFrontend =
  "Senior Frontend Engineer with 14+ years at startups and enterprise companies. Deep expertise in React, Vue, and TypeScript, with production experience in Node.js and mobile apps in React Native. Built web and mobile products end to end, from architecture to production UI; led a frontend team of up to 5 engineers. Open to remote, UTC-3 (Buenos Aires).";

export const cvSkillsEnFrontend = [
  {
    name: "Frontend",
    items: ["TypeScript", "JavaScript", "React", "Vue 3", "Next.js", "Astro", "React Native"],
  },
  {
    name: "CSS & UI",
    items: ["Tailwind CSS", "CSS Modules", "Styled Components", "Chakra UI", "Ant Design"],
  },
  { name: "State & Data", items: ["Zustand", "Pinia", "TanStack Query", "Redux", "Thunk", "Saga"] },
  { name: "Backend", items: ["Node.js", "Go", "PHP", "PostgreSQL", "Redis", "Supabase"] },
  {
    name: "Practices",
    items: [
      "Micro Frontends",
      "FSD",
      "Atomic Design",
      "Web Accessibility (a11y)",
      "Semantic HTML",
      "Web Vitals",
    ],
  },
  {
    name: "Tools",
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
      "JWT",
      "OAuth2",
      "Chrome DevTools",
    ],
  },
  { name: "AI", items: ["Claude Code", "Codex", "Cursor"] },
];

export const cvExperienceEnFrontend: CvExperienceItem[] = [
  {
    company: "Fornex Hosting",
    url: "https://fornex.com/",
    role: "Senior Frontend Developer",
    period: "Sep 2025 — Mar 2026",
    location: "Remote",
    context:
      "Client portal for a hosting provider (VPS, dedicated servers, VPN, S3, domains). Mix of Django-templated pages and Vue 2 Options API components; full migration to Vue 3 Composition API in a standalone frontend repo.",
    bullets: [
      "Drove the frontend extraction from the Django monolith: migrated core modules to Composition API, Pinia, and Headless UI (338 new files, 279 Vue components), moving from a backend-coupled codebase to a standalone frontend repo",
      "Designed 18 domain-scoped Pinia stores encapsulating order, subscription, and pricing logic across the client portal's 10+ product sections (VPS, dedicated servers, hosting, domains, AntiDDoS, S3, and more)",
      "Replaced Highcharts with a custom SVG chart component (4 KB gzip vs ~90 KB): zoom, multi-series, touch, tooltips",
      "Built a client-side caching layer: before, every API call fired fresh on each page load; after, most data is cached and only refreshes on server events or user actions",
      "Shipped a web-based remote console (noVNC/KVM-IPMI) for VPS and dedicated servers, covering power control, admin access, and rescue mode",
      "Automated the repetitive parts of migration with Claude Code and Cursor: i18n extraction, Options API to Composition API rewrites, boilerplate generation; hours of manual work reduced to a few commands",
    ],
    skills: [
      "TypeScript",
      "Vue 3",
      "Pinia",
      "Tailwind CSS",
      "Vite",
      "Vue Router",
      "VueUse",
      "Claude Code",
      "Kanban",
    ],
  },
  {
    company: "GymTeam",
    url: "https://gymteam.ru/sections",
    role: "Frontend Tech Lead",
    period: "Mar 2021 — Mar 2025",
    location: "Remote",
    context: "Online fitness platform. Sole frontend engineer for the full 4-year engagement.",
    bullets: [
      "Built the web platform and admin panel from scratch, plus backend API endpoints (Go, PostgreSQL) on own initiative; shipped two complete redesigns as the product evolved",
      "Architected a white-label platform: the same Next.js codebase served 3 production brands with brand-specific builds",
      "Designed a server-driven UI engine that renders React components from a JSON schema, letting non-engineering teams update pages (catalog, articles, landing pages) without a frontend deploy",
      "Established a reusable component library (~30 components, Storybook-documented, rollup-packaged) used internally and by external partners",
      "Migrated the platform to Next.js SSR: pages that were previously invisible to search engines became fully indexable",
      "Introduced a UI/UX design system from scratch with 2 designers and a PM: from atoms to components, adopted across the full web platform",
    ],
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Chakra UI",
      "Ant Design",
      "Node.js",
      "Go",
      "PostgreSQL",
      "Storybook",
      "Kanban",
    ],
  },
  {
    company: "Citeck",
    url: "https://github.com/Citeck",
    role: "Lead Frontend Developer",
    period: "Sep 2018 — Feb 2021",
    location: "Remote",
    context:
      "Enterprise BPM/ECM platform for large-scale business: Unilever, DHL, Raiffeisen Bank, JCB. Led a team of up to 5 frontend engineers.",
    bullets: [
      "Architected a full SPA rewrite and UI redesign of Citeck ECOS: migrated the stack from Apache FreeMarker, Knockout.js, ES5, and Gulp to a React / ES6+ / Webpack application; added widget-based configurable dashboards, filterable paginated tables, and dynamic column layouts",
      "Integrated the Flowable BPM engine into ECOS, giving enterprise clients a visual drag-and-drop interface for building and managing workflows",
      "Developed a BPMN/CMMN process editor on bpmn-js and cmmn-js, replacing manual XML configuration with a visual authoring tool",
      "Built a no-code form builder on formio.js (~12 custom + ~22 extended components) so configurators could create forms without writing code",
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
      "Agile",
    ],
  },
  {
    company: "irecommend.ru",
    url: "https://irecommend.ru/",
    role: "Senior Software Developer",
    period: "Sep 2016 — Aug 2018",
    location: "Krasnodar",
    context:
      "Consumer reviews platform with millions of monthly visitors. Frontend and mobile work across web and native apps.",
    bullets: [
      "Developed a React SPA; delivered a full UI redesign for irecommend.ru (millions of monthly visitors)",
      "Built a React Native mobile app and delivered it to internal review within ~3 months",
      "Architected an isomorphic (SSR) React application with server-side device detection (mobile/tablet/desktop) and Redux state hydration between server and client",
      "Shipped a real-time messenger (React + Redux-Saga) with WebSocket reconnect handling, plus a search autocomplete with keyboard navigation and mobile-responsive layout",
      "Added deep linking and push notifications to the mobile app, plus a modular Redux architecture split into independent feature packages (products, reviews, comments, users)",
    ],
    skills: ["JavaScript", "TypeScript", "React", "React Native", "Redux", "Docker", "Agile"],
  },
  {
    company: "Bonusway",
    url: "https://bonusway.com/",
    role: "Software Developer",
    period: "Dec 2014 — Sep 2016",
    location: "Helsinki · Remote",
    context: "Europe's leading e-commerce cashback service. Remote contractor.",
    bullets: [
      "Built a browser extension for Chrome, Opera, and Firefox that detected cashback and discount offers on partner sites and showed a one-click activation widget; also delivered a full UI redesign of the main platform",
      "Automated affiliate network integrations (Admitad, Adtraction, Tradedoubler, Tradetracker) via ~20 background scripts processing partner data in multiple formats",
      "Built admin panel modules for report generation, store management, and partner network operations",
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
    role: "Software Developer",
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
  "Senior Full Stack Engineer с 14+ годами в стартапах и enterprise-компаниях. Глубокая экспертиза в React, Vue и TypeScript; большой опыт в Node.js, Go, PHP и React Native. Строил веб-приложения и мобильные продукты от идеи до релиза; руководил frontend-командой до 5 инженеров. Открыт к удалённой работе, UTC-3 (Буэнос-Айрес).";

export const cvSkillsRu = [
  {
    name: "Frontend",
    items: ["TypeScript", "JavaScript", "React", "Vue 3", "Next.js", "Astro", "React Native"],
  },
  {
    name: "CSS & UI",
    items: ["Tailwind CSS", "CSS Modules", "Styled Components", "Chakra UI", "Ant Design"],
  },
  { name: "State & Data", items: ["Zustand", "Pinia", "TanStack Query", "Redux", "Thunk", "Saga"] },
  { name: "Backend", items: ["Node.js", "Go", "PHP", "PostgreSQL", "Redis", "Supabase"] },
  {
    name: "Практики",
    items: [
      "Micro Frontends",
      "FSD",
      "Atomic Design",
      "Web Accessibility",
      "Semantic HTML",
      "Web Vitals",
    ],
  },
  {
    name: "Инструменты",
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
  { name: "AI", items: ["Claude Code", "Codex", "Cursor"] },
];

export const cvExperienceRu: CvExperienceItem[] = experience.map((e) => ({
  company: e.company,
  url: e.ru.url ?? e.url,
  role: e.ru.role,
  period: e.ru.period,
  location: e.ru.location,
  context: e.ru.context,
  bullets: e.ru.bullets,
  skills: e.skills,
}));

// ─── RU — Fullstack variant (/ru/cv/fullstack/) ──────────────────────────────
// Separate positioning: same job history, backend/fullstack-weighted bullets and skills.
// Does not affect /cv/, /ru/cv/, /es/cv/, or the main site.

export const cvSummaryRuFullstack =
  "Senior Full Stack Engineer с 14+ годами в стартапах и enterprise-компаниях. Глубокая экспертиза в React, Vue и TypeScript; большой опыт разработки бэкенда на Node.js, Go и PHP, а также мобильных приложений на React Native. Строил веб- и мобильные продукты от идеи до релиза, от API до продакшен-интерфейса; руководил frontend-командой до 5 инженеров. Открыт к удалённой работе, UTC-3 (Буэнос-Айрес).";

export const cvSkillsRuFullstack = [
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
  { name: "Backend", items: ["Node.js", "Go", "PHP", "PostgreSQL", "Redis", "Supabase"] },
  {
    name: "Infra & DevOps",
    items: ["Docker", "AWS", "Cloudflare", "GitHub Actions", "nginx", "RabbitMQ", "Kafka"],
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
      "Web Accessibility (a11y)",
      "Semantic HTML",
      "Web Vitals",
    ],
  },
  {
    name: "Инструменты",
    items: ["Vite", "Webpack", "Jest", "Playwright", "Git", "Chrome DevTools"],
  },
  { name: "AI", items: ["Claude Code", "Codex", "Cursor"] },
];

export const cvExperienceRuFullstack: CvExperienceItem[] = [
  {
    company: "Fornex Hosting",
    url: "https://fornex.com/",
    role: "Senior Frontend Developer",
    period: "Сен 2025 — Мар 2026",
    location: "Удалённо",
    context:
      "Личный кабинет хостинг-провайдера (VPS, выделенные серверы, VPN, S3, домены). Часть страниц на Django-шаблонах, часть на Vue 2 (Options API); полный перенос на Vue 3 Composition API в отдельный фронтенд-репозиторий.",
    bullets: [
      "Вынес фронтенд из Django-монолита: перенёс ключевые модули на Composition API, Pinia и Headless UI (338 новых файлов, 279 Vue-компонентов), перейдя от привязки к бэкенд-стеку к отдельному фронтенд-репозиторию",
      "Спроектировал 18 доменных Pinia-хранилищ, инкапсулирующих бизнес-логику заказов, подписок и тарифов для 10+ разделов личного кабинета (VPS, выделенные серверы, хостинг, домены, AntiDDoS, S3 и другие)",
      "Заменил Highcharts кастомным SVG-компонентом (4 KB gzip вместо ~90 KB): zoom, multi-series, touch, подсказки",
      "Построил клиентский кэш: раньше каждый API-запрос отправлялся заново при открытии страницы, теперь большинство данных кешируется и обновляется только по событиям с сервера или действиям пользователя",
      "Внедрил веб-консоль удалённого доступа (noVNC/KVM-IPMI) для VPS и выделенных серверов: управление питанием, admin-доступ, rescue-режим",
      "Автоматизировал рутинные части миграции с помощью Claude Code и Cursor: извлечение i18n-строк, переписывание с Options API на Composition API, генерация boilerplate; часы ручной работы сводились к паре команд",
    ],
    skills: [
      "TypeScript",
      "Vue 3",
      "Pinia",
      "Tailwind CSS",
      "Vite",
      "Vue Router",
      "VueUse",
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
    context: "Платформа онлайн-фитнеса. Единственный frontend-инженер на протяжении 4 лет.",
    bullets: [
      "Разработал веб-платформу и панель администратора с нуля; провёл два полных редизайна",
      "По собственной инициативе спроектировал и разработал 40 JSON-RPC методов (Go) с нуля и доработал ещё 24, расширив зону ответственности за пределы основной фронтенд-роли: офферы, покупки, подписки, CMS-страницы, сегментация аудитории; также реализовал бэкенд-логику на PostgreSQL (PL/pgSQL) и автоматизировал бизнес-процессы через n8n",
      "Реализовал приём онлайн-платежей и автоплатежей через несколько провайдеров (ЮKassa, Prodamus, PayPal, Dolyame, Тинькофф Кредит, Робокасса), включая модель много-позиционных заказов с несколькими офферами в одной покупке, а также cron-джобы (gocron) для продления подписок и уведомлений",
      "Создал переиспользуемую библиотеку (~30 компонентов, Storybook-документация, rollup-пакеты): использовалась внутри продукта и у внешних партнёров",
      "Перевёл платформу на Next.js SSR: страницы, которые поисковики раньше не видели, стали полностью индексируемы",
      "Выстроил UI/UX дизайн-систему с нуля совместно с 2 дизайнерами и продукт-менеджером: от атомов до компонентов, внедрённых по всей платформе",
    ],
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Chakra UI",
      "Ant Design",
      "Node.js",
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
    role: "Lead Frontend Developer",
    period: "Сен 2018 — Фев 2021",
    location: "Удалённо",
    context:
      "Enterprise BPM/ECM-платформа для крупного бизнеса: Unilever, DHL, Raiffeisen Bank, JCB. Руководил командой до 5 frontend-инженеров.",
    bullets: [
      "Провёл полный рефакторинг и редизайн интерфейса Citeck ECOS: мигрировал стек с Apache FreeMarker, Knockout.js, ES5 и Gulp на React / ES6+ / Webpack с виджетными конфигурируемыми дашбордами, фильтруемыми таблицами с пагинацией и гибкой настройкой колонок",
      "Встроил BPM-движок Flowable в ECOS: корпоративные клиенты получили визуальный drag-and-drop инструмент для создания и управления бизнес-процессами",
      "Разработал редактор BPMN/CMMN-процессов на bpmn-js и cmmn-js: визуальный инструмент вместо ручной правки XML",
      "Написал no-code конструктор форм на formio.js (~12 кастомных + ~22 доработанных компонента): сотрудники получили возможность создавать формы без написания кода",
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
      "Agile",
    ],
  },
  {
    company: "irecommend.ru",
    url: "https://irecommend.ru/",
    role: "Senior Software Developer",
    period: "Сен 2016 — Авг 2018",
    location: "Краснодар",
    context:
      "Платформа отзывов с миллионами ежемесячных посетителей. Full-stack: фронтенд, мобайл, бэкенд.",
    bullets: [
      "Разработал React SPA; провёл полный редизайн интерфейса irecommend.ru (миллионы ежемесячных посетителей)",
      "Построил мобильное приложение на React Native и сдал на внутреннее ревью за ~3 месяца",
      "Отвечал за ~10 Go-микросервисов, включая фреймворк для компоновки API; время запуска нового сервиса сократилось с дней до часов",
      "Создал protobuf-компиляторы для Go, PHP и JavaScript, компрессор шрифтов и генераторы кода на Go/TypeScript: докеризированные CLI-утилиты, которые свели многошаговый ручной boilerplate к одной команде",
      "Спроектировал и реализовал сервер авторизации OAuth2 на Go с хранением токенов в Tarantool (in-memory база данных), связанный с legacy PHP/Drupal-бэкендом через mutual TLS",
      "Поддерживал нативный мост (Android/iOS), связывающий мобильное приложение с Go-сервисом через кастомный бинарный RPC-протокол (Protocol Buffers), с оффлайн-кэшем (SQLite, TTL) и long-polling синхронизацией",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
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
    role: "Software Developer",
    period: "Дек 2014 — Сен 2016",
    location: "Хельсинки · Удалённо",
    context: "Ведущий европейский e-commerce кешбэк-сервис. Аутсорс.",
    bullets: [
      "Разработал расширение для браузеров (Chrome, Opera, Firefox), которое находило кешбэк и скидки на сайтах партнёров и показывало виджет с активацией в один клик; параллельно сделал полный редизайн основной платформы",
      "Автоматизировал интеграции с партнёрскими сетями (Admitad, Adtraction, Tradedoubler, Tradetracker) через ~20 фоновых скриптов, обрабатывавших данные в разных форматах",
      "Разработал модули admin-панели: генерация отчётов, управление магазинами и партнёрскими интеграциями",
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
    role: "Software Developer",
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

// ─── RU — Frontend variant (/ru/cv/frontend/) ────────────────────────────────
// Separate positioning: same job history as /ru/cv/, backend mentions minimized.
// Does not affect /cv/, /ru/cv/, /es/cv/, the fullstack variant, or the main site.

export const cvSummaryRuFrontend =
  "Senior Frontend Engineer с 14+ годами в стартапах и enterprise-компаниях. Глубокая экспертиза в React, Vue и TypeScript, продакшен-опыт с Node.js и мобильными приложениями на React Native. Строил веб- и мобильные продукты от идеи до релиза, от архитектуры до продакшен-интерфейса; руководил frontend-командой до 5 инженеров. Открыт к удалённой работе, UTC-3 (Буэнос-Айрес).";

export const cvSkillsRuFrontend = [
  {
    name: "Frontend",
    items: ["TypeScript", "JavaScript", "React", "Vue 3", "Next.js", "Astro", "React Native"],
  },
  {
    name: "CSS & UI",
    items: ["Tailwind CSS", "CSS Modules", "Styled Components", "Chakra UI", "Ant Design"],
  },
  { name: "State & Data", items: ["Zustand", "Pinia", "TanStack Query", "Redux", "Thunk", "Saga"] },
  { name: "Backend", items: ["Node.js", "Go", "PHP", "PostgreSQL", "Redis", "Supabase"] },
  {
    name: "Практики",
    items: [
      "Micro Frontends",
      "FSD",
      "Atomic Design",
      "Web Accessibility (a11y)",
      "Semantic HTML",
      "Web Vitals",
    ],
  },
  {
    name: "Инструменты",
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
      "JWT",
      "OAuth2",
      "Chrome DevTools",
    ],
  },
  { name: "AI", items: ["Claude Code", "Codex", "Cursor"] },
];

export const cvExperienceRuFrontend: CvExperienceItem[] = [
  {
    company: "Fornex Hosting",
    url: "https://fornex.com/",
    role: "Senior Frontend Developer",
    period: "Сен 2025 — Мар 2026",
    location: "Удалённо",
    context:
      "Личный кабинет хостинг-провайдера (VPS, выделенные серверы, VPN, S3, домены). Часть страниц на Django-шаблонах, часть на Vue 2 (Options API); полный перенос на Vue 3 Composition API в отдельный фронтенд-репозиторий.",
    bullets: [
      "Вынес фронтенд из Django-монолита: перенёс ключевые модули на Composition API, Pinia и Headless UI (338 новых файлов, 279 Vue-компонентов), перейдя от привязки к бэкенд-стеку к отдельному фронтенд-репозиторию",
      "Спроектировал 18 доменных Pinia-хранилищ, инкапсулирующих бизнес-логику заказов, подписок и тарифов для 10+ разделов личного кабинета (VPS, выделенные серверы, хостинг, домены, AntiDDoS, S3 и другие)",
      "Заменил Highcharts кастомным SVG-компонентом (4 KB gzip вместо ~90 KB): zoom, multi-series, touch, подсказки",
      "Построил клиентский кэш: раньше каждый API-запрос отправлялся заново при открытии страницы, теперь большинство данных кешируется и обновляется только по событиям с сервера или действиям пользователя",
      "Внедрил веб-консоль удалённого доступа (noVNC/KVM-IPMI) для VPS и выделенных серверов: управление питанием, admin-доступ, rescue-режим",
      "Автоматизировал рутинные части миграции с помощью Claude Code и Cursor: извлечение i18n-строк, переписывание с Options API на Composition API, генерация boilerplate; часы ручной работы сводились к паре команд",
    ],
    skills: [
      "TypeScript",
      "Vue 3",
      "Pinia",
      "Tailwind CSS",
      "Vite",
      "Vue Router",
      "VueUse",
      "Claude Code",
      "Kanban",
    ],
  },
  {
    company: "GymTeam",
    url: "https://gymteam.ru/sections",
    role: "Frontend Tech Lead",
    period: "Мар 2021 — Мар 2025",
    location: "Удалённо",
    context: "Платформа онлайн-фитнеса. Единственный frontend-инженер на протяжении 4 лет.",
    bullets: [
      "Разработал веб-платформу и панель администратора с нуля, а также backend API-эндпоинты (Go, PostgreSQL) по собственной инициативе; провёл два полных редизайна",
      "Спроектировал white-label платформу: одна кодовая база на Next.js обслуживала 3 продакшен-бренда с раздельными сборками под каждый",
      "Построил движок server-driven UI, рендерящий React-компоненты из JSON-схемы: команды получили возможность обновлять страницы (каталог, статьи, лендинги) без деплоя фронтенда",
      "Создал переиспользуемую библиотеку (~30 компонентов, Storybook-документация, rollup-пакеты): использовалась внутри продукта и у внешних партнёров",
      "Перевёл платформу на Next.js SSR: страницы, которые поисковики раньше не видели, стали полностью индексируемы",
      "Выстроил UI/UX дизайн-систему с нуля совместно с 2 дизайнерами и продукт-менеджером: от атомов до компонентов, внедрённых по всей платформе",
    ],
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Chakra UI",
      "Ant Design",
      "Node.js",
      "Go",
      "PostgreSQL",
      "Storybook",
      "Kanban",
    ],
  },
  {
    company: "Citeck",
    url: "https://www.citeck.ru/",
    role: "Lead Frontend Developer",
    period: "Сен 2018 — Фев 2021",
    location: "Удалённо",
    context:
      "Enterprise BPM/ECM-платформа для крупного бизнеса: Unilever, DHL, Raiffeisen Bank, JCB. Руководил командой до 5 frontend-инженеров.",
    bullets: [
      "Провёл полный рефакторинг и редизайн интерфейса Citeck ECOS: мигрировал стек с Apache FreeMarker, Knockout.js, ES5 и Gulp на React / ES6+ / Webpack с виджетными конфигурируемыми дашбордами, фильтруемыми таблицами с пагинацией и гибкой настройкой колонок",
      "Встроил BPM-движок Flowable в ECOS: корпоративные клиенты получили визуальный drag-and-drop инструмент для создания и управления бизнес-процессами",
      "Разработал редактор BPMN/CMMN-процессов на bpmn-js и cmmn-js: визуальный инструмент вместо ручной правки XML",
      "Написал no-code конструктор форм на formio.js (~12 кастомных + ~22 доработанных компонента): сотрудники получили возможность создавать формы без написания кода",
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
      "Agile",
    ],
  },
  {
    company: "irecommend.ru",
    url: "https://irecommend.ru/",
    role: "Senior Software Developer",
    period: "Сен 2016 — Авг 2018",
    location: "Краснодар",
    context:
      "Платформа отзывов с миллионами ежемесячных посетителей. Frontend и мобильная разработка: веб и нативные приложения.",
    bullets: [
      "Разработал React SPA; провёл полный редизайн интерфейса irecommend.ru (миллионы ежемесячных посетителей)",
      "Построил мобильное приложение на React Native и сдал на внутреннее ревью за ~3 месяца",
      "Спроектировал изоморфное (SSR) React-приложение с определением типа устройства (mobile/tablet/desktop) на сервере и синхронизацией состояния Redux между сервером и клиентом",
      "Выпустил real-time мессенджер (React + Redux-Saga) с автоматическим переподключением WebSocket, а также поисковый автокомплит с клавиатурной навигацией и адаптивной вёрсткой под мобильные устройства",
      "Добавил deep linking и push-уведомления в мобильное приложение, а также модульную redux-архитектуру из независимых пакетов (products, reviews, comments, users)",
    ],
    skills: ["JavaScript", "TypeScript", "React", "React Native", "Redux", "Docker", "Agile"],
  },
  {
    company: "Bonusway",
    url: "https://bonusway.com/",
    role: "Software Developer",
    period: "Дек 2014 — Сен 2016",
    location: "Хельсинки · Удалённо",
    context: "Ведущий европейский e-commerce кешбэк-сервис. Аутсорс.",
    bullets: [
      "Разработал расширение для браузеров (Chrome, Opera, Firefox), которое находило кешбэк и скидки на сайтах партнёров и показывало виджет с активацией в один клик; параллельно сделал полный редизайн основной платформы",
      "Автоматизировал интеграции с партнёрскими сетями (Admitad, Adtraction, Tradedoubler, Tradetracker) через ~20 фоновых скриптов, обрабатывавших данные в разных форматах",
      "Разработал модули admin-панели: генерация отчётов, управление магазинами и партнёрскими интеграциями",
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
    role: "Software Developer",
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
  "Senior Full Stack Engineer con 14+ años en startups y empresas enterprise. Expertise profundo en React, Vue y TypeScript; amplia experiencia en Node.js, Go, PHP y React Native. Desarrollé aplicaciones web y productos móviles de principio a fin; lideré un equipo frontend de hasta 5 ingenieros. Disponible para trabajo remoto, UTC-3 (Buenos Aires).";

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
  { name: "Backend", items: ["Node.js", "Go", "PHP", "PostgreSQL", "Redis", "Supabase"] },
  {
    name: "Prácticas",
    items: [
      "Micro Frontends",
      "FSD",
      "Atomic Design",
      "Web Accessibility",
      "Semantic HTML",
      "Web Vitals",
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
  { name: "AI", items: ["Claude Code", "Codex", "Cursor"] },
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
