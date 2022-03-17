import classnames from "classnames";
import { Link } from "remix";

export interface WorkPreviewProps {
  className?: string;
  id: number;
  title: string;
}

export const WorkPreview = (props: WorkPreviewProps) => {
  const { className, id = 21, title } = props;

  // Styles
  const tailwind = `flex flex-grow flex-col aspect-video--`;
  const cssComponent = classnames(tailwind, className);
  const cssHeading = "text-3xl mb-4 font-font-serif font-extrabold";

  // Setup
  // const src = `https://picsum.photos/id/${id}/1200/500`;

  return (
    <Link className={cssComponent} to={`/work/${id}`}>
      <h3 className={cssHeading}>{title}</h3>
      {/* <img alt="" loading="lazy" src={src} /> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ad
        dignissimos deserunt consectetur tempore libero, architecto voluptate
        nesciunt maxime cumque. Repudiandae reprehenderit consequuntur error
        totam perferendis officia inventore pariatur vel.
      </p>
    </Link>
  );
};
