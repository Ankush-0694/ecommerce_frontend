import { gql } from "@apollo/client";

const addOrderMutation = gql`
  mutation (
    $productName: String!
    $productDescription: String!
    $productPrice: Int!
    $quantity: Int!
  ) {
    addOrder(
      productName: $productName
      productDescription: $productDescription
      productPrice: $productPrice
      quantity: $quantity
    ) {
      productName
      productDescription
      productPrice
      quantity
    }
  }
`;

const getOrdersQuery = gql`
  {
    orders {
      id
      productName
      productDescription
      productPrice
      quantity
    }
  }
`;

export { addOrderMutation, getOrdersQuery };
