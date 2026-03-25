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

export interface Translations {
  lang: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    experience: string;
    skills: string;
    contact: string;
  };
  hero: {
    name: string;
    title: string;
    pitch: string;
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
