import * as React from "react";
import { MetaFunction } from "remix";

import { Hero } from "~/components/Hero";
import { loader } from "~/routes/api/qualities";
import { ScrollTo } from "~/components/ScrollTo";
import {
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SOCIAL_LINKEDIN
} from "~/config/constants";
import { Experience } from "~/components/Experience";

export const meta: MetaFunction = () => {
  return {
    description: SITE_DESCRIPTION,
    title: `Welcome | ${SITE_TITLE}`
  };
};

export default function Index() {
  // Hooks
  const [heading, setHeading] = React.useState("A Software Engineer");

  // Handlers
  const onClick = async () => {
    const data = await loader({} as any);
    setHeading(data);
  };

  return (
    <>
      <section className="section-full m-auto flex max-w-6xl flex-col items-center justify-center gap-20">
        <div className="mt-20 flex flex-col-reverse items-center gap-4 md:mt-0 md:flex-row">
          <Hero
            className="md:text-right"
            copy={<span className="whitespace-nowrap">{heading}</span>}
            highlight={SITE_AUTHOR}
          />
          <div>
            <img
              alt={SITE_AUTHOR}
              className="custom-bg-gradient max-h-32 cursor-pointer rounded-full p-1 transition-transform hover:scale-110 active:rotate-6 md:max-h-40"
              onClick={onClick}
              src="/matt-scaled.webp"
            />
          </div>
        </div>
        <ScrollTo id="/#about" />
      </section>

      <div className="section-anchor" id="about" />
      <section className="section-full m-auto flex max-w-3xl flex-col items-center justify-center gap-20">
        <blockquote>
          Passionate about quality <span className="text-highlight">code</span>{" "}
          written for <span className="text-highlight">humans,</span> unlocking{" "}
          <span className="text-highlight">developer productivity,</span> and{" "}
          <span className="text-highlight">creating</span> delightful{" "}
          <span className="underline">user experiences</span>.
          {/*
          <div className="mt-4 text-right">
            <cite className="text-highlight">Matt</cite>
          </div>
          */}
        </blockquote>

        <ScrollTo id="/#experience" />
      </section>

      <div className="section-anchor" id="experience" />
      <section className="section-full m-auto flex max-w-3xl flex-col items-center justify-center gap-20">
        <div className="h-full w-full p-4 ">
          {/* Maybe a swiper kinda thing here  */}
          <div className="flex flex-col items-center justify-center gap-20 sm:flex-row md:mt-20">
            <div className="flex-1 text-center">
              <blockquote className="m-0 p-0">
                If you <span className="text-highlight">do what you love,</span>{" "}
                you'll never work a day in your life...
              </blockquote>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-12">
              <Experience
                company="Haldi"
                date="April 2021 – Present"
                role="Principal Engineer"
                url="https://haldi.com"
              />
              <Experience
                company="thredUP"
                date="Feb 2016 – April 2021"
                role="Staff Engineer"
                url="https://thredup.com"
              />
              <Experience
                company="Beyond"
                date="Nov 2011 – Apr 2015"
                role="Technical Team Lead"
                url="https://bynd.com"
              />
            </div>
          </div>
        </div>
        <ScrollTo id="/#whats-next" />
      </section>

      <div className="section-anchor" id="whats-next" />
      <section className="section-full m-auto flex max-w-3xl flex-col items-center justify-center gap-20">
        <div className="px-4">
          <h2 className="my-4 text-3xl">Whats next 🧑‍💻</h2>
          <p>That my friend is a wonderful question.</p>
        </div>
        <ScrollTo id="/work" rotate="rotate-0" />
      </section>
    </>
  );
}
