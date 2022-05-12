export interface TagsProps {
  className?: string;
  heading?: string;
  tags: string[];
}

export const Tags = (props: TagsProps) => {
  const { className, heading, tags } = props;

  return (
    <div className={className}>
      {heading && <h2 className="mb-8 text-2xl">{heading}</h2>}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <div className="rounded-md border border-color-border p-2" key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};
