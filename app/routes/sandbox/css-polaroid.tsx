import type { MetaFunction } from "@remix-run/node";
import { AppHero } from "~/components/AppHero";
import { SITE_TITLE } from "~/config/constants";
import { getMetaData } from "~/metadata";

export const meta: MetaFunction = (args) => {
  // console.log(` 💬 ~ args.data`, args.data);

  return {
    ...getMetaData({
      canonical: args.parentsData?.root?.canonical,
      description: `A Sandbox project making a Poloroid camera with CSS.`,
      title: `Sandbox | ${SITE_TITLE}`
    })
  };
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

      <div className="w-full bg-white py-20">
        <div
          className="relative mx-auto bg-slate-500"
          style={{
            backgroundImage: `url("/images/sandbox/css-polaroid.jpg")`,
            backgroundPosition: "bottom right",
            height: "550px",
            width: "650px"
          }}
        >
          <div className="ml-20 mr-20 mt-20 rounded-tl-lg rounded-tr-lg bg-[#2e2e30]">
            asdfasdf
          </div>
        </div>
      </div>
    </section>
  );
};
