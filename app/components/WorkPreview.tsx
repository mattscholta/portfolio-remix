import { Link } from "remix";

import type { Portfolio } from "~/routes/api/work";

export interface WorkPreviewProps {
  data: Portfolio;
}

/**
 * @name WorkPreview
 * @description Unfortunately I don't have a ton of great imagery to work with
 * for all of these past projects so I need to try and focus on the content 🤔
 */
export const WorkPreview = (props: WorkPreviewProps) => {
  const { data } = props;

  // Setup
  const date = new Date(data.date);

  // Markup
  const _renderImage = () => (
    <div className="w-full">
      <img
        alt=""
        className="w-full border transition-all hover:rotate-3 hover:scale-110"
        height="auto"
        src={data.images[0].url}
        width="auto"
      />
    </div>
  );

  return (
    <Link className="work-preview text-color-copy" to={`/work/${data.slug}`}>
      {/* {data.images[0] && renderImage()} */}

      <h3 className="m-0 font-font-serif text-xl font-bold">{data.title}</h3>
      <div className="mt-1 mb-6 flex items-baseline gap-2 font-medium text-color-copy-dark">
        <span>{date.getFullYear()}</span>
        <span className="font-light">|</span>
        <span>{data.company}</span>
      </div>

      <p>{data.overview}</p>
    </Link>
  );
};
