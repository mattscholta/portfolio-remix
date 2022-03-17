import { Link, MetaFunction, useParams } from "remix";

import { Hero } from "~/components/Hero";
import { ScrollTo } from "~/components/ScrollTo";
import { SITE_DESCRIPTION, SITE_TITLE } from "~/config/constants";

export const meta: MetaFunction = (args) => {
  return {
    description: SITE_DESCRIPTION,
    // title: `${args.data.title} | ${SITE_TITLE}`
    title: `${args.params.id?.substring(0, 4)}... | ${SITE_TITLE}`
  };
};

export default function About() {
  // Hooks
  const { id } = useParams();

  // Styles
  const cssSection = `section-full flex flex-col items-center justify-center max-w-6xl gap-20`;
  const cssHeading = "text-3xl mb-4 font-font-serif font-extrabold";

  return (
    <main>
      <section className={cssSection} id="section-1">
        <Hero
          className="mx-auto max-w-6xl"
          copy="June 2022"
          highlight={`Blog post #${id}`}
        />
        <ScrollTo to={`/blog/${id}/#section-2`} />
      </section>

      <div className="section-anchor" id="section-2" />
      <section className={cssSection}>
        <h2 className={cssHeading}>Blog Post #{id}</h2>
      </section>
    </main>
  );
}
