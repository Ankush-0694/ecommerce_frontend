import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  ADD_ADDRESS,
  UPDATE_ADDRESS,
} from "../../../../../../queries/address/addressMutations";
import {
  MyMultilineInput,
  MyTextInput,
} from "../../../../../design/MyFormFieldComponent";
import { MyButtonComponent } from "../../../../../design/MyButtonComponent";
import { AddressFormStyles } from "../../CSS/AddressFormStyles";
import { emptyAddressState, useAddAddressHook } from "./useAddressHook";
import { GET_ADDRESSES_BY_CUSTOMERID } from "../../../../../../queries/address/addressQueries";
import MyAlert from "../../../../../design/MyAlert";

const AddressForm = ({ current, setCurrent }) => {
  const classes = AddressFormStyles();

  /* For Alert on Add and Update of Form */
  const [addressFormSubmitMessage, setAddressFormSubmitMessage] = useState("");

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

  const [addAddress, { data: addedAddressData }] = useMutation(ADD_ADDRESS, {
    onError: () => {},
    onCompleted: () => {
      setAddressFormSubmitMessage("Address Added Successfully !");
    },
  });

  const [updateAddress, { data: updatedAddressData }] = useMutation(
    UPDATE_ADDRESS,
    {
      onError: () => {},
      onCompleted: () => {
        setAddressFormSubmitMessage("Address Updated Successfully !");
      },
    }
  );

  // To check ,current is empty or not ,
  // if it is not then we set the form data to current
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

    // add Or update based on the current value
    if (current === null) {
      addAddress({
        variables: addressFormData,

        update: (cache, { data: addAddressData }) => {
          const data = cache.readQuery({ query: GET_ADDRESSES_BY_CUSTOMERID }); // read only data
          // need to newData var because we need to add a
          // new instance of all data , we can not use data var direclty
          let dataToUpdate = data.getAddressesByCustomerId;
          dataToUpdate = [...dataToUpdate, addAddressData];
          cache.writeQuery({
            query: GET_ADDRESSES_BY_CUSTOMERID,
            data: { ...data, getAddressesByCustomerId: { dataToUpdate } },
          });
        },
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
      {/* Success Alert Message if address is added or updated
       * Clearing the state after alert get closed to showing alert again
       */}

      {addressFormSubmitMessage && (
        <MyAlert type="success" stateToClear={setAddressFormSubmitMessage}>
          {addressFormSubmitMessage}
        </MyAlert>
      )}

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
        {/* button to add or update the delivery address */}
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
            {/**  if update State then show cancel */}
            {!current ? "Clear" : "Cancel Update"}
          </MyButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
