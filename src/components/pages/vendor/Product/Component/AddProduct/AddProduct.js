import React, { useEffect, useState } from "react";
// import Dropzone from "react-dropzone";
import { useMutation } from "@apollo/client";
import {
  MyTextInput,
  MyMultilineInput,
} from "../../../../../Design/FormFieldComponent";

import { MyButtonComponent } from "../../../../../Design/MyButtonComponent";
import { MyTypography } from "../../../../../Design/MyTypography";
import {
  addProductMutation,
  updateProductMutation,
} from "../../../../../../queries/Product/productMutations";

const AddProduct = ({ current, setCurrent }) => {
  const [addProduct, { data: addProductData }] =
    useMutation(addProductMutation);
  console.log(addProductData);

  const [updateProduct, { data: updateProductData }] = useMutation(
    updateProductMutation
  );

  const [productFormData, setProductFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
  });

  const { productName, productDescription, productPrice } = productFormData;
  console.log(productFormData);

  useEffect(() => {
    if (current !== null) {
      setProductFormData(current);
    } else {
      setProductFormData({
        productName: "",
        productDescription: "",
        productPrice: "",
      });
    }
  }, [current]);

  const onChange = (e) => {
    setProductFormData({
      ...productFormData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    console.log(productFormData);

    if (!current) {
      addProduct({
        variables: {
          productName: productFormData.productName,
          productDescription: productFormData.productDescription,
          productPrice: Number(productFormData.productPrice),
        },
      });
    } else {
      // console.log(productFormData);
      updateProduct({
        variables: {
          productID: productFormData.id,
          productName: productFormData.productName,
          productDescription: productFormData.productDescription,
          productPrice: Number(productFormData.productPrice),
        },
      });
    }

    setProductFormData({
      productName: "",
      productDescription: "",
      productPrice: "",
    });

    setCurrent(null);

    e.preventDefault();
  };

  return (
    <div>
      <MyTypography variant="h4" component="h6" style={{ textAlign: "center" }}>
        {!current ? "Add Product" : "Edit Product"}
      </MyTypography>
      <form id="add-Product" onSubmit={onSubmit}>
        <div className="field">
          <MyTextInput
            name="productName"
            onChange={onChange}
            value={productName}
            type="text"
            label="Product Name"
          />
        </div>
        <div className="field">
          <MyMultilineInput
            rows={3}
            variant="outlined"
            name="productDescription"
            value={productDescription}
            onChange={onChange}
            label="Product Description"
            type="text"
          />
        </div>
        <div className="field">
          <MyTextInput
            name="productPrice"
            value={productPrice}
            onChange={onChange}
            label="Product Price"
            type="text"
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <MyButtonComponent type="submit" variant="contained" color="primary">
            {!current ? "Add Product" : "Edit Product"}
          </MyButtonComponent>
        </div>
        <div style={{ textAlign: "center", margin: "10px" }}>
          <MyButtonComponent
            onClick={() => {
              setCurrent(null);
            }}
            variant="contained"
            color="secondary">
            Clear
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
