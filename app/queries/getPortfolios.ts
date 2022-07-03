import { gql } from "~/utils/graphcms";

export const getPortfolios = gql`
  query {
    portfolios(orderBy: date_DESC) {
      company
      current
      date
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
