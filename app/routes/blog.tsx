import { BlogPreview } from "~/components/BlogPreview";
import { Hero } from "~/components/Hero";

export default function About() {
  const copy = (
    <>
      Always leave the{" "}
      <span className="line-through text-color-copy-light">campground</span>{" "}
      code cleaner than you found it. 🏕️
    </>
  );

  const cssSection = `section-full flex items-center justify-center max-w-6xl`;
  const cssHeading = "text-3xl mb-4 font-font-serif font-extrabold";

  return (
    <main>
      <section className={cssSection}>
        <Hero
          className="max-w-6xl mx-auto"
          copy={copy}
          highlight="A developers ramblings"
        />
      </section>

      <section className={cssSection}>
        <div className="p-8">
          <h2 className="text-3xl mb-2 font-font-serif font-extrabold">
            Featured article
          </h2>
          <img
            className="mb-8"
            src="https://picsum.photos/id/158/1200/500"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            blanditiis ipsum qui velit dolor similique cupiditate doloribus
            repudiandae nam error vero doloremque possimus pariatur iusto
            distinctio quas, porro obcaecati temporibus.
          </p>
        </div>
      </section>

      <section className={cssSection}>
        <div className="p-8 w-full">
          <h2 className={cssHeading}>More articles</h2>
          <div className="gap-8 grid w-full md:grid-cols-2 lg:grid-cols-3">
            <BlogPreview />
            <BlogPreview />
            <BlogPreview />
            <BlogPreview />
            <BlogPreview />
          </div>
        </div>
      </section>
    </main>
  );
}
