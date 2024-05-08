import type { MetaFunction } from "@remix-run/react";
import * as React from "react";
import { AppHero } from "~/components/AppHero";
import { getQuote } from "~/routes/api.qualities";
import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_TITLE } from "~/config/constants";
import { SectionCompanies } from "~/components/SectionCompanies";
import { SectionTechnology } from "~/components/SectionTechnology";
import { SectionAmbitions } from "~/components/SectionAmbitions";
// import { SectionFireworks } from "~/components/SectionFireworks";
// import { getMetaData } from "~/metadata";

export const meta: MetaFunction = (args) => {
  return [
    {
      title: `${SITE_TITLE}`,
    },
    {
      name: "description",
      content: SITE_DESCRIPTION,
    },
    {
      tagName: "link",
      rel: "canonical",
      href: args.data?.canonical,
    },

    // {
    //   name: "canonical",
    //   content: args.data?.canonical
    // }
    // ...getMetaData({
    //   canonical: args.parentsData?.root?.canonical,
    // })
  ];
};

export default function () {
  // Hooks
  const [heading, setHeading] = React.useState("A Software Engineer");

  // Handlers
  const onClick = async () => {
    const data = await getQuote(heading);
    setHeading(data);
  };

  return (
    <>
      <div className="relative">
        {/* <SectionFireworks /> */}
        <section className="relative z-0 m-auto flex max-w-6xl flex-col-reverse items-center justify-center gap-4 py-20 md:flex-row md:py-40">
          <AppHero
            className="py-10 md:py-20 md:text-right"
            copy={<span className="whitespace-nowrap">{heading}</span>}
            highlight={SITE_AUTHOR}
            tag="h1"
          />
          <div>
            <img
              alt={SITE_AUTHOR}
              className="custom-bg-gradient aspect-square max-h-32 cursor-pointer overflow-hidden rounded-full p-1 transition-transform hover:scale-110 active:rotate-6 md:max-h-40"
              height="auto"
              loading="eager"
              onClick={onClick}
              src="/images/assets/matt-scaled.webp"
              width="auto"
            />
          </div>
        </section>
      </div>
      <section className="border-0 border-b border-t border-solid border-color-border bg-color-background-light px-8 py-20 text-color-background-dark md:px-0">
        <blockquote className="mx-auto my-20 max-w-4xl text-2xl font-normal md:my-40 md:text-3xl">
          Passionate about <b>quality code</b> written <b>for humans</b>,
          unlocking <b>developer productivity</b>, and creating a delightful{" "}
          <b>user experience</b>.
        </blockquote>
      </section>
      <SectionAmbitions />
      <section className="bg-color-background-dark py-20 text-color-background-light">
        <SectionTechnology />
      </section>
      <SectionCompanies />
    </>
  );
}
