import React, { useState } from "react";
import { MyCardMedia } from "../../../../../Design/MyCardComponents";
import { MyButtonComponent } from "../../../../../Design/MyButtonComponent";
import { MyTypography } from "../../../../../Design/MyTypography";
import { MyGridContainer, MyGridItem } from "../../../../../Design/MyGrid";
import { ProductDetailsStyles } from "../../CSS/ProductDetailsStyles";
import { withRouter } from "react-router-dom";

/* Used to show order Summary on the Single checkout page */
const SingleProductDetails = ({
  productData,
  quantity,
  setQuantity,
  history,
}) => {
  const classes = ProductDetailsStyles();

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
              disabled={quantity <= 1 && true}
              onClick={() => {
                setQuantity(quantity - 1);
              }}>
              -
            </MyButtonComponent>
            <input
              className={classes.quantityInput}
              value={quantity}
              onChange={(e) => {
                // setTotalQuantity(e.target.value);
              }}
            />

            <MyButtonComponent
              variant="contained"
              className={classes.quantityButton}
              onClick={() => {
                setQuantity(quantity + 1);
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
export default withRouter(SingleProductDetails);
