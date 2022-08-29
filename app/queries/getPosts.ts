import { gql } from "~/utils/graphcms";

export const getPosts = gql`
  query {
    # Query enum values - https://graphcms.com/docs/api-reference/schema/enumerations
    __type(name: "Tags") {
      enumValues {
        name
      }
    }

    posts(orderBy: date_DESC) {
      content {
        html
      }
      date
      description
      id
      imageTemp
      intro
      slug
      tags
      sticky
      tags
      title
    }
  }
`;
