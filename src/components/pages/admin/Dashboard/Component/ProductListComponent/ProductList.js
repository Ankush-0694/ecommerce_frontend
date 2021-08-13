import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../../../../../queries/Product/productQueries";
import { MyTypography } from "../../../../../Design/MyTypography";
import ProductListItem from "./ProductListItem";
import ShowError from "../../../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../../../layout/LoadingComponent/ShowLoading";

const ProductList = () => {
  const {
    error: getProductsDataError,
    loading: getProductsDataLoading,
    data: getProductsData,
  } = useQuery(GET_ALL_PRODUCTS);

  if (getProductsDataError) {
    return <ShowError>Error while Fetching Product Data</ShowError>;
  }
  if (getProductsDataLoading) {
    return <ShowLoading />;
  }

  const productData = getProductsData.getAllProducts;

  if (!productData) {
    return <div>No Data Available</div>;
  }

  return (
    <div>
      <div>
        <MyTypography
          variant="h4"
          component="h5"
          style={{ textAlign: "center", padding: "10px" }}>
          Products
        </MyTypography>
        <div>
          {productData
            .slice(0)
            .reverse()
            .map((data) => {
              return <ProductListItem key={data.id} data={data} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
