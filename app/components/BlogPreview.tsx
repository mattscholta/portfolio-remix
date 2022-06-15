import { Link } from "@remix-run/react";
import classnames from "classnames";

export interface BlogPreviewProps {
  className?: string;
  content: string;
  date: string;
  featured?: boolean;
  slug: string;
  title: string;
  image: string;
}

export const BlogPreview = (props: BlogPreviewProps) => {
  const { className, date, featured, slug, image, title } = props;

  // Setup
  const created = new Date(date);
  const dateString = created.toLocaleDateString("en-US", {
    weekday: undefined,
    year: "numeric",
    month: "2-digit",
    day: "numeric"
  });

  const renderFeatured = () => {
    return (
      <div className="absolute top-4 right-4 bg-color-primary py-1 px-4 font-font-monospace text-sm uppercase text-color-background-light">
        Featured
      </div>
    );
  };

  return (
    <Link
      className={classnames("blog-preview relative flex flex-col", className)}
      to={`/blog/${slug}`}
    >
      {featured && renderFeatured()}
      <img alt="" height="auto" loading="lazy" src={image} width="auto" />
      <h3 className="mt-4 mb-2 text-2xl">{title}</h3>
      <div className="font-font-monospace text-sm">{dateString}</div>
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
    </Link>
  );
};
