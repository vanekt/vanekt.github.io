// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://vanekt.github.io',
  integrations: [],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light-high-contrast',
        dark: 'github-dark-high-contrast',
      },
      defaultColor: false,
    },
  },
  vite: {
    // @ts-expect-error — @tailwindcss/vite returns Plugin[] which TS can't assign to PluginOption here
    plugins: [tailwindcss()],
  },
})
