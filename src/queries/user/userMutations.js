import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation (
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
    $role: String!
  ) {
    createUser(
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
      role: $role
    ) {
      user {
        id
        email
        firstName
        lastName
        role
      }
      ok
    }
  }
`;

/** Single Mutation  for all user types  */
const USER_LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token
    }
  }
`;

export { CREATE_USER, USER_LOGIN };
