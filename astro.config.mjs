// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://vanekt.github.io',
  integrations: [
    sitemap({
      filter: (page) => !/\/cv\/?$/.test(page),
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
    },
  },
  vite: {
    // @ts-expect-error — @tailwindcss/vite returns Plugin[] which TS can't assign to PluginOption here
    plugins: [tailwindcss()],
  },
})
