import { Link } from "@remix-run/react";
import classnames from "classnames";

export interface BlogPreviewProps {
  className?: string;
  content: string;
  date: string;
  featured?: boolean;
  heading?: string;
  slug: string;
  title: string;
  image: string;
}

export const BlogPreview = (props: BlogPreviewProps) => {
  const { className, date, heading = "h3", slug, image, title } = props;

  // Setup
  const Heading = heading as any;
  const created = new Date(date);
  const dateString = created.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "UTC",
    weekday: undefined,
    year: "numeric"
  });

  return (
    <Link
      className={classnames("blog-preview relative flex flex-col", className)}
      prefetch="intent"
      to={`/blog/${slug}`}
    >
      {/* TODO: Add a nice CSS transition here */}
      <img alt={title} height="auto" loading="lazy" src={image} width="auto" />

      <Heading className="mt-4 mb-2 text-2xl">{title}</Heading>
      <div className="font-font-monospace text-sm">{dateString}</div>
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
    </Link>
  );
};
