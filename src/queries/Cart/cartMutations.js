import { gql } from "@apollo/client";

const addToCartMutation = gql`
  mutation (
    $productName: String!
    $productDescription: String!
    $productPrice: Int!
  ) {
    addToCart(
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

const updateCartQuantityMutation = gql`
  mutation ($cartID: ID, $quantity: Int) {
    updateCartQuantity(cartID: $cartID, quantity: $quantity) {
      id
      quantity
    }
  }
`;

export { addToCartMutation, updateCartQuantityMutation };
