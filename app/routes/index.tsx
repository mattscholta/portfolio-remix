import * as React from "react";
import { Outlet } from "remix";
import type { MetaFunction } from "remix";

import { Hero } from "~/components/Hero";
import { getQuote } from "~/routes/api/qualities";
import { SITE_AUTHOR, SITE_TITLE } from "~/config/constants";
import { WorkCompanies } from "~/components/WorkCompanies";
import { Technology } from "~/components/Technology";
import { AboutAmbitions } from "~/components/AboutAmbitions";

export const meta: MetaFunction = () => ({
  title: `A Software Engineer | ${SITE_TITLE}`
});

export default function () {
  // Hooks
  const [heading, setHeading] = React.useState("A Software Engineer");

  // Handlers
  const onClick = async () => {
    const data = await getQuote(heading);
    setHeading(data);
  };

  return (
    <>
      <section className="m-auto flex max-w-6xl flex-col items-center justify-center gap-4 py-20 md:flex-row md:py-40">
        <Hero
          className="py-10 md:py-20 md:text-right"
          copy={<span className="whitespace-nowrap">{heading}</span>}
          highlight={SITE_AUTHOR}
          tag="h1"
        />
        <div>
          <img
            alt={SITE_AUTHOR}
            className="custom-bg-gradient max-h-32 cursor-pointer overflow-hidden rounded-full p-1 transition-transform hover:scale-110 active:rotate-6 md:max-h-40"
            height="auto"
            loading="eager"
            onClick={onClick}
            src="/images/assets/matt-scaled.webp"
            width="auto"
          />
        </div>
      </section>

      <Technology />
      <AboutAmbitions />
      <WorkCompanies />

      <blockquote className="mx-auto my-20 max-w-4xl text-2xl font-normal md:my-40 md:text-3xl">
        Passionate about <b>quality code</b> written <b>for humans</b>,
        unlocking <b>developer productivity</b>, and creating a delightful{" "}
        <b>user experience</b>.
      </blockquote>

      <Outlet />
    </>
  );
}
