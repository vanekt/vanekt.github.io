import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const SITE = "https://vanekt.github.io";

function buildUrl(loc: string, lastmod?: Date): string {
  const lastmodTag = lastmod ? `<lastmod>${lastmod.toISOString().split("T")[0]}</lastmod>` : "";
  return `<url><loc>${loc}</loc>${lastmodTag}</url>`;
}

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const enPosts = posts.filter((p) => p.data.lang === "en");

  const urls: string[] = [
    buildUrl(`${SITE}/`),
    buildUrl(`${SITE}/ru/`),
    buildUrl(`${SITE}/es/`),
    buildUrl(`${SITE}/blog/`),
    buildUrl(`${SITE}/ru/blog/`),
    ...enPosts.flatMap((post) => {
      const slug = post.data.urlSlug;
      return [
        buildUrl(`${SITE}/blog/${slug}/`, post.data.date),
        buildUrl(`${SITE}/ru/blog/${slug}/`, post.data.date),
      ];
    }),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
