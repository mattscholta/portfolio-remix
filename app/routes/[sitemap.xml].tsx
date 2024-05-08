import type { LoaderFunction } from "@remix-run/node";
import type { Portfolio } from "~/routes/api.portfolio";
import type { Post } from "~/routes/api.blog";
import { BASE_URL } from "~/config/settings.server";
import { fetchFromGraphCMS } from "~/utils/graphcms";
import { getSitemap } from "~/queries/getSitemap";
import { SITE_UPDATED } from "~/config/constants";

/**
 * @method GET
 * @name /sitemap.xml
 * @description Generate a sitemap.xml for SEO purposes
 */
export const loader: LoaderFunction = async (args) => {
  const data = await fetchFromGraphCMS(getSitemap);
  const res = await data.json();
  const routes = ["/blog", "/portfolio", "/resume", "/uses"];

  const { portfolios, posts } = res.data;

  const links = routes.map(
    (path: string) => `  <url>
    <changefreq>monthly</changefreq>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${SITE_UPDATED.toISOString()}</lastmod>
    <priority>1.0</priority>
  </url>`
  );

  const blog = posts.map(
    (p: Post) => `  <url>
    <changefreq>monthly</changefreq>
    <loc>${BASE_URL}/blog/${p.slug}</loc>
    <lastmod>${new Date(p.date).toISOString()}</lastmod>
    <priority>0.8</priority>
  </url>`
  );

  const portfolio = portfolios.map(
    (p: Portfolio) => `  <url>
    <changefreq>monthly</changefreq>
    <loc>${BASE_URL}/portfolio/${p.slug}</loc>
    <lastmod>${new Date(p.date).toISOString()}</lastmod>
    <priority>0.9</priority>
  </url>`
  );

  const content = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <changefreq>monthly</changefreq>
    <loc>${BASE_URL}</loc>
    <lastmod>${SITE_UPDATED.toISOString()}</lastmod>
    <priority>1.0</priority>
  </url>
  ${links.join("\n")}
  ${portfolio.join("\n")}
  ${blog.join("\n")}
</urlset>`;

  return new Response(content, {
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
    status: 200,
  });
};
