import classnames from "classnames";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData
} from "@remix-run/react";
import type { DataFunctionArgs, LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";

import { cookieTheme } from "~/cookies";
import { AppFooter } from "~/components/AppFooter";
import { BASE_URL } from "~/config/settings.server";
import { AppHeader } from "~/components/AppHeader";
import { AppHeaderMobile } from "~/components/AppHeaderMobile";
import {
  SITE_DESCRIPTION,
  SITE_SHARE_IMAGE,
  SITE_TITLE,
  SITE_URL
} from "~/config/constants";
import { useIntro } from "~/hooks/useIntro";
import { getMetaData } from "~/metadata";
import { usePageTracking } from "~/hooks/usePageTracking";

import styles from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const loader = async (args: DataFunctionArgs) => {
  const { request } = args;

  const baseUrl = BASE_URL;
  const canonical = request.url;
  const header = request.headers.get("cookie");
  const cookie = (await cookieTheme.parse(header)) ?? {};
  const { theme = "light" } = cookie;

  return json({ baseUrl, canonical, theme });
};

export const meta: MetaFunction = (args) => ({
  ...getMetaData({
    canonical: args.data?.canonical,
    description: SITE_DESCRIPTION,
    image: `${SITE_URL}${SITE_SHARE_IMAGE}`,
    title: SITE_TITLE
  })
});

export default function App() {
  // Hooks
  const data = useLoaderData<typeof loader>();

  // Setup
  const { canonical, theme } = data;
  const isDark = theme === "dark";
  const favicon = "/images/svg/logo.svg";
  const manifest = "/manifest.json";
  // const manifest = isDark ? "/manifest-dark.json" : "/manifest.json";

  // Styles
  const cssComponent = classnames(theme ?? "", isDark);

  // Life Cycle
  useIntro();
  usePageTracking();

  return (
    <html lang="en" className={cssComponent}>
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

export function CatchBoundary() {
  // Hooks
  const caught = useCatch();

  // Setup
  const favicon = "/images/svg/logo.svg";
  const manifest = "/manifest.json";

  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <link href={favicon} rel="apple-touch-icon" sizes="48x48" />
        <link href={favicon} rel="favicon" />
        <link href={favicon} rel="icon" type="image/svg+xml" />
        <link href={favicon} rel="mask-icon" type="image/svg+xml" />
        <link href={manifest} rel="manifest" />
        <Links />
      </head>

      <body>
        <AppHeader />
        <AppHeaderMobile />

        <main>
          <div className="mx-auto max-w-5xl pt-10">
            <h1>
              {caught.status} {caught.statusText} - Catch Boundary
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              enim minima esse ipsam! Sit consequatur doloribus earum facere
              eaque quaerat molestiae. Sed cupiditate ea non ipsum? Sed aliquid
              quis quia.
            </p>
          </div>
        </main>

        <AppFooter />

        {/* Analytics */}
        {/* <TrackingGA id={googleAnalytics} /> */}

        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: unknown }) {
  // Setup
  const favicon = "/images/svg/logo.svg";
  const manifest = "/manifest.json";

  console.error(`🧧 Error`, error);

  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <link href={favicon} rel="apple-touch-icon" sizes="48x48" />
        <link href={favicon} rel="favicon" />
        <link href={favicon} rel="icon" type="image/svg+xml" />
        <link href={favicon} rel="mask-icon" type="image/svg+xml" />
        <link href={manifest} rel="manifest" />
        <Links />
      </head>

      <body>
        <div className="m-auto flex h-screen max-w-5xl flex-col justify-center">
          <h1 className="mb-4 text-2xl">Oh no!</h1>
          <p>
            Sorry but I seemed to have broken something.
            <br />
            Please try again later :(
          </p>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
