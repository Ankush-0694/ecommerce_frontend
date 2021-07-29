import { gql } from "@apollo/client";

/** To have user every time in our react app
 * Need to pass token in header
 */
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

/** For fetching user using their role field
 * It will be used in the admin dashboard to fetch user and vendor
 */
const GET_ALL_USERS_BY_ROLE = gql`
  query ($role: String!) {
    getAllUsersByRole(role: $role) {
      id
      email
      firstName
      lastName
      role
    }
  }
`;

export { GET_ME, GET_ALL_USERS_BY_ROLE };
