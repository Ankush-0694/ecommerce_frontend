import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { MyMultilineInput } from "../../../../../../Design/FormFieldComponent";
import { MyButtonComponent } from "../../../../../../Design/MyButtonComponent";
import { MyRatingComponent } from "../../../../../../Design/MyRatingComponent";
import { getSingleProduct } from "../../../../../../../queries/Product/productQueries";
import { addReviewMutation } from "../../../../../../../queries/Review/ReviewMutations";

const ProductReviewForm = ({ productid }) => {
  const [addReview, { data: newData }] = useMutation(addReviewMutation, {
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
      productID: productid,
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
    setRatingValue(0);
  };

  return (
    <form onSubmit={onSubmit}>
      <div style={{ margin: "10px" }}>
        <MyMultilineInput
          id="outlined-multiline-static"
          label="Enter Your Review"
          multiline
          rows={3}
          variant="outlined"
          name="review"
          onChange={onChange}
          value={review}
        />
        <div style={{ marginTop: "10px" }}>
          <MyRatingComponent value={ratingValue} setValue={setRatingValue} />
        </div>
        <div style={{ marginTop: "5px" }}>
          <MyButtonComponent color="primary" variant="contained" type="submit">
            Add Review
          </MyButtonComponent>
        </div>
      </div>
    </form>
  );
};

export default ProductReviewForm;
