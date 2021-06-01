import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { MyMultilineInput } from "../../../Design/FormFieldComponent";
import { MyButtonComponent } from "../../../Design/ButtonComponent";
import { MyRatingComponent } from "../../../Design/MyRatingComponent";

import {
  addProductReviewMutation,
  getProductsQuery,
  getSingleProduct,
} from "../../../../queries/productQueries";

const ProductReviewForm = ({ productid }) => {
  const [addReview, { data: newData }] = useMutation(addProductReviewMutation, {
    refetchQueries: [{ query: getSingleProduct, variables: { id: productid } }],
  });

  console.log(newData);

  const [reviewFormData, setReviewFormData] = useState({
    review: "",
  });
  const { review } = reviewFormData;

  const [ratingValue, setRatingValue] = useState(0);

  const onChange = (e) => {
    setReviewFormData({ ...reviewFormData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      productid: productid,
      review: review,
      rating: Number(ratingValue),
    };
    console.log(newReview);
    addReview({
      variables: newReview,
    });
    setReviewFormData({
      review: "",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div style={{ margin: "10px", maxWidth: "60%" }}>
        <MyMultilineInput
          id="outlined-multiline-static"
          label="Enter Your Review"
          multiline
          rows={4}
          variant="outlined"
          name="review"
          onChange={onChange}
          value={review}
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
