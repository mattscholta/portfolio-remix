import { Link, MetaFunction, useLoaderData } from "remix";

import { BlogPreview } from "~/components/BlogPreview";
import { Hero } from "~/components/Hero";
import { ScrollTo } from "~/components/ScrollTo";
import { SITE_DESCRIPTION, SITE_TITLE } from "~/config/constants";
import { loader } from "~/routes/api/blog";

export { loader };

export const meta: MetaFunction = () => {
  return {
    description: SITE_DESCRIPTION,
    title: `Blog | ${SITE_TITLE}`
  };
};

export default function About() {
  // Hooks
  const data = useLoaderData();

  // Styles
  const cssSection = `section-full m-auto flex max-w-6xl flex-col items-center justify-center gap-20`;
  const cssHeading = "text-3xl mb-8 font-font-serif font-extrabold";

  // Setup
  const featured = `https://picsum.photos/id/158/1200/600`;

  return (
    <>
      <section className={cssSection} id="section-1">
        <Hero
          className="mx-auto max-w-6xl"
          copy="One of those blog things"
          highlight="a developers ramblings"
        />

        <ScrollTo to="/blog/#section-2" />
      </section>

      <div className="section-anchor" id="section-2" />
      <section className={cssSection}>
        <div className="flex flex-col items-center gap-16 p-8 md:flex-row">
          <div className="flex-1">
            <h2 className="mb-4 font-font-serif text-3xl font-extrabold">
              Introducing{" "}
              <span className="bg-gradient-to-r from-color-primary to-blue-500 bg-clip-text text-transparent">
                RocketCMS
              </span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              blanditiis ipsum qui velit dolor similique cupiditate doloribus
              repudiandae nam error vero doloremque possimus pariatur iusto
              distinctio quas, porro obcaecati temporibus.
            </p>
            <div className="mt-2 text-right">
              <Link
                className="text-highlight text-xs font-bold uppercase text-color-primary"
                to="/blog/rocketcms"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <img
              alt="Featured Article"
              className="mb-8"
              loading="lazy"
              src={featured}
            />
          </div>
        </div>
        <ScrollTo className="mt-8" to="/blog/#section-3" />
      </section>

      <div className="section-anchor" id="section-3" />
      <section className={cssSection}>
        <div className="w-full p-8">
          <h2 className={cssHeading}>More articles</h2>
          <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.map((item: any) => (
              <BlogPreview
                id={item.id}
                image={item.imageTemp}
                key={item.id}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
