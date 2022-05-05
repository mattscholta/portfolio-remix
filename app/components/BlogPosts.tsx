export interface BlogPostsProps {
  className?: string;
}

export const BlogPosts = (props: BlogPostsProps) => {
  const { className } = props;

  return <div className={className}>Hello...</div>;
};
