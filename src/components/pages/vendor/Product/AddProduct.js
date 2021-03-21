import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { addProductMutation } from "../../../../queries/queries";

const Products = () => {
  const [addProduct, { data }] = useMutation(addProductMutation);
  console.log(data);

  const [productFormData, setProductFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
  });

  const onchange = (e) => {
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
      //   refetchQueries: [{ query: getBooksQuery }],
    });
    e.preventDefault();
  };

  return (
    <div>
      <form id="add-Product" onSubmit={onSubmit}>
        <div className="field">
          <label>Product name:</label>
          <input name="productName" onChange={onchange} type="text" />
        </div>
        <div className="field">
          <label>Product Description</label>
          <input name="productDescription" onChange={onchange} type="text" />
        </div>
        <div className="field">
          <label>Product Price</label>
          <input name="productPrice" onChange={onchange} type="text" />
        </div>
        <button>+</button>
      </form>
    </div>
  );
};

export default Products;
