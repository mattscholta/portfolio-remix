import type { MetaFunction } from "remix";
import { useLoaderData } from "remix";

import type { LoaderData } from "~/routes/api/work";
import { Hero } from "~/components/Hero";
import { WorkPreview } from "~/components/WorkPreview";
import { SITE_TITLE } from "~/config/constants";
import { loader } from "~/routes/api/work";
import { Tags } from "~/components/Tags";

export { loader };

export const meta: MetaFunction = () => ({
  title: `Featured Work | ${SITE_TITLE}`
});

export default function () {
  // Hooks
  const data = useLoaderData<LoaderData>();

  return (
    <>
      <section className="bg-color-background-dark text-color-background-light">
        <Hero
          className="py-20 md:py-40"
          copy="Relevant Work"
          highlight="What I've built"
        />
      </section>

      <section>
        <div className="my-20 grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3">
          {data.map((node) => (
            <WorkPreview data={node} key={node.slug} />
          ))}
        </div>
      </section>

      <section className="bg-color-background-dark py-10 text-color-background-light">
        <div className="my-20 mx-auto flex max-w-5xl items-start gap-10">
          <div className="flex-1">
            <h2 className="mb-8 text-2xl">Stack</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, expedita quaerat. A, beatae nostrum. Molestiae nisi
              nobis itaque nihil, possimus rerum voluptatem labore animi
              quibusdam? Cumque nemo iure quos suscipit!
            </p>
          </div>

          <Tags
            className="flex flex-1 flex-col"
            heading="Tools"
            tags={[
              "Adobe Photoshop",
              "Illustrator",
              "After Effects",
              "Adobe Flash",
              "Adobe Flash",
              "Adobe Flash"
            ]}
          />
        </div>
      </section>

      <section className="border-0 border-b border-t border-solid bg-color-background-light py-10">
        <div className="my-20 flex-1">
          <h2 className="mb-20 text-center text-4xl text-color-copy-light">
            Companies I've built things for.
          </h2>

          <div
            className="flex flex-1 flex-wrap items-center justify-center gap-20"
            style={{
              filter: "grayscale(1)"
            }}
          >
            <a href="https://thredup.com">
              <img
                alt="thredUP"
                className="h-8 opacity-50 transition-opacity duration-500 hover:opacity-100"
                src="/images/svg/thredup.svg"
              />
            </a>
            <a href="https://google.com">
              <img
                alt="Alphabet (Google)"
                className="h-10 opacity-50 transition-opacity duration-500 hover:opacity-100"
                src="/images/svg/google.svg"
              />
            </a>
            <a href="https://facebook.com">
              <img
                alt="Meta (Facebook)"
                className="h-8 opacity-50 transition-opacity duration-500 hover:opacity-100"
                src="/images/svg/facebook.svg"
              />
            </a>
            <a href="https://apple.com">
              <img
                alt="Apple"
                className="h-12 opacity-50 transition-opacity duration-500 hover:opacity-100"
                src="/images/svg/apple.svg"
              />
            </a>
            <a href="https://hotwire.com">
              <img
                alt="Hotwire"
                className="h-8 opacity-50 transition-opacity duration-500 hover:opacity-100"
                src="/images/svg/hotwire.svg"
              />
            </a>
            <a href="https://mcdonalds.com">
              <img
                alt="McDonalds"
                className="h-10 opacity-50 transition-opacity duration-500 hover:opacity-100"
                src="/images/svg/mcdonalds.svg"
              />
            </a>
            <a href="https://fedex.com">
              <img
                alt="FedEx"
                className="h-8 opacity-50 transition-opacity duration-500 hover:opacity-100"
                src="/images/svg/fedex.svg"
              />
            </a>
          </div>
          <div className="mx-auto -mb-10 pt-20 text-center italic">
            <p className="text-sm font-light text-color-copy-light opacity-80">
              "Agency Life" in <b>San Francisco</b> provided wonderful
              opportunity to work closely with some of the tech giants and
              startups.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
