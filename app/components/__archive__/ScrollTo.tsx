import classnames from "classnames";
import { Link } from "@remix-run/react";

export interface ScrollToProps {
  className?: string;
  id: string;
  rotate?: "rotate-0" | "rotate-90";
}

export const ScrollTo = (props: ScrollToProps) => {
  const { className, id, rotate = "rotate-90" } = props;

  // Styles
  const tailwind = `pulse relative flex h-12 w-12 origin-center items-center justify-center rounded-full border border-color-border font-bold`;
  const cssArrow = `absolute ${rotate} text-xl`;
  const cssComponent = classnames("scroll-to", tailwind, className);

  // Setup
  const isDown = rotate === "rotate-0";
  const style = isDown ? { top: "22%", left: "42%" } : { top: "35%" };

  // const onClick = (event: any) => {
  //   const node = document.getElementById(id);
  //   if (!node) return;

  //   event.preventDefault();
  //   node.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <Link
      className={cssComponent}
      // onClick={onClick}
      style={{ lineHeight: 1 }}
      to={id}
      type="button"
    >
      <span className={cssArrow} style={style}>
        &#x3009;
      </span>
    </Link>
  );
};
