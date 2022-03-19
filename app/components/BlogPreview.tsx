import classnames from "classnames";
import { Link } from "remix";

export interface BlogPreviewProps {
  className?: string;
  content: string;
  date: string;
  slug: string;
  title: string;
  image: string;
}

export const BlogPreview = (props: BlogPreviewProps) => {
  const { className, content, date, slug, image, title } = props;

  // Styles
  const tailwind = `flex flex-col aspect-video---`;
  const cssComponent = classnames("blog-preview", tailwind, className);

  const created = new Date(date);
  const dateString = created.toLocaleDateString("en-US", {
    weekday: undefined,
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <Link className={cssComponent} to={`/blog/${slug}`}>
      <img
        alt=""
        className="border-color-border-- border- mt-4"
        loading="lazy"
        src={image}
      />
      <h3 className="text-highlight mt-4 text-2xl">{title}</h3>
      <div>{dateString}</div>
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
    </Link>
  );
};
