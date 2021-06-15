import React from "react";
import { useQuery } from "@apollo/client";
import { getCartQuery } from "../../../../queries/Product/productQueries";
import CartItem from "./ComponentHelpers/CartItem";
import CartPriceDetails from "./ComponentHelpers/CartPriceDetails";
import { CartStyles } from "./CssHelpers/CartStyles";
import { MyButtonComponent } from "../../../Design/MyButtonComponent";

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
          <h3 className={classes.productHeading}>Products</h3>

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
          <CartPriceDetails />
          <div className={classes.placeOrder}>
            <MyButtonComponent
              color="primary"
              variant="contained"
              fullWidth
              className={classes.placeOrderbtn}>
              Place Order
            </MyButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
