import { MetaDescriptor } from "@remix-run/node";
import {
  SITE_AUTHOR,
  SITE_SHARE_IMAGE,
  SITE_TITLE,
  SITE_URL,
} from "./config/constants";

export interface MetaDataOptions {
  canonical: string;
  description?: string;
  image?: string;
  title?: string;
}

const defaults: MetaDataOptions = {
  canonical: "",
  description: `The online portfolio of ${SITE_AUTHOR}, a Software Engineer!`,
  image: `${SITE_URL}${SITE_SHARE_IMAGE}`,
  title: SITE_TITLE,
};

export const getMetaDataBase = (): MetaDescriptor[] => [
  {
    charset: "utf-8",
  },
  {
    author: SITE_AUTHOR,
  },
  {
    property: "color-scheme",
    content: "dark light",
  },
  {
    "theme-color": "#ff0000",
  },
  {
    viewport: `initial-scale=1, viewport-fit=cover, width=device-width`,
  },
  {
    "apple-mobile-web-app-capable": "yes",
  },
  {
    "apple-mobile-web-app-status-bar-style": "black",
  },
  {
    "apple-mobile-web-app-title": `2023 Portfolio`,
  },
];

export const getMetaData = (options: MetaDataOptions): MetaDescriptor[] => [
  // ...getMetaDataBase(),

  // SEO Meta Tags
  {
    name: "description",
    content: options.description || defaults.description,
  },
  {
    image: options.image || defaults.image,
  },
  {
    name: options.title || defaults.title,
  },
  {
    title: options.title || defaults.title,
  },

  // Open Graph
  {
    property: "og:description",
    content: options.description || defaults.description,
  },
  {
    property: "og:image",
    content: options.image || defaults.image,
  },
  {
    property: "og:title",
    content: options.title || defaults.title,
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:url",
    content: options.canonical || defaults.canonical,
  },

  // Twitter
  {
    property: "twitter:card",
    content: `summary_large_image`,
  },
  {
    property: "twitter:creator",
    content: `@visormatt`,
  },
  {
    property: "twitter:description",
    content: options.description || defaults.description,
  },
  {
    property: "twitter:image",
    content: options.image || defaults.image,
  },
  {
    property: "twitter:site",
    content: `@visormatt`,
  },
  {
    property: "twitter:title",
    content: options.title || defaults.title,
  },
];
