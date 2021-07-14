import { gql } from "@apollo/client";

// also need to store the product Id as well Or we can only store the id
const ADD_TO_CART = gql`
  mutation (
    $productID: ID!
    $productName: String!
    $productDescription: String!
    $productPrice: Int!
  ) {
    addToCart(
      productID: $productID
      productName: $productName
      productDescription: $productDescription
      productPrice: $productPrice
    ) {
      id
      productID
      productName
      productDescription
      productPrice
      quantity
    }
  }
`;

const UPDATE_CART_QUANTITY = gql`
  mutation ($cartID: ID, $quantity: Int) {
    updateCartQuantity(cartID: $cartID, quantity: $quantity) {
      id
      quantity
    }
  }
`;

const DELETE_CART = gql`
  mutation ($cartID: ID) {
    deleteCart(cartID: $cartID) {
      id
      productID
      productName
      productDescription
      productPrice
      quantity
    }
  }
`;

export { ADD_TO_CART, UPDATE_CART_QUANTITY, DELETE_CART };
