import * as React from "react";
import { Outlet } from "remix";
import type { MetaFunction } from "remix";

import { Hero } from "~/components/Hero";
import { loader } from "~/routes/api/qualities";
import { SITE_AUTHOR, SITE_TITLE } from "~/config/constants";
import { WorkCompanies } from "~/components/WorkCompanies";
import { WorkDetails } from "~/components/WorkDetails";
import { AboutAmbitions } from "~/components/AboutAmbitions";

export const meta: MetaFunction = () => ({
  title: `Welcome | ${SITE_TITLE}`
});

export default function () {
  // Hooks
  const [heading, setHeading] = React.useState("A Software Engineer");

  // Handlers
  const onClick = async () => {
    const data = await loader({} as any);
    setHeading(data);
  };

  return (
    <>
      <section className="m-auto flex max-w-6xl justify-center gap-4 py-20 md:py-40">
        <Hero
          className="md:text-right"
          copy={<span className="whitespace-nowrap">{heading}</span>}
          highlight={SITE_AUTHOR}
        />
        <div>
          <img
            alt={SITE_AUTHOR}
            className="custom-bg-gradient max-h-32 cursor-pointer overflow-hidden rounded-full p-1 transition-transform hover:scale-110 active:rotate-6 md:max-h-40"
            loading="eager"
            onClick={onClick}
            src="/images/assets/matt-scaled.webp"
          />
        </div>
      </section>

      <WorkDetails />
      <AboutAmbitions />
      <WorkCompanies />

      <blockquote className="mx-auto my-20 max-w-4xl text-2xl font-normal md:my-40 md:text-3xl">
        Passionate about <b>quality code</b> written <b>for humans</b>,
        unlocking <b>developer productivity</b>, and creating a delightful{" "}
        <b>user experience</b>.
      </blockquote>

      {/*
      <section className="m-auto max-w-6xl gap-20">
        <h3 className="my-4 text-2xl">Current</h3>
        <p>
          I take great pride in my ability to communicate and articulate ideas
          through design and visual language, but perhaps more importantly
          through soft personal skills. Reading body language, intently
          listening, being persuasive, and empathizing are all part of my
          designer toolkit.
        </p>

        <h3 className="my-4 text-2xl">Contact Me</h3>
        <p>
          Email is the best way to reach me:{" "}
          <a href={SITE_EMAIL_LINK}>{SITE_EMAIL_ADDRESS}</a>
        </p>
        <p>
          Feel free to hit me up on <a href={SOCIAL_TWITTER}>Twitter</a> as
          well.
        </p>
      </section>
      */}

      <Outlet />
    </>
  );
}
