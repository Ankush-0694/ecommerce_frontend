import React, { useState } from "react";

import { MyMultilineInput } from "../../../Design/FormFieldComponent";
import { MyButtonComponent } from "../../../Design/ButtonComponent";
import { MyRatingComponent } from "../../../Design/MyRatingComponent";

const ProductReviewForm = () => {
  const [reviewFormData, setReviewFormData] = useState({
    review: "",
  });

  const [ratingValue, setRatingValue] = useState(0);

  const onChange = (e) => {
    setReviewFormData({ ...reviewFormData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      review: reviewFormData.review,
      rating: ratingValue,
    };
  };

  return (
    <form onSubmit={onSubmit}>
      <div style={{ margin: "10px" }}>
        <MyMultilineInput
          id="outlined-multiline-static"
          label="Enter Your Review"
          multiline
          rows={4}
          variant="outlined"
          name="review"
          onChange={onChange}
        />
        <div>
          <MyRatingComponent value={ratingValue} setValue={setRatingValue} />
        </div>
        <div style={{ marginTop: "10px" }}>
          <MyButtonComponent color="primary" variant="contained" type="submit">
            Add Review
          </MyButtonComponent>
        </div>
      </div>
    </form>
  );
};

export default ProductReviewForm;
