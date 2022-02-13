import { useQuery } from "@apollo/client";
import React, { Fragment, useState } from "react";
import { GET_PRODUCT_BY_VENDORID } from "../../../../queries/Product/productQueries";
// import { MyFullScreenBox } from "../../../Design/MyFullScreenBox";
import { MyTypography } from "../../../design/MyTypography";
import ShowError from "../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../layout/LoadingComponent/ShowLoading";
import VendorAllProducts from "./Component/AllProducts/AllProducts";
import MultiStepForm from "./Component/AddProduct/MultiStepForm/MultiStepForm";

import { VendorProductStyles } from "./CSS/VendorProductStyles";
import { MyPaper } from "../../../design/MyPaper";
import MyDivider from "../../../design/MyDivider";
import { withRouter } from "../../../../helpers/HOC/withRouter";

const VendorProduct = (props) => {
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
        <div style={{ margin: "20px 0px 0px 24px" }}>
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

        {/* <MyFullScreenBox display="flex" width="50%" height="90vh"> */}
        <div style={{ width: "40%" }}>
          <div>
            <MultiStepForm current={current} setCurrent={setCurrent} />
          </div>
        </div>
        {/* </MyFullScreenBox> */}
      </div>
    </div>
  );
};

export default withRouter(VendorProduct);
