import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_SINGLE_PRODUCT } from "../../../../../queries/Product/productQueries";
import ProductReviewForm from "./Component/ProductReviewForm/ProductReviewForm";
import ProductReviewList from "./Component/ProductReviewList/ProductReviewList";
import { MyGridContainer } from "../../../../design/MyGrid";
import { MyGridItem } from "../../../../design/MyGrid";
import { MyTypography } from "../../../../design/MyTypography";
import { MyCardMedia } from "../../../../design/MyCardComponents";
import { MyFullScreenBox } from "../../../../design/MyFullScreenBox";
import { MyButtonComponent } from "../../../../design/MyButtonComponent";
import { ADD_TO_CART } from "../../../../../queries/Cart/cartMutations";
import { GET_CART_BY_CUSTOMERID } from "../../../../../queries/Cart/cartQueries";
import MyAlert from "../../../../design/MyAlert";
import { errorVar } from "../../../../../helpers/ReactiveVariables/ReactiveVariables";
import ShowError from "../../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../../layout/LoadingComponent/ShowLoading";
import { MyPaper } from "../../../../design/MyPaper";
import MyDivider from "../../../../design/MyDivider";
import { Fragment } from "react";
import { SingleProductStyles } from "./CSS/SingleProductStyles";

const SingleProduct = (props) => {
  const classes = SingleProductStyles();
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
    refetchQueries: [{ query: GET_CART_BY_CUSTOMERID }],
    onError: () => {},
    onCompleted: () => {
      setCartAdded(true);
    },
  });

  if (getProductError) {
    return <ShowError>Error While Fetching Product.. </ShowError>;
  }
  if (getProductLoading) {
    return <ShowLoading />;
  }

  // data To Render
  const productData = getProductData.getProductByProductId;

  /** If no product Match then we should not destructure it
   * if user change the productId from url (if objectid is valid then this will show)
   */
  if (productData === null) {
    return <h1>No Product Found</h1>;
  }
  const {
    id,
    productName,
    productDescription,
    productPrice,
    productCategory,
    productSubCategory,
    productBrand,
    productImageUrl,
  } = productData;

  /** destructuring review data
   * This will be an array
   */
  const { reviews } = productData;

  /** adding item to the cart in backend
   * Used onCompleted for mutation
   */
  const addToCartFunction = () => {
    addToCart({
      variables: {
        productID: id,
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
    <div style={{ marginTop: "20px" }}>
      {/** If product successfully Added to cart - Show this success Alert
        * Need to clear this state to in every MyAlert for showing alert again if again added to cart

        * Note - Here there will no effect but we must clear the state if alert is depend on that
        */}
      {cartAdded && (
        <MyAlert type="success" stateToClear={setCartAdded}>
          {productName} is added to your Cart successfully
        </MyAlert>
      )}

      {/** If product already cartAdded to cart then error alert
       *
       * No need to pass prop to alert component because apollo state are managed automatically
       *
       */}
      {addToCartError && <MyAlert type="error">{errorVar()}</MyAlert>}

      <MyGridContainer justify="center" spacing={4}>
        {/* Product Details  */}

        {/* Image Item */}
        <MyGridItem xs={8} sm={4}>
          <MyCardMedia height="300" title="IMAGE" image={productImageUrl} />
        </MyGridItem>

        {/* product information */}
        <MyGridItem xs={8} sm={4}>
          <div className={classes.productDiv}>
            <MyTypography variant="h5" component="h2">
              {productName}
            </MyTypography>
            <MyTypography
              className={classes.lightFont}
              variant="body1"
              component="p">
              Description : {productDescription}
            </MyTypography>
            <MyTypography
              className={classes.lightFont}
              variant="body1"
              component="p">
              Brand : {productBrand}
            </MyTypography>
            <MyTypography
              className={classes.lightFont}
              variant="body1"
              component="p">
              Category : {productCategory.categoryName}
            </MyTypography>
            <MyTypography
              className={classes.lightFont}
              variant="body1"
              component="p">
              SubCategory - {productSubCategory}
            </MyTypography>
            <MyTypography variant="h6" component="h6">
              ₹ {productPrice}
            </MyTypography>
          </div>

          {/* Buttons AddCart And Buy Now */}
          <div>
            {/* AddToCart Button */}
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

      <MyDivider />

      {/* this style for making some space at the end of reviews  */}
      <div style={{ paddingBottom: "24px" }}>
        <div className={classes.RatingAndReviewHeading}>
          Ratings and Reviews
        </div>

        {/* review List  Component */}

        <MyGridContainer justify="center">
          <MyGridItem xs={8}>
            {productData.reviews.length > 0 ? (
              <MyPaper style={{ padding: "20px", marginTop: "5px" }}>
                {productData.reviews.map((review) => {
                  return (
                    <Fragment key={review.id}>
                      <ProductReviewList
                        currentReview={currentReview}
                        setCurrentReview={setCurrentReview}
                        reviewData={review}
                      />

                      {productData.reviews[productData.reviews.length - 1] !==
                        review && <hr></hr>}
                    </Fragment>
                  );
                })}
              </MyPaper>
            ) : (
              <MyFullScreenBox display="flex" width="100%">
                <h4 style={{ margin: "20px auto" }}>
                  No Reviews Added on this Product
                </h4>
              </MyFullScreenBox>
            )}
          </MyGridItem>
        </MyGridContainer>
      </div>
    </div>
  );
};

export default SingleProduct;

// if need to use go to cart on adding cart in myAlert
{
  /* <MyButtonComponent
            variant="outlined"
            size="small"
            color="primary"
            userStyle={{ padding: "3px 5px", marginLeft: "5px" }}
            onClick={() => {
              history.push("/cart");
            }}>
            Go To cart
          </MyButtonComponent> */
}
