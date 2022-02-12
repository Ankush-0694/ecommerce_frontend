import React from "react";
import ProductCard from "./Component/ProductCard/ProductCard";
import { MyGridContainer } from "../../../../design/MyGrid";

const Products = ({ productData, selectedRating }) => {
  //calculation of average rating

  return (
    <div style={{ margin: "20px" }}>
      <MyGridContainer container spacing={4}>
        {productData.map((product) => {
          return (
            <ProductCard
              selectedRating={selectedRating}
              key={product.id}
              details={product}
              link={`/products/${product.id}`}
            />
          );
        })}
      </MyGridContainer>
    </div>
  );
};

export default Products;
