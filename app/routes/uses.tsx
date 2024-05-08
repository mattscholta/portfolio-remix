import type { MetaFunction } from "@remix-run/react";
import { AppHero } from "~/components/AppHero";
import { SectionHardware } from "~/components/SectionHardware";
import { SectionMisc } from "~/components/SectionMisc";
import { SectionSoftware } from "~/components/SectionSoftware";
import { SITE_TITLE } from "~/config/constants";

export const meta: MetaFunction = (args) => {
  return [
    {
      title: `Uses | ${SITE_TITLE}`,
    },
    {
      name: "description",
      content: `Check out uses.tech for a list of more /uses pages!`,
    },
    // ...getMetaData({
    //   canonical: args.parentsData?.root?.canonical,
    // })
  ];
};

export default function () {
  return (
    <>
      <section className="bg-color-background-dark text-color-background">
        <AppHero
          className="py-20 md:py-40"
          copy="If you're curious"
          highlight="What I'm using"
          tag="h1"
        />
      </section>
      <SectionHardware />
      <div className="border-0 border-t border-solid border-t-color-border bg-color-background-light">
        <SectionSoftware />
      </div>
      <div className="bg-color-background-dark py-20 text-color-background-light">
        <SectionMisc />
      </div>
    </>
  );
}
