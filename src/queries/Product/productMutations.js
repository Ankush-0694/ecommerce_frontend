import { gql } from "@apollo/client";

const addProductMutation = gql`
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

const updateProductMutation = gql`
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

const uploadFileMutaion = gql`
  mutation ($file: Upload!) {
    uploadFile(file: $file) {
      file
    }
  }
`;

export { addProductMutation, updateProductMutation };
