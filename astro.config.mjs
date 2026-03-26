// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

export default defineConfig({
  site: 'https://vanekt.github.io',
  integrations: [icon()],
  vite: {
    // @ts-expect-error — @tailwindcss/vite returns Plugin[] which TS can't assign to PluginOption here
    plugins: [tailwindcss()],
  },
})
