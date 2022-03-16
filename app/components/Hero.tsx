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
      <h1 className="mb-5 text-center font-font-serif text-6xl font-extrabold">
        {copy}
        <div className="bg-gradient-to-r from-color-primary to-blue-500 bg-clip-text pt-6 pb-12 text-7xl text-transparent">
          {highlight}
        </div>
      </h1>
    </div>
  );
};
