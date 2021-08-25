import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_PRODUCT_BY_VENDORID } from "../../../../queries/Product/productQueries";
import { MyFullScreenBox } from "../../../Design/MyFullScreenBox";
import { MyTypography } from "../../../Design/MyTypography";
import ShowError from "../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../layout/LoadingComponent/ShowLoading";
import VendorAllProducts from "./Component/AllProducts/AllProducts";
import MultiStepForm from "./Component/AddProduct/MultiStepForm/MultiStepForm";

import { VendorProductStyles } from "./CSS/VendorProductStyles";

const VendorProduct = () => {
  const classes = VendorProductStyles();

  const [current, setCurrent] = useState(null);

  const {
    error: getProductError,
    loading: getProductLoading,
    data: getProductData,
  } = useQuery(GET_PRODUCT_BY_VENDORID);

  if (getProductError) {
    return <ShowError>Error while Fetching Products</ShowError>;
  }
  if (getProductLoading) {
    return <ShowLoading />;
  }

  const productData = getProductData.getProductsByVendorId;

  return (
    <div>
      <div className={classes.flexcontainer}>
        <div style={{ flexGrow: 1 }}>
          <div>
            <MyTypography
              variant="h4"
              component="h5"
              style={{ textAlign: "center", padding: "10px" }}>
              Products
            </MyTypography>
            <div className={classes.productListContainer}>
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
        </div>

        <MyFullScreenBox display="flex" width="50%" height="90vh">
          <div style={{ margin: "48px auto", width: "70%" }}>
            <div>
              <MultiStepForm current={current} setCurrent={setCurrent} />
            </div>
          </div>
        </MyFullScreenBox>
      </div>
    </div>
  );
};

export default VendorProduct;
