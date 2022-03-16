import classnames from "classnames";
import { ReactElement } from "react";

export interface HeroProps {
  className?: string;
  copy: string | ReactElement;
  highlight: string;
}

export const Hero = (props: HeroProps) => {
  const { className, copy, highlight } = props;

  const css = classnames("p-4", className);

  return (
    <div className={css}>
      <h1 className="mb-5 font-font-serif text-6xl font-extrabold text-color-copy text-center">
        {copy}
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-color-primary to-blue-500 pt-6 pb-12 text-7xl">
          {highlight}
        </div>
      </h1>
    </div>
  );
};
