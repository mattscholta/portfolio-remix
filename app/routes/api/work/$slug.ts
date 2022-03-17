import { json, LoaderFunction } from "remix";

import { fetchFromGraphCMS, gql } from "~/utils/graphcms";

export type LoaderData = {
  company: string;
  content: {
    html: string;
  };
  id: string;
  images: [
    {
      url: string;
    }
  ];
  intro: string;
  slug: string;
  title: string;
};

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
  const { slug } = args.params;

  const data = await fetchFromGraphCMS(getPortfolioBySlug, { slug: slug });
  const res = await data.json();
  const portfolios = res.data.portfolios ?? [];

  if (portfolios.length !== 1) {
    throw json(`Portfolio "${slug}" not found`, { status: 404 });
  }

  return portfolios[0];
};
