import type { LoaderData } from "~/routes/api.portfolio";
import type { MetaFunction } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { AppHero } from "~/components/AppHero";
import { PortfolioPreview } from "~/components/PortfolioPreview";
import { loader } from "~/routes/api.portfolio";
import { SITE_AUTHOR, SITE_TITLE } from "~/config/constants";

export { loader };

export const meta: MetaFunction = (args) => {
  return [
    {
      title: `Featured Work | ${SITE_TITLE}`,
    },
    {
      name: "description",
      content: `A collection of ramblings by ${SITE_AUTHOR}.`,
    },

    // ...getMetaData({
    //   canonical: args.parentsData?.root?.canonical,
    // })
  ];
};

export default function () {
  // Hooks
  const data = useLoaderData<LoaderData>();

  // Setup
  const current = data.filter((node) => node.current);
  const recent = data.filter((node) => !node.current);

  return (
    <>
      <section>
        <div className="bg-color-background-dark text-color-background">
          <AppHero
            className="py-20 md:py-40"
            copy="Right now..."
            highlight="What I'm building"
            tag="h1"
          />
        </div>
        <div className="mx-auto md:max-w-6xl">
          <div className="my-20 grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {current.map((node) => (
              <PortfolioPreview current={true} data={node} key={node.slug} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="border-0 border-b border-t border-color-border bg-color-background-light text-color-background-dark">
          <AppHero
            className="py-20 md:py-40"
            copy="In the past..."
            highlight="What I've built"
            tag="h2"
          />
        </div>
        <div className="mx-auto md:max-w-6xl">
          <div className="my-20 grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {recent.map((node) => (
              <PortfolioPreview current={false} data={node} key={node.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
