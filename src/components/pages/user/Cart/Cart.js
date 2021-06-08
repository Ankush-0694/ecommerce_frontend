import React from "react";
import { useQuery } from "@apollo/client";
import { getCartQuery } from "../../../../queries/Product/productQueries";
import CartItem from "./ComponenetHelpers/CartItem";
import PriceDetails from "../Checkout/Helpers/PriceDetails";
import { CartStyles } from "./CssHelpers/CartStyles";

const Cart = () => {
  const classes = CartStyles();
  const obj = useQuery(getCartQuery);
  const { error, loading, data: cartData } = obj;
  console.log(cartData);

  return (
    <div>
      <div>
        <h3 style={{ textAlign: "center", marginTop: "10px" }}>MY CART</h3>
        <hr></hr>
      </div>
      <div className={classes.cartContainer}>
        <div className={classes.item1}>
          <h3
            style={{
              textAlign: "center",
              margin: "0px",
              padding: "5px",
              backgroundColor: "#DCDCDC",
            }}>
            Products
          </h3>
          <hr></hr>

          {!loading ? (
            cartData.getCart.map((cartItemData) => {
              return (
                <CartItem key={cartItemData.id} cartItemData={cartItemData} />
              );
            })
          ) : (
            <p>loading</p>
          )}
        </div>

        <div className={classes.item2}>
          <PriceDetails />
          <div className={classes.placeOrder}>
            <button className={classes.placeOrderbtn}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
