import { gql } from "@apollo/client";

const GET_REVIEWS_BY_CUSTOMERID = gql`
  query {
    getReviewsByCustomerId {
      id
      productID
      customerId
      review
      rating
    }
  }
`;

export { GET_REVIEWS_BY_CUSTOMERID };
