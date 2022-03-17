import { LoaderFunction } from "remix";
import { fetchFromGraphCMS, gql } from "~/utils/graphcms";

const getPortfolioPosts = gql`
  query {
    portfolios {
      overview
      slug
      title
      thumbnailTemp
    }
  }
`;

export const loader: LoaderFunction = async () => {
  const data = await fetchFromGraphCMS(getPortfolioPosts);
  const json = await data.json();

  return json.data.portfolios ?? [];
};
