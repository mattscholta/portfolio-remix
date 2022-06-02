import classnames from "classnames";
import { SITE_AUTHOR } from "~/config/constants";

export interface AppUserCardProps {
  alt?: string;
  className?: string;
  copy: string;
  image: string;
}

export const AppUserCard = (props: AppUserCardProps) => {
  const { alt, className, copy, image } = props;

  return (
    <div className={classnames(className, "flex items-center gap-4")}>
      <img
        alt={alt}
        className="h-10 w-10 rounded-full border border-color-border-dark"
        src={image}
      />
      <div>
        <h3 className="text-xl">{SITE_AUTHOR}</h3>
        <div
          className="font-font-monospace text-xs"
          dangerouslySetInnerHTML={{ __html: copy }}
        />
      </div>
    </div>
  );
};
