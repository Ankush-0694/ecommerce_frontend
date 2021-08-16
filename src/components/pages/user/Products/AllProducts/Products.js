import React from "react";
import ProductCard from "./Component/ProductCard/ProductCard";
import { MyGridContainer } from "../../../../Design/MyGrid";

const Products = ({ productData }) => {
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
