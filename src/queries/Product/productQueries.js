import { gql } from "@apollo/client";

const GET_ALL_PRODUCTS = gql`
  query getAllProducts($limit: Int!, $cursor: ID) {
    getAllProducts(limit: $limit, cursor: $cursor) {
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
      productImageUrl
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
      productImageUrl
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
      productImageUrl
      reviews {
        id
        customerId
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
      productImageUrl
      reviews {
        productID
        review
        rating
      }
    }
  }
`;

const GET_PRODUCT_USING_PAGINATION = gql`
  query ($limit: Int!, $nextCursor: ID) {
    getSomeProducts(limit: $limit, nextCursor: $nextCursor) {
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
      productImageUrl
    }
  }
`;

export {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_VENDORID,
  GET_SINGLE_PRODUCT,
  GET_PRODUCT_BY_SEARCH_TEXT,
  GET_PRODUCT_USING_PAGINATION,
};
