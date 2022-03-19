import { MetaFunction, useLoaderData } from "remix";

import { Hero } from "~/components/Hero";
import { SITE_TITLE } from "~/config/constants";
import { loader, LoaderData } from "~/routes/api/work/$slug";

export { loader };

export const meta: MetaFunction = (args) => ({
  title: `${args.data.title} | ${SITE_TITLE}`
});

export default function Work() {
  // Hooks
  const data = useLoaderData<LoaderData>();

  // Setup
  const img = data.images[0] ? data.images[0]?.url : false;

  return (
    <>
      <div className="relative m-auto flex max-w-3xl flex-col">
        <Hero
          className="my-20 md:my-40"
          copy={data.company}
          highlight={data.title}
        />
        <div
          className="wysiwyg px-4"
          dangerouslySetInnerHTML={{ __html: data.content.html }}
        />
      </div>

      {img && (
        <img
          alt=""
          className="my-20 w-full border-t border-b border-color-border"
          src={img}
        />
      )}

      <div className="relative m-auto mb-20 flex max-w-3xl flex-col">
        <blockquote>{data.intro}</blockquote>
      </div>
    </>
  );
}
