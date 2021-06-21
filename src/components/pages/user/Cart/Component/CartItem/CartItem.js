import React, { useEffect, useState } from "react";
import { MyCardMedia } from "../../../../../Design/MyCardComponents/CardMedia";
import { MyTypography } from "../../../../../Design/MyTypography";
import { MyButtonComponent } from "../../../../../Design/MyButtonComponent";
import { MyPaper } from "../../../../../Design/MyPaper";
import { CartItemStyles } from "../../CSS/CartItemStyles";

const CartItem = ({ cartItemData, setQuantityById }) => {
  const classes = CartItemStyles();

  const { id, productName, productPrice, productDescription, quantity } =
    cartItemData;

  const [quantityCount, setQuantityCount] = useState(quantity);

  useEffect(() => {
    //eslint
    if (quantityCount > 0) {
      setQuantityById(id, quantityCount);
    }
  }, [quantityCount]);

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
            {productName}
          </MyTypography>
          <MyTypography variant="body1" component="p">
            {productDescription}
          </MyTypography>
          <MyTypography variant="h6" component="h6">
            Price - ₹{productPrice}
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
            disabled={quantityCount <= 1 && true}
            onClick={(e) => {
              setQuantityCount(quantityCount - 1);
            }}
            className={classes.quantityButton}>
            -
          </MyButtonComponent>

          <input
            className={classes.quantityInput}
            value={quantityCount}
            // onChange={(e) => {
            //   setQuantityCount(Number(e.target.value));
            // }}
          />

          <MyButtonComponent
            variant="contained"
            color="primary"
            onClick={(e) => {
              setQuantityCount(quantityCount + 1);
            }}
            className={classes.quantityButton}>
            +
          </MyButtonComponent>
        </div>
      </div>
    </MyPaper>
  );
};

export default CartItem;
