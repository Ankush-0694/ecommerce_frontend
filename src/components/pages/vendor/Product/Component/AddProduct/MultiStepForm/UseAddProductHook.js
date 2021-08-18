import React, { useState } from "react";

const emptyProductState = {
  productName: "",
  productDescription: "",
  productPrice: "",
  productCategory: {
    categoryName: "",
    categoryId: 0,
  },
  productSubCategory: "",
  productBrand: "",
};

const useAddProductHook = () => {
  const [productFormData, setProductFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productCategory: {
      categoryName: "",
      categoryId: 0,
    },
    productSubCategory: "",
    productBrand: "",
  });

  return { productFormData, setProductFormData };
};

export { useAddProductHook, emptyProductState };
