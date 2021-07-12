import React, { useEffect, useState } from "react";
import { MyCardMedia } from "../../../../../Design/MyCardComponents";
import { MyButtonComponent } from "../../../../../Design/MyButtonComponent";
import { MyTypography } from "../../../../../Design/MyTypography";
import { makeStyles } from "../../../../../Design/MyUseStyles";
import { MyGridContainer, MyGridItem } from "../../../../../Design/MyGrid";
import { ProductDetailsStyles } from "../../CSS/ProductDetailsStyles";
import { UPDATE_CART_QUANTITY } from "../../../../../../queries/Cart/cartMutations";
import { useMutation } from "@apollo/client";

const MultipleProductDetails = ({ productData }) => {
  const classes = ProductDetailsStyles();
  const { quantity, id: cartID, productID } = productData; // this is cart data, that is why it have quantity

  const [quantityCount, setQuantityCount] = useState(quantity);

  // mutation to chaning the quantity of cart item
  const [
    updateCartQuantity,
    { error: updateError, loading: updateLoading, data: updateCartData },
  ] = useMutation(UPDATE_CART_QUANTITY);

  /**
   * This function is called from useEffect when we change the quantity of the item
   * @param {string} id -an ID- The id of the cart Item.
   * @param {string} quantity - New updated Quantity of the cart item
   */
  const setQuantityById = (cartID, quantity) => {
    updateCartQuantity({
      variables: {
        cartID: cartID,
        quantity: quantity,
      },
    });
  };

  useEffect(() => {
    //eslint
    if (quantityCount > 0 && quantityCount != "") {
      setQuantityById(cartID, quantityCount);
    }
  }, [quantityCount]);

  return (
    <div className={classes.productDiv}>
      <MyGridContainer
        justify="center"
        spacing={2}
        style={{ border: "1px solid black" }}>
        <MyGridItem xs={12} sm={6} md={4}>
          <MyCardMedia
            height="150"
            className={classes.MediaImg}
            style={{ borderRadius: "10px" }}
            title="IMAGE"
            image="https://source.unsplash.com/collection/190727/800x450"
          />
        </MyGridItem>
        <MyGridItem xs={10} sm={6} md={8}>
          <div style={{ textAlign: "center" }}>
            <MyTypography variant="h6" component="h2">
              Product Name : {productData.productName}
            </MyTypography>
            <MyTypography variant="body2" component="p">
              Description : {productData.productDescription}
            </MyTypography>
            <MyTypography variant="body1" component="p">
              Price : {productData.productPrice}
            </MyTypography>
          </div>
          <div
            className="set-quantity"
            style={{ margin: "10px 0", textAlign: "center" }}>
            <MyButtonComponent
              variant="contained"
              color="primary"
              className={classes.quantityButton}
              disabled={quantityCount <= 1 && true}
              onClick={() => {
                // setTotalQuantity(totalQuantity - 1);
              }}>
              -
            </MyButtonComponent>
            <input
              className={classes.quantityInput}
              value={quantityCount}
              onChange={(e) => {
                // setTotalQuantity(e.target.value);
              }}
            />

            <MyButtonComponent
              variant="contained"
              className={classes.quantityButton}
              onClick={() => {
                setQuantityCount(quantityCount + 1);
              }}
              color="primary">
              +
            </MyButtonComponent>
          </div>
          <div style={{ textAlign: "center" }}>
            <MyButtonComponent
              variant="contained"
              color="secondary"
              size="small">
              Remove
            </MyButtonComponent>
          </div>
        </MyGridItem>
      </MyGridContainer>
    </div>
  );
};
export default MultipleProductDetails;
