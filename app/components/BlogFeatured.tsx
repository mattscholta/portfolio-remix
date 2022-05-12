import { BlogPreview } from "~/components/BlogPreview";

export interface BlogFeaturedProps {
  className?: string;
}

export const BlogFeatured = (props: BlogFeaturedProps) => {
  const { className } = props;

  return (
    <div className={className}>
      <h2 className="mb-8 text-2xl">Featured Article</h2>
      <BlogPreview
        content={"item.content.html"}
        date={new Date().toISOString()}
        image={
          "https://mattscholta.files.wordpress.com/2017/08/pexels-photo-4164418.jpeg"
        }
        key={"item.id"}
        slug={"improving-code-quality"}
        title={"item.title"}
      />
    </div>
  );
};
