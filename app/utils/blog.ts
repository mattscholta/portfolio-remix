import type { Post } from "~/routes/api.blog";

export interface BlogData {
  data: Post[];
  featured: Post[];
}

/**
 * @name filterBlogPosts
 * @description We fetch all the results in one go and filter it as needed
 * on the client side
 */
export const filterBlogPosts = (posts: Post[]) => {
  const diy: BlogData = { data: [], featured: [] };
  const technical: BlogData = { data: [], featured: [] };

  posts.forEach((post) => {
    const node = post.tags.includes("DIY") ? diy : technical;
    const arr = post.sticky ? node.featured : node.data;

    arr.push(post);
  });

  return {
    diy,
    technical
  };
};
