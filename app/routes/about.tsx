import { MetaFunction } from "remix";
import { Hero } from "~/components/Hero";
import { SITE_DESCRIPTION, SITE_TITLE } from "~/config/constants";

export const meta: MetaFunction = () => {
  return {
    description: SITE_DESCRIPTION,
    title: `About | ${SITE_TITLE}`
  };
};

export default function About() {
  // Styles
  const cssSection = `section-full m-auto flex max-w-6xl flex-col items-center justify-center gap-20`;

  return (
    <>
      <section className={cssSection}>
        <Hero copy="A problem solver 🤔" highlight="Matthew Scholta" />
      </section>
    </>
  );
}
