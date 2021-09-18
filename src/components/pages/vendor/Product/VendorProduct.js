import { useQuery } from "@apollo/client";
import React, { Fragment, useState } from "react";
import { GET_PRODUCT_BY_VENDORID } from "../../../../queries/Product/productQueries";
import { MyFullScreenBox } from "../../../Design/MyFullScreenBox";
import { MyTypography } from "../../../Design/MyTypography";
import ShowError from "../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../layout/LoadingComponent/ShowLoading";
import VendorAllProducts from "./Component/AllProducts/AllProducts";
import MultiStepForm from "./Component/AddProduct/MultiStepForm/MultiStepForm";

import { VendorProductStyles } from "./CSS/VendorProductStyles";
import { MyPaper } from "../../../Design/MyPaper";
import MyDivider from "../../../Design/MyDivider";

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
        <div style={{ marginTop: "20px", marginLeft: "24px" }}>
          <MyPaper elevation={0}>
            <MyTypography
              variant="h4"
              component="h5"
              className={classes.productHeading}>
              Products ( {productData.length} items )
            </MyTypography>
            <MyDivider />
            <div className={classes.productListContainer}>
              {productData
                .slice(0)
                .reverse()
                .map((data) => {
                  return (
                    <Fragment key={data.id}>
                      <VendorAllProducts
                        role="vendor"
                        data={data}
                        setCurrent={setCurrent}
                      />
                      <MyDivider />
                    </Fragment>
                  );
                })}
            </div>
          </MyPaper>
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
