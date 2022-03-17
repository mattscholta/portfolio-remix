import { json, LoaderFunction } from "remix";

import { fetchFromGraphCMS, gql } from "~/utils/graphcms";

export interface Post {
  id: string;
  imageTemp: string;
  slug: string;
  sticky: string;
  title: string;
}

export type LoaderData = Post[];

const getPosts = gql`
  query {
    posts {
      id
      imageTemp
      slug
      sticky
      title
    }
  }
`;

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  const data = await fetchFromGraphCMS(getPosts);
  const res = await data.json();
  const posts = res.data.posts ?? [];

  if (!posts.length) throw json(`Blog posts not found`, { status: 404 });

  return posts;
};
