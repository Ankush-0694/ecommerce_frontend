import React from "react";
import { useQuery } from "@apollo/client";
import { getProductsQuery } from "../../../../queries/queries";

const Products = () => {
  const obj = useQuery(getProductsQuery);

  const { error, loading, data } = obj;
  console.log(data);
  return (
    <div>
      <ul id="Product-list">
        {!loading ? (
          data.products.map((product) => {
            return (
              <li key={product.id} style={{ padding: "10px" }}>
                {product.productName} {"-"} {product.productDescription}
                {"-"}
                {product.productPrice}
              </li>
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </ul>
    </div>
  );
};

export default Products;
