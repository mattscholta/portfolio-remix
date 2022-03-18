import { MetaFunction, useLoaderData } from "remix";

import { Hero } from "~/components/Hero";
import { SITE_DESCRIPTION, SITE_TITLE } from "~/config/constants";
import { loader, LoaderData } from "~/routes/api/work/$slug";

export { loader };

export const meta: MetaFunction = (args) => {
  return {
    description: SITE_DESCRIPTION,
    title: `${args.data.title} | ${SITE_TITLE}`
  };
};

export default function Work() {
  // Hooks
  const data = useLoaderData<LoaderData>();

  // Styles
  const cssHeading = `text-2xl mb-8 font-font-serif font-extrabold`;

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
          className="mb-20 w-full border-t border-b border-color-border"
          src={img}
        />
      )}

      <div className="relative m-auto flex max-w-3xl flex-col">
        <blockquote>{data.intro}</blockquote>
      </div>

      <div className="section-subcontent w-full">
        <div className="m-auto max-w-6xl p-4">
          <h3 className={cssHeading}>Want to see another?</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            laborum, incidunt dolorum tempora praesentium at deserunt magnam
            odio harum rerum ipsam minus alias debitis placeat aspernatur, culpa
            vel ipsa cumque?
          </p>
        </div>
      </div>
    </>
  );
}
