import React from "react";
import queryString from "query-string";
import { GET_PRODUCT_BY_SEARCH_TEXT } from "../../../../queries/Product/productQueries";
import { useQuery } from "@apollo/client";
import ShowError from "../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../layout/LoadingComponent/ShowLoading";
import Products from "../Products/AllProducts/Products";

const ShopBy = (props) => {
  const queryParameter = queryString.parse(props.location.search);

  const searchText = queryParameter.q;

  const {
    error: searchError,
    loading: searchLoading,
    data: productData,
  } = useQuery(GET_PRODUCT_BY_SEARCH_TEXT, {
    variables: {
      searchText: searchText,
    },
    fetchPolicy: "cache-first", //may already fetched when we were entering search text
  });

  if (searchError) {
    return <ShowError>Error</ShowError>;
  }

  if (searchLoading) {
    return <ShowLoading />;
  }

  const dataToRender = productData.getProductsBySearchText;

  if (dataToRender.length === 0) {
    return <h1>No Product Found</h1>;
  }

  return (
    <div>
      {/* This component comes from product/AllProducts which further use productCard to show the content */}
      <Products productData={dataToRender} />
    </div>
  );
};

export default ShopBy;
