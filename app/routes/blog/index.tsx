import { useLoaderData } from "remix";
import type { MetaFunction } from "remix";

import { BlogPreview } from "~/components/BlogPreview";
import { Hero } from "~/components/Hero";
import { SITE_AUTHOR, SITE_TITLE } from "~/config/constants";
import { loader } from "~/routes/api/blog";
import type { LoaderData } from "~/routes/api/blog";
import { BlogFeatured } from "~/components/BlogFeatured";
// import { Tags } from "~/components/Tags";

export { loader };

export const meta: MetaFunction = () => ({
  description: `A collection of development ramblings by ${SITE_AUTHOR}.`,
  title: `A developers ramblings | ${SITE_TITLE}`
});

export default function () {
  // Hooks
  const { posts, tags: _tags } = useLoaderData<LoaderData>();

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
          <div className="flex basis-1/3 flex-col gap-10">
            {/*
            <Tags
              classNameTag="bg-color-background-light border-solid border px-2 py-1 text-sm rounded-md"
              heading="Search blog by topics"
              tags={tags}
            />
            */}

            <div>
              <h3 className="text-2xl">Upcoming Posts</h3>
              <ul className="mt-8">
                <li className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">
                  Throw away code - the product life cycle
                </li>
                <li className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">
                  Developer tooling - debuggers &amp; loggers
                </li>
                <li className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">
                  You are not Google - moving quickly
                </li>
                <li className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">
                  Reviewing pull requests - a simple framework
                </li>
              </ul>
            </div>
          </div>
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
            {posts.map((post) => (
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
        </div>

        {/*
        <button className="my-20 border border-color-border p-4">
          Load more +
        </button>
        */}
      </section>
    </>
  );
}
