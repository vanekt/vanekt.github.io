import type { Translations } from "./types";
import { experience } from "../data/experience";
import { skillGroups } from "../data/skills";

const skillGroupNames: Record<string, string> = {
  frontend: "Frontend",
  css: "CSS & UI",
  state: "Управление состоянием",
  backend: "Backend",
  infra: "БД и инфраструктура",
  tools: "Инструменты и протоколы",
  ai: "AI-инструменты",
};

export const ru: Translations = {
  lang: "ru",
  meta: {
    title: "Иван Ткаченко - Senior Frontend & Full Stack разработчик",
    description:
      "Senior Frontend & Full Stack разработчик с 14+ годами опыта. React, Vue 3, TypeScript, Node.js, Go. Открыт к удалённой работе.",
  },
  nav: {
    about: "Обо мне",
    experience: "Опыт",
    projects: "Проекты",
    skills: "Навыки",
    contact: "Контакты",
  },
  sidebar: {
    name: "Иван Ткаченко",
    title: "Senior Frontend / Full Stack разработчик",
    location: "Буэнос-Айрес, Аргентина",
    timezone: "UTC−3",
    bio: [
      "React, Vue, TypeScript",
      "Node.js, Go, PHP",
      "Легаси → Современный стек",
      "Производительность",
      "Стартап → Энтерпрайз",
      "14+ лет опыта",
    ],
    available: "Открыт к удалённой работе",
  },
  about: {
    title: "Обо мне",
    paragraphs: [
      "Помогаю компаниям модернизировать legacy-системы, снижать технический долг и строить масштабируемую frontend-архитектуру с фокусом на производительность.",
      "Ведение крупных проектов от концепции до реализации. Миграция сложных проектов с легаси-стека на современные технологии.",
      "Способен реализовать всё, что связано с фронтендом: веб-приложения любой сложности, библиотеки, виджеты, расширения для браузеров, кроссплатформенные мобильные приложения. Значительный опыт в разработке бэкенда и настройке серверов.",
    ],
  },
  experience: {
    title: "Опыт работы",
    present: "н.в.",
    items: experience.map((e) => ({
      company: e.company,
      skills: e.skills,
      ...e.ru,
      url: e.ru.url ?? e.url,
    })),
  },
  projects: {
    title: "Проекты",
    items: [
      {
        name: "vanekt.github.io",
        description:
          "Этот сайт - минималистичное быстрое портфолио на Astro, Tailwind CSS 4, без JS по умолчанию. Спроектирован по собственному PRD и Design Brief; Lighthouse 95+ по Performance, Accessibility и SEO.",
        stack: ["Astro", "Tailwind CSS 4", "TypeScript"],
        github: "https://github.com/vanekt/vanekt.github.io",
        demo: "https://vanekt.github.io",
      },
    ],
  },
  skills: {
    title: "Навыки",
    groups: skillGroups.map((g) => ({ name: skillGroupNames[g.key] ?? g.key, items: g.items })),
  },
  contact: {
    title: "Контакты",
    text: "Открыт к удалённой full-time или контрактной работе. Пишите на email или в Telegram - отвечаю в течение 24 часов.",
  },
};
