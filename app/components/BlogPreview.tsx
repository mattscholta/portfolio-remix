import classnames from "classnames";

export interface BlogPreviewProps {
  className?: string;
}

export const BlogPreview = (props: BlogPreviewProps) => {
  const { className } = props;

  // Styles
  const tailwind = `flex flex-grow items-center justify-center bg-color-primary aspect-square`;
  const cssComponent = classnames(tailwind, className);

  return <div className={cssComponent}>First</div>;
};
