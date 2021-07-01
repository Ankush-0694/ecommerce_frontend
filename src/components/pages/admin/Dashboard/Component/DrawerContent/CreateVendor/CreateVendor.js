import React, { useEffect, useState } from "react";
// import Dropzone from "react-dropzone";
import { useMutation } from "@apollo/client";
import {
  MyTextInput,
  MyMultilineInput,
} from "../../../../../../Design/FormFieldComponent";

import { MyButtonComponent } from "../../../../../../Design/MyButtonComponent";
import { MyTypography } from "../../../../../../Design/MyTypography";
import { MyFullScreenBox } from "../../../../../../Design/FullScreenBox";

const CreateVendor = () => {
  const [vendorDetails, setVendorDetails] = useState({
    email: "",
  });
  const { email } = vendorDetails;

  const onChange = (e) => {
    setVendorDetails({
      ...vendorDetails,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    // console.log(vendorDetails);

    setVendorDetails({
      email: "",
    });
    e.preventDefault();
  };

  return (
    <div>
      <MyFullScreenBox display="flex" width="100%" height="90vh">
        <div style={{ margin: "auto", width: "60%" }}>
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
                {/* <div className="field">
                  <MyMultilineInput
                    rows={3}
                    variant="outlined"
                    name="productDescription"
                    value={productDescription}
                    onChange={onChange}
                    label="Product Description"
                    type="text"
                  />
                </div> */}
                {/* <div className="field">
                  <MyTextInput
                    name="productPrice"
                    value={productPrice}
                    onChange={onChange}
                    label="Product Price"
                    type="text"
                  />
                </div> */}
                <div style={{ textAlign: "center" }}>
                  <MyButtonComponent
                    type="submit"
                    variant="contained"
                    color="primary">
                    Create Vendor
                  </MyButtonComponent>
                </div>
                <div style={{ textAlign: "center", margin: "10px" }}>
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

// const onDrop = (file) => {
//   console.log(file);
//   // uploadFile({
//   //   variables: {
//   //     file: file,
//   //   },
//   // });
// };
// const imageUpload = (e) => {
//   console.log(e.target.files);
// };
// {
//   /* <Dropzone onDrop={onDrop}>
//             {({ getRootProps, getInputProps }) => (
//               <section>
//                 <div {...getRootProps()}>
//                   <input {...getInputProps()} />
//                   <p>Drag 'n' drop some files here, or click to select files</p>
//                 </div>
//               </section>
//             )}
//           </Dropzone> */
// }
// {
//   /* <input type="file" onChange={imageUpload} /> */
// }
