import { gql } from "@apollo/client";

const addReviewMutation = gql`
  mutation ($productID: ID, $review: String!, $rating: Int) {
    addReview(productID: $productID, review: $review, rating: $rating) {
      id
      productID
      review
      rating
    }
  }
`;

const updateReviewMutation = gql`
  mutation ($id: ID, $review: String!, $rating: Int) {
    updateReview(id: $id, review: $review, rating: $rating) {
      id
      productID
      review
      rating
    }
  }
`;

const deleteReviewMutation = gql`
  mutation ($id: ID, $productID: ID) {
    deleteReview(id: $id, productID: $productID) {
      id
      productID
      review
      rating
    }
  }
`;

export { addReviewMutation, updateReviewMutation, deleteReviewMutation };
