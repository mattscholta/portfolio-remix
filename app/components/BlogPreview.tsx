import classnames from "classnames";
import { Link } from "remix";

export interface BlogPreviewProps {
  className?: string;
  id: number;
  title: string;
  image: string;
}

export const BlogPreview = (props: BlogPreviewProps) => {
  const { className, id, image, title } = props;

  // Styles
  const tailwind = `flex flex-grow flex-col aspect-video`;
  const cssHeading = "text-2xl my-4 font-font-serif font-extrabold";
  const cssComponent = classnames("blog-preview", tailwind, className, {
    both: id % 2 !== 0
  });

  return (
    <Link className={cssComponent} to={`/blog/${id}`}>
      {/* <img alt="" loading="lazy" src={image} /> */}
      <h3 className={cssHeading}>{title}</h3>
    </Link>
  );
};
