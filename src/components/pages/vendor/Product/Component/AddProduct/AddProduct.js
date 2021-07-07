import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import {
  MyTextInput,
  MyMultilineInput,
} from "../../../../../Design/MyFormFieldComponent";
import { MyButtonComponent } from "../../../../../Design/MyButtonComponent";
import { MyTypography } from "../../../../../Design/MyTypography";
import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
} from "../../../../../../queries/Product/productMutations";
import {
  getProductsQuery,
  GET_ALL_PRODUCTS,
} from "../../../../../../queries/Product/productQueries";

const AddProduct = ({ current, setCurrent }) => {
  const [productFormData, setProductFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
  });
  const { productName, productDescription, productPrice } = productFormData;

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

  const [addProduct, { data: addProductData }] = useMutation(ADD_PRODUCT);

  const [updateProduct, { data: updateProductData }] =
    useMutation(UPDATE_PRODUCT);

  const onChange = (e) => {
    setProductFormData({
      ...productFormData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    if (!current) {
      addProduct({
        variables: {
          productName: productFormData.productName,
          productDescription: productFormData.productDescription,
          productPrice: Number(productFormData.productPrice),
        },
        // addProduct is the data which comes in response to mutation, with same name as the mutation
        update: (cache, { data: { addProduct } }) => {
          const data = cache.readQuery({ query: GET_ALL_PRODUCTS });
          // need to newData var because we need to add a
          // new instance of all data , we can not use data var direclty
          let dataToUpdate = data.getAllProducts;
          dataToUpdate = [...dataToUpdate, addProduct];
          cache.writeQuery({
            query: GET_ALL_PRODUCTS,
            data: { ...data, getAllProducts: { dataToUpdate } },
          });
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
