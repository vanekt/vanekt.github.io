// Source of truth for projects.
// To add/edit a project — edit only this file.

export interface ProjectEntry {
  name: string;
  logo?: string;
  stack: string[];
  github?: string;
  demo?: string;
  en: { description: string };
  ru: { description: string };
}

export const projects: ProjectEntry[] = [
  {
    name: "Fornex Hosting Panel",
    logo: "/logos/fornex.svg",
    stack: ["Vue 3", "Pinia", "Headless UI", "Tailwind CSS", "Vue Router", "VueUse"],
    demo: "https://fornex.com/",
    en: {
      description:
        "Hosting control panel for managing VPS, dedicated servers, VPN, S3, domains and DNS. Migrated key modules from a legacy Vue 2 monorepo to a modern Vue 3 stack, replacing Django-rendered views with a fully client-side architecture.",
    },
    ru: {
      description:
        "Панель управления хостингом: VPS, выделенные серверы, VPN, S3, домены и DNS. Мигрировал ключевые модули с legacy Vue 2 монорепозитория на современный стек Vue 3, заменив серверный рендеринг на клиентскую архитектуру.",
    },
  },
  {
    name: "GymTeam",
    logo: "/logos/gymteam.png",
    stack: ["TypeScript", "React", "Next.js", "Node.js", "Go", "PostgreSQL"],
    demo: "https://gymteam.ru/sections",
    en: {
      description:
        "Online fitness platform. Built the web interface and admin panel from scratch, developed a component library, a dozen embeddable widgets, and integration libraries for third-party services. Led frontend architecture and collaborated with design on the UI system.",
    },
    ru: {
      description:
        "Платформа онлайн-фитнеса. С нуля разработал веб-интерфейс и панель администратора, создал библиотеку компонентов, около десятка встраиваемых виджетов и библиотеки интеграции со сторонними сервисами. Руководил frontend-архитектурой и работал с дизайнерами над UI-системой.",
    },
  },
  {
    name: "Citeck ECOS",
    logo: "/logos/citeck.svg",
    stack: ["React", "Redux", "JavaScript", "Webpack", "bpmn-js", "formio.js"],
    github: "https://github.com/Citeck",
    en: {
      description:
        "Open-source platform for managing business processes, employees and company documents. Designed and built a new SPA from scratch, migrated the legacy stack, and developed a BPMN process editor and a custom form builder.",
    },
    ru: {
      description:
        "Open-source платформа для управления бизнес-процессами, сотрудниками и документами компании. Спроектировал и разработал новый SPA с нуля, мигрировал legacy-стек, создал редактор BPMN-процессов и конструктор форм.",
    },
  },
  {
    name: "iRecommend.ru",
    logo: "/logos/irecommend.png",
    stack: ["React", "React Native", "Go", "PHP", "gRPC", "PostgreSQL"],
    demo: "https://irecommend.ru/",
    en: {
      description:
        "Review platform for products and services. Developed the SPA and a React Native mobile app prototype. Contributed to a Golang microservices framework and a cross-platform RPC protocol based on gRPC.",
    },
    ru: {
      description:
        "Платформа отзывов о товарах и услугах. Разработал SPA и прототип мобильного приложения на React Native. Участвовал в создании фреймворка микросервисов на Go и кроссплатформенного RPC-протокола на базе gRPC.",
    },
  },
  {
    name: "Bonusway",
    logo: "/logos/bonusway.svg",
    stack: ["React", "PHP", "MySQL", "AWS", "Ionic"],
    demo: "https://bonusway.com/",
    en: {
      description:
        "The leading e-commerce cashback service in Europe. Built admin panel features including reports and partner network management, automated integrations with Admitad, Adtraction, Tradedoubler, and Tradetracker, browser extensions, and a hybrid mobile app.",
    },
    ru: {
      description:
        "Ведущий европейский кешбэк-сервис. Разработал функционал панели администратора: отчёты и управление партнёрскими сетями, фоновые скрипты интеграции Admitad, Adtraction, Tradedoubler, Tradetracker, расширения для браузеров и гибридное мобильное приложение.",
    },
  },
  {
    name: "GRAM",
    stack: ["PHP", "Yii2", "MySQL", "jQuery"],
    en: {
      description:
        "CRM for a door manufacturer. Built an order configurator with a real-time visual preview of the assembled door - panels, hardware, and architraves. Included report generation, invoice and cutting sheet export, and role-based user access management.",
    },
    ru: {
      description:
        "CRM для производителя дверей. Конфигуратор заказов с визуальным превью собранной двери в реальном времени - полотно, фурнитура, наличники. Генерация отчётов, выгрузка счетов-фактур и листов раскроя, управление пользователями с разграничением прав доступа.",
    },
  },
  {
    name: "vanekt.github.io",
    stack: ["Astro", "Tailwind", "TypeScript", "Claude Code"],
    github: "https://github.com/vanekt/vanekt.github.io",
    demo: "https://vanekt.github.io",
    en: {
      description:
        "This site - a minimal, fast personal portfolio built with Astro, Tailwind CSS 4, and zero JS by default. Designed from a self-written PRD and Design Brief; scored Lighthouse 95+ on Performance, Accessibility, and SEO.",
    },
    ru: {
      description:
        "Этот сайт - минималистичное быстрое портфолио на Astro, Tailwind CSS 4, без JS по умолчанию. Спроектирован по собственному PRD и Design Brief; Lighthouse 95+ по Performance, Accessibility и SEO.",
    },
  },
  {
    name: "The Last of Guss",
    logo: "/logos/guss.svg",
    stack: [
      "React",
      "TypeScript",
      "Vue",
      "Fastify",
      "Drizzle",
      "PostgreSQL",
      "TanStack Query",
      "Jotai",
    ],
    github: "https://github.com/vanekt/the-last-of-guss",
    en: {
      description:
        "A browser game where players compete to see who can tap the fastest and hardest on a virtual goose that has contracted the G-42 mutation. Built as a take-home assignment submitted to a potential employer.",
    },
    ru: {
      description:
        "Браузерная игра, в которой игроки соревнуются - кто быстрее и сильнее тапает по виртуальному гусю, заразившемуся мутацией G-42. Создана в рамках тестового задания потенциальному работодателю.",
    },
  },
];
