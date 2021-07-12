import React, { useState } from "react";
import { makeVar, useMutation, useQuery } from "@apollo/client";
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

  const [currentReview, setCurrentReview] = useState(null);

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
  ] = useMutation(ADD_TO_CART);

  if (getProductError) {
    return <div>Error in getting Product.. </div>;
  }
  if (getProductLoading) {
    return <div>Fetching Products</div>;
  }

  // data To Render
  const productData = getProductData.getProductById;
  const { id, productName, productDescription, productPrice } = productData;

  // to add product into cart , will use both on addCart and buy Now
  //  giving warning  when we try to add same product to cart item which is already in cart
  // will solved when we handle duplication in backend,
  // and also many warnings
  const addToCartFunction = () => {
    addToCart({
      variables: {
        productID: id,
        productName,
        productDescription,
        productPrice,
      },
      // update: (cache, { data: addedCartData }) => {
      //   const data = cache.readQuery({ query: GET_CART });
      //   // need to newData var because we need to add a
      //   // new instance of all data , we can not use data var direclty
      //   let dataToUpdate = data.getCart;
      //   dataToUpdate = [...dataToUpdate, addedCartData];

      //   cache.writeQuery({
      //     query: GET_CART,
      //     data: { ...data, getCart: { dataToUpdate } },
      //   });
      // },
    });

    if (addToCartError) {
      throw addToCartError();
    } else {
      alert("added to cart");
    }
  };

  const onClickAddCart = (e) => {
    e.preventDefault();
    addToCartFunction();
  };

  const onClickBuyNow = (e) => {
    e.preventDefault();
    /**
     * adding this add to cart , because we are fetching
     * data from into checkout
     */
    // addToCartFunction();
    history.push({
      pathname: `/checkout/:${productid}`,
      state: [productid],
    });
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
