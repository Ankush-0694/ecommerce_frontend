import { gql } from "@apollo/client";

const GET_ALL_PRODUCTS = gql`
  {
    getAllProducts {
      id
      productName
      productDescription
      productPrice
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
      reviews {
        id
        productID
        review
        rating
      }
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
    }
  }
`;

export { GET_ALL_PRODUCTS, GET_SINGLE_PRODUCT, GET_MULTIPLE_PRODUCTS };
