import React, { useEffect, useState } from "react";
import WizardHeader from "../../../../../../Design/MyWizardHeader";
import SwipeableViews from "react-swipeable-views";
import { MultiStepFromStyles } from "../../../CSS/MultiStepFormStyles";
import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
} from "../../../../../../../queries/Product/productMutations";
import { useMutation } from "@apollo/client";
import ProductDetails from "../TabsContent/ProductDetails";
import ProductAttributes from "../TabsContent/ProductAttributes";
import ProductPhotoUpload from "../TabsContent/ProductPhotoUpload";
import { GET_ALL_PRODUCTS } from "../../../../../../../queries/Product/productQueries";
import { MyPaper } from "../../../../../../Design/MyPaper";
import { MyTypography } from "../../../../../../Design/MyTypography";
import { MyGridContainer, MyGridItem } from "../../../../../../Design/MyGrid";
import { MyButtonComponent } from "../../../../../../Design/MyButtonComponent";

import { emptyProductState, useAddProductHook } from "./UseAddProductHook";

const MultiStepForm = ({ current, setCurrent }) => {
  const classes = MultiStepFromStyles();

  /** This can be used for checking the form submitted or not
   * Can show a button Reset Form which will clear all the values and get us to first Step
   */
  const [formSubmitted, setFormSubmitted] = useState(false);

  /** to keep track of on which step we need to be at
   *  it will use it wizard header and React swipable views
   * */
  const [activeStep, setActiveStep] = useState(0);

  /** ProductFormData to maintin controlled component
   *
   *  emptyProductState will be used to clear the state and form
   */
  const { productFormData, setProductFormData } = useAddProductHook();

  /** Destructing States */
  const {
    productName,
    productDescription,
    productPrice,
    productCategory,
    productSubCategory,
    productBrand,
  } = productFormData; // Destructing State

  const [addProduct] = useMutation(ADD_PRODUCT, {
    onError: () => {},
  });
  const [updateProduct] = useMutation(UPDATE_PRODUCT, {
    onError: () => {},
  });

  /** Changing the step by Clicking the header
   * So it passed to WIzard header and REACT_SWIPABLE views
   */
  const handleStepChange = (index) => (e) => {
    setActiveStep(index);
  };

  /** when  click on buttonn NEXT */
  const handleStepNext = () => {
    setActiveStep(activeStep + 1);
  };

  /** when  click on buttonn BACK */
  const handleStepPrev = () => {
    setActiveStep(activeStep - 1);
  };

  /**
   * Setting intial Form State depend on the current
   * we change current on update and set current to that product and then set productFormData to current
   */
  useEffect(() => {
    if (current !== null) {
      setProductFormData({
        ...current,
      });
    } else {
      setProductFormData(emptyProductState);
    }
  }, [current]);

  /** Changing product Form Details State */
  const onChange = (e) => {
    setProductFormData({
      ...productFormData,
      [e.target.name]: e.target.value,
    });
  };

  // /** Changing productCategory State when we select a Category */
  const onCategoryChange = (e) => {
    /** Value passed from select input */
    let categoryValue = e.target.value;

    /** Fetching id and Name seprately from selected value */
    let categoryIdSelected = Number(categoryValue.split("-")[0]);
    let categoryNameSelected = categoryValue.split("-")[1];

    setProductFormData({
      ...productFormData,
      productCategory: {
        categoryId: categoryIdSelected,
        categoryName: categoryNameSelected,
      },
    });
  };

  /**
   * we call mutation depend on the current
   * if current not equal to null then it is in update so we call updateProduct
   *
   * Form Will Submit only at Last Step
   */
  const onFormSubmit = (e) => {
    if (!current) {
      addProduct({
        variables: {
          ...productFormData,
          productPrice: Number(productPrice), // need to change into number
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
          ...productFormData,
          productID: productFormData.id, // this property will be set using current
          productPrice: Number(productPrice),
        },
      });
    }

    /**
     * Clear State and input Value- WHich will clear the form
     */
    setProductFormData(emptyProductState);

    /** Need to disable the Updating State - Because this method is called for both add and update Product */
    setCurrent(null);

    /*  */
    setActiveStep(0);

    e.preventDefault();
  };

  /** Header Tabs Name -  Passed to WIZARD HEADER */
  const tabs = ["Product Details", "Attributes", "Photo Upload"];

  return (
    <div>
      <MyPaper elevation={1} className={classes.root}>
        {/* Heading */}

        <MyTypography
          variant="h4"
          gutterBottom
          color="primary"
          style={{ padding: "0 8px", textAlign: "center" }}>
          {!current ? "Add Your Product" : "Update Your Product"}
        </MyTypography>

        {/* Header With TABS */}
        <WizardHeader
          tabs={tabs}
          activeStep={activeStep}
          handleChange={handleStepChange}
          formSubmitted={formSubmitted}
        />

        {/* Form to fill and SUBMIT */}

        <form onSubmit={onFormSubmit}>
          <SwipeableViews index={activeStep} onChangeIndex={handleStepChange}>
            <ProductDetails
              onChange={onChange}
              productFormData={productFormData}
            />
            <ProductAttributes
              productCategory={productCategory}
              productSubCategory={productSubCategory}
              productBrand={productBrand}
              current={current}
              onChange={onChange}
              onCategoryChange={onCategoryChange}
            />
            {/* <ProductPhotoUpload /> */}
          </SwipeableViews>

          {/* Buttons - BACK NEXT , RESET  AND SUBMIT */}

          <MyGridContainer
            justify="space-between"
            style={{ padding: "16px 16px" }}>
            {/* Back Button - Disable for first step  */}
            <MyGridItem>
              <MyButtonComponent
                disabled={activeStep === 0 || formSubmitted}
                onClick={handleStepPrev}
                variant="contained"
                color="default"
                className={`${classes.navigation} ${classes.prevBtn}`}>
                Back
              </MyButtonComponent>
            </MyGridItem>

            {/**  RESET Button - Clear the states and the form
              OnClick -
               reset the current and the Form Data
           */}

            {
              <MyGridItem>
                <MyButtonComponent
                  color="secondary"
                  className={classes.navigation}
                  variant="contained"
                  onClick={() => {
                    /** Clear form on reset */
                    setProductFormData(emptyProductState);
                    setCurrent(null);

                    activeStep === tabs.length - 1 && setActiveStep(0);
                  }}
                  disabled={formSubmitted}>
                  Reset
                </MyButtonComponent>
              </MyGridItem>
            }

            {/* NEXT  Button - Disable for Last Step  */}
            {activeStep < tabs.length - 1 && (
              <MyGridItem>
                <MyButtonComponent
                  color="primary"
                  className={classes.navigation}
                  variant="contained"
                  onClick={handleStepNext}
                  disabled={formSubmitted}>
                  Next
                </MyButtonComponent>
              </MyGridItem>
            )}

            {/* SUBMIT  Button - Show only For Last Step  */}

            {activeStep === tabs.length - 1 && (
              <MyGridItem>
                <MyButtonComponent
                  type="submit"
                  color="primary"
                  className={classes.navigation}
                  variant="contained"
                  disabled={formSubmitted}>
                  {!current ? "Add" : "Update"}
                </MyButtonComponent>
              </MyGridItem>
            )}
          </MyGridContainer>
        </form>
      </MyPaper>
    </div>
  );
};

export default MultiStepForm;
