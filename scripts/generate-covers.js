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
  {
    slug: "atomic-design",
    html: `${BASE}/28-atomic-design-en/carousel.html`,
    // Source slide is left-aligned; center it to match other covers
    prepare: async (page) => {
      await page.evaluate(() => {
        const cover = document.querySelector(".cover");
        if (cover) {
          cover.style.alignItems = "center";
          cover.style.textAlign = "center";
        }
      });
    },
  },
  { slug: "atomic-fsd", html: `${BASE}/29-atomic-fsd/carousel.html` },
  {
    slug: "is-old-tech-dead",
    html: `${BASE}/05-en/image.html`,
    // 16:9 crop without the "IS OLD TECH DEAD?" title
    viewport: { width: 1080, height: 607 },
    prepare: async (page) => {
      const svg = await page.$("svg");
      await page.evaluate((svg) => {
        svg.querySelectorAll("text")[0].style.display = "none"; // title
        svg.querySelectorAll("rect")[1].style.display = "none"; // divider line
        svg.setAttribute("viewBox", "-91 260 1262 710");
        svg.setAttribute("width", "1080");
        svg.setAttribute("height", "607");
        const slide = document.querySelector(".slide");
        if (slide) {
          slide.style.width = "1080px";
          slide.style.height = "607px";
        }
      }, svg);
    },
  },
];

const browser = await chromium.launch();
const page = await browser.newPage();

for (const { slug, html, viewport, prepare } of covers) {
  if (!existsSync(html)) {
    console.warn(`⚠ skipping ${slug}: ${html} not found`);
    continue;
  }

  await page.setViewportSize(viewport ?? { width: 1080, height: 1080 });
  await page.goto(`file://${html}`);

  // Hide "swipe to see" captions on carousel cover slides
  await page.evaluate(() => {
    document.querySelectorAll(".cover-caption").forEach((el) => {
      el.style.display = "none";
    });
  });

  if (prepare) await prepare(page);

  const tmpPng = `/tmp/cover-${slug}.png`;
  await page.locator(".slide").first().screenshot({ path: tmpPng });

  const webp = path.join(OUT, `${slug}.webp`);
  execSync(`cwebp -q 85 -preset picture "${tmpPng}" -o "${webp}" -quiet`);
  console.log(`✓ ${slug}.webp`);
}

await browser.close();
