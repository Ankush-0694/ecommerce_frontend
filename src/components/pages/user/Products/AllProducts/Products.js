import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getProductsQuery } from "../../../../../queries/Product/productQueries";
import { ProductCard } from "./ProductCard";
import { MyGridContainer } from "../../../../Design/MyGrid";

const Products = () => {
  const obj = useQuery(getProductsQuery);
  // const obj2 = useQuery(getOrdersQuery);

  const { error, loading, data } = obj;
  // const { error: error1, loading: loading1, data: orderData } = obj2;
  console.log(data);
  return (
    <div style={{ margin: "20px" }}>
      <MyGridContainer container justify="center" spacing={4}>
        {!loading ? (
          data.products.map((product) => {
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
