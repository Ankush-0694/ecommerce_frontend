import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../../../../queries/Product/productQueries";
import ProductCard from "./Component/ProductCard/ProductCard";
import { MyGridContainer } from "../../../../Design/MyGrid";

const Products = () => {
  const {
    error: getProductsError,
    loading: getProductsLoading,
    data: getProductsData,
  } = useQuery(GET_ALL_PRODUCTS);

  if (getProductsError) {
    return <div>Error onccrued</div>;
  }
  if (getProductsLoading) {
    return <div>Loading.....</div>;
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
