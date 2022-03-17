import * as React from "react";
import { MetaFunction } from "remix";

import { Hero } from "~/components/Hero";
import { loader } from "~/routes/api/qualities";
import { ScrollTo } from "~/components/ScrollTo";
import {
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
  const [heading, setHeading] = React.useState("Welcome friend 👋");

  // Styles
  const cssSection = `section-full m-auto flex max-w-6xl flex-col items-center justify-center gap-20`;
  const cssSection2 = `${cssSection} max-w-3xl`;
  const cssHeading = "text-2xl my-4 font-font-serif font-extrabold";
  const cssHeading2 = `${cssHeading} text-3xl`;

  // Setup
  const src = `https://media-exp1.licdn.com/dms/image/C5603AQGOIqLiltzE6Q/profile-displayphoto-shrink_800_800/0/1607310269762?e=1652918400&v=beta&t=ejJuCWmtmTXc5qekueVDpqqCmCv7zRncqNS6cLI7bBI`;
  const linkedIn = (
    <a
      className="text-color-primary"
      title="Follow on LinkedIn"
      href={SOCIAL_LINKEDIN}
    >
      LinkedIn
    </a>
  );

  // Handlers
  const onClick = async () => {
    const data = await loader({} as any);
    setHeading(data);
  };

  return (
    <>
      <section className={cssSection}>
        <div className="mt-20 flex flex-col-reverse items-center gap-4 md:mt-0 md:flex-row">
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
        <ScrollTo to="/#section-3" />
      </section>

      <div className="section-anchor" id="section-3" />
      <section className={cssSection2}>
        <div className="h-full w-full p-4 ">
          {/* Maybe a swiper kinda thing here  */}
          <div className="flex flex-col items-center justify-center gap-20 sm:flex-row md:mt-20">
            <div className="flex-1 text-center">
              <h3 className="mb-4 font-font-serif text-2xl font-extrabold">
                Professional Experience
              </h3>
              <p>
                If you do what you love, you'll never work a day in your life...
                I love solving problems and building things, what can I help you
                build?
              </p>
              <small className="mt-4 block italic text-color-copy-light">
                Visit {linkedIn} a <b>full list</b> of my skills and experience.
              </small>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-12">
              <Experience
                company="Haldi"
                date="April 2021 – Present"
                role="Principal Engineer"
              />
              <Experience
                company="thredUP"
                date="Feb 2016 – April 2021"
                role="Staff Engineer"
              />
              <Experience
                company="Beyond"
                date="Nov 2011 – Apr 2015"
                role="Technical Team Lead"
              />
            </div>
          </div>
          {/*
          <div className="mt-2 text-center italic opacity-50">
            <small>
              * Visit{" "}
              <a
                className=" text-color-primary"
                title="Follow on LinkedIn"
                href={SOCIAL_LINKEDIN}
              >
                LinkedIn
              </a>{" "}
              for more info.
            </small>
          </div>
          */}
        </div>
        <ScrollTo to="/#section-4" />
      </section>

      <div className="section-anchor" id="section-4" />
      <section className={cssSection2}>
        <div className="px-4">
          <h2 className={cssHeading2}>Whats next 🧑‍💻</h2>
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
      </section>
    </>
  );
}
