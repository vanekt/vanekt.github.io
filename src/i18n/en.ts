import type { Translations } from "./types";
import { experience } from "../data/experience";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";

const skillGroupNames: Record<string, string> = {
  frontend: "Frontend",
  css: "CSS & UI",
  state: "State Management",
  backend: "Backend",
  infra: "Databases & Infra",
  tools: "Tools & Protocols",
  ai: "AI Tools",
};

export const en: Translations = {
  lang: "en",
  meta: {
    title: "Ivan Tkachenko - Senior Frontend & Full Stack Engineer",
    description:
      "Senior Frontend & Full Stack Engineer with 14+ years building products teams actually ship. React, Vue 3, TypeScript, Node.js, Go. Open to remote.",
  },
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
  sidebar: {
    name: "Ivan Tkachenko",
    title: "Senior Frontend / Full Stack Engineer",
    location: "Buenos Aires, Argentina",
    timezone: "UTC−3",
    bio: [
      "React, Vue, TypeScript",
      "Node.js, Go, PHP",
      "Legacy → Modern",
      "Performance",
      "Startup → Enterprise",
      "14+ YOE",
    ],
    available: "Open to remote",
  },
  about: {
    title: "About",
    paragraphs: [
      "I help companies modernize legacy systems, reduce technical debt, and build scalable frontend architectures while improving performance.",
      "Proven track record of managing large-scale projects from concept to implementation. Expertise in migrating complex projects from legacy stacks to modern technologies.",
      "Capable of implementing everything related to frontend: web applications of any complexity, libraries, widgets, browser extensions, cross-platform mobile apps.",
      "Extensive experience in backend development & server configuration.",
    ],
  },
  experience: {
    title: "Experience",
    present: "Present",
    items: experience.map((e) => ({
      company: e.company,
      skills: e.skills,
      ...e.en,
      url: e.en.url ?? e.url,
    })),
  },
  projects: {
    title: "Projects",
    items: projects.map((p) => ({
      name: p.name,
      logo: p.logo,
      stack: p.stack,
      github: p.github,
      demo: p.demo,
      ...p.en,
    })),
  },
  skills: {
    title: "Skills",
    groups: skillGroups.map((g) => ({ name: skillGroupNames[g.key] ?? g.key, items: g.items })),
  },
  contact: {
    title: "Contact",
    text: "Open to remote full-time or contract. Reach out via email or Telegram - I reply within 24 hours.",
    downloadCv: "Download CV",
  },
};
