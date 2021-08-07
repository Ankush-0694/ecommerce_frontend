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
import { AddProductStyles } from "../../CSS/AddProductStyles";
import { categoryList, subCategoryList } from "./Category_SubCategory";

const AddProduct = ({ current, setCurrent }) => {
  const classes = AddProductStyles();

  const [productFormData, setProductFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productSubCategory: "",
  });
  const { productName, productDescription, productPrice } = productFormData; // Destructing State

  /** Adding separate Category state to choose subCategory Based on Category
   * when we add Product ,  productCategory : categoryName
   */
  const [productCategory, setProductCategory] = useState({
    categoryName: "",
    categoryId: "",
  });
  const { categoryName, categoryId } = productCategory; // Destructing State

  /** Filtering subCategories based on the categoryID Choosen */
  const subCategoryListItems = subCategoryList.filter((filteredItem) => {
    return filteredItem.categoryId == categoryId;
  });

  const [addProduct] = useMutation(ADD_PRODUCT, {
    onError: () => {},
  });
  const [updateProduct] = useMutation(UPDATE_PRODUCT, {
    onError: () => {},
  });

  /**
   * Setting intial Form State depend on the current
   * we change current on update and set current to that product and then set productFormData to current
   */
  useEffect(() => {
    if (current !== null) {
      setProductFormData(current);
    } else {
      setProductFormData({
        productName: "",
        productDescription: "",
        productPrice: "",
        productSubCategory: "",
      });
    }
  }, [current]);

  const onChange = (e) => {
    setProductFormData({
      ...productFormData,
      [e.target.name]: e.target.value,
    });
  };

  /** Changing productCategory State when we select a Category */
  const onCategoryChange = (e) => {
    /** Value passed from select input */
    let categoryValue = e.target.value;

    /** Fetching id and Name seprately from selected value */
    let categoryIdSelected = categoryValue.split("-")[0];
    let categoryNameSelected = categoryValue.split("-")[1];

    setProductCategory({
      categoryName: categoryNameSelected,
      categoryId: categoryIdSelected,
    });
  };

  /**
   * we call mutation depend on the current
   * if current not equal to null then it is in update so we call updateProduct
   */
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
      updateProduct({
        variables: {
          productID: productFormData.id,
          productName: productFormData.productName,
          productDescription: productFormData.productDescription,
          productPrice: Number(productFormData.productPrice),
        },
      });
    }

    /**
     * Clear State and input Value
     */
    setProductFormData({
      productName: "",
      productDescription: "",
      productPrice: "",
      productSubCategory: "",
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

        {/* Category Select Input */}

        <div>
          <label htmlFor="category-select" className={classes.categoryLabel}>
            Choose a Category
          </label>
          <select
            onChange={onCategoryChange}
            id="category-select"
            name="categoryName"
            className={classes.CategorySelect}>
            <option value="">None</option>

            {/* Array of all the Category import from other category files */}

            {/* Passing value with combination of id and name to select Category and id seprately */}

            {categoryList.map((mappedItem) => {
              return (
                <option
                  key={mappedItem.id}
                  value={`${mappedItem.id}-${mappedItem.name}`}>
                  {mappedItem.name}
                </option>
              );
            })}
          </select>
        </div>

        {/* Sub - Category Select Input */}

        <div>
          <label htmlFor="category-select" className={classes.categoryLabel}>
            Choose a Sub Category
          </label>
          <select
            onChange={onChange}
            id="subCategory-select"
            name="productSubCategory"
            className={classes.CategorySelect}>
            {/*  */}
            {/* Choosing default Category based on Category choosen or not  */}

            {categoryName === "" ? (
              <option value="">Choose a category First</option>
            ) : (
              <option value="">None</option>
            )}

            {/* Array of all the Sub Category import from other SubCategory files */}

            {subCategoryListItems.map((mappedItem) => {
              return (
                <option key={mappedItem.id} value={mappedItem.name}>
                  {mappedItem.name}
                </option>
              );
            })}
          </select>
        </div>

        {/** Buttons to add or update and Clear */}

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
