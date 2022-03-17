import { MetaFunction, useLoaderData, useParams } from "remix";

import { Hero } from "~/components/Hero";
import { ScrollTo } from "~/components/ScrollTo";
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
  const { slug } = useParams();
  const data = useLoaderData<LoaderData>();

  // Styles
  const twFont = `font-font-serif font-extrabold`;
  const cssHeading = `${twFont} text-xl mb-2`;
  const cssSection = `section-full m-auto flex flex-col items-center justify-center gap-20`;
  const cssSection2 = `${cssSection} gap-0`;

  return (
    <>
      <section className={cssSection} id="section-1">
        <Hero
          className="mx-auto max-w-6xl"
          copy={data.date}
          highlight={data.title}
        />
        <ScrollTo to={`/blog/${slug}/#section-2`} />
      </section>

      <img src={data.imageTemp} alt="" />
      <div className="section-anchor" id="section-2" />

      <section className={cssSection2}>
        {/*
        <h2 className={`${cssHeading} text-highlight text-left text-3xl`}>
          {data.title}
        </h2>
        */}
        <div
          className="wysiwyg max-w-3xl p-4"
          dangerouslySetInnerHTML={{ __html: data.content.html }}
        />

        <div className="section-subcontent w-full">
          <div className="m-auto max-w-6xl p-4">
            <h3 className={cssHeading}>More posts</h3>
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
