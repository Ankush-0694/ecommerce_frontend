import React from "react";
import { MyRatingComponent } from "../../../../../../Design/MyRatingComponent";
import { MyButtonComponent } from "../../../../../../Design/MyButtonComponent";
import { updateReviewMutation } from "../../../../../../../queries/Review/ReviewMutations";
import { getSingleProduct } from "../../../../../../../queries/Product/productQueries";
import { useMutation } from "@apollo/client";

const ProductReviewList = ({ review }) => {
  const { id, productID, rating } = review;
  // const [updateReview, { data: updatedData }] = useMutation(
  //   updateReviewMutation,
  //   {
  //     refetchQueries: [
  //       { query: getSingleProduct, variables: { id: productID } },
  //     ],
  //   }
  // );
  return (
    <div>
      <div style={{ margin: "10px 0" }}>Review : {review.review}</div>
      <MyRatingComponent value={rating} readOnly={true} />
      <div>
        <MyButtonComponent
          variant="contained"
          color="primary"
          size="small"
          userStyle={{ marginRight: "10px" }}>
          Edit
        </MyButtonComponent>
        <MyButtonComponent variant="contained" color="secondary" size="small">
          Delete
        </MyButtonComponent>
      </div>
      <hr></hr>
    </div>
  );
};

export default ProductReviewList;
