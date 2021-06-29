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

export { getMeQuery };
