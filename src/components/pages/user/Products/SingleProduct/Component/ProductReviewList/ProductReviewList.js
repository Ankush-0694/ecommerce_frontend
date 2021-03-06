import React from "react";
import { MyRatingComponent } from "../../../../../../design/MyRatingComponent";
import { MyButtonComponent } from "../../../../../../design/MyButtonComponent";
import { DELETE_REVIEW } from "../../../../../../../queries/Review/ReviewMutations";
import { useMutation } from "@apollo/client";
import { GET_SINGLE_PRODUCT } from "../../../../../../../queries/Product/productQueries";
import { GET_REVIEWS_BY_CUSTOMERID } from "../../../../../../../queries/Review/ReviewQueries";

const ProductReviewList = ({ reviewData, setCurrentReview, userData }) => {
  const { id, productID, rating, review, customerId } = reviewData;
  // console.log(reviewData);

  const [deleteReview, { data: deleteReviewData }] = useMutation(
    DELETE_REVIEW,
    {
      refetchQueries: [
        { query: GET_SINGLE_PRODUCT, variables: { id: productID } }, // reftech full page , not good approach
        { query : GET_REVIEWS_BY_CUSTOMERID  }
      ],
    }
  );

  const onDeleteReview = () => {
    deleteReview({
      variables: {
        id, // review id
      },
    });

    // refetch or writeQuery Here to Update the Ui after Delete

    setCurrentReview(null);
  };

  return (
    <div>
      <div style={{ margin: "10px 0" }}>Review : {review}</div>
      <MyRatingComponent value={rating} readOnly={true} />
      {userData && userData.id === customerId && (
        <div>
          <MyButtonComponent
            variant="contained"
            color="primary"
            size="small"
            style={{ marginRight: "10px" }}
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
      )}
    </div>
  );
};

export default ProductReviewList;
