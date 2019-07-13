// eslint-disable
// this is an auto generated file. This will be overwritten

export const getOwner = `query GetOwner($id: ID!) {
  getOwner(id: $id) {
    id
    name
    gardenType
    plant1
    plant2
    plant3
    address
    note
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
      gardenType
      plant1
      plant2
      plant3
      address
      note
    }
    nextToken
  }
}
`;
