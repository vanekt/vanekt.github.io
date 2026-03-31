// Source of truth for work experience.
// To add/edit a job - edit only this file.

export interface ExperienceLocale {
  role: string;
  period: string;
  location: string;
  context: string;
  bullets: string[];
  url?: string;
}

export interface ExperienceEntry {
  company: string;
  url?: string;
  skills: string[];
  en: ExperienceLocale;
  ru: ExperienceLocale;
}

export const experience: ExperienceEntry[] = [
  {
    company: "Fornex Hosting",
    url: "https://fornex.com/",
    skills: ["TypeScript", "Vue 3", "Pinia", "Tailwind CSS", "Vite", "Vue Router", "VueUse"],
    en: {
      role: "Senior Frontend Developer",
      period: "Sep 2025 — Present",
      location: "Remote",
      context:
        "Client portal for a hosting provider (VPS, dedicated servers, VPN, S3, domains). Mix of Django-templated pages and Vue 2 Options API components; full migration to Vue 3 Composition API in a standalone frontend repo.",
      bullets: [
        "Shipped production features within the first week of joining a live Vue 2 to Vue 3 migration, despite a React-only background",
        "Drove the frontend extraction from the Django monolith: migrated core modules to Composition API, Pinia, and Headless UI, moving from a backend-coupled codebase to a standalone frontend repo",
        "Replaced Highcharts with a custom SVG chart component (4 KB gzip vs ~90 KB): zoom, multi-series, touch, tooltips",
        "Built a client-side caching layer: before, every API call fired fresh on each page load; after, most data is cached and only refreshes on server events or user actions",
        "Migrated hundreds of components with full support for dark/light theming, 6 locales, and responsive breakpoints",
        "Automated the repetitive parts of migration with Claude Code and Cursor: i18n extraction, Options API to Composition API rewrites, boilerplate generation; hours of manual work reduced to a few commands",
      ],
    },
    ru: {
      role: "Senior Frontend Developer",
      period: "Сен 2025 — н.в.",
      location: "Удалённо",
      context:
        "Личный кабинет хостинг-провайдера (VPS, выделенные серверы, VPN, S3, домены). Часть страниц на Django-шаблонах, часть на Vue 2 (Options API); полный перенос на Vue 3 Composition API в отдельный фронтенд-репозиторий.",
      bullets: [
        "Выпустил первые продакшен-фичи в первую неделю работы в условиях активной миграции Vue 2 на Vue 3, несмотря на React-бэкграунд",
        "Вынес фронтенд из Django-монолита: перенёс ключевые модули на Composition API, Pinia и Headless UI, перейдя от привязки к бэкенд-стеку к отдельному фронтенд-репозиторию",
        "Заменил Highcharts кастомным SVG-компонентом (4 KB gzip вместо ~90 KB): zoom, multi-series, touch, подсказки",
        "Построил клиентский кэш: раньше каждый API-запрос отправлялся заново при открытии страницы, теперь большинство данных кешируется и обновляется только по событиям с сервера или действиям пользователя",
        "Перенёс сотни компонентов с полной поддержкой тёмной/светлой темы, 6 языков (i18n) и адаптивных брейкпоинтов",
        "Автоматизировал рутинные части миграции с помощью Claude Code и Cursor: извлечение i18n-строк, переписывание с Options API на Composition API, генерация boilerplate; часы ручной работы сводились к паре команд",
      ],
    },
  },
  {
    company: "GymTeam",
    url: "https://gymteam.ru/sections",
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
    ],
    en: {
      role: "Frontend Tech Lead",
      period: "Mar 2021 — Mar 2025",
      location: "Remote",
      context: "Online fitness platform. Sole frontend engineer for the full 4-year engagement.",
      bullets: [
        "Built the web platform and admin panel from scratch; shipped two complete redesigns as the product evolved",
        "Built a reusable component library (~30 components, Storybook-documented, rollup-packaged) used internally and by external partners",
        "Migrated the platform to Next.js SSR: pages that were previously invisible to search engines became fully indexable",
        "Built 10+ Go + PostgreSQL API endpoints on own initiative, expanding beyond the primary frontend role",
        "Built a UI/UX design system from scratch with 2 designers and a PM: from atoms to components, adopted across the full web platform",
      ],
    },
    ru: {
      role: "Frontend Tech Lead",
      period: "Мар 2021 — Мар 2025",
      location: "Удалённо",
      context: "Платформа онлайн-фитнеса. Единственный frontend-инженер на протяжении 4 лет.",
      bullets: [
        "Разработал веб-платформу и панель администратора с нуля; провёл два полных редизайна",
        "Разработал переиспользуемую библиотеку (~30 компонентов, Storybook-документация, rollup-пакеты): использовалась внутри продукта и у внешних партнёров",
        "Перевёл платформу на Next.js SSR: страницы, которые поисковики раньше не видели, стали полностью индексируемы",
        "По собственной инициативе реализовал более десятка API-эндпоинтов на Go + PostgreSQL, расширив зону ответственности за пределы основной фронтенд-роли",
        "Выстроил UI/UX дизайн-систему с нуля совместно с 2 дизайнерами и продукт-менеджером: от атомов до компонентов, внедрённых по всей платформе",
      ],
    },
  },
  {
    company: "Citeck",
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
    ],
    en: {
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
        "Led a team of up to 5 frontend engineers, ran technical interviews, introduced unit testing and code review practices across the team",
      ],
    },
    ru: {
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
        "Руководил командой до 5 frontend-разработчиков, проводил технические интервью, внедрил юнит-тестирование и практику код-ревью в команде",
      ],
    },
  },
  {
    company: "irecommend.ru",
    url: "https://irecommend.ru/",
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
    ],
    en: {
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
      ],
    },
    ru: {
      role: "Senior Software Developer",
      period: "Сен 2016 — Авг 2018",
      location: "Краснодар",
      context:
        "Платформа отзывов с миллионами ежемесячных посетителей. Full-stack: фронтенд, мобайл, бэкенд.",
      bullets: [
        "Разработал React SPA; провёл полный редизайн интерфейса irecommend.ru (миллионы ежемесячных посетителей)",
        "Разработал мобильное приложение на React Native и сдал на внутреннее ревью за ~3 месяца",
        "Написал ~10 Go-микросервисов, включая фреймворк для компоновки API; время запуска нового сервиса сократилось с дней до часов",
        "Создал protobuf-компиляторы для Go, PHP и JavaScript, компрессор шрифтов и генераторы кода на Go/TypeScript: докеризированные CLI-утилиты, которые свели многошаговый ручной boilerplate к одной команде",
      ],
    },
  },
  {
    company: "Bonusway",
    url: "https://bonusway.com/",
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
    en: {
      role: "Software Developer",
      period: "Dec 2014 — Sep 2016",
      location: "Helsinki · Remote",
      context: "Europe's leading e-commerce cashback service. Remote contractor.",
      bullets: [
        "Built a browser extension for Chrome, Opera, and Firefox that detected cashback and discount offers on partner sites and showed a one-click activation widget; also delivered a full UI redesign of the main platform",
        "Automated affiliate network integrations (Admitad, Adtraction, Tradedoubler, Tradetracker) via ~20 background scripts processing partner data in multiple formats",
        "Built admin panel modules for report generation, store management, and partner network operations",
      ],
    },
    ru: {
      role: "Software Developer",
      period: "Дек 2014 — Сен 2016",
      location: "Хельсинки · Удалённо",
      context: "Ведущий европейский e-commerce кешбэк-сервис. Аутсорс.",
      bullets: [
        "Разработал расширение для браузеров (Chrome, Opera, Firefox), которое находило кешбэк и скидки на сайтах партнёров и показывало виджет с активацией в один клик; параллельно сделал полный редизайн основной платформы",
        "Автоматизировал интеграции с партнёрскими сетями (Admitad, Adtraction, Tradedoubler, Tradetracker) через ~20 фоновых скриптов, обрабатывавших данные в разных форматах",
        "Разработал модули admin-панели: генерация отчётов, управление магазинами и партнёрскими интеграциями",
      ],
    },
  },
  {
    company: "ICT LLC",
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
    en: {
      role: "Software Developer",
      period: "Aug 2011 — Dec 2014",
      location: "Kemerovo",
      context: "Regional IT company. Sole developer on two independent web platforms.",
      bullets: [
        "Delivered a property management portal (utility readings, maintenance requests, emergency alerts, live camera feeds, online utility payments) integrated with housing company APIs",
        "Built a real-time communication service (live chat, video calls, browser-to-phone calls, callbacks) with custom billing, payment gateway integrations, and SIP/Asterisk server infrastructure",
      ],
    },
    ru: {
      role: "Software Developer",
      period: "Авг 2011 — Дек 2014",
      location: "Кемерово",
      context:
        "Региональная IT-компания. Единственный разработчик на двух независимых веб-платформах.",
      bullets: [
        "Разработал платформу для управляющих компаний: передача показаний счётчиков, обработка заявок, аварийные уведомления, трансляции с камер, онлайн-оплата ЖКУ, интеграция с системой ТСЖ",
        "Создал веб-сервис коммуникации для сайтов: живой чат, видеозвонки, звонки из браузера на телефон, обратный звонок; биллинг, платёжные шлюзы и серверная инфраструктура на SIP/Asterisk",
      ],
    },
  },
];
