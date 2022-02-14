import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { withRouter } from "../../../../helpers/HOC/withRouter";
import { GET_SINGLE_PRODUCT } from "../../../../queries/Product/productQueries";
import MyAlert from "../../../design/MyAlert";
import { MyFullScreenBox } from "../../../design/MyFullScreenBox";
import { MyGridContainer, MyGridItem } from "../../../design/MyGrid";
import { MyPaper } from "../../../design/MyPaper";
import ShowError from "../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../layout/LoadingComponent/ShowLoading";
import SingleProductDetails from "../Checkout/Component/CheckoutProductDetails/SingleProductDetails";
import ProductReviewForm from "../Products/SingleProduct/Component/ProductReviewForm/ProductReviewForm";

const AddReview = (props) => {
  const { params } = props;
  const productid = params.productId;
  const [currentReview, setCurrentReview] = useState(null);

  const [reviewFormSubmitted, setReviewFormSubmitted] = useState(false);

  const {
    error: getProductError,
    loading: getProductLoading,
    data: getProductData,
  } = useQuery(GET_SINGLE_PRODUCT, {
    variables: { id: productid },
  });

  if (getProductError) {
    return <ShowError>Error While Fetching Product.. </ShowError>;
  }
  if (getProductLoading) {
    return <ShowLoading />;
  }

  const dataToRender = getProductData.getProductByProductId;
  

  return (
    <div style={{ width: "95%", margin: "auto", marginTop: "16px" }}>
      {reviewFormSubmitted && (
          <MyAlert type="success">
            Review submitted successfully
          </MyAlert>
      )}
      <div style={{ paddingBottom: "10px", marginBottom: "10px" }}>
        <SingleProductDetails
          productData={dataToRender}
          showQuantitySection={false}
        />
      </div>

      <MyPaper style={{ paddingBottom: "10px" }}>
        {/* review Form Heading */}

        <MyFullScreenBox display="flex" width="100%">
          <h1 style={{ margin: "20px auto" }}>Add Your Review</h1>
        </MyFullScreenBox>

        {/* review Form Component */}

        <MyGridContainer justify="center">
          <MyGridItem xs={8}>
            <ProductReviewForm
              currentReview={currentReview}
              setCurrentReview={setCurrentReview}
              productid={productid}
              setReviewFormSubmitted={setReviewFormSubmitted}
            />
          </MyGridItem>
        </MyGridContainer>
      </MyPaper>
    </div>
  );
};

export default withRouter(AddReview);
