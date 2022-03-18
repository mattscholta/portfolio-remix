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

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export interface LoaderData {
  canonnical: string;
}

export const loader: LoaderFunction = (args): LoaderData => {
  const canonnical = args.request.url;
  // const canonnical = `${process.env.BASE_URL}`;

  return { canonnical };
};

export const meta: MetaFunction = (args) => {
  return {
    title: "New Remix App"
  };
};

export default function App() {
  // Hooks
  const { canonnical } = useLoaderData<LoaderData>();

  // Life Cycle
  React.useEffect(() => {
    intro();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />

        <link href={canonnical} rel="canonnical" />
        <link href="/favicon.ico" rel="icon" />
        <link href="/favicon.png" rel="apple-touch-icon" sizes="48x48" />
        <link href="/manifest.json" rel="manifest" />
        <Links />
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
