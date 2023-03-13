import type { MetaFunction } from "@remix-run/node";
import { AppHero } from "~/components/AppHero";
import { SandboxSidebar } from "~/components/SandboxSidebar";
import { SITE_TITLE } from "~/config/constants";
import { getMetaData } from "~/metadata";

export const meta: MetaFunction = (args) => {
  // console.log(` 💬 ~ args.data`, args.data);

  return {
    ...getMetaData({
      canonical: args.parentsData?.root?.canonical,
      description: `A Sandbox for Remix-Run and various web experiments.`,
      title: `Sandbox | ${SITE_TITLE}`
    })
  };
};

export default () => {
  return (
    <section className="bg-gradient-dark-- bg-color-background-dark text-color-background">
      <AppHero
        className="mx-auto max-w-6xl py-20 md:py-40"
        copy="Developer sandbox 🏖️"
        highlight="A place to explore"
        tag="h1"
      />
      <div className="flex">
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            deleniti sunt aliquam animi corrupti quod dolorem libero obcaecati
            id harum similique iste iure, velit perspiciatis dolores nisi
            veniam. Eligendi, eum!
          </p>
        </div>
        <SandboxSidebar />
      </div>
    </section>
  );
};
