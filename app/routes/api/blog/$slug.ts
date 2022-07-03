import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

import { fetchFromGraphCMS } from "~/utils/graphcms";
import { getPost } from "~/queries/getPost";

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

export const loader: LoaderFunction = async (args): Promise<LoaderData> => {
  const { slug } = args.params;

  const data = await fetchFromGraphCMS(getPost, { slug });
  const res = await data.json();

  if (!res.data.post) {
    throw json(`Post "${slug}" not found`, { status: 404 });
  }

  return res.data.post;
};
