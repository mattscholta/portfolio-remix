import type { MetaFunction } from "remix";
import { useLoaderData } from "remix";

import type { LoaderData } from "~/routes/api/work";
import { Hero } from "~/components/Hero";
import { WorkPreview } from "~/components/WorkPreview";
import { SITE_TITLE } from "~/config/constants";
import { loader } from "~/routes/api/work";

export { loader };

export const meta: MetaFunction = () => ({
  title: `Featured work both past & present | ${SITE_TITLE}`
});

export default function () {
  // Hooks
  const data = useLoaderData<LoaderData>();

  // Setup
  const current = data.filter((node) => node.current);
  const recent = data.filter((node) => !node.current);

  return (
    <>
      <section className="bg-gradient-dark-- bg-color-background-dark text-color-background">
        <Hero
          className="py-20 md:py-40"
          copy="Currently"
          highlight="What I'm working on"
          tag="h1"
        />
      </section>

      <section>
        <div className="my-20 grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {current.map((node) => (
            <WorkPreview data={node} key={node.slug} />
          ))}
        </div>
      </section>

      <section className="bg-gradient-dark-- bg-color-background-dark text-color-background">
        <Hero
          className="py-20 md:py-40"
          copy="Relevant Work"
          highlight="What I've built"
          tag="h2"
        />
      </section>

      <section>
        <div className="my-20 grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recent.map((node) => (
            <WorkPreview data={node} key={node.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
