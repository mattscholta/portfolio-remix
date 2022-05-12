import { useLoaderData } from "remix";
import type { MetaFunction } from "remix";

import { BlogPreview } from "~/components/BlogPreview";
import { Hero } from "~/components/Hero";
import { SITE_TITLE } from "~/config/constants";
import { loader } from "~/routes/api/blog";
import type { LoaderData } from "~/routes/api/blog";
import { BlogFeatured } from "~/components/BlogFeatured";
import { Tags } from "~/components/Tags";

export { loader };

export const meta: MetaFunction = () => ({
  title: `Blog | ${SITE_TITLE}`
});

export default function () {
  // Hooks
  const data = useLoaderData<LoaderData>();

  return (
    <>
      <section className="bg-color-background-dark text-color-background-light">
        <Hero
          className="mx-auto max-w-6xl py-20 md:py-40"
          copy="Yes, another blog..."
          highlight="a developers ramblings&nbsp;"
        />
      </section>

      <section className="section-full m-auto flex max-w-6xl flex-col items-center justify-center gap-20 py-10">
        <div className="flex flex-col gap-10 p-4 md:flex-row">
          <BlogFeatured className="basis-2/3" />
          <Tags
            className="basis-1/3"
            heading="Search blog by topics"
            tags={["one", "two", "three"]}
          />
        </div>

        <div className="w-full p-4">
          <h2 className="mb-12 text-3xl md:text-4xl">All Posts</h2>
          <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
              <BlogPreview
                content={item.content.html}
                date={item.date}
                image={item.imageTemp}
                key={item.id}
                slug={item.slug}
                title={item.title}
              />
            ))}
          </div>
        </div>

        <button className="my-20 border border-color-border p-4">
          Load more +
        </button>
      </section>
    </>
  );
}
