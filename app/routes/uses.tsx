import type { MetaFunction } from "remix";
import { SITE_TITLE } from "~/config/constants";
import { AppHero } from "~/components/AppHero";
import { SectionHardware } from "~/components/SectionHardware";
import { SectionMisc } from "~/components/SectionMisc";
import { SectionSoftware } from "~/components/SectionSoftware";

export const meta: MetaFunction = () => ({
  title: `Uses | ${SITE_TITLE}`
});

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
      <section className="border-0 border-t border-solid border-t-color-border bg-color-background-light">
        <SectionSoftware />
      </section>
      <SectionMisc />
    </>
  );
}
