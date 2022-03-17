import classnames from "classnames";
import { Link } from "remix";

export interface ScrollToProps {
  className?: string;
  to: string;
}

export const ScrollTo = (props: ScrollToProps) => {
  const { className, to } = props;

  // Styles
  const cssComponent = classnames(
    "pulse border origin-center rotate-90 flex ju text-xl h-32 w-32",
    className
  );

  return (
    <Link
      className="pulse relative flex h-12 w-12 origin-center items-center justify-center rounded-full border border-color-border"
      to={to}
      style={{ lineHeight: 1 }}
    >
      <span className="absolute rotate-90 text-xl" style={{ top: "35%" }}>
        &#x3009;
      </span>
    </Link>
  );
};
