import { gql } from "@apollo/client";

const ADD_PRODUCT = gql`
  mutation (
    $productName: String!
    $productDescription: String!
    $productPrice: Int!
  ) {
    addProduct(
      productName: $productName
      productDescription: $productDescription
      productPrice: $productPrice
    ) {
      productName
      productDescription
      productPrice
    }
  }
`;

const UPDATE_PRODUCT = gql`
  mutation (
    $productID: ID!
    $productName: String!
    $productDescription: String!
    $productPrice: Int!
  ) {
    updateProduct(
      productID: $productID
      productName: $productName
      productDescription: $productDescription
      productPrice: $productPrice
    ) {
      id
      productName
      productDescription
      productPrice
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation ($productID: ID!) {
    deleteProduct(productID: $productID) {
      id
      productName
      productDescription
      productPrice
    }
  }
`;

// const uploadFileMutaion = gql`
//   mutation ($file: Upload!) {
//     uploadFile(file: $file) {
//       file
//     }
//   }
// `;

export { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT };
