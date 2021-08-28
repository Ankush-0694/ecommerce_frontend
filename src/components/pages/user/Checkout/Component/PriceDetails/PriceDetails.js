import React, { useEffect } from "react";
import { MyTypography } from "../../../../../Design/MyTypography";
import { makeStyles } from "../../../../../Design/MyUseStyles";
import { Paper } from "@material-ui/core";
import {
  MyTable,
  MyTableBody,
  MyTableCell,
  MyTableContainer,
  MyTableRow,
} from "../../../../../Design/MyTableComponents";
import MyDivider from "../../../../../Design/MyDivider";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    color: "grey",
    padding: "5px 0px",
  },
}));

/** This component is common to the single and  multiple checkout
 *  We Separate the logic based on the quantity props.
 
 * If Quantity is false (it means we are using for multiple) , then we need to calculate
 *  price for multiple product else for single product
 */
const PriceDetails = ({
  productDataProp, // this is coming from checkout multiple ((null for checkout Multiple))
  cartDataProp, //this is coming from checkout multiple (null for checkout single)
  quantityProp,
  setTotalPriceOfOrder,
}) => {
  const classes = useStyles();

  /* Total amount for order */
  let totalPrice = 0;

  /* No of unique items in the list */
  let totalItems;

  /* Total quantity means , sum of all individual quantity */
  let totalQuantity = 0;

  /* This means that quantity has been passed from the single Product Checkout */
  if (quantityProp !== false) {
    totalItems = 1;
    totalQuantity = quantityProp;
    totalPrice = productDataProp.productPrice * quantityProp;
  }

  //this means we are calculating for checkout Multiple (checkout multiple sending cartData as a prop with name of productData)
  else {
    /* No of product items */
    totalItems = cartDataProp.length;

    /* Need to map and sum the quantity , Hence we got the total Quantity 
      And do the same for calculating the product price
    */
    cartDataProp.map((mappedCartData) => {
      const { quantity, productData } = mappedCartData;

      const { productPrice } = productData;

      totalQuantity += quantity;
      totalPrice += productPrice * quantity;
    });
  }

  /** Passed from checkout page as a props , to store price during adding order
   *
   * Using useEffect to prevent Error
   */

  useEffect(() => {
    setTotalPriceOfOrder(totalPrice);
  }, [totalPrice]);

  let deliveryCharge = 0;
  if (totalPrice < 500) deliveryCharge = 40;

  return (
    <div>
      <MyTableContainer component={Paper}>
        <div>
          <MyTypography variant="h6" component="h6" className={classes.title}>
            Price Details
          </MyTypography>
        </div>
        <MyDivider />
        <MyTable className={classes.table} aria-label="simple table">
          <MyTableBody>
            {/* 1st row */}

            {/* 2nd row */}

            <MyTableRow>
              <MyTableCell component="th" scope="row">
                Price({totalItems} Item)
              </MyTableCell>
              <MyTableCell align="right">{totalPrice}</MyTableCell>
            </MyTableRow>

            {/* 3rd row */}

            <MyTableRow>
              <MyTableCell component="th" scope="row">
                Total Quantity
              </MyTableCell>
              <MyTableCell align="right">{totalQuantity}</MyTableCell>
            </MyTableRow>

            {/* 4th row */}

            <MyTableRow>
              <MyTableCell component="th" scope="row">
                Delivery Charge
              </MyTableCell>
              <MyTableCell align="right">{deliveryCharge}</MyTableCell>
            </MyTableRow>

            {/* 5th row */}

            <MyTableRow>
              <MyTableCell component="th" scope="row">
                Total Price
              </MyTableCell>
              <MyTableCell align="right">
                {totalPrice + deliveryCharge}
              </MyTableCell>
            </MyTableRow>
          </MyTableBody>
        </MyTable>
      </MyTableContainer>
    </div>
  );
};
export default PriceDetails;

// <List>
//   <ListItem>
//     <ListItemText primary="Single-line item" />
//   </ListItem>
//   <ListItemSecondaryAction>
//     <ListItemText primary="Single-line item" />
//   </ListItemSecondaryAction>
// </List>;
