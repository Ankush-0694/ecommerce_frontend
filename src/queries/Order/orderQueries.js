import { gql } from "@apollo/client";

const GET_ALL_ORDERS = gql`
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

export { GET_ALL_ORDERS };
