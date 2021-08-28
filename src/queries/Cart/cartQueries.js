import { gql } from "@apollo/client";

const GET_CART = gql`
  {
    getCart {
      id
      customerId
      productData {
        id
        productName
        productDescription
        productPrice
        productImageUrl
      }
      quantity
    }
  }
`;

const GET_CART_BY_CUSTOMERID = gql`
  query {
    getCartByCustomerId {
      id
      customerId
      productData {
        id
        productName
        productDescription
        productPrice
        productImageUrl
      }
      quantity
    }
  }
`;

const GET_CART_BY_PRODUCT_ID = gql`
  query ($productID: ID) {
    getCartByProductId(productID: $productID) {
      id
      customerId
      productData {
        id
        productName
        productDescription
        productPrice
        productImageUrl
      }
      quantity
    }
  }
`;

export { GET_CART, GET_CART_BY_PRODUCT_ID, GET_CART_BY_CUSTOMERID };
