import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_CART } from "../../../../queries/Cart/cartQueries";
import CartItem from "./Component/CartItem/CartItem";
import CartPriceDetails from "./Component/CartPriceDetails/CartPriceDetails";
import { CartStyles } from "./CSS/CartStyles";
import { MyButtonComponent } from "../../../Design/MyButtonComponent";
import ShowError from "../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../layout/LoadingComponent/ShowLoading";
import MyDivider from "../../../Design/MyDivider";

const Cart = ({ history }) => {
  const classes = CartStyles();

  //to Get data from cart
  const {
    error: getCartError,
    loading: getCartLoading,
    data: getCartData,
  } = useQuery(GET_CART, {
    onError: () => {},
  });

  if (getCartError) {
    return <ShowError>Error while Fetching Cart</ShowError>;
  }

  if (getCartLoading) {
    return <ShowLoading />;
  }

  // storing cartData array // this data will be render
  const cartData = getCartData.getCart;

  //No of product
  let itemCount = 0;
  itemCount = cartData.length;

  /**
   * calculating total price (there will be different quantity for every product
   */
  let totalPrice = 0;
  const cartItems = cartData;
  cartItems.forEach((item) => {
    totalPrice += item.productPrice * item.quantity;
  });

  /** redirect to checkout after mapping the product ID array
   * If there is no use product id array in the checkout multiple then must remove it
   */
  const onCheckout = (e) => {
    e.preventDefault();
    let productIDArray = [];
    cartData.map((cartDataItem) => {
      productIDArray.push(cartDataItem.productID);
    });
    history.push({
      pathname: `/checkout`,
      state: [...productIDArray],
    });
  };

  return (
    <div>
      <div>
        <h3 style={{ textAlign: "center", marginTop: "10px" }}>MY CART</h3>
        <MyDivider />
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
          <div className={classes.checkout}>
            <MyButtonComponent
              color="primary"
              variant="contained"
              fullWidth
              className={classes.checkoutbtn}
              onClick={onCheckout}>
              Checkout
            </MyButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
