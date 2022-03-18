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
  useLoaderData
} from "remix";
import type { MetaFunction } from "remix";

import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { intro } from "./config/intro";

import styles from "./styles/index.css";
import { parseCookieHeader } from "./utils/cookies";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export interface LoaderData {
  canonical: string;
  theme?: "light" | "dark";
}

export const loader: LoaderFunction = (args): LoaderData => {
  const canonical = args.request.url;
  const header = args.request.headers.get("cookie");
  const cookies = parseCookieHeader(header === null ? "" : header);
  const { theme } = cookies;

  return { canonical, theme };
};

export const meta: MetaFunction = (args) => ({
  title: "New Remix App"
});

export default function App() {
  // Hooks
  const { canonical, theme } = useLoaderData<LoaderData>();

  // Life Cycle
  React.useEffect(() => {
    intro();
  }, []);

  return (
    <html lang="en" className={theme ?? ""}>
      <head>
        <meta charSet="utf-8" />
        <meta content="#f00" name="theme-color" />
        <meta content="dark light" name="color-scheme" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <Meta />

        <link href={canonical} rel="canonical" />
        <link href="/favicon.ico" rel="icon" />
        <link href="/favicon.png" rel="apple-touch-icon" sizes="48x48" />
        <link href="/manifest.json" rel="manifest" />
        <Links />
      </head>
      <body>
        <button>theme = </button>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
