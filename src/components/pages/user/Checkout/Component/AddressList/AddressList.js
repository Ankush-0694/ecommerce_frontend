import React from "react";
import { MyGridItem } from "../../../../../Design/MyGrid";
import { MyHomeIcon } from "../../../../../Design/MyIcons";
import { MyTypography } from "../../../../../Design/MyTypography";
import { MyButtonComponent } from "../../../../../Design/MyButtonComponent";
import { AddressListStyles } from "../../CSS/AddressListStyles";
import { useMutation } from "@apollo/client";
import { DELETE_ADDRESS } from "../../../../../../queries/address/addressMutations";

const AddressList = ({ data, current, setCurrent }) => {
  const classes = AddressListStyles();
  const {
    id,
    fullName,
    phoneNumber,
    pincode,
    state,
    city,
    HouseNo,
    area,
    landmark,
  } = data;

  const [deleteAddress, { data: deleteAddressData }] =
    useMutation(DELETE_ADDRESS);

  console.log(deleteAddressData);

  return (
    <>
      <MyGridItem xs={8}>
        <hr></hr>
        <div style={{ float: "left", padding: "0px 10px" }}>
          <MyHomeIcon />
        </div>
        <div style={{ float: "right", padding: "0px 10px" }}>
          <MyButtonComponent
            onClick={() => {
              setCurrent(data);
              window.scroll({
                top: document.body.offsetHeight,
                left: 0,
                behavior: "smooth",
              });
            }}
            color="primary"
            className={classes.EditBtn}>
            Edit
          </MyButtonComponent>
          <MyButtonComponent
            onClick={() => {
              deleteAddress({
                variables: {
                  id,
                },
              });
              setCurrent(null);
            }}
            color="secondary"
            className={classes.EditBtn}>
            Delete
          </MyButtonComponent>
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
        <div className={classes.deliverHereBtnDiv}>
          <MyButtonComponent
            variant="outlined"
            color="secondary"
            className={classes.deliverBtn}>
            Deliver Here
          </MyButtonComponent>
        </div>
      </MyGridItem>
    </>
  );
};

export default AddressList;
