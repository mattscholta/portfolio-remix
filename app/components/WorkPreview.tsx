import { Link } from "remix";

import { Portfolio } from "~/routes/api/work";

export interface WorkPreviewProps {
  data: Portfolio;
}

export const WorkPreview = (props: WorkPreviewProps) => {
  const { data } = props;

  // Markup
  const renderImage = () => (
    <div>
      <img
        alt=""
        className="h-20 border transition-all hover:rotate-6 hover:scale-110"
        src={data.images[0].url}
      />
    </div>
  );

  return (
    <Link
      className="work-preview flex items-center gap-4"
      to={`/work/${data.slug}`}
    >
      {data.images[0] && renderImage()}
      <div className="flex flex-col">
        <h3 className="mb-4 font-font-serif text-xl font-extrabold">
          <span>{data.title}</span>
        </h3>
        <div className="mb-4 -mt-4 text-sm font-extrabold text-color-copy">
          {data.company}
        </div>
      </div>

      {/* <p>{data.overview}</p> */}
    </Link>
  );
};
