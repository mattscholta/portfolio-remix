import { MetaFunction, useLoaderData } from "remix";

import { BlogPreview } from "~/components/BlogPreview";
import { Hero } from "~/components/Hero";
import { ScrollTo } from "~/components/ScrollTo";
import { SITE_TITLE } from "~/config/constants";
import { loader, LoaderData } from "~/routes/api/blog";

export { loader };

export const meta: MetaFunction = () => ({
  title: `Blog | ${SITE_TITLE}`
});

export default function About() {
  // Hooks
  const data = useLoaderData<LoaderData>();

  return (
    <>
      <section
        className="section-full m-auto flex max-w-6xl flex-col items-center justify-center gap-20"
        id="section-1"
      >
        <Hero
          className="mx-auto max-w-6xl"
          copy="Yes, another blog..."
          highlight="a developers ramblings"
        />
        <ScrollTo id="/blog#posts" />
      </section>

      <div className="section-anchor" id="posts" />
      <section className="section-full m-auto mb-40 flex max-w-6xl flex-col items-center justify-center gap-20">
        <div className="w-full p-8 ">
          <h2 className="mb-12 text-center text-3xl md:text-4xl">All Posts</h2>
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
        <ScrollTo id="/uses" rotate="rotate-0" />
      </section>
    </>
  );
}
