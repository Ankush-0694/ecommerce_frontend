import React from "react";
import { useQuery } from "@apollo/client";
import { getProductsQuery } from "../../../../../queries/Product/productQueries";
import { ProductCard } from "./Component/ProductCard/ProductCard";
import { MyGridContainer } from "../../../../Design/MyGrid";

const Products = () => {
  const obj = useQuery(getProductsQuery);

  const { error, loading, data } = obj;
  console.log(data);

  if (error) {
    return <div>Error onccrued</div>;
  }
  return (
    <div style={{ margin: "20px" }}>
      <MyGridContainer container justify="center" spacing={4}>
        {!loading ? (
          data.getAllProducts.map((product) => {
            return (
              <ProductCard
                key={product.id}
                details={product}
                link={`/products/:${product.id}`}
              />
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </MyGridContainer>
    </div>
  );
};

export default Products;
