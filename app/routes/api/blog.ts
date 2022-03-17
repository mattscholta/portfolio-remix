import { LoaderFunction } from "remix";

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
  const json = await data.json();

  return json.data.posts ?? [];
};
