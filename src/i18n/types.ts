export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  skills: string[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
}

export interface Translations {
  lang: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  sidebar: {
    name: string;
    title: string;
    location: string;
    timezone: string;
    bio: string;
    available: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  experience: {
    title: string;
    present: string;
    items: ExperienceItem[];
  };
  projects: {
    title: string;
    items: ProjectItem[];
  };
  skills: {
    title: string;
    groups: SkillGroup[];
  };
  contact: {
    title: string;
    text: string;
    email: string;
  };
}
