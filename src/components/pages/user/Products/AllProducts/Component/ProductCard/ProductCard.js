import { Star } from "@material-ui/icons";
import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { MyCardContainer } from "../../../../../../design/MyCardComponents";
import { MyCardContent } from "../../../../../../design/MyCardComponents";
import { MyCardMedia } from "../../../../../../design/MyCardComponents";
import { MyGridItem } from "../../../../../../design/MyGrid";
import { MyTypography } from "../../../../../../design/MyTypography";
import { ProductCardStyles } from "../../CSS/ProductCardStyles";

const ProductCard = ({ details, link, history, selectedRating }) => {
  const classes = ProductCardStyles();
  const { id, productName, productPrice, productImageUrl, reviews } = details;

  let avgRating = 0;
  reviews.map((singleReview) => {
    avgRating += singleReview.rating;
    avgRating = avgRating / 2;
  });

  // IF  product's avg rating is less than the selected filter value then we don't need to show that on UI
  if (selectedRating > avgRating) {
    return <Fragment></Fragment>;
  }

  return (
    <MyGridItem
      xs={12}
      sm={6}
      md={4}
      lg={3}
      userStyle={{ minWidth: "250px", maxWidth: "300px" }}>
      <MyCardContainer>
        <div style={{ position: "relative" }}>
          <Link to={link} style={{ textDecoration: "none" }}>
            <MyCardMedia height="160" title="IMAGE" image={productImageUrl} />

            <MyCardContent>
              <div className={classes.productDetails}>
                <MyTypography component="h3" variant="h6" color="textPrimary">
                  {productName}
                </MyTypography>
              </div>
              <div className={classes.productDetails}>
                <MyTypography component="p" variant="body2" color="textPrimary">
                  ₹ {productPrice}
                </MyTypography>
              </div>

              <div className={classes.rating}>
                <Star
                  style={{
                    fontSize: "16px",
                    marginTop: "-3px",
                    color: avgRating > 3 ? "green" : "red",
                  }}
                />{" "}
                {avgRating.toFixed(1)}
              </div>
            </MyCardContent>
          </Link>
        </div>
      </MyCardContainer>
    </MyGridItem>
  );
};

export default withRouter(ProductCard);
