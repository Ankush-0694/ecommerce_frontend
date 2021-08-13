import React, { useEffect, useState } from "react";
import { makeVar, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_SINGLE_PRODUCT } from "../../../../../queries/Product/productQueries";
import ProductReviewForm from "./Component/ProductReviewForm/ProductReviewForm";
import ProductReviewList from "./Component/ProductReviewList/ProductReviewList";
import { MyGridContainer } from "../../../../Design/MyGrid";
import { MyGridItem } from "../../../../Design/MyGrid";
import { MyTypography } from "../../../../Design/MyTypography";
import { makeStyles } from "../../../../Design/MyUseStyles";
import { MyCardMedia } from "../../../../Design/MyCardComponents";
import { MyFullScreenBox } from "../../../../Design/MyFullScreenBox";
import { MyButtonComponent } from "../../../../Design/MyButtonComponent";
import { ADD_TO_CART } from "../../../../../queries/Cart/cartMutations";
import { GET_CART } from "../../../../../queries/Cart/cartQueries";
import MyAlert from "../../../../Design/MyAlert";
import { errorVar } from "../../../../../ReactiveVariables/ReactiveVariables";
import ShowError from "../../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../../layout/LoadingComponent/ShowLoading";
import { MyPaper } from "../../../../Design/MyPaper";

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
  const { history } = props;

  /** For adding and updating the data using same form */
  const [currentReview, setCurrentReview] = useState(null);

  /** Make it true after Add to cart completion , and so success alert based on this state
   * We May need to setCartAdded false in the myalert Component just like we did for address(setSubmitEvent)
   * Because We may need to add items on shop page one after one
   * Add to Cart button will be disabled when it is true
   */
  const [cartAdded, setCartAdded] = useState(false);

  const {
    error: getProductError,
    loading: getProductLoading,
    data: getProductData,
  } = useQuery(GET_SINGLE_PRODUCT, {
    variables: { id: productid },
  });

  const [
    addToCart,
    { error: addToCartError, loading: addToCartLoading, data: cartData },
  ] = useMutation(ADD_TO_CART, {
    refetchQueries: [{ query: GET_CART }],
    onError: () => {},
    onCompleted: () => {
      setCartAdded(true);
      // props.history.push("/cart");
    },
  });

  if (getProductError) {
    return <ShowError>Error While Fetching Product.. </ShowError>;
  }
  if (getProductLoading) {
    return <ShowLoading />;
  }

  // data To Render
  const productData = getProductData.getProductById;
  const { id, productName, productDescription, productPrice } = productData;

  /** adding item to the cart in backend
   * Used onCompleted for mutation
   */
  const addToCartFunction = () => {
    addToCart({
      variables: {
        productID: id,
        productName,
        productDescription,
        productPrice,
      },
    });
  };

  /** adding item to cart */
  const onClickAddCart = (e) => {
    e.preventDefault();
    addToCartFunction();
  };

  /** Checkout the Product for placing the order
   * While redirecting , we needed to pass the productid , it will be helpful
   * in single checkout.
   */
  const onClickBuyNow = (e) => {
    e.preventDefault();
    history.push({
      pathname: `/checkout/:${productid}`,
      state: [productid],
    });
  };

  return (
    <div style={{ marginTop: "10px", padding: "20px" }}>
      {/** If product successfully cartAdded to cart - Show This Alert  */}
      {cartAdded && (
        <MyAlert type="success" setCartAdded={setCartAdded}>
          cartAdded To cart{" "}
          <button
            onClick={() => {
              history.push("/cart");
            }}>
            Go To cart
          </button>
        </MyAlert>
      )}

      {/** If product already cartAdded to cart then error alert */}
      {addToCartError && <MyAlert type="error">{errorVar()}</MyAlert>}

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
              disabled={(cartAdded || addToCartError) && true} // we disabled this to prevent user click addToCart continuously
              onClick={onClickAddCart}>
              ADD TO CART
            </MyButtonComponent>
            <span style={{ margin: "0 10px" }}></span>

            {/* Buy Now Link and button */}

            <MyButtonComponent
              variant="contained"
              size="medium"
              color="primary"
              onClick={onClickBuyNow}>
              BUY NOW
            </MyButtonComponent>
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
            <MyPaper style={{ padding: "20px" }}>
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
            </MyPaper>
          </MyGridItem>
        </MyGridContainer>
      </div>
    </div>
  );
};

export default SingleProduct;
