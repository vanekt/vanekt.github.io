import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const SITE = "https://vanekt.github.io";

type Alternate = { lang: string; href: string };

function buildUrl(loc: string, alternates: Alternate[], lastmod?: Date): string {
  const altLinks = alternates
    .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.href}"/>`)
    .join("\n");
  const lastmodTag = lastmod
    ? `\n    <lastmod>${lastmod.toISOString().split("T")[0]}</lastmod>`
    : "";
  return `  <url>\n    <loc>${loc}</loc>${lastmodTag}\n${altLinks}\n  </url>`;
}

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const enPosts = posts.filter((p) => p.data.lang === "en");

  const mainAlts: Alternate[] = [
    { lang: "x-default", href: `${SITE}/` },
    { lang: "en", href: `${SITE}/` },
    { lang: "ru", href: `${SITE}/ru/` },
    { lang: "es", href: `${SITE}/es/` },
  ];

  const blogAlts: Alternate[] = [
    { lang: "x-default", href: `${SITE}/blog/` },
    { lang: "en", href: `${SITE}/blog/` },
    { lang: "ru", href: `${SITE}/ru/blog/` },
  ];

  const urls: string[] = [
    buildUrl(`${SITE}/`, mainAlts),
    buildUrl(`${SITE}/ru/`, mainAlts),
    buildUrl(`${SITE}/es/`, mainAlts),
    buildUrl(`${SITE}/blog/`, blogAlts),
    buildUrl(`${SITE}/ru/blog/`, blogAlts),
    ...enPosts.flatMap((post) => {
      const slug = post.data.urlSlug;
      const postAlts: Alternate[] = [
        { lang: "x-default", href: `${SITE}/blog/${slug}/` },
        { lang: "en", href: `${SITE}/blog/${slug}/` },
        { lang: "ru", href: `${SITE}/ru/blog/${slug}/` },
      ];
      return [
        buildUrl(`${SITE}/blog/${slug}/`, postAlts, post.data.date),
        buildUrl(`${SITE}/ru/blog/${slug}/`, postAlts, post.data.date),
      ];
    }),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
