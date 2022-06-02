import { json } from "remix";
import type { LoaderFunction } from "remix";

import { fetchFromGraphCMS, gql } from "~/utils/graphcms";

export interface Post {
  content: {
    html: string;
  };
  date: string;
  id: string;
  imageTemp: string;
  slug: string;
  sticky: boolean;
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

const getPosts = gql`
  query {
    # Query enum values - https://graphcms.com/docs/api-reference/schema/enumerations
    __type(name: "Tags") {
      enumValues {
        name
      }
    }

    # posts(stage: DRAFT) {

    posts(orderBy: createdAt_ASC) {
      content {
        html
      }
      date
      id
      imageTemp
      intro
      slug
      tags
      sticky
      title
    }
  }
`;

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  try {
    const data = await fetchFromGraphCMS(getPosts);
    const res = await data.json();

    const posts = res.data.posts ?? [];
    const tagsData: EnumValue[] = res.data.__type.enumValues ?? [];
    const tags = tagsData.map((tag: EnumValue) => tag.name).sort();

    if (!posts.length) throw json(`Blog posts not found`, { status: 404 });

    return {
      posts,
      tags
    };
  } catch (error) {
    throw error;
  }
};
