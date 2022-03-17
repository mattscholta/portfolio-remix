import classnames from "classnames";
import { Link } from "remix";

export interface ScrollToProps {
  className?: string;
  to: string;
}

export const ScrollTo = (props: ScrollToProps) => {
  const { className, to } = props;

  // Styles
  const cssComponent = classnames("pulse text-xl", className);

  return (
    <Link className={cssComponent} to={to}>
      <div className="rotate-90">&#x3009;</div>
    </Link>
  );
};
