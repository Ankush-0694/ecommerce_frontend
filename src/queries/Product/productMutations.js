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

const uploadFileMutaion = gql`
  mutation ($file: Upload!) {
    uploadFile(file: $file) {
      file
    }
  }
`;

export { addProductMutation, uploadFileMutaion };
