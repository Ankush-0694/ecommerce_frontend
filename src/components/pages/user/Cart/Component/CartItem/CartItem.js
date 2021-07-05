import React, { useEffect, useState } from "react";
import { MyCardMedia } from "../../../../../Design/MyCardComponents";
import { MyTypography } from "../../../../../Design/MyTypography";
import { MyButtonComponent } from "../../../../../Design/MyButtonComponent";
import { MyPaper } from "../../../../../Design/MyPaper";
import { CartItemStyles } from "../../CSS/CartItemStyles";
import { updateCartQuantityMutation } from "../../../../../../queries/Cart/cartMutations";
import { useMutation } from "@apollo/client";

const CartItem = ({ cartItemData }) => {
  const classes = CartItemStyles();

  const { id, productName, productPrice, productDescription, quantity } =
    cartItemData;

  const [quantityCount, setQuantityCount] = useState(quantity);

  // mutation to chaning the quantity of cart item
  const [
    updateCartQuantity,
    { error: updateError, loading: updateLoading, data: updateCartData },
  ] = useMutation(updateCartQuantityMutation);

  //updating quantity to the cart
  const setQuantityById = (id, quantity) => {
    updateCartQuantity({
      variables: {
        cartID: id,
        quantity: quantity,
      },
    });
  };

  useEffect(() => {
    //eslint
    if (quantityCount > 0 && quantityCount != "") {
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
            // for doing onChange we need to handle the situation when input is empty,
            // we need to make sure that req does not send to server if input is empty
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
