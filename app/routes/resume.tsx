import { useState } from "react";
import type { LinksFunction, MetaFunction } from "remix";

import { experience as data, social } from "~/data/resume";
import { SITE_AUTHOR, SITE_TITLE } from "~/config/constants";
import { Experience } from "~/components/Experience";
import { SocialLink } from "~/components/SocialLink";
import { getTimeWorked } from "~/utils/date-time";

import styles from "~/styles/resume.css";

export const links: LinksFunction = () => [
  {
    href: styles,
    media: "print",
    rel: "stylesheet"
  }
];

export const meta: MetaFunction = () => {
  const year = new Date().getFullYear();

  return {
    description: `${SITE_AUTHOR}'s resume`,
    title: `The ${year} online resume of ${SITE_AUTHOR} | ${SITE_TITLE}`
  };
};

export default function () {
  // Hooks
  // const minValue = data.length;
  const minValue = 3;
  const [shown, setShown] = useState(minValue);

  // Setup
  const experience = data.slice(0, shown);
  const year = new Date().getFullYear();

  // Handlers
  const onToggleExp = () => {
    setShown(shown === minValue ? data.length : minValue);
  };

  const start = new Date("02/01/2016");
  const stop = new Date("04/01/2021");
  const testing = getTimeWorked(start, stop);

  console.log(` 💬 ~ testing`, testing);

  return (
    <div className="m-auto max-w-5xl pt-10">
      <div className="flex flex-col gap-20 px-4 md:flex-row">
        <aside className="md:w-1/5">
          <div className="sticky top-16">
            <img
              alt={SITE_AUTHOR}
              className="custom-bg-gradient overflow-hidden rounded-full p-1"
              height="auto"
              loading="eager"
              src="/images/assets/matt-scaled.webp"
              width="auto"

              // src="/jax-sword.webp"
            />

            <div className="mt-14 flex flex-col gap-2 p-4">
              {social.map((data) => (
                <SocialLink data={data} key={data.title} />
              ))}
            </div>
            <div className="print:hidden">
              <button className="ui-btn custom-bg-gradient mt-8 w-full whitespace-nowrap rounded-2xl py-2 px-4 font-semibold text-white">
                PDF Download
              </button>
            </div>
          </div>
        </aside>

        <div className="resume-sections mb-20 flex flex-1 flex-col gap-10">
          <section>
            <h1 className="uppercase- mb-10 text-4xl font-extrabold">
              <span className="sr-only">The {year} online resume of </span>
              {SITE_AUTHOR}
            </h1>
            <div className="mb-8 border-t border-solid border-color-border" />

            <div className="flex items-center gap-10">
              <p>
                <span className="mr-2">👨‍💻</span> A Software Engineer whose
                passion lies in creating <b>quality code</b> written{" "}
                <b>for humans</b>, unlocking <b>developer productivity</b>, and
                creating <b>delightful</b> user and developer <b>experiences</b>
                .
              </p>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section>
            <div className="sticky top-0 bg-color-background">
              <h2 className="py-8 text-xl">Experience</h2>
              <div className="mb-8 border-t border-solid border-color-border" />
            </div>

            <div className="mb-10 flex flex-col gap-10">
              {experience.map((exp) => (
                <Experience experience={exp} key={exp.title} />
              ))}
            </div>
            <div className="print:hidden">
              <button
                className="m-10 mx-auto block rounded-2xl border border-color-border bg-color-background-light py-2 px-4 font-font-sans-serif text-xs font-bold uppercase"
                onClick={onToggleExp}
              >
                {shown === minValue ? "Show more" : "Show less"}
              </button>
            </div>
          </section>

          {/* PROFICIENCIES */}
          <section>
            <div className="sticky top-0 bg-color-background">
              <h2 className="py-8 text-xl">Proficiencies</h2>
              <div className="mb-8 border-t border-solid border-color-border" />
            </div>

            <p className="text-sm">
              Not saying I am an "expert" in anything, that's a high bar IMHO.
              However, these are the tools I use day-in and day-out to make
              ideas come to life.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-8 p-1 text-sm md:grid-cols-2">
              <div className="rounded-md border bg-color-background-light p-4 shadow-md">
                <h3 className="text-lg text-color-copy-light">DevOps</h3>
              </div>
              <div className="rounded-md border bg-color-background-light p-4 shadow-md">
                <h3 className="text-lg text-color-copy-light">Testing</h3>
                Redux, REST, Rollup, SQL / MySQL, Sketch, Swarm, Tailwind CSS,
                TypeScript, Webpack,
              </div>
              <div className="rounded-md border bg-color-background-light p-4 shadow-md">
                <h3 className="text-lg text-color-copy-light">Testing</h3>
                HTML, Javascript, JWT, Kubernetes, Lerna, NextJS, Node.js,
                NoSQL, npm, PostCSS, Postgres, React, Remix 🤩, RecoilJS,
              </div>
              <div className="rounded-md border bg-color-background-light p-4 shadow-md">
                <h3 className="text-lg text-color-copy-light">Design</h3>
                Adobe; you name it I've likely used it, Sketch, Figma
              </div>
              <div className="rounded-md border bg-color-background-light p-4 shadow-md">
                <h3 className="text-lg text-color-copy-light">Testing</h3>
                Apollo, Agile, AWS, Babel, CSS, Docker, ElasticSearch, Express,
                Figma, Google Analytics, Google Cloud, Google Tag Manger,
                Git/GitHub, GraphQL,
              </div>
              <div className="rounded-md border bg-color-background-light p-4 shadow-md">
                <h3 className="text-lg text-color-copy-light">Testing</h3>
                Apollo, Agile, AWS, Babel, CSS, Docker, ElasticSearch, Express,
                Figma, Google Analytics, Google Cloud, Google Tag Manger,
                Git/GitHub, GraphQL,
              </div>
              <div className="rounded-md border bg-color-background-light p-4 shadow-md">
                <h3 className="text-lg text-color-copy-light">Testing</h3>
                Apollo, Agile, AWS, Babel, CSS, Docker, ElasticSearch, Express,
                Figma, Google Analytics, Google Cloud, Google Tag Manger,
                Git/GitHub, GraphQL,
              </div>
              <div className="rounded-md border bg-color-background-light p-4 shadow-md">
                <h3 className="text-lg text-color-copy-light">Testing</h3>
                Apollo, Agile, AWS, Babel, CSS, Docker, ElasticSearch, Express,
                Figma, Google Analytics, Google Cloud, Google Tag Manger,
                Git/GitHub, GraphQL,
              </div>
            </div>
          </section>

          {/* EDUCATION */}
          <section>
            <div className="sticky top-0 bg-color-background">
              <h2 className="py-8 text-xl">Education</h2>
              <div className="mb-8 border-t border-solid border-color-border" />
            </div>

            <h3>San Francisco State University</h3>
            <h4 className="font-normal">
              Industrial Design{" "}
              <em className="text-sm text-color-copy-light">(incomplete)</em>
            </h4>

            {/*
            <div className="mt-10">
              <p>
                Started as an Mechanical Engineering major, found Industrial
                Design, only to get a job doing Design and Development.
              </p>
            </div>
            */}
          </section>

          {/* <div className="print:hidden- h-[60vh]" /> */}
        </div>
      </div>
    </div>
  );
}
