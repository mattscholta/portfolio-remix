import classnames from "classnames";

export interface AppTagsProps {
  className?: string;
  classNameTag?: string;
  heading?: string;
  tags: string[];
}

export const AppTags = (props: AppTagsProps) => {
  const { className, classNameTag, heading, tags } = props;

  return (
    <div className={className}>
      {heading && <h2 className="mb-8 text-2xl">{heading}</h2>}

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <div className={classnames(classNameTag)} key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};
