import { useState } from "react";
import type { LinksFunction, MetaFunction } from "remix";

import { social } from "~/data/resume";
import { SITE_AUTHOR, SITE_TITLE } from "~/config/constants";
import { AppSocialLink } from "~/components/AppSocialLink";
import { SectionEducation } from "~/components/SectionEducation";
import { SectionExperience } from "~/components/SectionExperience";
import { useClipboard } from "~/hooks/useClipboard";
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
  const { onCopy } = useClipboard();
  const [copied, setCopied] = useState(false);

  // Setup
  const year = new Date().getFullYear();

  // Handlers
  const onClick = async () => {
    setCopied(true);
    onCopy(`${window.location.origin}/resume`);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="m-auto max-w-5xl py-10 md:py-20">
      <div className="flex flex-col gap-20 px-4 md:flex-row md:px-0">
        <aside className="print:hidden md:w-1/5">
          <div className="sticky top-32">
            <div className="flex flex-row items-center justify-center gap-6 md:flex-col">
              <img
                alt={SITE_AUTHOR}
                className="custom-bg-gradient aspect-square max-h-48 overflow-hidden rounded-full p-1"
                height="auto"
                loading="eager"
                src="/images/assets/matt-scaled.webp"
                // src="/jax-sword.webp"
                width="auto"
              />
              <div className="flex flex-shrink-0 flex-col gap-2 p-4">
                {social.map((data) => (
                  <AppSocialLink data={data} key={data.title} />
                ))}
              </div>
            </div>
            <div className="print:hidden">
              <button
                className="ui-btn custom-bg-gradient mt-8 w-full whitespace-nowrap rounded-2xl py-2 px-4 text-sm font-normal text-white"
                onClick={onClick}
              >
                {copied
                  ? "Copied to clipboard ✓"
                  : "Save a tree, share a link!"}
              </button>
            </div>
          </div>
        </aside>

        <div className="resume-sections mb-20 flex flex-1 flex-col gap-10">
          <section>
            <h1 className="uppercase- mb-10 text-2xl font-extrabold md:text-4xl">
              <span className="sr-only">The {year} online resume of </span>
              {SITE_AUTHOR}
            </h1>
            <div className="mb-8 border-t border-solid border-color-border print:hidden" />
            <div className="flex items-center gap-10">
              <p>
                <span className="mr-1">👨‍💻</span> A Software Engineer whose
                passion lies in creating <b>quality code</b> written{" "}
                <b>for humans</b>, unlocking <b>developer productivity</b>, and
                creating <b>delightful</b> user and developer <b>experiences</b>
                .
              </p>
            </div>
          </section>
          <SectionExperience />
          {/* <SectionProficiencies /> */}
          <SectionEducation />
        </div>
      </div>
    </div>
  );
}
