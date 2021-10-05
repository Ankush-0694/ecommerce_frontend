import React, { Fragment, useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_CART_BY_CUSTOMERID } from "../../../../queries/Cart/cartQueries";
import CartItem from "./Component/CartItem/CartItem";
import CartPriceDetails from "./Component/CartPriceDetails/CartPriceDetails";
import { CartStyles } from "./CSS/CartStyles";
import { MyButtonComponent } from "../../../design/MyButtonComponent";
import ShowError from "../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../layout/LoadingComponent/ShowLoading";
import MyDivider from "../../../design/MyDivider";
import { MyPaper } from "../../../design/MyPaper";
import emptyCartSvg from "../../../layout/IMAGES/emptyCart3.png";
import { DELETE_CART_BY_CUSTOMERID } from "../../../../queries/Cart/cartMutations";

const Cart = ({ history }) => {
  const classes = CartStyles();

  //to Get data from cart
  const {
    error: getCartError,
    loading: getCartLoading,
    data: getCartData,
  } = useQuery(GET_CART_BY_CUSTOMERID, {
    onError: () => {},
  });

  const [clearCartByCustomerId] = useMutation(DELETE_CART_BY_CUSTOMERID, {
    refetchQueries: [{ query: GET_CART_BY_CUSTOMERID }],
  });

  if (getCartError) {
    return <ShowError>Error while Fetching Cart</ShowError>;
  }

  if (getCartLoading) {
    return <ShowLoading />;
  }

  // storing cartData array // this data will be render
  const cartData = getCartData.getCartByCustomerId;

  //No of product
  let itemCount = 0;
  itemCount = cartData.length;

  /**
   * calculating total price (there will be different quantity for every product
   */
  let totalPrice = 0;
  const cartItems = cartData;

  // calcualting the total Price to show cart price Details
  cartItems.forEach((mappedItem) => {
    totalPrice += mappedItem.productData.productPrice * mappedItem.quantity;
  });

  /** redirect to checkout after mapping the product ID array
   * If there is no use product id array in the checkout multiple then must remove it
   */
  const onCheckout = (e) => {
    e.preventDefault();
    let productIDArray = [];
    cartData.map((cartDataItem) => {
      productIDArray.push(cartDataItem.productData.productID);
    });
    history.push({
      pathname: `/checkout`,
      state: [...productIDArray],
    });
  };

  // Clear All by User id Mutation
  const onClearCart = (e) => {
    e.preventDefault();
    clearCartByCustomerId();
  };

  return (
    <div>
      {/* Heading */}
      <div>
        <h3 className={classes.cartHeading}>MY CART</h3>
        <MyDivider />
      </div>

      {/* Cart Data Map */}
      <div>
        {cartData.length > 0 ? (
          <div className={classes.cartContainer}>
            {/* Cart Product List - Left Side */}
            <MyPaper className={classes.item1}>
              <div className={classes.productHeadingContainer}>
                <div className={classes.productHeading}>
                  Products ( {itemCount} items )
                </div>
                <div className={classes.clearAllBtnDiv}>
                  <MyButtonComponent
                    onClick={onClearCart}
                    color="secondary"
                    variant="contained"
                    size="small">
                    Clear All
                  </MyButtonComponent>
                </div>
              </div>

              <MyDivider />

              {cartData.map((cartItemData) => {
                return (
                  <Fragment key={cartItemData.id}>
                    <CartItem cartItemData={cartItemData} />
                    <MyDivider />
                  </Fragment>
                );
              })}
            </MyPaper>

            {/* Cart Price Details - Right Side */}

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
        ) : (
          <div>
            <div className={classes.EmptyCart}>
              {/* Showing Cart Empty if there is no item in the cart */}
              <div>
                <p
                  style={{
                    fontSize: "40px",
                    textAlign: "center",
                    padding: "20px",
                  }}>
                  Your Cart is Empty
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
