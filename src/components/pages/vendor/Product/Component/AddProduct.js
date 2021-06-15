import React, { useState } from "react";
// import Dropzone from "react-dropzone";
import { useMutation } from "@apollo/client";
import {
  MyTextInput,
  MyMultilineInput,
} from "../../../../Design/FormFieldComponent";

import { MyButtonComponent } from "../../../../Design/MyButtonComponent";

import {
  addProductMutation,
  // uploadFileMutaion,
} from "../../../../../queries/Product/productMutations";

const AddProduct = () => {
  const [addProduct, { data }] = useMutation(addProductMutation);
  // const [uploadFile, obj] = useMutation(uploadFileMutaion);

  console.log(data);
  // console.log(obj);
  const [productFormData, setProductFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    // productImage: [],
  });

  const onChange = (e) => {
    setProductFormData({
      ...productFormData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    console.log(productFormData);
    addProduct({
      variables: {
        productName: productFormData.productName,
        productDescription: productFormData.productDescription,
        productPrice: Number(productFormData.productPrice),
      },
    });
    e.preventDefault();
  };
  return (
    <div>
      <form id="add-Product">
        <div className="field">
          <MyTextInput
            name="productName"
            onChange={onChange}
            type="text"
            label="Product Name"
          />
        </div>
        <div className="field">
          <MyMultilineInput
            rows={3}
            variant="outlined"
            name="productDescription"
            onChange={onChange}
            label="Product Description"
            type="text"
          />
        </div>
        <div className="field">
          <MyTextInput
            name="productPrice"
            onChange={onChange}
            label="Product Price"
            type="text"
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <MyButtonComponent variant="contained" color="primary">
            Add Product
          </MyButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;

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
