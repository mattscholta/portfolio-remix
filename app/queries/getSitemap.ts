import { gql } from "~/utils/graphcms";

export const getSitemap = gql`
  query {
    # Query enum values - https://graphcms.com/docs/api-reference/schema/enumerations
    __type(name: "Tags") {
      enumValues {
        name
      }
    }

    portfolios(orderBy: date_DESC) {
      # company
      # current
      date
      # description
      # images {
      #   url
      # }
      # overview
      slug
      # thumbnailTemp
      title
    }

    posts(orderBy: createdAt_ASC) {
      # content {
      #   html
      # }
      date
      # description
      # id
      # imageTemp
      # intro
      slug
      # tags
      # sticky
      title
    }
  }
`;
