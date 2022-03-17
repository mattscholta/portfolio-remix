import classnames from "classnames";
import { Link } from "remix";

export interface BlogPreviewProps {
  className?: string;
  slug: string;
  title: string;
  image: string;
}

export const BlogPreview = (props: BlogPreviewProps) => {
  const { className, slug, image, title } = props;

  // Styles
  const tailwind = `flex flex-grow flex-col aspect-video p-4`;
  const cssComponent = classnames("blog-preview", tailwind, className);
  const cssHeading = "text-2xl my-4 font-font-serif font-extrabold";

  // Setup
  const backgroundImage = `linear-gradient(-45deg, rgba(255 255 255 / 50%), rgba(255 0 0 / 70%)), url("${image}")`;

  return (
    <Link
      className={cssComponent}
      to={`/blog/${slug}`}
      style={{ backgroundImage }}
    >
      <h3 className={cssHeading}>{title}</h3>
      {/* <img alt="" loading="lazy" src={image} /> */}
      {/*
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
        pariatur molestias ad id fugit expedita dicta quam repellat minima nulla
        praesentium quasi cum sint tempora vel, debitis incidunt quod ipsum.
      </p>
       */}
    </Link>
  );
};
