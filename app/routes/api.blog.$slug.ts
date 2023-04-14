import { Response, json } from "@vercel/remix";
import type { LoaderFunction } from "@vercel/remix";

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
  tags: string[];
  title: string;
  updatedAt: string;
}

export type LoaderData = Post;

export const loader: LoaderFunction = async (args) => {
  const { slug } = args.params;

  const data = await fetchFromGraphCMS(getPost, { slug });
  const res = await data.json();

  if (!res.data.post) {
    throw new Response(`Post "${slug}" not found`, { status: 404 });
  }

  return json(res.data.post);
};
