import { Link } from "remix";

import { Portfolio } from "~/routes/api/work";

export interface WorkPreviewProps {
  data: Portfolio;
}

export const WorkPreview = (props: WorkPreviewProps) => {
  const { data } = props;

  // Markup
  const renderImage = () => (
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
