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
  productImageUrl: "", // can provide default url but it will show on ui //https://source.unsplash.com/user/jackie/likes/1600x900
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
    productImageUrl: "",
  });

  return { productFormData, setProductFormData };
};

export { useAddProductHook, emptyProductState };
