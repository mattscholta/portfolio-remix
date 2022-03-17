import { useLoaderData } from "remix";
import { BlogPreview } from "~/components/BlogPreview";
import { Hero } from "~/components/Hero";
import { ScrollTo } from "~/components/ScrollTo";

export { loader } from "~/routes/api/blog";

export default function About() {
  // Hooks
  const data = useLoaderData();

  console.log(` 💬 ~ data`, data);

  const copy = (
    <>
      Always leave the{" "}
      <span className="text-color-copy-light line-through">campground</span>{" "}
      code cleaner than you found it. 🏕️
    </>
  );

  // Styles
  const cssSection = `section-full flex flex-col items-center justify-center max-w-6xl gap-20`;
  const cssHeading = "text-3xl mb-8 font-font-serif font-extrabold";

  // Setup
  const featured = `https://picsum.photos/id/158/1200/500`;

  return (
    <main>
      <section className={cssSection} id="section-1">
        <Hero
          className="mx-auto max-w-6xl"
          copy={copy}
          highlight="A developers ramblings"
        />

        <ScrollTo to="/blog/#section-2" />
      </section>

      <div className="section-anchor" id="section-2" />
      <section className={cssSection}>
        <div className="flex items-center gap-16">
          <div className="flex-1">
            <h2 className="mb-2 font-font-serif text-3xl font-extrabold">
              Featured article
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              blanditiis ipsum qui velit dolor similique cupiditate doloribus
              repudiandae nam error vero doloremque possimus pariatur iusto
              distinctio quas, porro obcaecati temporibus.
            </p>
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
    </main>
  );
}
