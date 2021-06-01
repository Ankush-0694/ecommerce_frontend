import { gql } from "@apollo/client";

const getProductsQuery = gql`
  {
    products {
      id
      productName
      productDescription
      productPrice
    }
  }
`;

const getSingleProduct = gql`
  query ($id: ID!) {
    product(id: $id) {
      id
      productName
      productDescription
      productPrice
      reviews {
        review
        rating
      }
    }
  }
`;

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

const uploadFileMutaion = gql`
  mutation ($file: Upload!) {
    uploadFile(file: $file) {
      file
    }
  }
`;

export {
  getProductsQuery,
  addProductMutation,
  getSingleProduct,
  uploadFileMutaion,
  addProductReviewMutation,
};
