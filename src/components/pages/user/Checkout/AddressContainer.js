import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { MyGridContainer, MyGridItem } from "../../../Design/MyGrid";
import { MyTypography } from "../../../Design/MyTypography";
import AddressForm from "./Component/AddressForm/AddressForm";
import AddressList from "./Component/AddressList/AddressList";
import { CheckoutStyles } from "./CSS/CheckoutStyles";
import { GET_ALL_ADDRESS } from "../../../../queries/address/addressQueries";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import ShowError from "../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../layout/LoadingComponent/ShowLoading";

/* This is common for single and multiple checkout , 
And contains the address Form and address list */
const AddressContainer = (props) => {
  const classes = CheckoutStyles();

  const [current, setCurrent] = useState(null); // to know the form state is add or update

  /* need to set Address id in this state to before placing the order */
  const { selectedAddress, setSelectedAddress } = props;

  const {
    error: getAddressError,
    loading: getAddressLoading,
    data: addressData,
  } = useQuery(GET_ALL_ADDRESS);

  if (getAddressError) {
    return <ShowError>Error while Fetching addresses</ShowError>;
  }
  if (getAddressLoading) {
    return <ShowLoading>Loading Adresses...</ShowLoading>;
  }

  /* This data will be render in UI */
  const addressDataToRender = addressData.getAllAddress;

  /** This function is used to change the value of address state id  in this component
   * Which comes from parent checkout component
   */
  const handleAddressRadio = (event) => {
    setSelectedAddress(event.target.value);
  };

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

            <div className="addressList" style={{ marginLeft: "10px" }}>
              <FormControl component="fieldset" style={{ width: "100%" }}>
                <RadioGroup
                  aria-label="address"
                  name="address1"
                  value={selectedAddress}
                  onChange={handleAddressRadio}>
                  {addressDataToRender.map((data) => {
                    return (
                      <AddressList
                        key={data.id}
                        data={data}
                        current={current}
                        setCurrent={setCurrent}
                      />
                    );
                  })}
                </RadioGroup>
              </FormControl>
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
