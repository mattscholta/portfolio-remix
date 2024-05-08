import type { MetaFunction } from "@remix-run/react";
import { AppHero } from "~/components/AppHero";
import { SandboxSidebar } from "~/components/SandboxSidebar";
import { SITE_TITLE } from "~/config/constants";

export const meta: MetaFunction = (args) => {
  return [
    {
      title: `Sandbox | ${SITE_TITLE}`,
    },
    {
      description: `A Sandbox project making a Poloroid camera with CSS.`,
    },
    // {
    //   canonical: args.parentsData?.root?.canonical
    // }
    // ...getMetaData({})
  ];
};

export default () => {
  return (
    <section className="bg-gradient-dark-- bg-color-background-dark text-color-background">
      <AppHero
        className="mx-auto max-w-6xl py-20 md:py-40"
        copy="Looked like a fun challenge"
        highlight="CSS Polaroid Camera"
        tag="h1"
      />

      <div className="flex bg-white text-gray-800">
        <div className="w-full py-20">
          <div
            className="relative mx-auto bg-slate-500"
            style={{
              backgroundImage: `url("/images/sandbox/css-polaroid.jpg")`,
              backgroundPosition: "bottom right",
              height: "550px",
              width: "650px",
            }}
          >
            <div className="ml-20 mr-20 mt-20">
              <h3>Sandboxes</h3>
            </div>
          </div>
        </div>
        <SandboxSidebar />
      </div>
    </section>
  );
};
