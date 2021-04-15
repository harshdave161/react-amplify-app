/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReactamplifyapp = /* GraphQL */ `
  query GetReactamplifyapp($id: ID!) {
    getReactamplifyapp(id: $id) {
      id
      name
      description
      follower
      image
      createdAt
      updatedAt
    }
  }
`;
export const listReactamplifyapps = /* GraphQL */ `
  query ListReactamplifyapps(
    $filter: ModelreactamplifyappFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReactamplifyapps(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        follower
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
