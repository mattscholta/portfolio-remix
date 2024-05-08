import { fetchFromGraphCMS } from "~/utils/graphcms";
import { getPortfolios } from "~/queries/getPortfolios";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

export interface Portfolio {
  company: string;
  current: boolean;
  date: Date;
  images: any;
  overview: string;
  slug: string;
  thumbnailTemp: string;
  title: string;
}

export type LoaderData = Portfolio[];

export const loader: LoaderFunction = async (args) => {
  const data = await fetchFromGraphCMS(getPortfolios);
  const res = await data.json();
  const items = res.data.portfolios ?? [];

  if (!items.length) {
    throw new Response(`Portfolio items not found`, { status: 404 });
  }

  return json(items);
};
