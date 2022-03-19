import * as React from "react";
import {
  Links,
  LinksFunction,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation
} from "remix";
import type { MetaFunction } from "remix";

import { cookieTheme } from "./cookies";
import { getMetaTags } from "./config/seo";
import { Footer } from "~/components/Footer";
import { BASE_URL, GOOGLE_ANALYTICS } from "./config/settings.server";
import { Header } from "~/components/Header";
import { intro } from "./config/intro";
import { SITE_TITLE } from "./config/constants";
import { TrackingGA } from "./components/TrackingGA";
import { worker } from "./config/worker";

import styles from "./styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export interface LoaderData {
  baseUrl: string;
  canonical: string;
  theme?: "light" | "dark";
  googleAnalytics: string;
}

export const loader: LoaderFunction = async (args): Promise<LoaderData> => {
  const { request } = args;

  const canonical = request.url;
  const baseUrl = BASE_URL;
  const header = request.headers.get("cookie");
  const cookie = (await cookieTheme.parse(header)) ?? {};
  const { theme } = cookie;

  return { baseUrl, canonical, theme, googleAnalytics: GOOGLE_ANALYTICS };
};

export const meta: MetaFunction = (args) => ({
  title: SITE_TITLE
});

export default function App() {
  // Hooks
  const loader = useLoaderData<LoaderData>();
  const { pathname } = useLocation();

  // Setup
  const { baseUrl, canonical, googleAnalytics, theme } = loader;
  const isDark = theme === "dark";
  const favicon = isDark ? "/favicon-dark.png" : "/favicon.png";
  const manifest = isDark ? "/manifest-dark.json" : "/manifest.json";
  const metadata = getMetaTags(baseUrl, isDark);

  // Life Cycle
  React.useEffect(() => {
    if (!window.gtag) return;

    window.gtag("event", "page_view", {
      page_location: `${BASE_URL}${pathname}`
    });
  }, [pathname]);

  React.useEffect(() => {
    intro();
  }, []);

  return (
    <html lang="en" className={theme ?? ""}>
      <head>
        {metadata.map((meta, index) => (
          <meta {...meta} key={meta.name ?? meta.property ?? index} />
        ))}
        <Meta />

        <link href={canonical} rel="canonical" />
        <link href={favicon} rel="icon" />
        <link href={favicon} rel="apple-touch-icon" sizes="48x48" />
        <link href={manifest} rel="manifest" />

        {/*
        <link
          href="https://github.githubassets.com/pinned-octocat.svg"
          rel="mask-icon"
          color="#000000"
        />
        <link
          className="js-site-favicon"
          href="https://github.githubassets.com/favicons/favicon.png"
          rel="alternate icon"
          type="image/png"
        />
        <link
          className="js-site-favicon"
          href="https://github.githubassets.com/favicons/favicon.svg"
          rel="icon"
          type="image/svg+xml"
        />
        */}

        <Links />
        <TrackingGA id={googleAnalytics} />
      </head>
      <body>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{ __html: worker }}
          type="text/javascript"
        />

        {/* Remix */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
