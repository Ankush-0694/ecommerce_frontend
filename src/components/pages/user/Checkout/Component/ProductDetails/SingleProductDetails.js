import React, { useState } from "react";
import { MyCardMedia } from "../../../../../Design/MyCardComponents";
import { MyButtonComponent } from "../../../../../Design/MyButtonComponent";
import { MyTypography } from "../../../../../Design/MyTypography";
import { MyGridContainer, MyGridItem } from "../../../../../Design/MyGrid";
import { ProductDetailsStyles } from "../../CSS/ProductDetailsStyles";
import { withRouter } from "react-router-dom";
import { MyPaper } from "../../../../../Design/MyPaper";

/* Used to show order Summary on the Single checkout page */
const SingleProductDetails = ({
  productData,
  quantity,
  setQuantity,
  history,
}) => {
  const classes = ProductDetailsStyles();

  const { productDescription, productName, productPrice } = productData;

  return (
    <div className={classes.productDiv}>
      <MyPaper style={{ padding: "10px" }} elevation={5}>
        <MyGridContainer justify="center">
          <MyGridItem xs={12} sm={6} md={3}>
            <MyCardMedia
              style={{
                width: "100%",
                height: "100%",
              }}
              title="IMAGE"
              image="https://source.unsplash.com/collection/190727/800x450"
            />
          </MyGridItem>
          <MyGridItem xs={10} sm={6} md={9}>
            <div style={{ textAlign: "center" }}>
              <MyTypography variant="h6" component="h2">
                {productName}
              </MyTypography>
              <MyTypography variant="body2" component="p">
                Description : {productDescription}
              </MyTypography>
              <MyTypography variant="body1" component="p">
                Single Item Price : {productPrice}
              </MyTypography>
              {/* <MyTypography variant="body1" component="p">
              Total Price : {productPrice * quantity}
            </MyTypography> */}
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
          </MyGridItem>
        </MyGridContainer>
      </MyPaper>
    </div>
  );
};
export default withRouter(SingleProductDetails);
