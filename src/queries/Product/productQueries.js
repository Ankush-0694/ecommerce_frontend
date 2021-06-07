import { gql } from "@apollo/client";

const getProductsQuery = gql`
  {
    products {
      id
      productName
      productDescription
      productPrice
    }
  }
`;

const getSingleProduct = gql`
  query ($id: ID!) {
    product(id: $id) {
      id
      productName
      productDescription
      productPrice
      reviews {
        review
        rating
      }
    }
  }
`;

const getCartQuery = gql`
  {
    getCart {
      id
      productName
      productDescription
      productPrice
    }
  }
`;

export { getProductsQuery, getSingleProduct, getCartQuery };
