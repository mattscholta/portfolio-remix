import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

import { fetchFromGraphCMS } from "~/utils/graphcms";
import { getPosts } from "~/queries/getPosts";

export interface Post {
  content: {
    html: string;
  };
  date: string;
  id: string;
  imageTemp: string;
  slug: string;
  sticky: boolean;
  tags: string[];
  title: string;
}

export interface EnumValue {
  // deprecationReason?: string;
  // description?: string;
  // isDeprecated: boolean;
  name: string;
}

export type LoaderData = {
  posts: Post[];
  tags: string[];
};

export const loader: LoaderFunction = async () => {
  try {
    const data = await fetchFromGraphCMS(getPosts);
    const res = await data.json();

    const posts = res.data.posts ?? [];
    const tagsData: EnumValue[] = res.data.__type.enumValues ?? [];
    const tags = tagsData.map((tag: EnumValue) => tag.name).sort();

    if (!posts.length) {
      throw new Response(`Blog posts not found`, { status: 404 });
    }

    return json({ posts, tags });
  } catch (error) {
    throw error;
  }
};
