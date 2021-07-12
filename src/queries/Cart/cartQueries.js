import { gql } from "@apollo/client";

const GET_CART = gql`
  {
    getCart {
      id
      productID
      productName
      productDescription
      productPrice
      quantity
    }
  }
`;

const GET_CART_BY_PRODUCT_ID = gql`
  query ($productID: ID) {
    getCartItemByProductId(productID: $productID) {
      id
      productID
      productName
      productDescription
      productPrice
      quantity
    }
  }
`;

export { GET_CART, GET_CART_BY_PRODUCT_ID };
