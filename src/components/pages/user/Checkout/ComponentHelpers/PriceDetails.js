import React from "react";
import { MyTypography } from "../../../../Design/MyTypography";
import { makeStyles } from "../../../../Design/MyUseStyles";
import { Paper } from "@material-ui/core";
import {
  MyTable,
  MyTableBody,
  MyTableCell,
  MyTableContainer,
  MyTableRow,
} from "../../../../Design/MyTableComponents";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    color: "grey",
  },
}));

const PriceDetails = ({ productPrice, quantity }) => {
  const classes = useStyles();

  let totalPrice = productPrice * quantity;
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
        </div>
        <MyTable className={classes.table} aria-label="simple table">
          <MyTableBody>
            {/* 1st row */}

            {/* 2nd row */}

            <MyTableRow>
              <MyTableCell component="th" scope="row">
                Price(1 Item)
              </MyTableCell>
              <MyTableCell align="right">{productPrice}</MyTableCell>
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
