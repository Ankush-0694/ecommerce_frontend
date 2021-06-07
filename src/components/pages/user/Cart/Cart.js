import React from "react";
import { useQuery } from "@apollo/client";
import { getCartQuery } from "../../../../queries/Product/productQueries";
import { findByDisplayValue } from "@testing-library/dom";

const Cart = () => {
  const obj = useQuery(getCartQuery);
  const { error, loading, data: cartData } = obj;
  console.log(cartData);

  return (
    <div>
      {!loading ? (
        cartData.getCart.map((cartItem) => {
          return (
            <div key={cartItem.id}>
              <div>{cartItem.productName}</div>
              <div>{cartItem.productDescription}</div>
              <div>{cartItem.productPrice}</div>
              <hr></hr>
            </div>
          );
        })
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default Cart;
