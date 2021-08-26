import { gql } from "@apollo/client";

const ADD_PRODUCT = gql`
  mutation (
    $productName: String!
    $productDescription: String!
    $productPrice: Int!
    $productCategory: ProductCategoryInput!
    $productSubCategory: String!
    $productBrand: String
    $productImageUrl: String!
  ) {
    addProduct(
      productName: $productName
      productDescription: $productDescription
      productPrice: $productPrice
      productCategory: $productCategory
      productSubCategory: $productSubCategory
      productBrand: $productBrand
      productImageUrl: $productImageUrl
    ) {
      productName
      productDescription
      productPrice
      productCategory {
        categoryId
        categoryName
      }
      productSubCategory
      productBrand
      productImageUrl
    }
  }
`;

const UPDATE_PRODUCT = gql`
  mutation (
    $productID: ID!
    $productName: String!
    $productDescription: String!
    $productPrice: Int!
    $productCategory: ProductCategoryInput!
    $productSubCategory: String!
    $productBrand: String
    $productImageUrl: String!
  ) {
    updateProduct(
      productID: $productID
      productName: $productName
      productDescription: $productDescription
      productPrice: $productPrice
      productCategory: $productCategory
      productSubCategory: $productSubCategory
      productBrand: $productBrand
      productImageUrl: $productImageUrl
    ) {
      id
      productName
      productDescription
      productPrice
      productCategory {
        categoryId
        categoryName
      }
      productSubCategory
      productBrand
      productImageUrl
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
      productCategory {
        categoryId
        categoryName
      }
      productSubCategory
      productBrand
      productImageUrl
    }
  }
`;

export { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT };
