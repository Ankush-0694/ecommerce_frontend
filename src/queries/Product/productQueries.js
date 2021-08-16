import { gql } from "@apollo/client";

const GET_ALL_PRODUCTS = gql`
  {
    getAllProducts {
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

const GET_SINGLE_PRODUCT = gql`
  query ($id: ID!) {
    getProductById(id: $id) {
      id
      productName
      productDescription
      productPrice
      productCategory
      productSubCategory
      productBrand
      reviews {
        id
        productID
        review
        rating
      }
    }
  }
`;

const GET_PRODUCT_BY_SEARCH_TEXT = gql`
  query ($searchText: String!) {
    getProductsBySearchText(searchText: $searchText) {
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

const GET_MULTIPLE_PRODUCTS = gql`
  query ($productIDArray: [ID]) {
    getMultipleProducts(productIDArray: $productIDArray) {
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

export {
  GET_ALL_PRODUCTS,
  GET_SINGLE_PRODUCT,
  GET_PRODUCT_BY_SEARCH_TEXT,
  GET_MULTIPLE_PRODUCTS,
};
