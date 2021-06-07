import { gql } from "@apollo/client";

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

export { getOrdersQuery };
