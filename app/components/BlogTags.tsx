export interface BlogTagsProps {
  className?: string;
  tags?: string[];
}

const defaultTags = [
  "remix",
  "react",
  "career",
  "personal",
  "typescript",
  "user_experience",
  "css",
  "testing",
  "javascript",
  "productivity",
  "open_source",
  "review",
  "node",
  "programming",
  "teaching",
  "state",
  "performance",
  "learning"
];

export const BlogTags = (props: BlogTagsProps) => {
  const { className, tags = defaultTags } = props;

  return (
    <div className={className}>
      <h2 className="mb-8 text-2xl">Search blog by topics</h2>
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
