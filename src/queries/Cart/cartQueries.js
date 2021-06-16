import { gql } from "@apollo/client";

const getCartQuery = gql`
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

export { getCartQuery };
