import { LoaderFunction } from "remix";

import { fetchFromGraphCMS, gql } from "~/utils/graphcms";

export interface Portfolio {
  overview: string;
  slug: string;
  thumbnailTemp: string;
  title: string;
}

export type LoaderData = Portfolio[];

const getPortfolios = gql`
  query {
    portfolios {
      overview
      slug
      thumbnailTemp
      title
    }
  }
`;

const getPortfolioBySlug = gql`
  query portfolios($slug: String!) {
    portfolios(where: { slug: $slug }) {
      company
      content {
        html
      }
      id
      images {
        url
      }
      intro
      slug
      title
    }
  }
`;

export const loader: LoaderFunction = async (args): Promise<LoaderData> => {
  const { id } = args.params;

  if (!id) {
    const data = await fetchFromGraphCMS(getPortfolios);
    const json = await data.json();

    return json.data.portfolios ?? [];
  } else {
    const data = await fetchFromGraphCMS(getPortfolioBySlug, { slug: id });
    const json = await data.json();

    const portfolios = json.data.portfolios;

    if (portfolios.length !== 1) throw new Error("Portfolio not found");

    return portfolios[0];
  }
};
