import { gql } from "@apollo/client";

// also need to store the product Id as well Or we can only store the id

const ADD_TO_CART = gql`
  mutation ($productID: ID!) {
    addToCart(productID: $productID) {
      id
      customerId
      productData {
        id
        productName
        productDescription
        productPrice
      }
      quantity
    }
  }
`;

const UPDATE_CART_QUANTITY = gql`
  mutation ($cartID: ID, $quantity: Int) {
    updateCartQuantity(cartID: $cartID, quantity: $quantity) {
      id
      customerId
      productData {
        id
        productName
        productDescription
        productPrice
      }
      quantity
    }
  }
`;

const DELETE_CART = gql`
  mutation ($cartID: ID) {
    deleteCart(cartID: $cartID) {
      id
      customerId
      productData {
        id
        productName
        productDescription
        productPrice
      }
      quantity
    }
  }
`;

const DELETE_CART_BY_CUSTOMERID = gql`
  mutation deleteCartByCustomerId {
    clearCartByCustomerId
  }
`;

export {
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  DELETE_CART,
  DELETE_CART_BY_CUSTOMERID,
};
