import * as React from "react";
import type { MetaFunction } from "remix";

import { Hero } from "~/components/Hero";
import { loader } from "~/routes/api/qualities";
import {
  SITE_AUTHOR,
  SITE_EMAIL_ADDRESS,
  SITE_EMAIL_LINK,
  SITE_TITLE,
  SOCIAL_TWITTER
} from "~/config/constants";

export const meta: MetaFunction = () => ({
  title: `Welcome | ${SITE_TITLE}`
});

export default function () {
  // Hooks
  const [heading, setHeading] = React.useState("A Software Engineer");

  // Handlers
  const onClick = async () => {
    const data = await loader({} as any);
    setHeading(data);
  };

  return (
    <>
      <section className="special">
        <div className="m-auto flex max-w-6xl justify-center gap-4 py-20 md:py-40">
          <Hero
            className="md:text-right"
            copy={<span className="whitespace-nowrap">{heading}</span>}
            highlight={SITE_AUTHOR}
          />
          <div>
            <img
              alt={SITE_AUTHOR}
              className="custom-bg-gradient max-h-32 cursor-pointer overflow-hidden rounded-full p-1 transition-transform hover:scale-110 active:rotate-6 md:max-h-40"
              loading="eager"
              onClick={onClick}
              src="/images/assets/matt-scaled.webp"
            />
          </div>
        </div>
      </section>

      {/* <section className="flex flex-col items-center justify-center gap-20 bg-color-background-dark text-color-background-light">
      </section> */}

      <section className="m-auto max-w-6xl gap-20">
        <h3 className="my-4 text-2xl">Ambitions</h3>
        <p>
          Nowadays, I won't start on a project unless I know the why behind it.
          I can't do my job effectively unless every screen, block of copy, or
          interface bit has an intentional value assigned, all supporting user
          goals first and business goals second. You can read more about my
          work, here.
        </p>
        <p>
          Nowadays, I won't start on a project unless I know the why behind it.
          I can't do my job effectively unless every screen, block of copy, or
          interface bit has an intentional value assigned, all supporting user
          goals first and business goals second. You can read more about my
          work, here.
        </p>

        <blockquote className="max-w-4xl text-2xl font-normal md:text-3xl">
          Passionate about <b>quality code</b> written <b>for humans</b>,
          unlocking <b>developer productivity</b>, and creating a delightful{" "}
          <b>user experience</b>.
        </blockquote>

        <h3 className="my-4 text-2xl">Current</h3>
        <p>
          I take great pride in my ability to communicate and articulate ideas
          through design and visual language, but perhaps more importantly
          through soft personal skills. Reading body language, intently
          listening, being persuasive, and empathizing are all part of my
          designer toolkit.
        </p>

        <h3 className="my-4 text-2xl">Contact Me</h3>
        <p>
          Email is the best way to reach me:{" "}
          <a href={SITE_EMAIL_LINK}>{SITE_EMAIL_ADDRESS}</a>
        </p>
        <p>
          Feel free to hit me up on <a href={SOCIAL_TWITTER}>Twitter</a> as
          well.
        </p>
      </section>
    </>
  );
}
