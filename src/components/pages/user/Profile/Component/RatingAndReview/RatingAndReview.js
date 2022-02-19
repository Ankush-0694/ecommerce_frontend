import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Fragment } from "react";
import { GET_REVIEWS_BY_CUSTOMERID } from "../../../../../../queries/Review/ReviewQueries";
import MyDivider from "../../../../../design/MyDivider";
import { MyFullScreenBox } from "../../../../../design/MyFullScreenBox";
import { MyGridContainer, MyGridItem } from "../../../../../design/MyGrid";
import { MyPaper } from "../../../../../design/MyPaper";
import { MyTypography } from "../../../../../design/MyTypography";
import ShowError from "../../../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../../../layout/LoadingComponent/ShowLoading";
import ProductReviewForm from "../../../Products/SingleProduct/Component/ProductReviewForm/ProductReviewForm";
import ProductReviewList from "../../../Products/SingleProduct/Component/ProductReviewList/ProductReviewList";

/** this component is using same component from singleProduct
 *
 * Only passing review Data fetch by used id
 *
 * All necessary props are passing ( same as we are from single product )
 */
const RatingAndReview = ({ userData }) => {
  /** For adding and updating the data using same form */
  const [currentReview, setCurrentReview] = useState(null);

  const { error, loading, data } = useQuery(GET_REVIEWS_BY_CUSTOMERID);

  if (error) {
    return (
      <ShowError>Error occured while fetching Ratings and Reviews</ShowError>
    );
  }
  if (loading) {
    return <ShowLoading />;
  }

  const reviewData = data.getReviewsByCustomerId;

  return (
    <div>
      {/* Review Edit Form - will show on top when we click on the Edit
            Because currrentReview state will be change
      */}
      <div style={{ marginTop: "10px" }}>
        {currentReview && (
          <MyPaper style={{ paddingBottom: "10px" }}>
            {/* review Form Heading */}

            <MyFullScreenBox display="flex" width="100%">
              <h1 style={{ margin: "20px auto" }}>Edit Your Review</h1>
            </MyFullScreenBox>

            {/* review Form Component */}

            <MyGridContainer justify="center">
              <MyGridItem xs={8}>
                <ProductReviewForm
                  currentReview={currentReview}
                  setCurrentReview={setCurrentReview}
                />
              </MyGridItem>
            </MyGridContainer>
          </MyPaper>
        )}
      </div>

      {/* Rating and Reviews List */}

      <div style={{ marginTop: "10px" }}>
        <MyPaper>
          {/* Rating and Reviews Heading */}

          <MyFullScreenBox display="flex" width="100%">
            <h1 style={{ margin: "20px auto" }}>Ratings and Reviews</h1>
          </MyFullScreenBox>

          <MyDivider />

          <MyGridContainer justify="center" style={{ paddingBottom: "16px" }}>
            <MyGridItem xs={8}>
              {reviewData.length > 0 ? reviewData.map((review, index) => {
                /** Mappping of data - ReviewByUserID */

                return (
                  <Fragment key={review.id}>
                    <ProductReviewList
                      userData={userData}
                      currentReview={currentReview}
                      setCurrentReview={setCurrentReview}
                      reviewData={review}
                    />

                    {/* Not showing below last review */}

                    {review !== reviewData[reviewData.length - 1] && (
                      <MyDivider style={{ margin: "20px 0px" }} />
                    )}
                  </Fragment>
                );
              }) :
                <MyTypography variant="h6" component="h2" style={{paddingTop: "16px" , textAlign: "center"}}>
                  No Review Added By You &#128533;
                </MyTypography> 
              }
            </MyGridItem>
          </MyGridContainer>
        </MyPaper>
      </div>
    </div>
  );
};

export default RatingAndReview;
