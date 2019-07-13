// eslint-disable
// this is an auto generated file. This will be overwritten

export const getOwner = `query GetOwner($id: ID!) {
  getOwner(id: $id) {
    id
    name
    imageUrl
  }
}
`;
export const listOwners = `query ListOwners(
  $filter: ModelOwnerFilterInput
  $limit: Int
  $nextToken: String
) {
  listOwners(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      imageUrl
    }
    nextToken
  }
}
`;
