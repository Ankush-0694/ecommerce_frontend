import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { getSingleProduct } from "../../../../../queries/productQueries";
import ProductReviewForm from "./ProductReviewForm";
import ProductReviews from "./ProductReviews";
import { MyGridContainer } from "../../../../Design/MyGrid";
import { MyGridItem } from "../../../../Design/MyGrid";
import { MyTypography } from "../../../../Design/MyTypography";
import { makeStyles } from "../../../../Design/MyUseStyles";
import { MyCardMedia } from "../../../../Design/MyCardComponents/CardMedia";
import { MyFullScreenBox } from "../../../../Design/FullScreenBox";
import { MyButtonComponent } from "../../../../Design/ButtonComponent";

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
  console.log(productid);

  const obj = useQuery(getSingleProduct, {
    variables: { id: productid },
  });
  const { loading, error, data } = obj;
  console.log(data);
  //   console.log(data);
  let productData;
  if (!loading) {
    productData = data.product;
  }

  return (
    <div style={{ marginTop: "10px" }}>
      {!loading ? (
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
                Product Name : {productData.productName}
              </MyTypography>
              <MyTypography variant="body1" component="p">
                Description : {productData.productDescription}
              </MyTypography>
              <MyTypography variant="h6" component="h6">
                Price : {productData.productPrice}
              </MyTypography>
            </div>

            <div>
              <MyButtonComponent
                variant="outlined"
                size="medium"
                color="secondary">
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
      ) : (
        <p>Loading...</p>
      )}
      <MyGridContainer justify="center">
        <MyGridItem xs={8}>
          <ProductReviewForm productid={productid} />
        </MyGridItem>
      </MyGridContainer>
      <div>
        <MyFullScreenBox display="flex" width="100%">
          <h1 style={{ margin: "20px auto" }}>Rating and Reviews</h1>
        </MyFullScreenBox>
        {!loading ? (
          <MyGridContainer justify="center">
            <MyGridItem xs={8}>
              <ProductReviews reviews={productData.reviews} />
            </MyGridItem>
          </MyGridContainer>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
