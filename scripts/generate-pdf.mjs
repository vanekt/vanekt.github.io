// Generates resume PDFs from the locally served static build.
// Usage: node scripts/generate-pdf.mjs
// Expects a server running at http://localhost:3000

import { chromium } from "playwright";

const BASE = process.env.PDF_BASE_URL ?? "http://localhost:4321";

async function waitForServer(url, maxMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < maxMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Server at ${url} not ready after ${maxMs}ms`);
}

const browser = await chromium.launch();
const page = await browser.newPage();

await waitForServer(BASE);

const pdfOptions = {
  format: "A4",
  margin: { top: "12mm", right: "12mm", bottom: "12mm", left: "12mm" },
  printBackground: false,
};

await page.goto(`${BASE}/cv/`, { waitUntil: "networkidle" });
await page.pdf({ path: "dist/cv.pdf", ...pdfOptions });
console.log("Generated dist/cv.pdf");

await page.goto(`${BASE}/ru/cv/`, { waitUntil: "networkidle" });
await page.pdf({ path: "dist/cv-ru.pdf", ...pdfOptions });
console.log("Generated dist/cv-ru.pdf");

await browser.close();
