import type { MetaFunction } from "remix";

import { SITE_TITLE } from "~/config/constants";

export const meta: MetaFunction = () => ({
  title: `Welcome | ${SITE_TITLE}`
});

export default function () {
  return (
    <section className="main m-auto flex max-w-6xl flex-col items-center justify-center gap-20">
      <blockquote className="max-w-4xl text-2xl font-normal md:text-3xl">
        Passionate about <b>quality code</b> written <b>for humans</b>,
        unlocking <b>developer productivity</b>, and creating a delightful{" "}
        <b>user experience</b>.
      </blockquote>

      {/*
      <blockquote className="max-w-4xl text-2xl font-normal md:text-3xl">
        A jack of all trades is a master of none, but oftentimes better than a
        master of one.
      </blockquote>
      */}
    </section>
  );
}
