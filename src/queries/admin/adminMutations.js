import { gql } from "@apollo/client";

const createAdminMutation = gql`
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

const adminLoginMutation = gql`
  mutation ($email: String!, $password: String!) {
    adminLogin(email: $email, password: $password) {
      token
    }
  }
`;

export { createAdminMutation, adminLoginMutation };
