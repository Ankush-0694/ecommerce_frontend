import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_ALL_PRODUCTS } from "../../../../queries/Product/productQueries";
import { MyFullScreenBox } from "../../../Design/MyFullScreenBox";
import { MyTypography } from "../../../Design/MyTypography";
import AddProduct from "./Component/AddProduct/AddProduct";
import VendorAllProducts from "./Component/VendorAllProducts/VendorAllProducts";

import { VendorProductStyles } from "./CSS/VendorProductStyles";

const VendorProduct = () => {
  const classes = VendorProductStyles();

  const [current, setCurrent] = useState(null);

  const {
    error: getProductError,
    loading: getProductLoading,
    data: getProductData,
  } = useQuery(GET_ALL_PRODUCTS);

  if (getProductError) {
    return <div>Error onccrued</div>;
  }
  if (getProductLoading) {
    return <div>Loading..</div>;
  }

  const productData = getProductData.getAllProducts;

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
              {productData
                .slice(0)
                .reverse()
                .map((data) => {
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
