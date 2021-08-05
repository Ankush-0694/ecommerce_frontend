import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../../../../queries/Product/productQueries";
import ProductCard from "./Component/ProductCard/ProductCard";
import { MyGridContainer } from "../../../../Design/MyGrid";
import ShowError from "../../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../../layout/LoadingComponent/ShowLoading";

const Products = () => {
  const {
    error: getProductsError,
    loading: getProductsLoading,
    data: getProductsData,
  } = useQuery(GET_ALL_PRODUCTS);

  if (getProductsError) {
    return <ShowError>Error while Fetching Products</ShowError>;
  }
  if (getProductsLoading) {
    return <ShowLoading />;
  }

  // data to render
  const productData = getProductsData.getAllProducts;

  return (
    <div style={{ margin: "20px" }}>
      <MyGridContainer container justify="center" spacing={4}>
        {productData.map((product) => {
          return (
            <ProductCard
              key={product.id}
              details={product}
              link={`/products/:${product.id}`}
            />
          );
        })}
      </MyGridContainer>
    </div>
  );
};

export default Products;
