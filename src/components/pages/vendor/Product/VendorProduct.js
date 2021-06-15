import React from "react";
// import { MyGridContainer, MyGridItem } from "../../../Design/MyGrid";
import { MyFullScreenBox } from "../../../Design/FullScreenBox";
import { MyTypography } from "../../../Design/MyTypography";
import AddProduct from "./Component/AddProduct";
import AllProducts from "./Component/AllProducts";

import { VendorProductStyles } from "./CSS/VendorProductStyles";

const Products = () => {
  const classes = VendorProductStyles();
  const dummyData = [
    {
      productName: "Shirt",
      productPrice: 3000,
      productDescription: "This is a very good Product",
    },
    {
      productName: "Shirt",
      productPrice: 3000,
      productDescription: "This is a very good Product",
    },
    {
      productName: "Shirt",
      productPrice: 3000,
      productDescription: "This is a very good Product",
    },
    {
      productName: "Shirt",
      productPrice: 3000,
      productDescription: "This is a very good Product",
    },
    {
      productName: "Shirt",
      productPrice: 3000,
      productDescription: "This is a very good Product",
    },
  ];

  return (
    <div>
      <div className={classes.flexcontainer}>
        <MyFullScreenBox display="flex" width="50%" height="90vh">
          <div style={{ margin: "auto", width: "70%" }}>
            <div>
              <MyTypography
                variant="h4"
                component="h6"
                style={{ textAlign: "center" }}>
                Add Product
              </MyTypography>
              <AddProduct />
            </div>
          </div>
        </MyFullScreenBox>

        <MyFullScreenBox display="flex" width="40%">
          <div style={{ margin: "auto" }}>
            <MyTypography
              variant="h4"
              component="h5"
              style={{ textAlign: "center", padding: "10px" }}>
              Products
            </MyTypography>
            <div>
              {dummyData.map((data) => {
                return <AllProducts data={data} />;
              })}
            </div>
          </div>
        </MyFullScreenBox>
      </div>
    </div>
  );
};

export default Products;
