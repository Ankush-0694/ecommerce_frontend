import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { useMutation } from "@apollo/client";
import {
  addProductMutation,
  uploadFileMutaion,
} from "../../../../queries/Product/productMutations";

const Products = () => {
  const [addProduct, { data }] = useMutation(addProductMutation);
  const [uploadFile, obj] = useMutation(uploadFileMutaion);

  console.log(data);
  console.log(obj);

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

  const onSubmit = (e) => {
    console.log(productFormData);
    addProduct({
      variables: {
        productName: productFormData.productName,
        productDescription: productFormData.productDescription,
        productPrice: Number(productFormData.productPrice),
      },
      //   refetchQueries: [{ query: getBooksQuery }],
    });
    e.preventDefault();
  };

  return (
    <div>
      <form id="add-Product" onSubmit={onSubmit}>
        <div className="field">
          <label>Product name:</label>
          <input name="productName" onChange={onChange} type="text" />
        </div>
        <div className="field">
          <label>Product Description</label>
          <input name="productDescription" onChange={onChange} type="text" />
        </div>
        <div className="field">
          <label>Product Price</label>
          <input name="productPrice" onChange={onChange} type="text" />
        </div>
        <div className="field">
          <label>Product Image</label>
          {/* <Dropzone onDrop={onDrop}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </section>
            )}
          </Dropzone> */}
          {/* <input type="file" onChange={imageUpload} /> */}
        </div>

        <button>+</button>
      </form>
    </div>
  );
};

export default Products;
