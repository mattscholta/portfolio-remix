import { AppHero } from "~/components/AppHero";

export default () => {
  return (
    <section className="bg-gradient-dark-- bg-color-background-dark text-color-background">
      <AppHero
        className="mx-auto max-w-6xl py-20 md:py-40"
        copy="Developer sandbox 🏖️"
        highlight="A place to explore"
        tag="h1"
      />
    </section>
  );
};
