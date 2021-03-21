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

export { getProductsQuery, addProductMutation };
