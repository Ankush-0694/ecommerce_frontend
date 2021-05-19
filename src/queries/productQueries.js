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
  query GetProduct($id: ID) {
    product(id: $id) {
      id
      productName
      productDescription
      productPrice
    }
  }
`;

const addProductMutation = gql`
  mutation(
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

const uploadFileMutaion = gql`
  mutation($file: Upload!) {
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
};
