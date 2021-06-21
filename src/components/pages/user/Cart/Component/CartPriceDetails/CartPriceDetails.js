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

const CartPriceDetails = ({ quantity, itemCount, totalPrice }) => {
  const classes = useStyles();

  let deliveryCharge;
  if (totalPrice < 500) {
    deliveryCharge = 40;
  } else {
    deliveryCharge = 0;
  }

  return (
    <div style={{ marginTop: "10px" }}>
      <MyTableContainer component={Paper}>
        <div>
          <MyTypography variant="h6" component="h6" className={classes.title}>
            Price Details
          </MyTypography>
          <hr
            style={{
              backgroundColor: "black",
              marginBottom: "0",
            }}></hr>
        </div>
        <MyTable className={classes.table} aria-label="simple table">
          <MyTableBody>
            {/* 1st row */}

            {/* 2nd row */}

            <MyTableRow>
              <MyTableCell component="th" scope="row">
                Price({itemCount} Item)
              </MyTableCell>
              <MyTableCell align="right">{totalPrice}</MyTableCell>
            </MyTableRow>

            {/* 3rd row */}

            <MyTableRow>
              <MyTableCell component="th" scope="row">
                Delivery Charge
              </MyTableCell>
              <MyTableCell align="right">{deliveryCharge}</MyTableCell>
            </MyTableRow>

            {/* 4th row */}

            <MyTableRow>
              <MyTableCell component="th" scope="row">
                Total Amount
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
export default CartPriceDetails;
