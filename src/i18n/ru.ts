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
    title: "Иван Ткаченко - Senior Frontend / Full Stack разработчик",
    description:
      "Senior Frontend / Full Stack разработчик с 14+ годами опыта разработки и модернизации веб-приложений.",
  },
  nav: {
    about: "Обо мне",
    experience: "Опыт",
    skills: "Навыки",
    contact: "Контакты",
  },
  hero: {
    name: "Иван Ткаченко",
    title: "Senior Frontend / Full Stack разработчик",
    pitch:
      "Senior Frontend / Full Stack разработчик с 14+ годами опыта разработки и модернизации веб-приложений - от MVP стартапов до крупных систем. Помогаю компаниям модернизировать legacy-системы, снижать технический долг и строить масштабируемую frontend-архитектуру с фокусом на производительность.",
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
    items: experience.map((e) => ({ company: e.company, skills: e.skills, ...e.ru })),
  },
  skills: {
    title: "Навыки",
    groups: skillGroups.map((g) => ({ name: skillGroupNames[g.key] ?? g.key, items: g.items })),
  },
  contact: {
    title: "Контакты",
    text: "Открыт к удалённой работе - full-time или контракт. Пишите на email или в любой из мессенджеров.",
    email: "Написать",
  },
};
