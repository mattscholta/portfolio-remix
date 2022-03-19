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

import { cookieTheme } from "./cookies";
import { Footer } from "~/components/Footer";
import { GOOGLE_ANALYTICS } from "./config/settings.server";
import { Header } from "~/components/Header";
import { intro } from "./config/intro";
import { TrackingGA } from "./components/TrackingGA";

import styles from "./styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export interface LoaderData {
  canonical: string;
  theme?: "light" | "dark";
}

export const loader: LoaderFunction = async (args): Promise<LoaderData> => {
  const { request } = args;

  const canonical = request.url;
  const header = request.headers.get("cookie");
  const cookie = (await cookieTheme.parse(header)) ?? {};
  const { theme } = cookie;

  return { canonical, theme };
};

export const meta: MetaFunction = (args) => ({
  title: "New Remix App"
});

export default function App() {
  // Hooks
  const { canonical, theme } = useLoaderData<LoaderData>();
  // const theme = "dark";
  // const [] = React.useState(theme);

  // Setup
  const isDark = theme === "dark";
  const color = isDark ? "#f5f8fa" : "#000";
  const favicon = isDark ? "/favicon-dark.png" : "/favicon.png";
  const manifest = isDark ? "/manifest-dark.json" : "/manifest.json";

  // Life Cycle
  React.useEffect(() => {
    intro();
  }, []);

  return (
    <html lang="en" className={theme ?? ""}>
      <head>
        <meta charSet="utf-8" />
        <meta content={color} name="theme-color" />
        <meta content="dark light" name="color-scheme" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <Meta />

        <link href={canonical} rel="canonical" />
        <link href={favicon} rel="icon" />
        <link href={favicon} rel="apple-touch-icon" sizes="48x48" />
        <link href={manifest} rel="manifest" />
        <Links />
        <TrackingGA id={GOOGLE_ANALYTICS} />
      </head>
      <body>
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
