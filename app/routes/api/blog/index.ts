import { json, LoaderFunction } from "remix";

import { fetchFromGraphCMS, gql } from "~/utils/graphcms";

export interface Post {
  content: {
    html: string;
  };
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
      content {
        html
      }
      id
      imageTemp
      intro
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
