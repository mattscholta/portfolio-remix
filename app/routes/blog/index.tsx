import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

import { BlogPreview } from "~/components/BlogPreview";
import { AppHero } from "~/components/AppHero";
import { SITE_AUTHOR, SITE_TITLE } from "~/config/constants";
import { loader } from "~/routes/api/blog";
import type { LoaderData } from "~/routes/api/blog";
import { BlogFeatured } from "~/components/BlogFeatured";
import { BlogUpcoming } from "~/components/BlogUpcoming";

export { loader };

export const meta: MetaFunction = () => ({
  description: `A collection of development ramblings by ${SITE_AUTHOR}.`,
  title: `A developers ramblings | ${SITE_TITLE}`
});

export default function () {
  // Hooks
  const { posts, tags: _tags } = useLoaderData<LoaderData>();

  // Setup
  const featured = posts.filter((node) => node.sticky);
  const others = posts.filter((node) => !node.sticky);

  return (
    <>
      <section className="bg-gradient-dark-- bg-color-background-dark text-color-background">
        <AppHero
          className="mx-auto max-w-6xl py-20 md:py-40"
          copy="Yes, another blog..."
          highlight="Developer ramblings"
          tag="h1"
        />
      </section>

      <section className="section-full m-auto flex max-w-6xl flex-col items-center justify-center gap-20 px-4 py-20">
        <div className="flex flex-col gap-20 md:flex-row">
          <BlogFeatured className="basis-2/3" post={featured[0]} />
          <BlogUpcoming className="basis-1/3" />
        </div>

        <div className="grid w-full gap-10 md:grid-cols-2 lg:grid-cols-3">
          {others.map((post) => (
            <BlogPreview
              content={post.content.html}
              date={post.date}
              image={post.imageTemp}
              key={post.id}
              slug={post.slug}
              title={post.title}
            />
          ))}
        </div>
      </section>
    </>
  );
}
