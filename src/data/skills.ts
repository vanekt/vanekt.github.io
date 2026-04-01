// Source of truth for skills.
// Skill items are language-agnostic (mostly tech names).
// Group names are translated in i18n files via the `key` field.

export interface SkillGroupData {
  key: string;
  items: string[];
}

export const skillGroups: SkillGroupData[] = [
  {
    key: "frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Vue",
      "Next.js",
      "React Native",
      "React Router",
      "Vue Router",
      "VueUse",
      "SSR",
      "SSG",
      "CRA",
      "lodash",
      "jQuery",
    ],
  },
  {
    key: "css",
    items: [
      "HTML",
      "CSS",
      "SCSS",
      "Tailwind CSS",
      "Chakra UI",
      "Ant Design",
      "Styled Components",
      "Bootstrap",
      "Atomic Design",
      "Responsive Design",
      "Browser Extensions",
    ],
  },
  {
    key: "state",
    items: ["Redux", "Thunk", "Saga", "Zustand", "Jotai", "Pinia", "TanStack Query"],
  },
  {
    key: "backend",
    items: [
      "Node.js",
      "Express",
      "Fastify",
      "Drizzle",
      "Go",
      "gin",
      "gorm",
      "gorilla",
      "PHP",
      "Laravel",
      "CodeIgniter",
      "Yii2",
    ],
  },
  {
    key: "infra",
    items: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Tarantool",
      "RabbitMQ",
      "Kafka",
      "Docker",
      "Docker Compose",
      "nginx",
      "Traefik",
      "AWS",
      "Supabase",
      "Render.com",
      "Expo",
      "n8n",
    ],
  },
  {
    key: "tools",
    items: [
      "Git",
      "Mercurial",
      "Vite",
      "Webpack",
      "rollup.js",
      "Gulp",
      "esbuild",
      "Jest",
      "Enzyme",
      "sinon.js",
      "ESLint",
      "Prettier",
      "REST",
      "WebSocket",
      "JSON-RPC",
      "gRPC",
      "GraphQL",
      "JWT",
      "OAuth2",
      "Jira",
      "shell",
    ],
  },
  {
    key: "ai",
    items: ["Claude Code", "Codex", "Cursor", "GitHub Copilot"],
  },
];
