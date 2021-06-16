import React from "react";
import { MyGridItem } from "../../../../Design/MyGrid";
import { MyHomeIcon } from "../../../../Design/MyIcons";
import { MyTypography } from "../../../../Design/MyTypography";
import { AddressListStyles } from "../CSS/AddressListStyles";

const AddressList = ({ data }) => {
  const classes = AddressListStyles();
  const { fullName, city, state } = data;

  return (
    <MyGridItem xs={12}>
      <hr></hr>
      <div style={{ float: "left", padding: "0px 10px" }}>
        <MyHomeIcon />
      </div>
      <div className={classes.addressDetails}>
        <MyTypography variant="body1" component="p">
          {fullName}
        </MyTypography>
        <MyTypography variant="body2" component="p">
          Address - {city} {" , "}
          {state}
        </MyTypography>
      </div>
    </MyGridItem>
  );
};

export default AddressList;
