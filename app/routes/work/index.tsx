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
    title: `Work | ${SITE_TITLE}`
  };
};

export default function Work() {
  // Hooks
  const data = useLoaderData<LoaderData>();

  // Styles
  const cssSection = `section-full flex flex-col items-center justify-center max-w-6xl gap-20`;

  return (
    <main>
      <section className={cssSection}>
        <Hero
          copy="I've been at it a while now"
          highlight={`Some "recent" Work`}
        />
        <ScrollTo to={`/work#section-2`} />
      </section>

      <div className="section-anchor" id="section-2" />
      <section className={cssSection}>
        <div className="mb-40 grid grid-cols-3 gap-16">
          {data.map((node) => (
            <WorkPreview data={node} key={node.slug} />
          ))}
        </div>
      </section>
    </main>
  );
}
