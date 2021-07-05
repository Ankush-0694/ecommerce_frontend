import React from "react";
import { MyRatingComponent } from "../../../../../../Design/MyRatingComponent";
import { MyButtonComponent } from "../../../../../../Design/MyButtonComponent";
import { deleteReviewMutation } from "../../../../../../../queries/Review/ReviewMutations";
import { getSingleProduct } from "../../../../../../../queries/Product/productQueries";
import { useMutation } from "@apollo/client";

const ProductReviewList = ({ reviewData, currentReview, setCurrentReview }) => {
  const { id, productID, rating, review } = reviewData;

  const [deleteReview, { data: deleteReviewData }] =
    useMutation(deleteReviewMutation);

  const onDeleteReview = () => {
    deleteReview({
      variables: {
        id,
      },
    });
    // refetch or writeQuery
    setCurrentReview(null);
  };

  return (
    <div>
      <div style={{ margin: "10px 0" }}>Review : {review}</div>
      <MyRatingComponent value={rating} readOnly={true} />
      <div>
        <MyButtonComponent
          variant="contained"
          color="primary"
          size="small"
          userStyle={{ marginRight: "10px" }}
          onClick={() => {
            setCurrentReview(reviewData);
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}>
          Edit
        </MyButtonComponent>
        <MyButtonComponent
          variant="contained"
          color="secondary"
          size="small"
          onClick={onDeleteReview}>
          Delete
        </MyButtonComponent>
      </div>
      <hr></hr>
    </div>
  );
};

export default ProductReviewList;
