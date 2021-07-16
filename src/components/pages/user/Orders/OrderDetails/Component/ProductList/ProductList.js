import React from "react";
import { Link } from "react-router-dom";
import { MyGridContainer, MyGridItem } from "../../../../../../Design/MyGrid";
import { MyPaper } from "../../../../../../Design/MyPaper";
import { MyTypography } from "../../../../../../Design/MyTypography";
import OrderStatus from "../../../AllOrders/Component/OrderStatus/OrderStatus";
import { ProductListStyles } from "../../CSS/ProductListStyles";

/** This Component is used in OrderDetails component
 * to Show that product on which we click
 *  */
const ProductList = ({ productData, orderedDate }) => {
  const classes = ProductListStyles();

  const { productDetails, orderStatus, quantity } = productData;
  const {
    id: productId,
    productName,
    productDescription,
    productPrice,
  } = productDetails;

  orderedDate = new Date(Number(orderedDate)).toDateString();

  return (
    <div className={classes.clickProductDiv}>
      <MyPaper className={classes.productItemPaper}>
        {/* Container grid to divide into Paper into 3 part */}
        <MyGridContainer>
          <MyGridItem xs={3}>
            {/* Container to divide image and product Details separate */}
            <MyGridContainer>
              {/* Image Item */}
              <MyGridItem xs={5}>
                <div className={classes.ImageDiv}>
                  <img
                    className={classes.imgStyle}
                    src="https://source.unsplash.com/collection/190727/900x600"
                  />
                </div>
              </MyGridItem>

              {/* Product Details Item */}
              <MyGridItem xs={6}>
                <Link
                  className={classes.productLink}
                  to={`/products/:${productId}`}>
                  <div>
                    <div className={classes.productName}>{productName}</div>
                    <MyTypography
                      variant="body2"
                      className={classes.productDesc}>
                      {productDescription}
                    </MyTypography>
                    <MyTypography
                      variant="body2"
                      className={classes.productPrice}>
                      Price - ₹{productPrice}
                    </MyTypography>

                    <MyTypography
                      variant="body2"
                      className={classes.productDesc}>
                      Quantity : {quantity}
                    </MyTypography>
                  </div>
                </Link>
              </MyGridItem>
            </MyGridContainer>
          </MyGridItem>

          {/* Real Time Status and History of the status */}
          <MyGridItem xs={5}>
            <div>Order Date -{orderedDate} </div>
            <div>Delivery Date - {} </div>
          </MyGridItem>

          {/* Final Status */}

          <MyGridItem xs={4}>
            <OrderStatus orderStatus={orderStatus} />
          </MyGridItem>
        </MyGridContainer>
      </MyPaper>
    </div>
  );
};

export default ProductList;
