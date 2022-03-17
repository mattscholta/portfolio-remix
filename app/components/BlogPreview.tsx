import classnames from "classnames";
import { Link } from "remix";

export interface BlogPreviewProps {
  className?: string;
  id: number;
}

export const BlogPreview = (props: BlogPreviewProps) => {
  const { className, id = 21 } = props;

  // Styles
  const tailwind = `flex flex-grow flex-col aspect-video`;
  const cssHeading = "text-2xl my-4 font-font-serif font-extrabold";
  const cssComponent = classnames("blog-preview", tailwind, className, {
    both: id % 2 !== 0
  });

  // Setup
  // const src = `https://picsum.photos/id/${id}/1200/500`;

  return (
    <Link className={cssComponent} to={`/blog/${id}`}>
      {/* <img alt="" loading="lazy" src={src} /> */}
      <h3 className={cssHeading}>Title {id}</h3>
    </Link>
  );
};
