import { gql } from "@apollo/client";

const CREATE_ADMIN = gql`
  mutation (
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
  ) {
    createAdmin(
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
    ) {
      admin {
        id
        email
        firstName
        lastName
        role
      }
    }
  }
`;

const ADMIN_LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    adminLogin(email: $email, password: $password) {
      token
    }
  }
`;

export { CREATE_ADMIN, ADMIN_LOGIN };
