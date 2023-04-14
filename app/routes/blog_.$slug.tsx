import { useCatch, useLoaderData } from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@vercel/remix";

import { AppHero } from "~/components/AppHero";
import type { LoaderData } from "~/routes/api.blog.$slug";
import { loader } from "~/routes/api.blog.$slug";
import { AppWysiwyg } from "~/components/AppWysiwyg";

import stylesLines from "prismjs/plugins/line-numbers/prism-line-numbers.css";
import stylesTheme from "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import { getMetaData } from "~/metadata";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesLines },
    { rel: "stylesheet", href: stylesTheme }
  ];
};

export { loader };

export const meta: MetaFunction = (args) => {
  // console.log(` 💬 ~ args.data`, args.data);

  return {
    ...getMetaData({
      canonical: args.parentsData?.root?.canonical,
      description: args.data?.description,
      title: args.data?.title
    })
  };
};

export default function () {
  // Hooks
  const data = useLoaderData<LoaderData>();

  // Setup
  const created = new Date(data.date);
  const date = created.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
    weekday: undefined,
    year: "numeric"
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
        alt={data.title}
        className="w-full border-b border-t border-color-border-dark"
        height="auto"
        loading="eager"
        src={data.imageTemp}
        width="100%"
      />

      <section className="m-auto max-w-4xl">
        <div className="mb-20 p-4">
          <div className="my-8 md:my-12 ">
            <h2 className="text-highlight m-0 mb-2 inline-block text-left text-3xl md:text-4xl">
              {data.title}
            </h2>
            <div className="font-font-monospace text-sm">{date}</div>
          </div>

          {/* Content */}
          <AppWysiwyg content={data.content.raw} />
        </div>
      </section>
    </>
  );
}

export const CatchBoundary = () => {
  // Hooks
  const caught = useCatch();

  if (caught.status === 400) {
    return (
      <section className="mx-auto max-w-6xl">
        <AppHero
          className="py-20 md:py-40"
          copy="Uh oh..."
          highlight="404"
          tag="h1"
        />
      </section>
    );
  }

  throw new Error("Unexpected error");
};
