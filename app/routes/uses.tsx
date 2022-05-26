import type { MetaFunction } from "remix";
import { SITE_TITLE } from "~/config/constants";
import { Hero } from "~/components/Hero";
import { Technology } from "~/components/Technology";
import { UsesMisc } from "~/components/UsesMisc";
import { UsesSoftware } from "~/components/UsesSoftware";
import { UsesHardware } from "~/components/UsesHardware";

export const meta: MetaFunction = () => ({
  title: `Uses | ${SITE_TITLE}`
});

export default function () {
  return (
    <>
      <section className="bg-color-background-dark text-color-background">
        <Hero
          className="py-20 md:py-40"
          copy="If you're curious"
          highlight="What I'm using"
          tag="h1"
        />
      </section>

      <UsesHardware />
      <Technology />
      <UsesSoftware />
      <UsesMisc />
    </>
  );
}
