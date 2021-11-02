import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_SINGLE_PRODUCT } from "../../../../queries/Product/productQueries";
import { MyFullScreenBox } from "../../../design/MyFullScreenBox";
import { MyGridContainer, MyGridItem } from "../../../design/MyGrid";
import { MyPaper } from "../../../design/MyPaper";
import ShowError from "../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../layout/LoadingComponent/ShowLoading";
import SingleProductDetails from "../Checkout/Component/CheckoutProductDetails/SingleProductDetails";
import ProductReviewForm from "../Products/SingleProduct/Component/ProductReviewForm/ProductReviewForm";

const ReviewFormPage = (props) => {
  const productid = props.match.params.id;
  const [currentReview, setCurrentReview] = useState(null);

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
  console.log(dataToRender);

  return (
    <div style={{ width: "95%", margin: "auto", marginTop: "16px" }}>
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
            />
          </MyGridItem>
        </MyGridContainer>
      </MyPaper>
    </div>
  );
};

export default ReviewFormPage;
