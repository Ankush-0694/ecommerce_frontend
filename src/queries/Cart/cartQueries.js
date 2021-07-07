import { gql } from "@apollo/client";

const GET_CART = gql`
  {
    getCart {
      id
      productName
      productDescription
      productPrice
      quantity
    }
  }
`;

export { GET_CART };
