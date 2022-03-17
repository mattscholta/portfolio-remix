import classnames from "classnames";
import React from "react";
import { Link } from "remix";

export interface ScrollToProps {
  className?: string;
  to: string;
  rotate?: "rotate-0" | "rotate-90";
}

export const ScrollTo = (props: ScrollToProps) => {
  const { className, rotate = "rotate-90", to } = props;

  // Styles
  const tailwind = `pulse relative flex h-12 w-12 origin-center items-center justify-center rounded-full border border-color-border font-bold`;
  const cssArrow = `absolute ${rotate} text-xl`;
  const cssComponent = classnames("scroll-to", tailwind, className);

  // Setup
  const isDown = rotate === "rotate-0";
  const style = isDown ? { top: "22%", left: "42%" } : { top: "35%" };

  const onClick = (event: any) => {
    const path = event.target.getAttribute("href") || "";
    const [_href, hash] = path.split("#");
    const node = document.querySelector<HTMLDivElement>(`#${hash}`);

    if (!hash) return;

    event.preventDefault();

    const top = node?.offsetTop ? node?.offsetTop + 100 : 0;
    console.log(` 💬 ~ hash`, hash, top);

    scroll({
      behavior: "smooth",
      top
    });
  };

  return (
    <Link
      className={cssComponent}
      onClick={onClick}
      to={to}
      style={{ lineHeight: 1 }}
    >
      <span className={cssArrow} style={style}>
        &#x3009;
      </span>
    </Link>
  );
};
