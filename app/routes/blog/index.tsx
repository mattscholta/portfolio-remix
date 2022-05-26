import { useLoaderData } from "remix";
import type { MetaFunction } from "remix";

import { BlogPreview } from "~/components/BlogPreview";
import { Hero } from "~/components/Hero";
import { SITE_AUTHOR, SITE_TITLE } from "~/config/constants";
import { loader } from "~/routes/api/blog";
import type { LoaderData } from "~/routes/api/blog";
import { BlogFeatured } from "~/components/BlogFeatured";
import { Tags } from "~/components/Tags";

export { loader };

export const meta: MetaFunction = () => ({
  description: `A collection of development ramblings by ${SITE_AUTHOR}.`,
  title: `A developers ramblings | ${SITE_TITLE}`
});

export default function () {
  // Hooks
  const data = useLoaderData<LoaderData>();

  return (
    <>
      <section className="bg-gradient-dark-- bg-color-background-dark text-color-background">
        <Hero
          className="mx-auto max-w-6xl py-20 md:py-40"
          copy="Yes, another blog..."
          highlight="Developer ramblings"
          tag="h1"
        />
      </section>

      <section className="section-full m-auto flex max-w-6xl flex-col items-center justify-center gap-20 py-20">
        <div className="flex flex-col gap-20 p-4 md:flex-row">
          <BlogFeatured className="basis-2/3" />
          <Tags
            className="basis-1/3"
            classNameTag="border-color-border-dark border-solid border px-2 py-1 text-sm rounded-md"
            heading="Search blog by topics"
            tags={[
              "React",
              "Remix",
              "TypeScript",
              "Open Source",
              "Productivity",
              "Developer Experience"
            ]}
          />
        </div>

        {/*
        <div className="flex w-full justify-center gap-10 p-4">
          <blockquote className="basis-1/2">
            I've never been much for "words" but more of an "actions speak"
            kinda guy.
          </blockquote>
          <div className="basis-2/3">
            <p>
              This may very well be what intrigues me about software
              development. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Omnis necessitatibus fugiat placeat aliquid accusantium,
              ducimus quia iste quam quasi eum! Perspiciatis facilis
              necessitatibus accusantium atque illo eum corrupti voluptates
              mollitia?
            </p>
          </div>
        </div>
        */}

        <div className="w-full p-4">
          <h2 className="mb-12 text-3xl md:text-4xl">All Posts</h2>
          <div className="grid w-full gap-10 md:grid-cols-2 lg:grid-cols-3">
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
