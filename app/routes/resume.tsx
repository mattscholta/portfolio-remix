import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { AppShareLink } from "~/components/AppShareButton";
import { AppSocialLink } from "~/components/AppSocialLink";
import { SectionEducation } from "~/components/SectionEducation";
import { SectionExperience } from "~/components/SectionExperience";
import { SITE_AUTHOR, SITE_TITLE, SITE_YEAR } from "~/config/constants";
import { social } from "~/data/resume";
import styles from "~/styles/resume.css";

export const links: LinksFunction = () => [
  {
    href: styles,
    media: "print",
    rel: "stylesheet",
  },
];

export const meta: MetaFunction = (args) => {
  return [
    {
      title: `${SITE_YEAR} Resume | ${SITE_TITLE}`,
    },
    {
      name: "description",
      content: `The online resume of ${SITE_AUTHOR}, a Software Engineer located in San Diego, California.`,
    },
  ];

  // ...getMetaData({
  //   canonical: args.parentsData?.root?.canonical,
  // })
};

export default function () {
  return (
    <div className="m-auto max-w-5xl py-10 md:py-20">
      <div className="flex flex-col gap-20 px-4 md:flex-row md:px-0">
        <aside className="md:w-1/5 print:hidden">
          <div className="sticky top-32">
            <div className="flex flex-row items-center justify-center gap-6 md:flex-col">
              <img
                alt={SITE_AUTHOR}
                className="custom-bg-gradient aspect-square max-h-48 overflow-hidden rounded-full p-1"
                height="auto"
                loading="eager"
                src="/images/assets/matt-scaled.webp"
                width="auto"
              />
              <div className="flex flex-shrink-0 flex-col gap-2 p-4">
                {social.map((data) => (
                  <AppSocialLink data={data} key={data.title} />
                ))}
              </div>
            </div>
            <div className="mt-8 flex gap-4 print:hidden">
              <a
                className="ui-btn custom-bg-gradient flex-1 whitespace-nowrap rounded-2xl px-4 py-2 text-center text-sm font-normal text-white"
                download={true}
                href="/resume/Matthew_Scholta_2024.pdf"
              >
                Download Resume
              </a>
              <AppShareLink />
            </div>
          </div>
        </aside>

        <div className="resume-sections mb-20 flex flex-1 flex-col gap-10">
          <section>
            <h1 className="uppercase- mb-10 text-2xl font-extrabold md:text-4xl">
              <span className="sr-only">The {SITE_YEAR} online resume of </span>
              {SITE_AUTHOR}
            </h1>
            <div className="mb-8 border-t border-solid border-color-border print:hidden" />
            <div className="flex items-center gap-10">
              <p>
                <span className="mr-1">👨‍💻</span> A Software Engineer whose
                passion lies in creating <b>quality code</b> written{" "}
                <b>for humans</b>, unlocking <b>developer productivity</b>, and
                creating a delightful <b>user experience</b>.
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
