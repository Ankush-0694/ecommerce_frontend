import { gql } from "@apollo/client";

const GET_ALL_ADDRESS = gql`
  {
    getAllAddress {
      id
      fullName
      customerId
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

// No Need  to pass customer id as argument because we are passing in the header (context) using authLink
const GET_ADDRESSES_BY_CUSTOMERID = gql`
  {
    getAddressesByCustomerId {
      id
      customerId
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

export { GET_ALL_ADDRESS, GET_ADDRESSES_BY_CUSTOMERID };
