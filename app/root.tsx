import classnames from "classnames";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "remix";
import type { LinksFunction, LoaderFunction } from "remix";
import type { MetaFunction } from "remix";

import { cookieTheme } from "./cookies";
import { getMetaTags } from "./config/seo";
import { AppFooter } from "~/components/AppFooter";
import { BASE_URL, GOOGLE_ANALYTICS } from "./config/settings.server";
import { AppHeader } from "~/components/AppHeader";
import { AppHeaderMobile } from "~/components/AppHeaderMobile";
import { SITE_TITLE } from "./config/constants";
import { TrackingGA } from "./components/TrackingGA";
import { useIntro } from "./hooks/useIntro";
import { usePageTracking } from "./hooks/usePageTracking";

import styles from "./styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export interface LoaderData {
  baseUrl: string;
  canonical: string;
  googleAnalytics: string;
  theme?: "light" | "dark";
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

  // Setup
  const { baseUrl, canonical, googleAnalytics, theme } = loader;
  const isDark = theme === "dark";
  const favicon = "/images/svg/logo.svg";
  const manifest = isDark ? "/manifest-dark.json" : "/manifest.json";
  const metadata = getMetaTags(baseUrl, isDark);

  // const favicon = isDark ? "/favicon-dark.png" : "/favicon.png";

  // Styles
  const cssComponent = classnames(theme ?? "", isDark);

  // Life Cycle
  useIntro();
  usePageTracking();

  return (
    <html lang="en" className={cssComponent}>
      <head>
        {metadata.map((meta, index) => (
          <meta {...meta} key={meta.name ?? meta.property ?? index} />
        ))}
        <Meta />
        <link href={canonical} rel="canonical" />
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
          <Outlet />
        </main>
        <AppFooter />

        {/* Analytics */}
        <TrackingGA id={googleAnalytics} />

        {/* Remix */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: any) {
  console.error(error);

  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>

      <body>
        {/* add the UI you want your users to see */}
        <div className="m-auto max-w-5xl">
          <h1>Oh no!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            enim minima esse ipsam! Sit consequatur doloribus earum facere eaque
            quaerat molestiae. Sed cupiditate ea non ipsum? Sed aliquid quis
            quia.
          </p>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
