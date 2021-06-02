import React from "react";
import { MyRatingComponent } from "../../../../Design/MyRatingComponent";

const ProductReviews = ({ reviews }) => {
  console.log(reviews);
  return (
    <div>
      {reviews.map((review, index) => {
        return (
          <div key={index}>
            <div style={{ margin: "10px 0" }}>{review.review}</div>
            <MyRatingComponent value={review.rating} readOnly={true} />
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default ProductReviews;

// try to make new Query to get only review

// or other option is to make separate schema for reviews
