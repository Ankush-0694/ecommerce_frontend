import React from "react";
import { MyCardMedia } from "../../../../../../Design/MyCardComponents";
import { MyGridContainer, MyGridItem } from "../../../../../../Design/MyGrid";
import { MyPaper } from "../../../../../../Design/MyPaper";
import { MyTypography } from "../../../../../../Design/MyTypography";
import { AllProductStyles } from "../../../../../vendor/Product/CSS/AllProductStyles";

const ProductListItem = ({ data }) => {
  /* We are fetching this styling from vendor because we are using same type of component */
  const classes = AllProductStyles();
  const { id, productName, productPrice, productDescription } = data;
  return (
    <div className="productListItemContainer">
      <MyPaper className={classes.ListItemPaper}>
        <MyGridContainer>
          {/* Image and ProductDetails grid item */}
          <MyGridItem xs={8}>
            <MyGridContainer>
              {/* Image  Grid item */}

              <MyGridItem xs={5}>
                <div className={classes.imgDiv}>
                  <MyCardMedia
                    height="100"
                    className={classes.MediaImg}
                    style={{ minWidth: "80px" }}
                    title="IMAGE"
                    image="https://source.unsplash.com/collection/190727/800x450"
                  />
                </div>
              </MyGridItem>

              {/* Product  Grid  item */}

              <MyGridItem xs={7}>
                <div>
                  <MyTypography variant="h6" component="h6">
                    {productName}
                  </MyTypography>
                  <MyTypography variant="body1" component="p">
                    {productDescription}
                  </MyTypography>
                  <MyTypography variant="h6" component="h6">
                    Price - ₹{productPrice}
                  </MyTypography>
                </div>
              </MyGridItem>

              {/* Here can add more additional  grid item like vendor update and delete button */}
            </MyGridContainer>
          </MyGridItem>
        </MyGridContainer>
      </MyPaper>
    </div>
  );
};

export default ProductListItem;
