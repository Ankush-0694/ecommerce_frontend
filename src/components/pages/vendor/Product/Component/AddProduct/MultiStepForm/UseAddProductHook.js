import React, { useState } from "react";

const useAddProductHook = () => {
  const [productFormData, setProductFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productSubCategory: "",
    productBrand: "",
  });
  return { productFormData, setProductFormData };
};

const emptyProductState = {
  productName: "",
  productDescription: "",
  productPrice: "",
  productSubCategory: "",
  productBrand: "",
};

export { useAddProductHook, emptyProductState };
