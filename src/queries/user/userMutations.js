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
  mutation ($email: String!, $password: String!, $role: String!) {
    userLogin(email: $email, password: $password, role: $role) {
      token
    }
  }
`;

const CREATE_VENDOR = gql`
  mutation createVendor($email: String!, $role: String!) {
    createVendor(email: $email, role: $role) {
      ok
      vendor {
        id
        email
        role
      }
    }
  }
`;

const GENERATE_PASSWORD = gql`
  mutation generatePassword($password: String!, $verifyToken: String!) {
    generatePassword(password: $password, verifyToken: $verifyToken) {
      successMsg
      ok
    }
  }
`;

export { CREATE_USER, USER_LOGIN, CREATE_VENDOR, GENERATE_PASSWORD };
