import type { LoaderFunction } from "@remix-run/node";
import { BASE_URL } from "~/config/settings.server";

/**
 * @method GET
 * @name /robots.txt
 * @description Generate a robots.txt for SEO purposes
 */
export const loader: LoaderFunction = () => {
  const robotText = `
User-agent: *
Disallow: /api
Sitemap: ${BASE_URL}/sitemap.xml
`;

  return new Response(robotText, {
    headers: { "Content-Type": "text/plain" },
    status: 200,
  });
};
