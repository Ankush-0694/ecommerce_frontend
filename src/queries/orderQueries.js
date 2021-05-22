import { gql } from "@apollo/client";

const addOrderMutation = gql`
  mutation (
    $productName: String!
    $productDescription: String!
    $productPrice: Int!
    $quantity: Int!
    $address: AddressInput
  ) {
    addOrder(
      productName: $productName
      productDescription: $productDescription
      productPrice: $productPrice
      quantity: $quantity
      address: $address
    ) {
      productName
      productDescription
      productPrice
      quantity
      address {
        fullName
        phoneNumber
        pincode
        state
        city
        HouseNo
        area
        landmark
      }
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
