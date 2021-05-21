import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getProductsQuery } from "../../../../queries/productQueries";
import { getOrdersQuery } from "../../../../queries/orderQueries";

const Products = () => {
  const obj = useQuery(getProductsQuery);
  // const obj2 = useQuery(getOrdersQuery);

  const { error, loading, data } = obj;
  // const { error: error1, loading: loading1, data: orderData } = obj2;
  console.log(data);
  return (
    <div>
      <ul id="Product-list">
        {!loading ? (
          data.products.map((product) => {
            return (
              <Link key={product.id} to={`/products/:${product.id}`}>
                <li style={{ padding: "10px" }}>
                  {product.productName} {"-"} {product.productDescription}
                  {"-"}
                  {product.productPrice}
                </li>
              </Link>
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
