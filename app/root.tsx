import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/react";
import type { DataFunctionArgs, LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import { AppFooter } from "~/components/AppFooter";
import { BASE_URL } from "~/config/settings.server";
import { AppHeader } from "~/components/AppHeader";
import { AppHeaderMobile } from "~/components/AppHeaderMobile";
import {
  SITE_DESCRIPTION,
  SITE_SHARE_IMAGE,
  SITE_TITLE,
  SITE_URL,
} from "~/config/constants";
import { useIntro } from "~/hooks/useIntro";
import { usePageTracking } from "~/hooks/usePageTracking";

import styles from "~/styles/index.css";
import tailwind from "~/tailwind.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwind },
    { rel: "stylesheet", href: styles },
  ];
};

export const loader = async (args: DataFunctionArgs) => {
  const { request } = args;

  const baseUrl = BASE_URL;
  const canonical = request.url;
  const header = request.headers.get("cookie");
  // const cookie = (await cookieTheme.parse(header)) ?? {};
  // const { theme = "light" } = cookie;

  return json({ baseUrl, canonical });
};

export const meta: MetaFunction = (args) => {
  return [
    {
      title: SITE_TITLE,
    },
    {
      name: "description",
      content: args.data.description,
    },
    {
      name: "image",
      content: `${SITE_URL}${SITE_SHARE_IMAGE}`,
    },
    {
      tagName: "link",
      rel: "canonical",
      href: args.data.canonical,
    },
    // ...getMetaData({
    //   canonical: args.data?.canonical,
    // })
  ];
};

export default function App() {
  // Hooks
  const data = useLoaderData<typeof loader>();

  // Setup
  const { canonical } = data;
  const favicon = "/images/svg/logo.svg";
  const manifest = "/manifest.json";

  // Life Cycle
  useIntro();
  usePageTracking();

  return (
    <html lang="en">
      <head>
        <link href={canonical} rel="canonical" />
        <link href={favicon} rel="apple-touch-icon" sizes="48x48" />
        <link href={favicon} rel="favicon" />
        <link href={favicon} rel="icon" type="image/svg+xml" />
        <link href={favicon} rel="mask-icon" type="image/svg+xml" />
        <link href={manifest} rel="manifest" />

        <Links />
        <Meta />
      </head>
      <body>
        <AppHeader />
        <AppHeaderMobile />
        <main>
          <Outlet />
        </main>
        <AppFooter />

        {/* Remix */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
