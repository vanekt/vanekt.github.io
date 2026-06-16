#!/usr/bin/env node
// Generates WebP cover images from LinkedIn HTML slides.
// Usage: node scripts/generate-covers.js
import { chromium } from "playwright";
import { execSync } from "child_process";
import { existsSync } from "fs";
import path from "path";

const BASE =
  "/Users/vanekt/projects/vanekt/job-search/linkedin/posts/posted";
const OUT = "public/blog/covers";

const covers = [
  {
    slug: "vue-vs-react",
    html: `${BASE}/01-vue-vs-react/01-vue-vs-react-carousel.html`,
  },
  {
    slug: "accessibility",
    html: `${BASE}/02-accessibility-en/02-accessibility-en-carousel.html`,
  },
  { slug: "fsd", html: `${BASE}/27-fsd-en/carousel.html` },
  { slug: "atomic-design", html: `${BASE}/28-atomic-design-en/carousel.html` },
  { slug: "atomic-fsd", html: `${BASE}/29-atomic-fsd/carousel.html` },
  { slug: "is-old-tech-dead", html: `${BASE}/05-en/image.html` },
];

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1080, height: 1080 });

for (const { slug, html } of covers) {
  if (!existsSync(html)) {
    console.warn(`⚠ skipping ${slug}: ${html} not found`);
    continue;
  }

  await page.goto(`file://${html}`);
  const slide = page.locator(".slide").first();
  const tmpPng = `/tmp/cover-${slug}.png`;
  await slide.screenshot({ path: tmpPng });

  const webp = path.join(OUT, `${slug}.webp`);
  execSync(`cwebp -q 85 -preset picture "${tmpPng}" -o "${webp}" -quiet`);
  console.log(`✓ ${slug}.webp`);
}

await browser.close();
