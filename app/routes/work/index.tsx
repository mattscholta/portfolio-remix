import { Hero } from "~/components/Hero";
import { ScrollTo } from "~/components/ScrollTo";
import { WorkPreview } from "~/components/WorkPreview";

export default function Work() {
  const cssSection = `section-full flex flex-col items-center justify-center max-w-6xl gap-20`;

  return (
    <main>
      <section className={cssSection}>
        <Hero
          copy="I've been at it a while now"
          highlight={`Some "recent" Work`}
        />
        <ScrollTo to={`/work#section-2`} />
      </section>

      <div className="section-anchor" id="section-2" />
      <section className={cssSection}>
        <div className="mb-40 grid grid-cols-2 gap-16">
          <WorkPreview id={1} title="RocketCMS 🚀" />
          <WorkPreview id={2} title="Portfolio Update 🧑‍💻" />
          <WorkPreview id={3} title="Remix Example 🧑‍💻" />
          <WorkPreview id={4} title="thredUP 🧑‍💻" />
          <WorkPreview id={5} title="thredUP 🧑‍💻" />
          <WorkPreview id={6} title="thredUP 🧑‍💻" />
          <WorkPreview id={7} title="thredUP 🧑‍💻" />
          <WorkPreview id={8} title="thredUP 🧑‍💻" />
        </div>
      </section>
    </main>
  );
}
