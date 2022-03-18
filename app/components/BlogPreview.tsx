import classnames from "classnames";
import { Link } from "remix";

export interface BlogPreviewProps {
  className?: string;
  content: string;
  slug: string;
  title: string;
  image: string;
}

export const BlogPreview = (props: BlogPreviewProps) => {
  const { className, content, slug, image, title } = props;

  // Styles
  const tailwind = `flex flex-col aspect-video---`;
  const cssComponent = classnames("blog-preview", tailwind, className);

  return (
    <Link className={cssComponent} to={`/blog/${slug}`}>
      <h3 className="my-4 text-2xl">{title}</h3>
      {/* <img alt="" loading="lazy" src={image} /> */}
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
    </Link>
  );
};
