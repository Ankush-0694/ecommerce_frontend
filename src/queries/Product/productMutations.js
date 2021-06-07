import { gql } from "@apollo/client";
const addProductMutation = gql`
  mutation (
    $productName: String!
    $productDescription: String!
    $productPrice: Int!
  ) {
    addProduct(
      productName: $productName
      productDescription: $productDescription
      productPrice: $productPrice
    ) {
      productName
      productDescription
      productPrice
    }
  }
`;

const addProductReviewMutation = gql`
  mutation ($productid: ID, $review: String!, $rating: Int) {
    addReview(productid: $productid, review: $review, rating: $rating) {
      reviews {
        review
        rating
      }
    }
  }
`;

const addToCartMutation = gql`
  mutation (
    $productName: String!
    $productDescription: String!
    $productPrice: Int!
  ) {
    addToCart(
      productName: $productName
      productDescription: $productDescription
      productPrice: $productPrice
    ) {
      productName
      productDescription
      productPrice
    }
  }
`;

const uploadFileMutaion = gql`
  mutation ($file: Upload!) {
    uploadFile(file: $file) {
      file
    }
  }
`;

export {
  addProductMutation,
  uploadFileMutaion,
  addProductReviewMutation,
  addToCartMutation,
};
