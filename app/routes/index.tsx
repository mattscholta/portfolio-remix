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
        <ScrollTo id="/#section-about" />
      </section>

      <div className="section-anchor" id="section-about" />
      <section className="section-full m-auto flex max-w-3xl flex-col items-center justify-center gap-20">
        <div className="px-4">
          <h2 className="my-4 font-font-serif text-3xl font-extrabold">
            About Matt 🧑‍💻
          </h2>
          <p>
            After 5+ great years pushing the envelope at thredUP.com the time
            has come for a new set of challenges. With a focus on front end
            development, user-experience, user-interaction and a passion for
            developer productivity I am beyond excited to see what opportunities
            the future holds.
          </p>
          <p>
            The technology and tools listed on this page are my preferred stack
            as of 2022. This year I'll be launching a new version of a long time
            project BarGuide.io with all that "free time" I have. 🤣
          </p>
          <p>
            So, if you're interested in learning more, ask the nearest developer
            to help you find my email address. I've hidden it into the website,
            twice actually... Otherwise reach out and connect on LinkedIn.
          </p>
        </div>
        <ScrollTo id="/#section-experience" />
      </section>

      <div className="section-anchor" id="section-experience" />
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
        <ScrollTo id="/#section-next" />
      </section>

      <div className="section-anchor" id="section-next" />
      <section className="section-full m-auto flex max-w-3xl flex-col items-center justify-center gap-20">
        <div className="px-4">
          <h2 className="my-4 text-3xl">Whats next 🧑‍💻</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            omnis ipsam odio atque alias amet, harum reprehenderit officiis.
            Laborum quibusdam dicta suscipit atque veniam tempora fugiat dolorum
            repellat ut quaerat!
          </p>
        </div>
      </section>
    </>
  );
}
