import { MetaFunction, useLoaderData } from "remix";

import { Hero } from "~/components/Hero";
import { SITE_DESCRIPTION, SITE_TITLE } from "~/config/constants";
import { loader, LoaderData } from "~/routes/api/blog/$slug";

export { loader };

export const meta: MetaFunction = (args) => {
  return {
    description: SITE_DESCRIPTION,
    title: `${args.data.title}... | ${SITE_TITLE}`
  };
};

export default function About() {
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
        <div className="max-w-3xl p-4">
          <h2 className="text-highlight my-6 inline-block text-left text-4xl md:my-12">
            {data.title}
          </h2>
          <div
            className="wysiwyg"
            dangerouslySetInnerHTML={{ __html: data.content.html }}
          />
        </div>
        <div className="section-subcontent w-full">
          <div className="m-auto max-w-6xl p-4">
            <h3 className="mb-2 text-xl">More posts</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              expedita possimus amet pariatur provident reiciendis earum
              accusamus! Nobis earum voluptatem doloremque deleniti praesentium
              laboriosam beatae corrupti ea sit iste. Impedit!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
