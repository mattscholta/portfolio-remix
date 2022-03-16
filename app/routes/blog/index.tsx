import { Link } from "remix";
import { BlogPreview } from "~/components/BlogPreview";
import { Hero } from "~/components/Hero";

export default function About() {
  const copy = (
    <>
      Always leave the{" "}
      <span className="text-color-copy-light line-through">campground</span>{" "}
      code cleaner than you found it. 🏕️
    </>
  );

  // Styles
  const cssSection = `section-full flex flex-col items-center justify-center max-w-6xl`;
  const cssHeading = "text-3xl mb-4 font-font-serif font-extrabold";

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
        <Link to="/blog/#section-2">Continue</Link>
      </section>

      <section className={cssSection} id="section-2">
        <div className="p-8">
          <h2 className="mb-2 font-font-serif text-3xl font-extrabold">
            Featured article
          </h2>
          <img
            alt="Featured Article"
            className="mb-8"
            loading="lazy"
            src={featured}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            blanditiis ipsum qui velit dolor similique cupiditate doloribus
            repudiandae nam error vero doloremque possimus pariatur iusto
            distinctio quas, porro obcaecati temporibus.
          </p>
        </div>
        <Link to="/blog/#section-3">Continue</Link>
      </section>

      <section className={cssSection} id="section-3">
        <div className="w-full p-8">
          <h2 className={cssHeading}>More articles</h2>
          <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BlogPreview id={21} />
            <BlogPreview id={22} />
            <BlogPreview id={23} />
            <BlogPreview id={24} />
            <BlogPreview id={25} />
          </div>
        </div>
      </section>
    </main>
  );
}
