import classnames from "classnames";
import { Link } from "remix";

import { Portfolio } from "~/routes/api/work";

export interface WorkPreviewProps {
  className?: string;
  data: Portfolio;
}

export const WorkPreview = (props: WorkPreviewProps) => {
  const { className, data } = props;

  return (
    <Link
      className={classnames("work-preview flex flex-grow flex-col", className)}
      to={`/work/${data.slug}`}
    >
      <h3 className="mb-4 font-font-serif text-xl font-extrabold">
        <span>{data.title}</span>
      </h3>
      <p>{data.overview}</p>
    </Link>
  );
};
