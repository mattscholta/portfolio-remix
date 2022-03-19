import { MetaFunction } from "remix";

import { Hero } from "~/components/Hero";
import { SITE_TITLE } from "~/config/constants";

export const meta: MetaFunction = () => ({
  title: `Uses | ${SITE_TITLE}`
});

export default function About() {
  // Styles
  const cssSection = `section-full m-auto flex max-w-6xl flex-col items-center justify-center gap-20`;

  return (
    <>
      <section className={cssSection}>
        <Hero copy="Tools of the trade" highlight="Coming soon!" />
      </section>
    </>
  );
}
