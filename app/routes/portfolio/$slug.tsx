import { useLoaderData } from "remix";
import type { MetaFunction } from "remix";

import { AppHero } from "~/components/AppHero";
import { SITE_TITLE } from "~/config/constants";
import { loader } from "~/routes/api/portfolio/$slug";
import type { LoaderData } from "~/routes/api/portfolio/$slug";

export { loader };

export const meta: MetaFunction = (args) => ({
  title: `${args.data.title} | ${SITE_TITLE}`
});

export default function () {
  // Hooks
  const data = useLoaderData<LoaderData>();

  // Setup
  const img = data.images[0] ? data.images[0]?.url : false;

  return (
    <>
      <div className="m-auto max-w-3xl">
        <AppHero
          className="py-20 md:py-40"
          copy={data.company}
          highlight={data.title}
          tag="h1"
        />
      </div>

      {img && (
        <img
          alt={data.title}
          className="mb-20 mt-0 w-full border-t border-b border-color-border"
          src={img}
          style={{ aspectRatio: "2/1" }}
        />
      )}
      <div className="relative m-auto flex max-w-3xl flex-col">
        <div
          className="wysiwyg px-4"
          dangerouslySetInnerHTML={{ __html: data.content.html }}
        />
      </div>

      <div className="relative m-auto mb-20 flex max-w-3xl flex-col">
        <blockquote>{data.intro}</blockquote>
      </div>

      {/*
      <div className="bg-color-background-dark py-20 text-color-background-light">
        <div className="mx-auto flex max-w-6xl flex-col gap-20 md:flex-row">
          <div className="flex flex-1 flex-col items-center justify-center">
            <h3 className="mb-4 text-lg font-extrabold">
              Testing another article
            </h3>
            <Link to="/portfolio">Read more {`>>`}</Link>
          </div>

          <div className="border-0 border-solid md:border-l md:border-l-color-border" />

          <div className="flex flex-1 flex-col items-center justify-center">
            <h3 className="mb-4 text-lg font-extrabold">
              Testing another article
            </h3>
            <Link to="/portfolio">Read more {`>>`}</Link>
          </div>
        </div>
      </div>
      */}
    </>
  );
}
