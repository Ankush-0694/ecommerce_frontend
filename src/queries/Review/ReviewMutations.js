import { gql } from "@apollo/client";

const ADD_REVIEW = gql`
  mutation ($productID: ID, $review: String!, $rating: Int) {
    addReview(productID: $productID, review: $review, rating: $rating) {
      id
      productID
      review
      rating
    }
  }
`;

const UPDATE_REVIEW = gql`
  mutation ($id: ID, $review: String!, $rating: Int) {
    updateReview(id: $id, review: $review, rating: $rating) {
      id
      productID
      review
      rating
    }
  }
`;

// No need to pass product id, may be need to delete to reference in product schema
const DELETE_REVIEW = gql`
  mutation ($id: ID, $productID: ID) {
    deleteReview(id: $id, productID: $productID) {
      id
      productID
      review
      rating
    }
  }
`;

export { ADD_REVIEW, UPDATE_REVIEW, DELETE_REVIEW };
