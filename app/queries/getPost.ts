import { gql } from "~/utils/graphcms";

export const getPost = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      content {
        html
        raw
      }
      createdAt
      date
      images {
        url
      }
      imageTemp
      intro
      title
      updatedAt
    }
  }
`;
