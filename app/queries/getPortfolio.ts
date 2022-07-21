import { gql } from "~/utils/graphcms";

export const getPortfolioBySlug = gql`
  query portfolios($slug: String!) {
    portfolios(where: { slug: $slug }) {
      company
      content {
        html
      }
      description
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
