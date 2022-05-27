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
    <Link
      className="work-preview flex flex-col gap-4"
      to={`/work/${data.slug}`}
    >
      {/* {data.images[0] && renderImage()} */}
      <div className="flex flex-col">
        <h3 className="font-font-serif text-xl font-extrabold">
          <span>{data.title}</span>
        </h3>
        <div className="my-1 mb-4 text-sm font-extrabold text-color-copy">
          {data.company}
        </div>
        <p>{data.overview}</p>
      </div>
    </Link>
  );
};
