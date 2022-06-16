import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

import { AppHero } from "~/components/AppHero";
import { SITE_TITLE } from "~/config/constants";
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
        <AppHero
          className="py-20 md:py-40"
          copy={date}
          highlight={data.title}
          tag="h1"
        />
      </section>

      <img
        alt=""
        className="w-full border-b border-t border-color-border-dark"
        src={data.imageTemp}
      />

      <section className="m-auto max-w-2xl">
        <div className="mb-20 p-4">
          <div className="my-8 md:my-12 ">
            <h2 className="text-highlight m-0 mb-2 inline-block text-left text-3xl md:text-4xl">
              {data.title}
            </h2>
            <div className="font-font-monospace text-sm">{date}</div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-10 md:flex-row">
            <div>
              <div
                className="wysiwyg"
                dangerouslySetInnerHTML={{ __html: data.content.html }}
              />
            </div>

            {/*
            <aside className="flex h-full min-w-[300px] flex-col gap-20">
              <div className="flex flex-col gap-10 border-0 md:p-4">
                <div>
                  <h3 className="mb-4">Tags:</h3>
                  <AppTags
                    classNameTag="border rounded-md px-2 py-1 text-sm bg-color-background-light"
                    tags={["one", "two"]}
                  />
                </div>
                <AppUserCard
                  copy="<b>Role:</b> Staff Engineer @thredUP"
                  image="/images/assets/matt-scaled.webp"
                />
              </div>

              <div className="flex flex-col gap-10 border-0 border-l border-solid border-color-border-dark p-4">
                <div>
                  <h3>Other Posts</h3>
                </div>
              </div>
            </aside>
            */}
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
