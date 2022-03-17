import classnames from "classnames";
import { Link } from "remix";

export interface ScrollToProps {
  className?: string;
  to: string;
}

export const ScrollTo = (props: ScrollToProps) => {
  const { className, to } = props;

  // Styles
  const tailwind = `pulse relative flex h-12 w-12 origin-center items-center justify-center rounded-full border border-color-border font-bold`;
  const cssComponent = classnames("scroll-to", tailwind, className);

  return (
    <Link className={cssComponent} to={to} style={{ lineHeight: 1 }}>
      <span className="absolute rotate-90 text-xl" style={{ top: "35%" }}>
        &#x3009;
      </span>
    </Link>
  );
};
