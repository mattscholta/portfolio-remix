import classnames from "classnames";
import { Link } from "remix";

export interface BlogPreviewProps {
  className?: string;
  id: number;
}

export const BlogPreview = (props: BlogPreviewProps) => {
  const { className, id = 21 } = props;

  // Styles
  const tailwind = `flex flex-grow flex-col aspect-video--`;
  const cssComponent = classnames(tailwind, className);

  // Setup
  const src = `https://picsum.photos/id/${id}/1200/500`;

  return (
    <Link className={cssComponent} to={`/blog/${id}`}>
      <img alt="" loading="lazy" src={src} />
      <h3 className="my-2 text-xl font-semibold">Title {id}</h3>
    </Link>
  );
};
