import { gql } from "@apollo/client";

const ADD_PRODUCT = gql`
  mutation (
    $productName: String!
    $productDescription: String!
    $productPrice: Int!
    $productCategory: String!
    $productSubCategory: String!
    $productBrand: String
  ) {
    addProduct(
      productName: $productName
      productDescription: $productDescription
      productPrice: $productPrice
      productCategory: $productCategory
      productSubCategory: $productSubCategory
      productBrand: $productBrand
    ) {
      productName
      productDescription
      productPrice
      productCategory
      productSubCategory
      productBrand
    }
  }
`;

const UPDATE_PRODUCT = gql`
  mutation (
    $productID: ID!
    $productName: String!
    $productDescription: String!
    $productPrice: Int!
    $productCategory: String!
    $productSubCategory: String!
    $productBrand: String
  ) {
    updateProduct(
      productID: $productID
      productName: $productName
      productDescription: $productDescription
      productPrice: $productPrice
      productCategory: $productCategory
      productSubCategory: $productSubCategory
      productBrand: $productBrand
    ) {
      id
      productName
      productDescription
      productPrice
      productCategory
      productSubCategory
      productBrand
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
      productCategory
      productSubCategory
      productBrand
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
