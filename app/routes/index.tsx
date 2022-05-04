import * as React from "react";
import type { MetaFunction } from "remix";

import { Hero } from "~/components/Hero";
import { loader } from "~/routes/api/qualities";
import { SITE_AUTHOR, SITE_TITLE } from "~/config/constants";

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
    <section className="main m-auto flex max-w-6xl flex-col items-center justify-center gap-20">
      <div className="mt-96 flex gap-4 md:mt-0 md:flex-row">
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
      </div>
    </section>
  );
}
