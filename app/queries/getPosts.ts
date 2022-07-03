import { gql } from "~/utils/graphcms";

export const getPosts = gql`
  query {
    # Query enum values - https://graphcms.com/docs/api-reference/schema/enumerations
    __type(name: "Tags") {
      enumValues {
        name
      }
    }

    # posts(stage: DRAFT) {

    posts(orderBy: createdAt_ASC) {
      content {
        html
      }
      date
      id
      imageTemp
      intro
      slug
      tags
      sticky
      title
    }
  }
`;
