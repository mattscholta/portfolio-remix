import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

import { fetchFromGraphCMS, gql } from "~/utils/graphcms";

export interface Post {
  content: {
    raw: any;
    html: string;
  };
  createdAt: string;
  date: string;
  images: {
    url: string;
  };
  imageTemp: string;
  intro: string;
  title: string;
  updatedAt: string;
}

export type LoaderData = Post;

const getPost = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      content {
        html
        raw
      }
      createdAt
      date
      images {
        url
      }
      imageTemp
      intro
      title
      updatedAt
    }
  }
`;

export const loader: LoaderFunction = async (args): Promise<LoaderData> => {
  const { slug } = args.params;

  const data = await fetchFromGraphCMS(getPost, { slug });
  const res = await data.json();

  if (!res.data.post) throw json(`Post "${slug}" not found`, { status: 404 });

  return res.data.post;
};
