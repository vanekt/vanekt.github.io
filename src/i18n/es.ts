import type { Translations } from "./types";
import { experience } from "../data/experience";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";

const skillGroupNames: Record<string, string> = {
  frontend: "Frontend",
  css: "CSS & UI",
  state: "Gestión de estado",
  backend: "Backend",
  infra: "BD e infraestructura",
  tools: "Herramientas y protocolos",
  ai: "Herramientas AI",
};

export const es: Translations = {
  lang: "es",
  meta: {
    title: "Ivan Tkachenko - Desarrollador Senior Frontend & Full Stack",
    description:
      "Desarrollador Senior Frontend & Full Stack con 14+ años de experiencia. React, Vue, TypeScript, Node.js, Go. Disponible para trabajo remoto.",
  },
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",
  },
  sidebar: {
    name: "Ivan Tkachenko",
    title: "Senior Frontend / Full Stack Developer",
    location: "Buenos Aires, Argentina",
    timezone: "UTC−3",
    bio: [
      "React, Vue, TypeScript",
      "Node.js, Go, PHP",
      "Legacy → Moderno",
      "Rendimiento",
      "Startup → Enterprise",
      "14+ años de experiencia",
    ],
    available: "Disponible para trabajo remoto",
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Senior Full Stack Engineer con 14+ años en startups y empresas enterprise. Expertise profundo en React, Vue y TypeScript; amplia experiencia en Node.js, Go, PHP y React Native. Desarrollé aplicaciones web y productos móviles de principio a fin; lideré un equipo frontend de hasta 5 ingenieros.",
      "Me especializo en modernizar sistemas legacy, reducir la deuda técnica y construir arquitecturas frontend escalables. Realizo migraciones a gran escala: de stacks obsoletos a React o Vue moderno.",
      "Trabajo en todo el espectro frontend: aplicaciones web, sistemas de diseño, extensiones de navegador, apps móviles (React Native); cuando es necesario, también me hago cargo del backend.",
    ],
  },
  experience: {
    title: "Experiencia",
    present: "Presente",
    items: experience.map((e) => ({
      company: e.company,
      skills: e.skills,
      ...e.en,
      url: e.en.url ?? e.url,
    })),
  },
  projects: {
    title: "Proyectos",
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
    title: "Habilidades",
    groups: skillGroups.map((g) => ({ name: skillGroupNames[g.key] ?? g.key, items: g.items })),
  },
  contact: {
    title: "Contacto",
    text: "Disponible para trabajo remoto a tiempo completo o por contrato. Escríbeme por email o Telegram — respondo en menos de 24 horas.",
    downloadCv: "Descargar CV",
  },
};
