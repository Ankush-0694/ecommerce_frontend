import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { getCartQuery } from "../../../../queries/Cart/cartQueries";
import CartItem from "./Component/CartItem/CartItem";
import CartPriceDetails from "./Component/CartPriceDetails/CartPriceDetails";
import { CartStyles } from "./CSS/CartStyles";
import { MyButtonComponent } from "../../../Design/MyButtonComponent";
import { updateCartQuantityMutation } from "../../../../queries/Cart/cartMutations";

const Cart = ({ history }) => {
  const classes = CartStyles();

  //to Get data from cart
  const obj = useQuery(getCartQuery);
  const { error, loading, data: cartDataObject } = obj;

  // storing cartData array
  let cartData;
  if (!loading) {
    cartData = cartDataObject.getCart;
  }
  console.log(cartData);

  // mutation to chaning the quantity of cart item
  const [
    updateCartQuantity,
    { error: updateError, loading: updateLoading, data: updateCartData },
  ] = useMutation(updateCartQuantityMutation);

  // , {
  //   refetchQueries: [{ query: getCartQuery }],
  // }

  //updating quantity to the cart
  const setQuantityById = (id, quantity) => {
    updateCartQuantity({
      variables: {
        cartID: id,
        quantity: quantity,
      },
    });
  };

  //No of product
  let itemCount = 0;
  if (!loading) {
    itemCount = cartData.length;
    console.log(itemCount);
  }

  //calculating total price
  let totalPrice = 0;
  if (!loading) {
    let sum = 0;
    const cartItems = cartData;
    cartItems.forEach((item) => {
      sum += item.productPrice * item.quantity;
    });
    totalPrice = sum;
  }
  console.log(totalPrice);

  return (
    <div>
      <div>
        <h3 style={{ textAlign: "center", marginTop: "10px" }}>MY CART</h3>
        <hr></hr>
      </div>
      <div className={classes.cartContainer}>
        <div className={classes.item1}>
          <h3 className={classes.productHeading}>Products</h3>

          {!loading ? (
            cartData.map((cartItemData) => {
              return (
                <CartItem
                  key={cartItemData.id}
                  cartItemData={cartItemData}
                  setQuantityById={setQuantityById}
                />
              );
            })
          ) : (
            <p>loading</p>
          )}
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
