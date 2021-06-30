import { gql } from "@apollo/client";

const ADD_ADDRESS = gql`
  mutation (
    $fullName: String!
    $phoneNumber: Int!
    $pincode: Int!
    $state: String!
    $city: String!
    $HouseNo: String!
    $area: String!
    $landmark: String!
  ) {
    addAddress(
      fullName: $fullName
      phoneNumber: $phoneNumber
      pincode: $pincode
      state: $state
      city: $city
      HouseNo: $HouseNo
      area: $area
      landmark: $landmark
    ) {
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
`;

const UPDATE_ADDRESS = gql`
  mutation (
    $id: ID!
    $fullName: String!
    $phoneNumber: Int!
    $pincode: Int!
    $state: String!
    $city: String!
    $HouseNo: String!
    $area: String!
    $landmark: String!
  ) {
    updateAddress(
      addressID: $id
      fullName: $fullName
      phoneNumber: $phoneNumber
      pincode: $pincode
      state: $state
      city: $city
      HouseNo: $HouseNo
      area: $area
      landmark: $landmark
    ) {
      id
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
`;

const DELETE_ADDRESS = gql`
  mutation ($id: ID!) {
    deleteAddress(addressID: $id) {
      id
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
`;

export { ADD_ADDRESS, UPDATE_ADDRESS, DELETE_ADDRESS };
