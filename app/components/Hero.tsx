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
        <span className="block bg-gradient-to-r from-color-primary to-blue-500 bg-clip-text text-7xl text-transparent">
          {highlight}
        </span>
      </h1>
    </div>
  );
};
