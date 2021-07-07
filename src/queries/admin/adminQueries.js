import { gql } from "@apollo/client";

const GET_ME = gql`
  {
    getMe {
      id
      firstName
      lastName
      email
      role
    }
  }
`;

const GET_ALL_USERS = gql`
  query ($role: String!) {
    getAllUsers(role: $role) {
      id
      email
      firstName
      lastName
      role
    }
  }
`;

export { GET_ME, GET_ALL_USERS };
