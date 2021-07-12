import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { MyGridContainer, MyGridItem } from "../../../Design/MyGrid";
import { MyTypography } from "../../../Design/MyTypography";
import AddressForm from "./Component/AddressForm/AddressForm";
import AddressList from "./Component/AddressList/AddressList";
import { CheckoutStyles } from "./CSS/CheckoutStyles";
import { GET_ALL_ADDRESS } from "../../../../queries/address/addressQueries";

const AddressContainer = (props) => {
  const classes = CheckoutStyles();
  const [current, setCurrent] = useState(null); // to know the form state is add or update
  const {
    error: getAddressError,
    loading: getAddressLoading,
    data: addressData,
  } = useQuery(GET_ALL_ADDRESS);

  if (getAddressError) {
    return <div>Error while Fetching addresses</div>;
  }
  if (getAddressLoading) {
    return <div>Loading Adresses...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      {/* Delivery Address List  */}

      <MyGridContainer justify="center">
        <MyGridItem xs={10}>
          <div style={{ border: "1px solid black" }}>
            <div className={classes.DeliveryAddressHeading}>
              <MyTypography variant="h4" component="h3">
                Delivery Address
              </MyTypography>
            </div>

            <div className="addressList">
              <MyGridContainer>
                {addressData.getAllAddress.map((data) => {
                  return (
                    <AddressList
                      key={data.id}
                      data={data}
                      current={current}
                      setCurrent={setCurrent}
                    />
                  );
                })}
              </MyGridContainer>
            </div>
          </div>
          <hr></hr>
        </MyGridItem>

        {/* Address Form  */}

        <MyGridItem xs={10}>
          <div style={{ border: "1px solid black" }}>
            <div className={classes.DeliveryAddressHeading}>
              <MyTypography variant="h5" component="h3">
                {!current ? "Add Delivery Address" : "Update Delivery Address"}
              </MyTypography>
            </div>
            <div className={classes.addressFromContainer}>
              <AddressForm current={current} setCurrent={setCurrent} />
            </div>
          </div>
        </MyGridItem>
      </MyGridContainer>
      <br></br>
    </div>
  );
};

export default AddressContainer;
