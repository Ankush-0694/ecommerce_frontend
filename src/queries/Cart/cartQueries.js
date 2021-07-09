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

export { GET_CART };
