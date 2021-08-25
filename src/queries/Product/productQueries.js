import { gql } from "@apollo/client";

const GET_ALL_PRODUCTS = gql`
  {
    getAllProducts {
      id
      vendorId
      productName
      productDescription
      productPrice
      productCategory {
        categoryId
        categoryName
      }
      productSubCategory
      productBrand
    }
  }
`;

const GET_PRODUCT_BY_VENDORID = gql`
  query getProductsByVendorId {
    getProductsByVendorId {
      id
      vendorId
      productName
      productDescription
      productPrice
      productCategory {
        categoryId
        categoryName
      }
      productSubCategory
      productBrand
      reviews {
        id
        productID
        review
        rating
      }
    }
  }
`;

const GET_SINGLE_PRODUCT = gql`
  query ($id: ID!) {
    getProductByProductId(id: $id) {
      id
      vendorId
      productName
      productDescription
      productPrice
      productCategory {
        categoryId
        categoryName
      }
      productSubCategory
      productBrand
      reviews {
        id
        productID
        review
        rating
      }
    }
  }
`;

const GET_PRODUCT_BY_SEARCH_TEXT = gql`
  query ($searchText: String!) {
    getProductsBySearchText(searchText: $searchText) {
      id
      vendorId
      productName
      productDescription
      productPrice
      productCategory {
        categoryId
        categoryName
      }
      productSubCategory
      productBrand
    }
  }
`;

export {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_VENDORID,
  GET_SINGLE_PRODUCT,
  GET_PRODUCT_BY_SEARCH_TEXT,
};
