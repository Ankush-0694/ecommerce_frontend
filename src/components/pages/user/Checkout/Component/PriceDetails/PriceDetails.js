import React from "react";
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

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    color: "grey",
  },
}));

/** This component is common to the single and  multiple checkout
 *  We Separate the logic based on the quantity props.
 
 * If Quantity is false , then we need to calculate
 *  price for multiple product else for single product
 */
const PriceDetails = ({ productData, quantity, setTotalPriceOfOrder }) => {
  const classes = useStyles();

  /* Total amount for order */
  let totalPrice = 0;

  /* No of unique items in the list */
  let totalItems;

  /* Total quantity means , sum of all individual quantity */
  let totalQuantity = 0;

  /* This means that quantity has been passed from the single Product Checkout */
  if (quantity !== false) {
    totalItems = 1;
    totalQuantity = quantity;
    totalPrice = productData.productPrice * quantity;
  } else {
    /* No of product items */
    totalItems = productData.length;

    /* Need to map and sum the quantity , Hence we got the total Quantity 
      And do the same for calculating the product price
    */
    productData.map((mappedProductData) => {
      const { productPrice, quantity } = mappedProductData;

      totalQuantity += quantity;
      totalPrice = totalPrice + productPrice * quantity;
    });
  }

  /** Passed from checkout page as a props , to store price during adding order */
  setTotalPriceOfOrder(totalPrice);

  let deliveryCharge = 0;
  if (totalPrice < 500) deliveryCharge = 40;

  return (
    <div style={{ marginTop: "10px" }}>
      <MyTableContainer component={Paper}>
        <div>
          <MyTypography variant="h6" component="h6" className={classes.title}>
            Price Details
          </MyTypography>
        </div>
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
