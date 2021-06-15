import React from "react";
import { MyCardMedia } from "../../../../Design/MyCardComponents/CardMedia";
import { MyTypography } from "../../../../Design/MyTypography";
import { MyButtonComponent } from "../../../../Design/MyButtonComponent";
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
          <MyTypography variant="h6" component="h6">
            {" "}
            {cartItemData.productName}
          </MyTypography>
          <MyTypography variant="body1" component="p">
            {cartItemData.productDescription}
          </MyTypography>
          <MyTypography variant="h6" component="h6">
            Price - ₹{cartItemData.productPrice}
          </MyTypography>
          <div>
            <MyButtonComponent
              variant="contained"
              color="secondary"
              size="small"
              className={classes.remove_btn}>
              Remove
            </MyButtonComponent>
          </div>
        </div>
        <div className={classes.quantityButtonDiv}>
          <MyButtonComponent
            variant="contained"
            color="primary"
            style={{ outline: "none" }}
            className={classes.quantityButton}>
            -
          </MyButtonComponent>

          <input className={classes.quantityInput} value={1} />

          <MyButtonComponent
            variant="contained"
            color="primary"
            className={classes.quantityButton}>
            +
          </MyButtonComponent>
        </div>
      </div>
    </MyPaper>
  );
};

export default CartItem;
