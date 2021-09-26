import React, { useEffect, useState } from "react";
// import Dropzone from "react-dropzone";
import { useMutation } from "@apollo/client";
import {
  MyTextInput,
  MyMultilineInput,
} from "../../../../../../design/MyFormFieldComponent";

import { MyButtonComponent } from "../../../../../../design/MyButtonComponent";
import { MyTypography } from "../../../../../../design/MyTypography";
import { MyFullScreenBox } from "../../../../../../design/MyFullScreenBox";
import { CREATE_VENDOR } from "../../../../../../../queries/user/userMutations";
import MyAlert from "../../../../../../design/MyAlert";

const CreateVendor = () => {
  const [vendorDetails, setVendorDetails] = useState({
    email: "",
  });
  const { email } = vendorDetails;

  const [createVendorAlert, setCreateVendorAlert] = useState("");

  const [createVendor, { data }] = useMutation(CREATE_VENDOR, {
    onError: (error) => {
      setCreateVendorAlert({
        type: "error",
        msg: error.message,
      });
    },
    onCompleted: (data) => {
      setCreateVendorAlert({
        type: "success",
        msg: "Vendor created successfully",
      });
    },
  });

  const onChange = (e) => {
    setVendorDetails({
      ...vendorDetails,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    createVendor({
      variables: {
        email: email,
        role: "vendor",
      },
    });

    setVendorDetails({
      email: "",
    });
    e.preventDefault();
  };

  return (
    <div>
      {createVendorAlert && (
        <MyAlert type={createVendorAlert.type}>{createVendorAlert.msg}</MyAlert>
      )}
      <MyFullScreenBox display="flex" width="100%">
        <div style={{ margin: "auto", width: "50%" }}>
          <div>
            <div>
              <MyTypography
                variant="h4"
                component="h6"
                style={{ textAlign: "center" }}>
                Create Vendor
              </MyTypography>

              <form id="add-vendor" onSubmit={onSubmit}>
                <div className="field">
                  <MyTextInput
                    name="email"
                    onChange={onChange}
                    value={email}
                    type="text"
                    label="Vendor's Email"
                  />
                </div>

                <div style={{ textAlign: "center", margin: "10px" }}>
                  <MyButtonComponent
                    type="submit"
                    variant="contained"
                    color="primary">
                    Create Vendor
                  </MyButtonComponent>
                  <span style={{ margin: "10px" }}></span>
                  <MyButtonComponent
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      setVendorDetails({
                        email: "",
                      });
                    }}>
                    Clear
                  </MyButtonComponent>
                </div>
              </form>
            </div>
          </div>
        </div>
      </MyFullScreenBox>
    </div>
  );
};

export default CreateVendor;
