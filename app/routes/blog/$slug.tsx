import { useLoaderData } from "remix";
import type { MetaFunction } from "remix";

import { Hero } from "~/components/Hero";
import { SITE_AUTHOR, SITE_TITLE } from "~/config/constants";
import type { LoaderData } from "~/routes/api/blog/$slug";
import { loader } from "~/routes/api/blog/$slug";

export { loader };

export const meta: MetaFunction = (args) => ({
  title: `${args.data.title}... | Blog | ${SITE_TITLE}`
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
      <section className="mx-auto max-w-6xl">
        <Hero className="py-20 md:py-40" copy={date} highlight={data.title} />
      </section>

      <img
        alt=""
        className="border-b border-t border-color-border-dark"
        src={data.imageTemp}
      />

      <section className="m-auto max-w-5xl">
        <div className="mb-20 p-4">
          <div className="my-8 md:my-12 ">
            <h2 className="text-highlight m-0 mb-2 inline-block text-left text-3xl md:text-4xl">
              {data.title}
            </h2>
            <div className="font-font-monospace text-sm">{date}</div>
          </div>

          {/* Content */}
          <div className="flex gap-10">
            <div>
              <div
                className="wysiwyg"
                dangerouslySetInnerHTML={{ __html: data.content.html }}
              />
              <div className="mt-20 flex items-center gap-4">
                <img
                  alt=""
                  className="h-10 w-10 rounded-full"
                  src="/images/assets/matt-scaled.webp"
                />
                <div>
                  <h3 className="text-xl">{SITE_AUTHOR}</h3>
                  <div className="font-font-monospace text-sm">{date}</div>
                </div>
              </div>
            </div>
            <aside className="h-full min-w-[200px] border-0 border-l border-solid border-color-border-dark p-4">
              <h3>Other Posts</h3>
            </aside>
          </div>
        </div>
      </section>

      {/*
      <section className="bg-gradient-dark-- bg-color-background-dark text-color-background">
        <div className="mx-auto flex max-w-5xl gap-20">
          <div className="flex-1">One</div>
          <div className="flex-1">Two</div>
        </div>
      </section>
      */}
    </>
  );
}
