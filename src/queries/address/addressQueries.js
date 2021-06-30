import { gql } from "@apollo/client";

const GET_ALL_ADDRESS = gql`
  {
    getAllAddress {
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
export { GET_ALL_ADDRESS };
