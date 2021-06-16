import React from "react";
import {
  MyMultilineInput,
  MyTextInput,
} from "../../../../Design/FormFieldComponent";
import { MyButtonComponent } from "../../../../Design/MyButtonComponent";

import { AddressFormStyles } from "../CSS/AddressFormStyles";

const AddressForm = ({ onChange, onSubmit }) => {
  const classes = AddressFormStyles();

  return (
    <div className="addressFormDiv">
      <form id="add-address" onSubmit={onSubmit}>
        <div class={classes.addressInputContainer}>
          <div className="field">
            <MyTextInput name="fullName" label="Full Name" />
          </div>
          <div className="field">
            <MyTextInput name="phoneNumber" label="Phone Number" />
          </div>
        </div>
        <div className={classes.addressInputContainer}>
          <div className="field">
            <MyTextInput name="pincode" label="Pincode" />
          </div>
          <div className="field">
            <MyTextInput name="state" label="State" />
          </div>
        </div>
        <div class={classes.addressInputContainer}>
          <div className="field">
            <MyTextInput name="city" label="City" />
          </div>
          <div className="field">
            <MyTextInput name="HouseNo" label="House No." />
          </div>
        </div>

        <div class={classes.addressInputContainer}>
          <MyMultilineInput
            name="area"
            label="Area"
            rows={4}
            variant="outlined"
          />
          <MyMultilineInput
            name="landmark"
            label="Add Nearby / Landmark"
            rows={4}
            variant="outlined"
          />
        </div>
        <div className={classes.SaveAddressbtnDiv}>
          <MyButtonComponent color="secondary" variant="contained">
            Save Delivery Address
          </MyButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
