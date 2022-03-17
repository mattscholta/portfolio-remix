import { MetaFunction } from "remix";

import { Hero } from "~/components/Hero";
import { SITE_DESCRIPTION, SITE_TITLE } from "~/config/constants";

export const meta: MetaFunction = () => {
  return {
    description: SITE_DESCRIPTION,
    title: `Uses | ${SITE_TITLE}`
  };
};

export default function About() {
  return (
    <main>
      <Hero copy="Tools of the trade" highlight="Have a look" />
    </main>
  );
}
