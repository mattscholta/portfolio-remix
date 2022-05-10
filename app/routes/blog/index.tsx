import { useLoaderData } from "remix";
import type { MetaFunction } from "remix";

import { BlogPreview } from "~/components/BlogPreview";
import { Hero } from "~/components/Hero";
import { SITE_TITLE } from "~/config/constants";
import { loader } from "~/routes/api/blog";
import type { LoaderData } from "~/routes/api/blog";
import { BlogTags } from "~/components/BlogTags";
import { BlogFeatured } from "~/components/BlogFeatured";

export { loader };

export const meta: MetaFunction = () => ({
  title: `Blog | ${SITE_TITLE}`
});

export default function () {
  // Hooks
  const data = useLoaderData<LoaderData>();

  return (
    <>
      <section
        className="section-full m-auto flex max-w-6xl flex-col items-center justify-center gap-20"
        id="section-1"
      >
        <Hero
          className="mx-auto my-20 max-w-6xl"
          copy="Yes, another blog..."
          highlight="a developers ramblings&nbsp;"
        />

        <div className="flex gap-10 p-4 md:p-8">
          <BlogFeatured className="basis-2/3" />
          <BlogTags className="basis-1/3" />
        </div>

        <div className="w-full p-4 md:p-4">
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

        <button className="mb-20 border border-color-border p-4">
          Load more +
        </button>
      </section>
    </>
  );
}
