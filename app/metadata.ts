import type { HtmlMetaDescriptor } from "@remix-run/node";
import { SITE_AUTHOR, SITE_SHARE_IMAGE, SITE_TITLE } from "./config/constants";
import { BASE_URL } from "./config/settings.server";

export interface MetaDataOptions {
  canonical: string;
  description?: string;
  image?: string;
  title?: string;
}

const defaults: MetaDataOptions = {
  canonical: "",
  description: `The online portfolio of ${SITE_AUTHOR}, a Software Engineer!`,
  image: `${BASE_URL}${SITE_SHARE_IMAGE}`,
  title: SITE_TITLE
};

export const getMetaDataBase = (): HtmlMetaDescriptor => ({
  "apple-mobile-web-app-capable": "yes",
  "apple-mobile-web-app-status-bar-style": "black",
  "apple-mobile-web-app-title": `2022 Portfolio`,
  author: SITE_AUTHOR,
  charset: "utf-8",
  "color-scheme": "dark light",
  "theme-color": "themeColor",
  viewport: `initial-scale=1, viewport-fit=cover, width=device-width`
});

export const getMetaData = (options: MetaDataOptions): HtmlMetaDescriptor => ({
  ...getMetaDataBase(),

  // SEO Meta Tags
  description: options.description || defaults.description,
  image: options.image || defaults.image,
  name: options.title || defaults.title,
  title: options.title || defaults.title,

  // Open Graph
  "og:description": options.description || defaults.description,
  "og:image": options.image || defaults.image,
  "og:title": options.title || defaults.title,
  "og:type": "website",
  "og:url": options.canonical || defaults.canonical,

  // Twitter
  "twitter:card": `summary_large_image`,
  "twitter:creator": `@visormatt`,
  "twitter:description": options.description || defaults.description,
  "twitter:image": options.image || defaults.image,
  "twitter:site": `@visormatt`,
  "twitter:title": options.title || defaults.title
});
