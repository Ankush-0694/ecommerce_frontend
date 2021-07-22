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

export { CREATE_USER };
