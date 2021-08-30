import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { MyGridContainer, MyGridItem } from "../../../Design/MyGrid";
import { MyTypography } from "../../../Design/MyTypography";
import AddressForm from "./Component/AddressForm/AddressForm";
import AddressList from "./Component/AddressList/AddressList";
import { CheckoutStyles } from "./CSS/CheckoutStyles";
import { GET_ADDRESSES_BY_CUSTOMERID } from "../../../../queries/address/addressQueries";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import ShowError from "../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../layout/LoadingComponent/ShowLoading";
import { Fragment } from "react";
import MyDivider from "../../../Design/MyDivider";

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
  } = useQuery(GET_ADDRESSES_BY_CUSTOMERID);

  if (getAddressError) {
    return <ShowError>Error while Fetching addresses</ShowError>;
  }
  if (getAddressLoading) {
    return <ShowLoading>Loading Adresses...</ShowLoading>;
  }

  /* This data will be render in UI */
  const addressDataToRender = addressData.getAddressesByCustomerId;

  /** This function is used to change the value of address state id  in this component
   * Which comes from parent checkout component
   *
   * Selected address only if props are passed from parent component
   *
   * Because we are using it in My Profile Also
   */
  const handleAddressRadio = (event) => {
    /** Must compare with undefined because it checks wheither props passed or not
     *
     * Don't check with null
     */
    selectedAddress !== undefined && setSelectedAddress(event.target.value);
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
              {addressDataToRender.length > 0 ? (
                <FormControl component="fieldset" style={{ width: "100%" }}>
                  <RadioGroup
                    aria-label="address"
                    name="address1"
                    value={selectedAddress}
                    onChange={handleAddressRadio}>
                    {addressDataToRender.map((mappedData) => {
                      return (
                        <Fragment key={mappedData.id}>
                          <AddressList
                            addressData={mappedData}
                            current={current}
                            setCurrent={setCurrent}
                            selectedAddress={selectedAddress} //this is passed to remove radio button when using it MyProfile Page
                          />

                          <MyDivider />
                        </Fragment>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              ) : (
                <h3 style={{ padding: "10px" }}>No Address Found..</h3>
              )}
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
