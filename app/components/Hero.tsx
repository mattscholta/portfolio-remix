import classnames from "classnames";
import { ReactElement } from "react";

export interface HeroProps {
  className?: string;
  copy: string | ReactElement;
  highlight: string;
}

export const Hero = (props: HeroProps) => {
  const { className, copy, highlight } = props;

  const cssComponent = classnames("hero p-4", className);

  return (
    <div className={cssComponent}>
      <h1 className="text-center font-font-serif text-6xl font-extrabold">
        {copy}
        <br />
        <span className="text-highlight text-7xl">{highlight}</span>
      </h1>
    </div>
  );
};
