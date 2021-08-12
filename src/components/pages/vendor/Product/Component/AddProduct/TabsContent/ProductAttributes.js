import { makeStyles } from "@material-ui/core";
import React from "react";
import { AddProductStyles } from "../../../CSS/AddProductStyles";
import { categoryList, subCategoryList } from "../Category_SubCategory";

const useStyles = makeStyles({
  // Category and subcategory styles are same
  CategorySelect: {
    width: "100%",
    padding: "12px 10px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
  categoryLabel: {
    marginLeft: "5px",
  },
});

const ProductAttributes = (props) => {
  const classes = useStyles();

  const { productCategory, onCategoryChange, onChange } = props;

  const { categoryId, categoryName } = productCategory;

  const subCategoryListItems = subCategoryList.filter((filteredItem) => {
    return filteredItem.categoryId == categoryId;
  });

  return (
    <div>
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
    </div>
  );
};

export default ProductAttributes;
