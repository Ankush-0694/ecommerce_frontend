import React, { useState } from "react";
import MyDivider from "../../../../Design/MyDivider";
import { MyFullScreenBox } from "../../../../Design/MyFullScreenBox";
import { MyGridContainer, MyGridItem } from "../../../../Design/MyGrid";
import { MyPaper } from "../../../../Design/MyPaper";
import ProductReviewForm from "../../Products/SingleProduct/Component/ProductReviewForm/ProductReviewForm";
import ProductReviewList from "../../Products/SingleProduct/Component/ProductReviewList/ProductReviewList";

/** this component is using same component from singleProduct
 *
 * Only passing review Data fetch by used id
 *
 * All necessary props are passing ( same as we are from single product )
 */
const RatingAndReview = () => {
  /** For adding and updating the data using same form */
  const [currentReview, setCurrentReview] = useState(null);

  /** ReviewByUsedID - Separate Query  */
  const reviewData = [
    {
      id: 1,
      rating: 2,
      review: "good",
    },
    {
      id: 2,
      rating: 4,
      review: "Nice",
    },
    {
      id: 3,
      rating: 5,
      review: "Awesome",
    },
  ];

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
            <h1 style={{ margin: "20px auto" }}>Rating and Reviews</h1>
          </MyFullScreenBox>

          <MyDivider />

          <MyGridContainer justify="center">
            <MyGridItem xs={8}>
              {reviewData.map((review, index) => {
                {
                  /* Mappping of data - ReviewByUsedID */
                }
                return (
                  <ProductReviewList
                    currentReview={currentReview}
                    setCurrentReview={setCurrentReview}
                    key={index}
                    reviewData={review}
                  />
                );
              })}
            </MyGridItem>
          </MyGridContainer>
        </MyPaper>
      </div>
    </div>
  );
};

export default RatingAndReview;
