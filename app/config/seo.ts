import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_TITLE } from "./constants";

export interface Data {
  description: string;
  title: string;
  path: string;
  image: string;
}

/**
 * @external https://ahrefs.com/blog/seo-meta-tags/
 * @description This method is used to generate our metadata tags which
 * unlock a variety of SEO and Social "shareability" of our site/content
 */
export const getMetaTags = (url: string, isDark: boolean) => {
  const defaults = {
    author: SITE_AUTHOR,
    description: SITE_DESCRIPTION,
    image: `${url}/images/assets/share.jpg`,
    robots: "index, follow",
    title: SITE_TITLE
  };

  const themeColor = isDark ? "#000" : "#f5f8fa";
  const data: Data = {
    description: defaults.description,
    image: defaults.image,
    path: url,
    title: defaults.title
  };

  return [
    // Browser
    {
      charSet: "utf-8"
    },
    {
      content: "dark light",
      name: "color-scheme"
    },
    {
      content: themeColor,
      name: "theme-color"
    },
    {
      content: `initial-scale=1, viewport-fit=cover, width=device-width`,
      name: "viewport"
    },

    // General
    {
      content: defaults.author,
      name: "author"
    },
    // {
    //   content: defaults.description,
    //   name: "description"
    // },
    {
      content: defaults.image,
      name: "image"
    },
    {
      content: defaults.title,
      name: "name"
    },

    // Apple
    {
      content: "yes",
      name: "apple-mobile-web-app-capable"
    },
    {
      content: "black",
      name: "apple-mobile-web-app-status-bar-style"
    },
    {
      content: defaults.title,
      name: "apple-mobile-web-app-title"
    },

    // Facebook
    // {
    //   content: '##############',
    //   property: 'fb:app_id'
    // }

    // Google
    {
      content: data.description,
      itemProp: "description"
    },
    {
      content: data.image,
      itemProp: "image"
    },
    {
      content: data.title,
      itemProp: "name"
    },

    // Open Graph
    {
      content: data.description,
      property: "og:description"
    },
    {
      content: data.image,
      property: "og:image"
    },
    {
      content: data.title,
      property: "og:title"
    },
    {
      content: "website",
      property: "og:type"
    },
    {
      content: data.path,
      property: "og:url"
    },

    // Twitter
    {
      content: `summary`,
      property: "twitter:card" // summary | summary_large_image
    },
    {
      content: `@visormatt`,
      property: "twitter:creator"
    },
    {
      content: data.description,
      property: "twitter:description"
    },
    {
      content: data.image,
      property: "twitter:image"
    },
    // {
    //   content: `@visormatt`,
    //   property: 'twitter:site'
    // },
    {
      content: data.title,
      property: "twitter:title"
    }
  ];
};
