import type { MetaFunction } from "remix";
import { experience as data, social } from "~/data/resume";
import { SITE_AUTHOR, SITE_TITLE, SOCIAL_LINKEDIN } from "~/config/constants";
import { useState } from "react";

export const meta: MetaFunction = () => {
  const year = new Date().getFullYear();

  return {
    title: `Resume ${year} | ${SITE_TITLE}`
  };
};

export default function Resume() {
  // Setup
  const [shown, setShown] = useState(4);

  // Setup
  const experience = data.slice(0, shown);
  const size = 14;

  // Handlers
  const onToggleExp = () => {
    setShown(shown === 4 ? data.length : 4);
  };

  return (
    <div className="m-auto max-w-5xl pt-10">
      <div className="flex gap-14">
        <aside className="w-1/5">
          <div className="sticky top-16 bg-color-background">
            <img
              alt={SITE_AUTHOR}
              className="custom-bg-gradient cursor-pointer overflow-hidden rounded-full p-1 transition-transform hover:scale-110 active:rotate-6"
              loading="eager"
              src="/jax-sword.webp"
            />

            <div className="mt-14 flex flex-col gap-2 p-4">
              {social.map((data) => (
                <a
                  className="flex items-center gap-4 break-words break-all text-color-copy-light"
                  href={data.url}
                  key={data.title}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="Follow me on xxxxx"
                    height={size}
                    src={data.icon}
                    width={size}
                  />
                  {data.title}
                </a>
              ))}
            </div>
          </div>
        </aside>

        <div className="mb-20 flex flex-1 flex-col gap-10">
          <section>
            <div className="uppercase- mb-10 text-4xl font-semibold">
              Matthew Scholta
            </div>
            <div className="mb-8 border-t border-solid border-color-border" />

            <div className="flex items-center gap-10">
              <p>
                👨‍💻 A Software Engineer passionate about quality code written for
                humans, unlocking developer productivity, and creating
                delightful user experiences.
              </p>
              <div>
                <button className="ui-btn ui-button text-highlight whitespace-nowrap rounded-2xl border border-color-primary py-2 px-4 font-semibold">
                  PDF Download
                </button>
              </div>
            </div>
          </section>

          <section>
            <div className="sticky top-0 bg-color-background">
              <h2 className="py-8 text-xl">Experience</h2>
              <div className="mb-8 border-t border-solid border-color-border" />
            </div>

            <div className="mb-10 flex flex-col gap-10">
              {experience.map((exp) => (
                <div className="flex gap-10" key={exp.title}>
                  <div className="flex basis-[160px] flex-col gap-2 text-base">
                    <h3 className="font-medium">{exp.title}</h3>
                    <h4 className="flex items-center gap-2 font-bold">
                      {exp.image && (
                        <img
                          alt=""
                          className="h-4"
                          loading="eager"
                          src={exp.image}
                        />
                      )}

                      <a
                        className="text-color-copy hover:underline"
                        dangerouslySetInnerHTML={{ __html: exp.company }}
                        href={exp.companyUrl}
                        rel="noreferrer"
                        target="_blank"
                      />
                    </h4>
                    <div className="text-color-copy-light">{exp.date}</div>
                  </div>

                  <div className="flex-1">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: exp.description
                      }}
                    />
                    <ul className="my-4 ml-4 list-disc text-sm font-light">
                      {exp.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          dangerouslySetInnerHTML={{ __html: highlight }}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <button
                className="mx-auto block rounded-2xl border border-color-border bg-color-background-light py-2 px-4 font-font-sans-serif text-xs font-bold uppercase"
                onClick={onToggleExp}
              >
                {shown === 4 ? "Show more" : "Show less"}
              </button>
            </div>
          </section>

          <section>
            <div className="sticky top-0 bg-color-background">
              <h2 className="py-8 text-xl">Proficiencies</h2>
              <div className="mb-8 border-t border-solid border-color-border" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              nesciunt, a at aspernatur molestias vel aliquam quae aut soluta,
              alias tenetur. Ad cupiditate sint aliquam molestias dolore, quod
              iste a.
            </p>
          </section>

          <section>
            <div className="sticky top-0 bg-color-background">
              <h2 className="py-8 text-xl">Education</h2>
              <div className="mb-8 border-t border-solid border-color-border" />
            </div>

            <h3>San Francisco State University</h3>
            <h4 className="font-normal">
              Industrial Design <em>(incomplete)</em>
            </h4>

            <div className="mt-10">
              <p>
                Started as an Mechanical Engineering major, found Industrial
                Design, only to get a job doing Design and Development.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
