import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { getCartQuery } from "../../../../queries/Cart/cartQueries";
import CartItem from "./Component/CartItem/CartItem";
import CartPriceDetails from "./Component/CartPriceDetails/CartPriceDetails";
import { CartStyles } from "./CSS/CartStyles";
import { MyButtonComponent } from "../../../Design/MyButtonComponent";
// import { updateCartQuantityMutation } from "../../../../queries/Cart/cartMutations";

const Cart = () => {
  const classes = CartStyles();

  //to Get data from cart
  const {
    error: getCartError,
    loading: getCartLoading,
    data: getCartData,
  } = useQuery(getCartQuery);

  if (getCartError) {
    return <div>Error occured During getting cart</div>;
  }
  if (getCartLoading) {
    return <div>Fetching cart data, please wait...</div>;
  }

  // storing cartData array // this data will be render
  const cartData = getCartData.getCart;

  //No of product
  let itemCount = 0;
  itemCount = cartData.length;

  //calculating total price (there will be different quantity for every product)
  let totalPrice = 0;
  let sum = 0;
  const cartItems = cartData;
  cartItems.forEach((item) => {
    sum += item.productPrice * item.quantity;
  });
  totalPrice = sum;

  return (
    <div>
      <div>
        <h3 style={{ textAlign: "center", marginTop: "10px" }}>MY CART</h3>
        <hr></hr>
      </div>
      <div className={classes.cartContainer}>
        <div className={classes.item1}>
          <h3 className={classes.productHeading}>Products</h3>
          {cartData.map((cartItemData) => {
            return (
              <CartItem key={cartItemData.id} cartItemData={cartItemData} />
            );
          })}
        </div>

        <div className={classes.item2}>
          <CartPriceDetails itemCount={itemCount} totalPrice={totalPrice} />
          <div className={classes.placeOrder}>
            <MyButtonComponent
              color="primary"
              variant="contained"
              fullWidth
              className={classes.placeOrderbtn}
              onClick={() => {
                // history.push("/checkout/:60b0306fccc9709b72aa8fd1");
              }}>
              Place Order
            </MyButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
