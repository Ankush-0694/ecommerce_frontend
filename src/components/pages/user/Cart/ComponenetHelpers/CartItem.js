import React from "react";
import { MyCardMedia } from "../../../../Design/MyCardComponents/CardMedia";
import { MyPaper } from "../../../../Design/MyPaper";
import { CartItemStyles } from "../CssHelpers/CartItemStyles";

const CartItem = ({ cartItemData }) => {
  const classes = CartItemStyles();
  return (
    <MyPaper elevation={3} className={classes.cartItem}>
      <div style={{ width: "30%", padding: "10px" }}>
        <MyCardMedia
          height="100"
          className={classes.MediaImg}
          style={{ borderRadius: "10px", minWidth: "100px" }}
          title="IMAGE"
          image="https://source.unsplash.com/collection/190727/800x450"
        />
      </div>
      <div
        className={classes.cartDetails}
        style={{ margin: "10px", width: "70%" }}>
        <div>
          <div>Product Name : {cartItemData.productName}</div>
          <div>Product Description{cartItemData.productDescription}</div>
          <div>Product Price{cartItemData.productPrice}</div>
        </div>
        <div className={classes.quantityButton}>
          <button>-</button>
          <input style={{ width: "40px" }} />
          <button>+</button>
        </div>
      </div>
    </MyPaper>
  );
};

export default CartItem;
