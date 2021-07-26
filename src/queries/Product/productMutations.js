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

const UPLOAD_FILE = gql`
  mutation ($file: Upload!) {
    uploadFile(file: $file) {
      filename
      mimetype
      encoding
    }
  }
`;

export { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, UPLOAD_FILE };
