import React, { useState } from "react";
import { makeVar, useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { getSingleProduct } from "../../../../../queries/Product/productQueries";
import ProductReviewForm from "./Component/ProductReviewForm/ProductReviewForm";
import ProductReviewList from "./Component/ProductReviewList/ProductReviewList";
import { MyGridContainer } from "../../../../Design/MyGrid";
import { MyGridItem } from "../../../../Design/MyGrid";
import { MyTypography } from "../../../../Design/MyTypography";
import { makeStyles } from "../../../../Design/MyUseStyles";
import { MyCardMedia } from "../../../../Design/MyCardComponents";
import { MyFullScreenBox } from "../../../../Design/MyFullScreenBox";
import { MyButtonComponent } from "../../../../Design/MyButtonComponent";
import { addToCartMutation } from "../../../../../queries/Cart/cartMutations";
import { getCartQuery } from "../../../../../queries/Cart/cartQueries";

const useStyles = makeStyles({
  productDiv: {
    //child selector
    "& > *": {
      margin: "10px 0",
    },
  },
});

const SingleProduct = (props) => {
  const classes = useStyles();
  const productid = props.match.params.id.split(":")[1];

  const [currentReview, setCurrentReview] = useState(null);

  const {
    error: getProductError,
    loading: getProductLoading,
    data: getProductData,
  } = useQuery(getSingleProduct, {
    variables: { id: productid },
  });

  const [addToCart, { error: addToCartError, data: cartData }] = useMutation(
    addToCartMutation,
    {
      refetchQueries: [{ query: getCartQuery }],
    }
  );

  if (getProductError) {
    return <div>Error in getting Product.. </div>;
  }
  if (getProductLoading) {
    return <div>Fetching Products</div>;
  }

  // data To Render
  const productData = getProductData.getProductById;
  const { productName, productDescription, productPrice } = productData;

  const onClickAddCart = (e) => {
    e.preventDefault();
    addToCart({
      variables: {
        ...productData,
      },
    });
    if (addToCartError) {
      throw addToCartError();
    } else {
      alert("added to cart");
    }
  };

  return (
    <div style={{ marginTop: "10px", padding: "20px" }}>
      <MyGridContainer justify="center" spacing={4}>
        <MyGridItem xs={8} sm={4}>
          <MyCardMedia
            height="300"
            title="IMAGE"
            image="https://source.unsplash.com/collection/190727/800x450"
          />
        </MyGridItem>
        <MyGridItem xs={8} sm={4}>
          <div className={classes.productDiv} style={{ maxWidth: " 500px" }}>
            <MyTypography variant="h5" component="h2">
              Product Name : {productName}
            </MyTypography>
            <MyTypography variant="body1" component="p">
              Description : {productDescription}
            </MyTypography>
            <MyTypography variant="h6" component="h6">
              Price : {productPrice}
            </MyTypography>
          </div>

          <div>
            <MyButtonComponent
              variant="outlined"
              size="medium"
              color="secondary"
              onClick={onClickAddCart}>
              ADD TO CART
            </MyButtonComponent>
            <span style={{ margin: "0 10px" }}></span>
            <Link
              to={`/checkout/:${productid}`}
              style={{
                textDecoration: "none",
              }}>
              <MyButtonComponent
                variant="contained"
                size="medium"
                color="primary">
                BUY NOW
              </MyButtonComponent>
            </Link>
          </div>
        </MyGridItem>
      </MyGridContainer>

      {/* review Form Component */}

      <MyGridContainer justify="center">
        <MyGridItem xs={8}>
          <ProductReviewForm
            currentReview={currentReview}
            setCurrentReview={setCurrentReview}
            productid={productid}
          />
        </MyGridItem>
      </MyGridContainer>
      <div>
        <MyFullScreenBox display="flex" width="100%">
          <h1 style={{ margin: "20px auto" }}>Rating and Reviews</h1>
        </MyFullScreenBox>

        {/* review List  Component */}

        <MyGridContainer justify="center">
          <MyGridItem xs={8}>
            {productData.reviews.map((review, index) => {
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
      </div>
    </div>
  );
};

export default SingleProduct;
