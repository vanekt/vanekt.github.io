// Takes screenshots of the site for visual review.
// Usage: node scripts/screenshot.js [path] [--dark] [--mobile]
// Examples:
//   node scripts/screenshot.js              → all main pages, light, desktop
//   node scripts/screenshot.js /cv/         → only /cv/, light, desktop
//   node scripts/screenshot.js / --dark     → / in dark mode
//   node scripts/screenshot.js / --mobile   → / on mobile viewport
// Expects a server running at http://localhost:4321
// Outputs screenshot file paths to stdout, one per line.

import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { join } from "path";

const BASE = process.env.SCREENSHOT_BASE_URL ?? "http://localhost:4321";

const args = process.argv.slice(2);
const darkMode = args.includes("--dark");
const mobile = args.includes("--mobile");
const pathArg = args.find((a) => !a.startsWith("--"));

const DEFAULT_PAGES = ["/", "/ru/", "/es/", "/cv/"];
const pages = pathArg ? [pathArg] : DEFAULT_PAGES;

const DESKTOP = { width: 1440, height: 900 };
const MOBILE = { width: 390, height: 844 };
const viewport = mobile ? MOBILE : DESKTOP;

const outDir = join(process.cwd(), ".screenshots");
mkdirSync(outDir, { recursive: true });

async function waitForServer(url, maxMs = 10000) {
  const start = Date.now();
  while (Date.now() - start < maxMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Server at ${url} is not running. Start it with: pnpm preview`);
}

const browser = await chromium.launch();
const context = await browser.newContext({ viewport });
const page = await context.newPage();

await waitForServer(BASE);

for (const pagePath of pages) {
  await page.goto(`${BASE}${pagePath}`, { waitUntil: "networkidle" });

  if (darkMode) {
    await page.evaluate(() => document.documentElement.classList.add("dark"));
    await page.waitForTimeout(200);
  }

  // Scroll through the page to trigger scroll-based animations (IntersectionObserver).
  // Slow steps so animations have time to complete before the next scroll.
  await page.evaluate(async () => {
    const step = window.innerHeight / 2;
    const total = document.body.scrollHeight;
    for (let y = 0; y < total; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 300));
    }
  });
  await page.waitForTimeout(500);

  const slug = pagePath.replace(/\//g, "-").replace(/^-|-$/g, "") || "home";
  const theme = darkMode ? "dark" : "light";
  const device = mobile ? "mobile" : "desktop";
  const filename = `${slug}-${theme}-${device}.png`;
  const filepath = join(outDir, filename);

  await page.screenshot({ path: filepath, fullPage: true });
  process.stdout.write(filepath + "\n");
}

await browser.close();
