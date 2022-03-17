import classnames from "classnames";
import { ReactElement } from "react";

export interface HeroProps {
  className?: string;
  copy?: string | ReactElement;
  highlight: string;
}

export const Hero = (props: HeroProps) => {
  const { className, copy, highlight } = props;

  const cssComponent = classnames("hero p-4 text-center", className);

  return (
    <div className={cssComponent}>
      <h1 className="font-font-serif text-4xl font-extrabold md:text-4xl">
        {copy && copy}
        <div className="text-highlight text-5xl md:text-7xl">{highlight}</div>
      </h1>
    </div>
  );
};
