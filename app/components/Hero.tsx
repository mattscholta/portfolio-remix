import classnames from "classnames";
import { ReactElement } from "react";

export interface HeroProps {
  className?: string;
  copy?: string | ReactElement;
  highlight: string;
}

export const Hero = (props: HeroProps) => {
  const { className, copy, highlight } = props;

  // Styles
  const cssComponent = classnames("hero p-4 text-center", className);

  return (
    <div className={cssComponent}>
      <h1 className="inline-block font-font-serif text-xl font-extrabold md:text-4xl">
        {copy && (
          <div className="font-font-monospace text-base font-normal md:text-2xl">
            {copy}
          </div>
        )}
        <div className="text-highlight text-4xl md:text-7xl">{highlight}</div>
      </h1>
    </div>
  );
};
