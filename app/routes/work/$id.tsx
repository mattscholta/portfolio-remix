import { MetaFunction, useLoaderData } from "remix";

import { Hero } from "~/components/Hero";
import { SITE_DESCRIPTION, SITE_TITLE } from "~/config/constants";
import { loader } from "~/routes/api/work";

export { loader };

export const meta: MetaFunction = (args) => {
  return {
    description: SITE_DESCRIPTION,
    title: `${args.data.title} | ${SITE_TITLE}`
  };
};

export default function Work() {
  // Hooks
  const data = useLoaderData();

  // Styles
  const cssHeading = "text-2xl mb-8 font-font-serif font-extrabold";

  return (
    <>
      <div className="m-auto flex max-w-3xl flex-col gap-20">
        <Hero className="mt-40" copy={data.company} highlight={data.title} />
        <div
          className="wysiwyg"
          dangerouslySetInnerHTML={{ __html: data.content.html }}
        />
      </div>

      <div className="border-1 my-20 border-b border-t border-color-border bg-color-background-light">
        <div className="m-auto flex max-w-6xl flex-col px-4 py-20">
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
