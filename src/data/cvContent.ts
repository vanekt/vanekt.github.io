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
    items: ["TypeScript", "JavaScript", "React", "Vue 3", "Next.js", "React Native"],
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
      "React Native",
      "Tailwind CSS",
      "CSS Modules",
      "Styled Components",
    ],
  },
  { name: "Backend", items: ["Node.js", "Go", "PHP", "PostgreSQL", "Redis", "Supabase"] },
  {
    name: "Infra & DevOps",
    items: ["Docker", "AWS", "GitHub Actions", "nginx", "RabbitMQ", "Kafka"],
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
      "Built a web-based remote console (noVNC/KVM-IPMI) for VPS and dedicated servers, covering power control, admin access, and rescue mode",
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
      "Implemented online payments and autopayments through the YooKassa API v2 (including a multi-item order model supporting several offers in a single purchase), plus cron-driven background jobs (gocron) for subscription renewals and notifications",
      "Built a reusable component library (~30 components, Storybook-documented, rollup-packaged) used internally and by external partners",
      "Migrated the platform to Next.js SSR: pages that were previously invisible to search engines became fully indexable",
      "Built a UI/UX design system from scratch with 2 designers and a PM: from atoms to components, adopted across the full web platform",
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
      "Built a BPMN/CMMN process editor on bpmn-js and cmmn-js, replacing manual XML configuration with a visual authoring tool",
      "Built a no-code form builder on formio.js (~12 custom + ~22 extended components) so configurators could create forms without writing code",
      "Integrated SSO authentication via Keycloak, including a local dev proxy bridging the frontend to the auth server",
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
      "Developed ~10 Go microservices including a large API composition framework; reduced new service bootstrap time from days to hours",
      "Authored protobuf compilers for Go, PHP, and JavaScript, a font compressor, and Go/TypeScript code generators: dockerized CLI utilities that replaced manual multi-step boilerplate with a single command",
      "Designed and built an OAuth2 authorization server in Go with token storage in Tarantool (in-memory database), bridged to a legacy PHP/Drupal backend over mutual TLS",
      "Built a native bridge (Android/iOS) connecting the mobile app to a Go backend service through a custom binary RPC protocol (Protocol Buffers), with offline caching (SQLite, TTL-based) and long-polling sync",
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
      "Built a real-time communication service (live chat, video calls, browser-to-phone calls, callbacks) with custom billing, payment gateway integrations, and SIP/Asterisk server infrastructure",
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
    items: ["TypeScript", "JavaScript", "React", "Vue 3", "Next.js", "React Native"],
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

// ─── ES ──────────────────────────────────────────────────────────────────────

export const cvSummaryEs =
  "Senior Full Stack Engineer con 14+ años en startups y empresas enterprise. Expertise profundo en React, Vue y TypeScript; amplia experiencia en Node.js, Go, PHP y React Native. Desarrollé aplicaciones web y productos móviles de principio a fin; lideré un equipo frontend de hasta 5 ingenieros. Disponible para trabajo remoto, UTC-3 (Buenos Aires).";

export const cvSkillsEs = [
  {
    name: "Frontend",
    items: ["TypeScript", "JavaScript", "React", "Vue 3", "Next.js", "React Native"],
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
