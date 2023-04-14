import { BlogPreview } from "~/components/BlogPreview";
import type { Post } from "~/routes/api.blog";

export interface BlogFeaturedProps {
  className?: string;
  post: Post;
}

export const BlogFeatured = (props: BlogFeaturedProps) => {
  const { className, post } = props;

  return (
    <BlogPreview
      className={className}
      content={post.content.html}
      date={post.date}
      featured={post.sticky}
      heading="h2"
      image={post.imageTemp}
      key={post.slug}
      slug={post.slug}
      title={post.title}
    />
  );
};
