import { MetaFunction, useLoaderData } from "remix";
import { Hero } from "~/components/Hero";
import { ScrollTo } from "~/components/ScrollTo";

import { WorkPreview } from "~/components/WorkPreview";
import { SITE_TITLE } from "~/config/constants";
import { loader, LoaderData } from "~/routes/api/work";

export { loader };

export const meta: MetaFunction = () => ({
  title: `Featured Work | ${SITE_TITLE}`
});

export default function Work() {
  // Hooks
  const data = useLoaderData<LoaderData>();

  return (
    <>
      <section className="m-auto mb-40 flex max-w-6xl flex-col items-center justify-center">
        <Hero
          className="my-36"
          copy="Relevant Work"
          highlight="What I've built"
        />

        <div className="grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3">
          {data.map((node) => (
            <WorkPreview data={node} key={node.slug} />
          ))}
        </div>
        <ScrollTo className="my-20" id="/blog" rotate="rotate-0" />
      </section>
    </>
  );
}
