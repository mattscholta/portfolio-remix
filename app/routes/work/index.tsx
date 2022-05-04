import type { MetaFunction } from "remix";
import { useLoaderData } from "remix";

import type { LoaderData } from "~/routes/api/work";
import { Hero } from "~/components/Hero";
import { WorkPreview } from "~/components/WorkPreview";
import { SITE_TITLE } from "~/config/constants";
import { loader } from "~/routes/api/work";

export { loader };

export const meta: MetaFunction = () => ({
  title: `Featured Work | ${SITE_TITLE}`
});

export default function () {
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

        <div className="grid grid-cols-1 gap-16 p-4 md:grid-cols-1 lg:grid-cols-2">
          {data.map((node) => (
            <WorkPreview data={node} key={node.slug} />
          ))}
        </div>

        {/* <ScrollTo className="my-20" id="/blog" rotate="rotate-0" /> */}
      </section>
    </>
  );
}
