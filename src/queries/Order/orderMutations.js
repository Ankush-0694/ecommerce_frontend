import { gql } from "@apollo/client";

const ADD_ORDER = gql`
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

export { ADD_ORDER };
