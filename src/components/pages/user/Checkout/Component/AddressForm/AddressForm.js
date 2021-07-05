import { useMutation } from "@apollo/client";
import React, { useEffect } from "react";
import {
  ADD_ADDRESS,
  UPDATE_ADDRESS,
} from "../../../../../../queries/address/addressMutations";
import {
  MyMultilineInput,
  MyTextInput,
} from "../../../../../Design/MyFormFieldComponent";
import { MyButtonComponent } from "../../../../../Design/MyButtonComponent";
import { AddressFormStyles } from "../../CSS/AddressFormStyles";
import { emptyAddressState, useAddAddressHook } from "./useAddressHook";

const AddressForm = ({ current, setCurrent }) => {
  const classes = AddressFormStyles();
  const { addressFormData, setAddressFormData } = useAddAddressHook();

  const {
    fullName,
    phoneNumber,
    pincode,
    state,
    city,
    HouseNo,
    area,
    landmark,
  } = addressFormData;

  const [addAddress, { data: addAddressData }] = useMutation(ADD_ADDRESS);
  const [updateAddress, { data: updateAddressData }] =
    useMutation(UPDATE_ADDRESS);

  useEffect(() => {
    if (current !== null) {
      setAddressFormData(current);
    } else {
      setAddressFormData(emptyAddressState);
    }
  }, [current]);

  const onChange = (e) => {
    let value = e.target.value;

    setAddressFormData({
      ...addressFormData,
      [e.target.name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    /////change of types of values in address object

    addressFormData["pincode"] = Number(addressFormData["pincode"]);
    addressFormData["phoneNumber"] = Number(addressFormData["phoneNumber"]);

    ////change of types of values in address object
    if (current === null) {
      addAddress({
        variables: addressFormData,
      });
    } else {
      updateAddress({
        variables: addressFormData,
      });
    }
    setAddressFormData(emptyAddressState);
    setCurrent(null);
  };

  return (
    <div className="addressFormDiv">
      <form id="add-address" onSubmit={onSubmit}>
        <div className={classes.addressInputContainer}>
          <div className="field">
            <MyTextInput
              name="fullName"
              label="Full Name"
              value={fullName}
              onChange={onChange}
            />
          </div>
          <div className="field">
            <MyTextInput
              name="phoneNumber"
              label="Phone Number"
              value={phoneNumber}
              onChange={onChange}
            />
          </div>
        </div>
        <div className={classes.addressInputContainer}>
          <div className="field">
            <MyTextInput
              name="pincode"
              label="Pincode"
              value={pincode}
              onChange={onChange}
            />
          </div>
          <div className="field">
            <MyTextInput
              name="state"
              label="State"
              value={state}
              onChange={onChange}
            />
          </div>
        </div>
        <div className={classes.addressInputContainer}>
          <div className="field">
            <MyTextInput
              name="city"
              label="City"
              value={city}
              onChange={onChange}
            />
          </div>
          <div className="field">
            <MyTextInput
              name="HouseNo"
              label="House No."
              value={HouseNo}
              onChange={onChange}
            />
          </div>
        </div>

        <div className={classes.addressInputContainer}>
          <MyMultilineInput
            name="area"
            label="Area"
            value={area}
            rows={4}
            variant="outlined"
            onChange={onChange}
          />
          <MyMultilineInput
            name="landmark"
            label="Add Nearby / Landmark"
            value={landmark}
            rows={4}
            variant="outlined"
            onChange={onChange}
          />
        </div>
        <div className={classes.SaveAddressbtnDiv}>
          <MyButtonComponent
            type="submit"
            color="secondary"
            variant="contained">
            {!current ? "Save Delivery Address" : "Update Delivery Address"}
          </MyButtonComponent>
        </div>
        <div className={classes.SaveAddressbtnDiv}>
          <MyButtonComponent
            onClick={() => {
              setAddressFormData(emptyAddressState);
              setCurrent(null);
            }}
            color="secondary"
            variant="contained">
            Clear
          </MyButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
