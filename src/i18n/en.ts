import type { Translations } from "./types";
import { experience } from "../data/experience";
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
    title: "Ivan Tkachenko - Senior Frontend / Full Stack Engineer",
    description:
      "Senior Frontend / Full Stack Engineer with 14+ years of experience building and modernizing web applications.",
  },
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact",
  },
  hero: {
    name: "Ivan Tkachenko",
    title: "Senior Frontend / Full Stack Engineer",
    pitch:
      "Senior Frontend / Full Stack Engineer with 14+ years of experience building and modernizing web applications - from startup MVPs to large-scale platforms. I help companies modernize legacy systems, reduce technical debt, and build scalable frontend architectures while improving performance.",
    available: "Open to remote opportunities",
  },
  about: {
    title: "About",
    paragraphs: [
      "I help companies modernize legacy systems, reduce technical debt, and build scalable frontend architectures while improving performance.",
      "Proven track record of managing large-scale projects from concept to implementation. Expertise in migrating complex projects from legacy stacks to modern technologies.",
      "Capable of implementing everything related to frontend: web applications of any complexity, libraries, widgets, browser extensions, cross-platform mobile apps. Extensive experience in backend development & server configuration.",
    ],
  },
  experience: {
    title: "Experience",
    present: "Present",
    items: experience.map((e) => ({ company: e.company, skills: e.skills, ...e.en })),
  },
  skills: {
    title: "Skills",
    groups: skillGroups.map((g) => ({ name: skillGroupNames[g.key] ?? g.key, items: g.items })),
  },
  contact: {
    title: "Contact",
    text: "I'm open to remote opportunities - full-time or contract. Feel free to reach out via email or any of the links below.",
    email: "Get in touch",
  },
};
