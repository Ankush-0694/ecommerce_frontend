import React, { useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { MyMultilineInput } from "../../../../../../design/MyFormFieldComponent";
import { MyButtonComponent } from "../../../../../../design/MyButtonComponent";
import { MyRatingComponent } from "../../../../../../design/MyRatingComponent";
import { GET_SINGLE_PRODUCT } from "../../../../../../../queries/Product/productQueries";
import {
  ADD_REVIEW,
  UPDATE_REVIEW,
} from "../../../../../../../queries/Review/ReviewMutations";

const ProductReviewForm = ({ productid, currentReview, setCurrentReview , setReviewFormSubmitted}) => {
  const [reviewFormData, setReviewFormData] = useState({
    review: "",
  });
  const [ratingValue, setRatingValue] = useState(0);

  const { review } = reviewFormData;

  // Check Every time, the currentReview value change then based on it we set the form value
  useEffect(() => {
    if (currentReview !== null) {
      setReviewFormData(currentReview);
    } else {
      setReviewFormData({
        review: "",
      });
    }
  }, [currentReview]);

  const [addReview, { data: newReviewData }] = useMutation(ADD_REVIEW, {
    refetchQueries: [
      { query: GET_SINGLE_PRODUCT, variables: { id: productid } },
    ],
  });
  const [updateReview, { data: updatedReviewData }] =
    useMutation(UPDATE_REVIEW);

  const onChange = (e) => {
    setReviewFormData({ ...reviewFormData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!currentReview) {
      const newReview = {
        productID: productid,
        review: review,
        rating: Number(ratingValue),
      };
      addReview({
        variables: newReview,
      });
    } else {
      updateReview({
        variables: {
          ...currentReview, // need to add this because it has id product id and other stuff
          review: review, // this comes from reviewFromdata
          rating: ratingValue, // needed to added separately due to another rating state
        },
      });
    }

    setReviewFormData({
      review: "",
    });
    setReviewFormSubmitted(true);
    setRatingValue(0);
    setCurrentReview(null);
  };

  return (
    <form onSubmit={onSubmit}>
      <div style={{ marginTop: "10px" }}>
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
          <MyRatingComponent
            name="ratingValue"
            value={ratingValue}
            setValue={setRatingValue}
          />
        </div>
        <div style={{ margin: "24px 0px" }}>
          <MyButtonComponent
            style={{ marginRight: "10px" }}
            color="primary"
            variant="contained"
            size="small"
            type="submit">
            {!currentReview ? "Add Review" : "Edit Review"}
          </MyButtonComponent>
          <MyButtonComponent
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => {
              setReviewFormData({
                review: "",
              });
              setCurrentReview(null);
              setRatingValue(0);
            }}>
            {!currentReview ? "Clear" : "Cancel Update"}
          </MyButtonComponent>
        </div>
      </div>
    </form>
  );
};

export default ProductReviewForm;

// https://stackoverflow.com/questions/64396559/unhandled-rejection-error-cannot-assign-to-read-only-property-getposts-of-o

// update: (cache, { data: { addReview } }) => {
//   let productData = cache.readQuery({
//     query: getSingleProduct,
//     variables: {
//       id: productid,
//     },
//   });

//   // console.log(addReview);

//   let reviewsData = productData.getProductById.reviews;
//   reviewsData = [...reviewsData, addReview];
//   console.log(reviewsData);
//   console.log(productData);

//   cache.writeQuery(
//     {
//       query: getSingleProduct,
//       variables: {
//         id: productid,
//       },
//     },
//     productData
//   );
// },
