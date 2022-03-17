import { MetaFunction, useLoaderData } from "remix";
import { Hero } from "~/components/Hero";
import { ScrollTo } from "~/components/ScrollTo";

import { WorkPreview } from "~/components/WorkPreview";
import { SITE_DESCRIPTION, SITE_TITLE } from "~/config/constants";
import { loader, LoaderData } from "~/routes/api/work";

export { loader };

export const meta: MetaFunction = () => {
  return {
    description: SITE_DESCRIPTION,
    title: `Featured Work | ${SITE_TITLE}`
  };
};

export default function Work() {
  // Hooks
  const data = useLoaderData<LoaderData>();

  // Styles
  const cssSection = `section-full m-auto flex max-w-6xl flex-col items-center justify-center gap-20`;

  return (
    <>
      <section className={cssSection}>
        <Hero copy="Show me the goods" highlight="Recent Work" />
        <ScrollTo to="/work/#section-2" />
      </section>

      <div className="section-anchor" id="section-2" />
      <section className={cssSection}>
        <div className="mb-40 mt-20 grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3">
          {data.map((node) => (
            <WorkPreview data={node} key={node.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
