import { gql } from "@apollo/client";

const getMeQuery = gql`
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

export { getMeQuery, GET_ALL_USERS };
