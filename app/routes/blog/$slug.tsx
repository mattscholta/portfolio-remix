import { MetaFunction, useLoaderData } from "remix";

import { Hero } from "~/components/Hero";
import { SITE_TITLE } from "~/config/constants";
import { loader, LoaderData } from "~/routes/api/blog/$slug";

export { loader };

export const meta: MetaFunction = (args) => ({
  title: `${args.data.title}... | ${SITE_TITLE}`
});

export default function () {
  // Hooks
  const data = useLoaderData<LoaderData>();

  // Setup
  const created = new Date(data.date);
  const date = created.toLocaleDateString("en-US", {
    weekday: undefined,
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <>
      <section className="section-full m-auto flex flex-col items-center justify-center">
        <Hero
          className="my-20 mx-auto max-w-6xl md:my-40"
          copy={date}
          highlight={data.title}
        />
        <img
          className="border-b border-t border-color-border-dark"
          src={data.imageTemp}
          alt=""
        />

        <div className="mb-20 max-w-5xl p-4">
          <h2 className="text-highlight my-8 inline-block text-left text-3xl md:my-12 md:text-4xl">
            {data.title}
          </h2>

          {/* Content */}
          <div className="flex gap-10">
            <div
              className="wysiwyg"
              dangerouslySetInnerHTML={{ __html: data.content.html }}
            />
            <aside className="min-w-[200px] bg-purple-500 p-4">
              <h3>Other Posts</h3>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
