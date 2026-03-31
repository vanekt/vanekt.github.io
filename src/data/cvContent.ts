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
  { name: "CSS & UI", items: ["Tailwind CSS", "Chakra UI", "Ant Design"] },
  { name: "State & Data", items: ["Zustand", "Pinia", "TanStack Query", "Redux"] },
  { name: "Backend", items: ["Node.js", "Go", "PHP", "PostgreSQL", "Redis"] },
  {
    name: "Tools",
    items: ["Docker", "Vite", "Webpack", "Jest", "REST", "gRPC", "WebSocket"],
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

// ─── RU ──────────────────────────────────────────────────────────────────────

export const cvSummaryRu =
  "Senior Full Stack Engineer с 14+ годами в стартапах и enterprise-компаниях. Глубокая экспертиза в React, Vue и TypeScript; большой опыт в Node.js, Go, PHP и React Native. Строил веб-приложения и мобильные продукты от идеи до релиза; руководил frontend-командой до 5 инженеров. Открыт к удалённой работе, UTC-3 (Буэнос-Айрес).";

export const cvSkillsRu = [
  {
    name: "Frontend",
    items: ["TypeScript", "JavaScript", "React", "Vue 3", "Next.js", "React Native"],
  },
  { name: "CSS & UI", items: ["Tailwind CSS", "Chakra UI", "Ant Design"] },
  { name: "State & Data", items: ["Zustand", "Pinia", "TanStack Query", "Redux"] },
  { name: "Backend", items: ["Node.js", "Go", "PHP", "PostgreSQL", "Redis"] },
  {
    name: "Инструменты",
    items: ["Docker", "Vite", "Webpack", "Jest", "REST", "gRPC", "WebSocket"],
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
  { name: "CSS & UI", items: ["Tailwind CSS", "Chakra UI", "Ant Design"] },
  { name: "State & Data", items: ["Zustand", "Pinia", "TanStack Query", "Redux"] },
  { name: "Backend", items: ["Node.js", "Go", "PHP", "PostgreSQL", "Redis"] },
  {
    name: "Herramientas",
    items: ["Docker", "Vite", "Webpack", "Jest", "REST", "gRPC", "WebSocket"],
  },
  { name: "AI", items: ["Claude Code", "Codex", "Cursor"] },
];

export const cvExperienceEs = cvExperienceEn;

// ─── Education & Languages ────────────────────────────────────────────────────

export const cvEducationEn =
  "Kemerovo State University, Specialist, Applied Mathematics and Computer Science · 2006–2011";
export const cvEducationRu =
  "Кемеровский государственный университет, Специалист, Прикладная математика и информатика · 2006–2011";

export const cvLanguagesEn = "Russian — native · English — B1 · Spanish — A1";
export const cvLanguagesRu = "Русский — родной · Английский — B1 · Испанский — A1";

export const cvEducationEs =
  "Universidad Estatal de Kémerovo, Especialista, Matemáticas Aplicadas e Informática · 2006–2011";
export const cvLanguagesEs = "Ruso — nativo · Inglés — B1 · Español — A1";
