import type { MetaFunction } from "@remix-run/node";
import { SITE_TITLE } from "~/config/constants";
import { AppHero } from "~/components/AppHero";
import { SectionHardware } from "~/components/SectionHardware";
import { SectionMisc } from "~/components/SectionMisc";
import { SectionSoftware } from "~/components/SectionSoftware";
import { getMetaData } from "~/metadata";

export const meta: MetaFunction = (args) => {
  // console.log(` 💬 ~ args.data`, args.data);

  return {
    ...getMetaData({
      canonical: args.parentsData?.root?.canonical,
      description: `Check out uses.tech for a list of more /uses pages!`,
      title: `Uses | ${SITE_TITLE}`
    })
  };
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
