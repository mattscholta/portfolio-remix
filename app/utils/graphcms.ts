import { GRAPHCMS_TOKEN, GRAPHCMS_URL } from "~/config/settings.server";

/**
 * @name fetchFromGraphCMS
 * @external https://css-tricks.com/raw-graphql-querying
 * @description This function is used to fetch data from the GraphQL API.
 * Check out the link above for more information.
 */
export const fetchFromGraphCMS = async (
  query: string,
  variables?: Record<string, any>
) => {
  const body: any = { query };

  if (variables) body.variables = variables;

  return fetch(GRAPHCMS_URL, {
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${GRAPHCMS_TOKEN}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  });
};

export const gql = String.raw;
