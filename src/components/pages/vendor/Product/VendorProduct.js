import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { getProductsQuery } from "../../../../queries/Product/productQueries";
import { MyFullScreenBox } from "../../../Design/FullScreenBox";
import { MyTypography } from "../../../Design/MyTypography";
import AddProduct from "./Component/AddProduct/AddProduct";
import VendorAllProducts from "./Component/VendorAllProducts/VendorAllProducts";

import { VendorProductStyles } from "./CSS/VendorProductStyles";

const VendorProduct = () => {
  const classes = VendorProductStyles();

  const [current, setCurrent] = useState(null);

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

  const { error, loading, data } = useQuery(getProductsQuery);

  console.log(data);

  if (error) {
    return <div>Error onccrued</div>;
  }
  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      <div className={classes.flexcontainer}>
        <MyFullScreenBox display="flex" width="50%" height="90vh">
          <div style={{ margin: "auto", width: "70%" }}>
            <div>
              <AddProduct current={current} setCurrent={setCurrent} />
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
              {data.getAllProducts.map((data) => {
                return (
                  <VendorAllProducts
                    key={data.id}
                    data={data}
                    setCurrent={setCurrent}
                  />
                );
              })}
            </div>
          </div>
        </MyFullScreenBox>
      </div>
    </div>
  );
};

export default VendorProduct;
