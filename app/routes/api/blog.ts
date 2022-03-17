import { LoaderFunction } from "remix";
import { fetchFromGraphCMS, gql } from "~/utils/graphcms";

const getBlogPosts = gql`
  query {
    posts {
      id
      imageTemp
      sticky
      slug
      title
    }
  }
`;

export const loader: LoaderFunction = async () => {
  const data = await fetchFromGraphCMS(getBlogPosts);
  const json = await data.json();

  return json.data.posts ?? [];
};
