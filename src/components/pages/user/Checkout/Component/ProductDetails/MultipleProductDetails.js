import React, { useEffect, useState } from "react";
import { MyCardMedia } from "../../../../../Design/MyCardComponents";
import { MyButtonComponent } from "../../../../../Design/MyButtonComponent";
import { MyTypography } from "../../../../../Design/MyTypography";
import { MyGridContainer, MyGridItem } from "../../../../../Design/MyGrid";
import { ProductDetailsStyles } from "../../CSS/ProductDetailsStyles";
import { UPDATE_CART_QUANTITY } from "../../../../../../queries/Cart/cartMutations";
import { useMutation } from "@apollo/client";
import { MyPaper } from "../../../../../Design/MyPaper";

const MultipleProductDetails = ({ cartDataProp }) => {
  const classes = ProductDetailsStyles();

  /**  This is single cart data  */
  const { quantity, id: cartID, productData } = cartDataProp;

  /** Destructuring futher productData to show the data on ui */
  const {
    id: productId,
    productName,
    productPrice,
    productImageUrl,
  } = productData;

  /**  State to show quantity on UI and when it changes , we can call updateQuantity on update */
  const [quantityCount, setQuantityCount] = useState(quantity);

  // mutation to chaning the quantity of cart item
  const [updateCartQuantity, { data: updateCartData }] = useMutation(
    UPDATE_CART_QUANTITY,
    {
      onError: () => {},
    }
  );

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

  /** Whenever quantity changes , we call the setQuantity function  */
  useEffect(() => {
    //eslint
    //setting quantity only if it is valid
    if (quantityCount > 0 && quantityCount != "") {
      setQuantityById(cartID, quantityCount);
    }
  }, [quantityCount]);

  return (
    <div className={classes.productDiv}>
      <MyPaper style={{ padding: "10px" }} elevation={5}>
        <MyGridContainer justify="center">
          <MyGridItem xs={12} sm={6} md={3}>
            <div style={{ height: "150px" }}>
              <MyCardMedia
                style={{
                  width: "100%",
                  height: "100%",
                }}
                title="IMAGE"
                image={productImageUrl}
              />
            </div>
          </MyGridItem>
          <MyGridItem xs={10} sm={6} md={9}>
            <div style={{ textAlign: "center" }}>
              <MyTypography variant="h6" component="h2">
                {productName}
              </MyTypography>

              <MyTypography variant="body1" component="p">
                Single Item Price : {productPrice}
              </MyTypography>

              <MyTypography variant="body1" component="p">
                Total Price : {productPrice * quantityCount}
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
                  setQuantityCount(quantityCount - 1);
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
          </MyGridItem>
        </MyGridContainer>
      </MyPaper>
    </div>
  );
};
export default MultipleProductDetails;
