import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

import { fetchFromGraphCMS } from "~/utils/graphcms";
import { getPortfolioBySlug } from "~/queries/getPortfolio";

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

export const loader: LoaderFunction = async (args) => {
  const { slug } = args.params;

  const data = await fetchFromGraphCMS(getPortfolioBySlug, { slug: slug });
  const res = await data.json();
  const portfolios = res.data.portfolios ?? [];

  if (portfolios.length !== 1) {
    throw new Response(`Portfolio "${slug}" not found`, { status: 404 });
  }

  return json(portfolios[0]);
};
