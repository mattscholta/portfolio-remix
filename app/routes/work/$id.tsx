import { Hero } from "~/components/Hero";

export default function Work() {
  const cssSection = `section-full flex flex-col items-center justify-center max-w-6xl gap-20`;

  return (
    <main>
      <section className={cssSection}>
        <Hero copy="PROJECT" highlight="NAME" />
      </section>
    </main>
  );
}
