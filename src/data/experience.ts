// Source of truth for work experience.
// To add/edit a job - edit only this file.

export interface ExperienceLocale {
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface ExperienceEntry {
  company: string;
  skills: string[];
  en: ExperienceLocale;
  ru: ExperienceLocale;
}

export const experience: ExperienceEntry[] = [
  {
    company: "Fornex Hosting SL",
    skills: ["TypeScript", "Vue 3", "Pinia", "Tailwind CSS", "Vite", "Vue Router", "VueUse"],
    en: {
      role: "Senior Frontend Developer",
      period: "Sep 2025 — Present",
      location: "Remote",
      bullets: [
        "Transitioned from React to Vue 3 and shipped production features within the first week",
        "Owned migration of key frontend modules from legacy monorepo (Vue 2, Options API, Bootstrap, Django templates) to a modern stack (Vue 3, Composition API, Pinia, Headless UI), decoupling frontend from backend and replacing server-rendered views with client-side architecture",
        "Replaced Highcharts with a custom SVG chart component - 4 KB gzip vs ~90 KB - with zoom, multi-series, touch, and tooltips",
        "Implemented client-side caching to reduce redundant API calls and improve UI responsiveness",
        "Improved accessibility with full keyboard navigation and ARIA support; implemented responsive dark/light theming",
        "Added i18n with locale-aware formatting for dates, numbers, and currencies",
        "Conducted code reviews and contributed to frontend architecture decisions during active migration phase",
      ],
    },
    ru: {
      role: "Senior Frontend Developer",
      period: "Сен 2025 — н.в.",
      location: "Удалённо",
      bullets: [
        "Перешёл с React на Vue 3 и уже в первую неделю начал поставлять продакшен-фичи",
        "Отвечал за миграцию ключевых frontend-модулей из legacy-монорепозитория (Vue 2, Options API, Bootstrap, Django templates) на современный стек (Vue 3, Composition API, Pinia, Headless UI), отвязав frontend от backend и заменив серверный рендеринг на клиентскую архитектуру",
        "Заменил Highcharts на кастомный SVG-компонент (≈4 KB gzip вместо ~90 KB) с поддержкой зума, мульти-серий, touch-событий и тултипов",
        "Реализовал клиентское кэширование, сократив количество лишних API-запросов и улучшив отзывчивость интерфейса",
        "Улучшил доступность: полная навигация с клавиатуры, поддержка ARIA; реализовал адаптивную тёмную/светлую тему",
        "Добавил i18n с учётом локали (даты, числа, валюты)",
        "Проводил код-ревью и участвовал в принятии архитектурных решений на этапе активной миграции",
      ],
    },
  },
  {
    company: "GymTeam",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Chakra UI",
      "Ant Design",
      "Node.js",
      "Go",
      "PostgreSQL",
    ],
    en: {
      role: "Frontend Tech Lead",
      period: "Mar 2021 — Mar 2025",
      location: "Remote",
      bullets: [
        "Developed from scratch web interfaces for an online fitness platform and an administrator panel",
        "Created a component library for reuse across projects; used Storybook for isolated development and documentation",
        "Developed about a dozen embeddable widgets and several libraries for integration with third-party services",
        "Implemented SSR to enhance SEO and improve application performance",
        "Built a responsive version for mobile browsers, added support for ultra-wide screens",
        "Participated in API development using Golang and PostgreSQL",
        "Collaborated with the design team on UI/UX and a design system",
        "Refactored code, improved architecture, optimized performance",
      ],
    },
    ru: {
      role: "Frontend Tech Lead",
      period: "Мар 2021 — Мар 2025",
      location: "Удалённо",
      bullets: [
        "Разработал с нуля web-интерфейсы для платформы занятий онлайн-фитнесом и панели управления системой",
        "Создал библиотеку компонентов для переиспользования между проектами; использовал Storybook для изолированной разработки и документации",
        "Разработал около десятка встраиваемых виджетов и несколько библиотек для интеграции на сторонних сервисах",
        "Внедрил серверный рендеринг (SSR) для улучшения SEO и производительности",
        "Разработал адаптивную версию сайта для мобильных браузеров и широких экранов",
        "Принимал участие в разработке API с использованием Golang и PostgreSQL",
        "Взаимодействовал с командой дизайнеров при разработке UI/UX и дизайн-системы",
        "Занимался рефакторингом кода, улучшением архитектуры, оптимизацией производительности",
      ],
    },
  },
  {
    company: "Citeck",
    skills: ["JavaScript", "React", "Redux", "Webpack", "Jest", "Docker", "Bootstrap"],
    en: {
      role: "Lead Frontend Developer",
      period: "Sep 2018 — Feb 2021",
      location: "Remote",
      bullets: [
        "Designed the architecture and developed a new version of the Citeck ECOS system interface",
        "Migrated the majority of functionality from the legacy interface (Apache FreeMarker, Knockout.js, jQuery, ES5, Gulp) to the new one (SPA, React, ES6+, Webpack)",
        "Integrated the frontend part of the Flowable engine into the Citeck ECOS interface",
        "Developed a business process editor based on bpmn-js and cmmn-js",
        "Created a form editor using formio.js and built around a dozen custom components",
        "Managed a team of frontend developers while actively mentoring them",
        "Introduced unit testing practices and conducted code reviews",
      ],
    },
    ru: {
      role: "Lead Frontend Developer",
      period: "Сен 2018 — Фев 2021",
      location: "Удалённо",
      bullets: [
        "Спроектировал архитектуру и разработал новую версию интерфейса системы Citeck ECOS",
        "Мигрировал большую часть функционала из старой версии интерфейса (Apache FreeMarker, Knockout.js, jQuery, ES5, Gulp) в новую (SPA, React, ES6+, Webpack)",
        "Внедрил frontend-часть движка Flowable в интерфейс Citeck ECOS",
        "Разработал редактор бизнес-процессов на основе bpmn-js и cmmn-js",
        "Разработал редактор форм на основе formio.js, разработал с десяток нестандартных компонентов",
        "Управлял командой frontend-разработчиков, активно занимаясь их наставничеством",
        "Внедрил практику написания юнит-тестов; проводил код-ревью",
      ],
    },
  },
  {
    company: "irecommend.ru",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Go",
      "PHP",
      "PostgreSQL",
      "gRPC",
    ],
    en: {
      role: "Senior Software Developer",
      period: "Sep 2016 — Aug 2018",
      location: "Krasnodar",
      bullets: [
        "Developed a single-page application (SPA) using React",
        "Implemented a new website design fully reworked by a designer",
        "Created a mobile app prototype using React Native",
        "Contributed to a framework for rapid microservice assembly in Golang",
        "Took part in building a cross-platform RPC protocol based on gRPC",
        "Developed a range of microservices and libraries using Golang, JavaScript, and PHP",
        "Built utilities to simplify development (code generators, protobuf compilers, font compressor, etc.)",
      ],
    },
    ru: {
      role: "Senior Software Developer",
      period: "Сен 2016 — Авг 2018",
      location: "Краснодар",
      bullets: [
        "Работал над созданием SPA на React",
        "Реализовал новый дизайн сайта, полностью переработанный дизайнером",
        "Создал прототип мобильного приложения с помощью React Native",
        "Участвовал в разработке фреймворка для быстрой сборки микросервисов на Golang",
        "Принимал участие в создании кроссплатформенного протокола для удалённого вызова процедур на базе gRPC",
        "Разработал ряд микросервисов и библиотек с использованием Golang, JavaScript и PHP",
        "Создал утилиты для упрощения разработки (генераторы кода, protobuf-компиляторы, компрессор шрифтов и т.д.)",
      ],
    },
  },
  {
    company: "Bonusway",
    skills: ["JavaScript", "React", "Redux", "PHP", "MySQL", "AWS", "Bootstrap"],
    en: {
      role: "Software Developer",
      period: "Dec 2014 — Sep 2016",
      location: "Helsinki · Remote",
      bullets: [
        "Developed new functionality for an admin panel (report generation, store management, partner network integration)",
        "Built background scripts for partner network integrations (Admitad, Adtraction, Tradedoubler, Tradetracker) to collect and process data in multiple formats",
        "Created browser extensions for Chrome, Opera, and Yandex",
        "Built a hybrid mobile application using Ionic Framework",
      ],
    },
    ru: {
      role: "Software Developer",
      period: "Дек 2014 — Сен 2016",
      location: "Хельсинки · Удалённо",
      bullets: [
        "Разработал большую часть функционала для admin-панели (отчёты, управление магазинами, работа с партнёрскими сетями)",
        "Разработал около 20 фоновых скриптов для интеграции партнёрских сетей (Admitad, Adtraction, Tradedoubler, Tradetracker) для сбора и обработки данных",
        "Разработал расширения для браузеров (Chrome, Opera, Yandex)",
        "Участвовал в разработке гибридного мобильного приложения с использованием Ionic Framework",
      ],
    },
  },
  {
    company: "ICT LLC",
    skills: ["JavaScript", "PHP", "MySQL", "Linux", "SIP", "Asterisk"],
    en: {
      role: "Software Developer",
      period: "Aug 2011 — Dec 2014",
      location: "Kemerovo",
      bullets: [
        "Independently developed from scratch a web platform for property management companies - utility meter readings, emergency notifications, service requests, real-time camera streaming, and online payments",
        "Built a web service for client website communication featuring live chat, callback requests, video calls, and browser-to-phone calls",
        "Developed and integrated a billing system and payment gateway services",
        "Set up server infrastructure: CentOS, Apache, MySQL, SIP, Asterisk, Red5, VideoWhisper",
      ],
    },
    ru: {
      role: "Software Developer",
      period: "Авг 2011 — Дек 2014",
      location: "Кемерово",
      bullets: [
        "С нуля в одиночку разработал веб-платформу для управляющих компаний: передача показаний счётчиков, уведомления, обработка заявок, трансляции с камер, онлайн-оплата",
        "Разработал веб-сервис для коммуникации на клиентских сайтах: живой чат, обратный звонок, видеозвонки, звонки из браузера на телефон",
        "Разработал и интегрировал биллинговую систему и сервисы платёжных шлюзов",
        "Настроил серверную инфраструктуру: CentOS, Apache, MySQL, SIP, Asterisk, Red5, VideoWhisper",
      ],
    },
  },
];
