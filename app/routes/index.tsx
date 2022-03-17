import * as React from "react";
import { MetaFunction } from "remix";

import { Hero } from "~/components/Hero";
import { loader } from "~/routes/api/qualities";
import { ScrollTo } from "~/components/ScrollTo";
import { SITE_DESCRIPTION, SITE_TITLE } from "~/config/constants";

export const meta: MetaFunction = () => {
  return {
    description: SITE_DESCRIPTION,
    title: `Welcome | ${SITE_TITLE}`
  };
};

export default function Index() {
  // Hooks
  const [heading, setHeading] = React.useState("Welcome friend 👋");

  // Styles
  const cssSection = `section-full flex flex-col items-center justify-center max-w-6xl gap-20`;
  const cssSection2 = `${cssSection} max-w-3xl`;
  const cssHeading = "text-3xl mb-8 font-font-serif font-extrabold";

  // Setup
  const src = `https://media-exp1.licdn.com/dms/image/C5603AQGOIqLiltzE6Q/profile-displayphoto-shrink_800_800/0/1607310269762?e=1652918400&v=beta&t=ejJuCWmtmTXc5qekueVDpqqCmCv7zRncqNS6cLI7bBI`;

  // Handlers
  const onClick = async () => {
    const data = await loader({} as any);
    setHeading(data);
  };

  React.useEffect(() => {
    window.addEventListener("click", onClick);

    return () => {
      window.addEventListener("click", onClick);
    };
  }, []);

  return (
    <main>
      <section className={cssSection}>
        <div className="flex">
          <Hero copy={heading} highlight="Matthew Scholta" />
          <img
            alt=""
            className="max-h-40 rounded-full bg-gradient-to-l from-color-primary to-blue-500 p-1 transition-transform hover:rotate-6 hover:scale-110"
            src={src}
          />
        </div>
        <ScrollTo to="/#section-2" />
      </section>

      <div className="section-anchor" id="section-2" />
      <section className={cssSection2}>
        <div className="h-full">
          <h2 className={cssHeading}>section 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut sint
            aperiam ratione ullam voluptas, commodi sapiente voluptatibus beatae
            quidem ab, assumenda iusto quibusdam quod ipsam? Ea rem nesciunt
            asperiores labore?
          </p>
        </div>
      </section>
    </main>
  );
}
