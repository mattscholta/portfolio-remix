import * as React from "react";
import { MetaFunction } from "remix";

import { Hero } from "~/components/Hero";
import { loader } from "~/routes/api/qualities";
import { ScrollTo } from "~/components/ScrollTo";
import { SITE_DESCRIPTION, SITE_TITLE } from "~/config/constants";
import { Experience } from "~/components/Experience";

export const meta: MetaFunction = () => {
  return {
    description: SITE_DESCRIPTION,
    title: `Welcome | ${SITE_TITLE}`
  };
};

export default function Index() {
  // Hooks
  const [heading, setHeading] = React.useState("Welcome friend 👋");

  // Styles
  const cssSection = `section-full flex flex-col items-center justify-center max-w-6xl gap-20`;
  const cssSection2 = `${cssSection} max-w-3xl`;
  // const cssHeading = "text-3xl mb-8 font-font-serif font-extrabold";

  // Setup
  const src = `https://media-exp1.licdn.com/dms/image/C5603AQGOIqLiltzE6Q/profile-displayphoto-shrink_800_800/0/1607310269762?e=1652918400&v=beta&t=ejJuCWmtmTXc5qekueVDpqqCmCv7zRncqNS6cLI7bBI`;

  // Handlers
  const onClick = async () => {
    const data = await loader({} as any);
    setHeading(data);
  };

  return (
    <main>
      <section className={cssSection}>
        <div className="flex flex-col items-center md:flex-row">
          <Hero copy={heading} highlight="Matthew Scholta" />
          <div>
            <img
              alt=""
              className="max-h-32 cursor-pointer rounded-full bg-gradient-to-l from-color-primary to-blue-500 p-1 transition-transform hover:rotate-6 hover:scale-110 md:max-h-40"
              onClick={onClick}
              src={src}
            />
          </div>
        </div>
        <ScrollTo to="/#section-2" />
      </section>

      <div className="section-anchor" id="section-2" />
      <section className={cssSection2}>
        <div className="h-full w-full p-4 ">
          {/* Maybe a swiper kinda thing here  */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            <Experience company="Haldi" role="Principal Engineer" />
            <Experience company="thredUP" role="Staff Engineer" />
            <Experience company="Beyond" role="Team Lead" />
          </div>
          {/*
          <small>
            Visit <a href="">LinkedIn</a> for more info.
          </small>
          */}
        </div>
      </section>
    </main>
  );
}
