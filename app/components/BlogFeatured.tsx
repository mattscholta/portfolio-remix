import { BlogPreview } from "~/components/BlogPreview";

export interface BlogFeaturedProps {
  className?: string;
}

export const BlogFeatured = (props: BlogFeaturedProps) => {
  const { className } = props;

  return (
    <BlogPreview
      className={className}
      content=""
      date={new Date().toISOString()}
      featured={true}
      image={
        "https://mattscholta.files.wordpress.com/2017/08/pexels-photo-4164418.jpeg"
      }
      key={"item.id"}
      slug="featured-slug"
      title="Our fantastic article"
    />
  );
};
