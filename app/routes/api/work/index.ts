import { json, LoaderFunction } from "remix";

import { fetchFromGraphCMS, gql } from "~/utils/graphcms";

export interface Portfolio {
  company: string;
  current: boolean;
  images: any;
  overview: string;
  slug: string;
  thumbnailTemp: string;
  title: string;
}

export type LoaderData = Portfolio[];

const getPortfolios = gql`
  query {
    portfolios {
      company
      current
      images {
        url
      }
      overview
      slug
      thumbnailTemp
      title
    }
  }
`;

export const loader: LoaderFunction = async (args): Promise<LoaderData> => {
  const data = await fetchFromGraphCMS(getPortfolios);
  const res = await data.json();
  const items = res.data.portfolios ?? [];

  if (!items.length) {
    throw json(`Portfolio items not found`, { status: 404 });
  }

  return items;
};
