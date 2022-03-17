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
  const tailwind = `flex flex-grow flex-col aspect-video p-4`;
  const cssHeading = "text-2xl my-4 font-font-serif font-extrabold";
  const cssComponent = classnames("blog-preview", tailwind, className, {
    both: id % 2 !== 0
  });

  const backgroundImage = `url("${image}"), linear-gradient(-45deg, rgba(255 255 255 / 50%), rgba(255 0 0 / 70%))`;

  return (
    <Link
      className={cssComponent}
      to={`/blog/${id}`}
      style={{ backgroundImage }}
    >
      {/* <img alt="" loading="lazy" src={image} /> */}
      <h3 className={cssHeading}>{title}</h3>
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
