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

  return (
    <main>
      <div className="flex max-w-3xl flex-col gap-20">
        <Hero className="mt-40" copy={data.company} highlight={data.title} />
        <div
          className="wysiwyg mb-20"
          dangerouslySetInnerHTML={{ __html: data.content.html }}
        />
      </div>
    </main>
  );
}
