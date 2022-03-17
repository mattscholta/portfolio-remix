import classnames from "classnames";
import { Link } from "remix";

import { Portfolio } from "~/routes/api/work";

export interface WorkPreviewProps {
  className?: string;
  data: Portfolio;
}

export const WorkPreview = (props: WorkPreviewProps) => {
  const { className, data } = props;

  // Styles
  const tailwind = `flex flex-grow flex-col aspect-video--`;
  const cssComponent = classnames(tailwind, className);
  const cssHeading = "text-3xl mb-4 font-font-serif font-extrabold";

  return (
    <Link className={cssComponent} to={`/work/${data.slug}`}>
      <h3 className={cssHeading}>{data.title}</h3>
      <p>{data.overview}</p>
    </Link>
  );
};
