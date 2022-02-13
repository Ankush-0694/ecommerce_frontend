import React from "react";
import { Link } from "react-router-dom";
import { MyButtonComponent } from "../../../../../../design/MyButtonComponent";
import { MyGridContainer, MyGridItem } from "../../../../../../design/MyGrid";
import { MyIcon } from "../../../../../../design/MyIcons";
import { MyPaper } from "../../../../../../design/MyPaper";
import { MyTypography } from "../../../../../../design/MyTypography";
import { OrderedProductListStyles } from "../../CSS/OrderedProductListStyles";
import OrderStatus from "./OrderStatus/OrderStatus";
import { withRouter } from "../../../../../../../helpers/HOC/withRouter";

/** This Component will be mapped from order Data Array and
 *
 * And then Again mapped from the product array which are in the single Order
 *
 * This component used in Order.js (to show all products in the orders)
 *  and OrderDetails.js(to show others products in order(other than on which we clicked)  )
 */
const OrderedProductList = ({ productData, orderID, filters, Navigate }) => {
  const classes = OrderedProductListStyles();

  const { ByStatus } = filters;

  /**
   * Filtering data according to their order Status
   * Don't want to use filter if selelected filter is empty
   * */
  if (ByStatus.length > 0) {
    productData = productData.filter((singleProduct) =>
      ByStatus.includes(singleProduct.orderStatus)
    );
  }

  return (
    <div>
      {/* Here we again map the product Details which comes from product, because order can 
      have multiple products */}
      {productData.map((mappedProductData) => {
        {
          /* Mapped product data has nested object  */
        }
        const { productDetails, orderStatus, quantity } = mappedProductData;
        const {
          id: productId,
          productName,
          productDescription,
          productPrice,
          productImageUrl,
        } = productDetails;

        const queryParameter = `orderId=${orderID}&productId=${productId}`;

        return (
          <MyPaper className="orderListItem" key={`${productId}_${orderID}`}>
            {/** Link added to go to the Detailed page of the order */}

            <Link
              className={classes.orderedProductLinks}
              to={`/orders/details?${queryParameter}`}>
              <MyGridContainer className="orderItem">
                {/* Image and Product Details Item */}

                <MyGridItem xs={6}>
                  <MyGridContainer>
                    {/* Image Item */}

                    <MyGridItem xs={3}>
                      <div className={classes.ImageDiv}>
                        <img
                          className={classes.imgStyle}
                          src={productImageUrl}
                        />
                      </div>
                    </MyGridItem>
                    {/* Product Details Grid */}
                    <MyGridItem xs={8}>
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
                    </MyGridItem>
                  </MyGridContainer>
                </MyGridItem>

                {/* Amount Paid on this Product */}

                <MyGridItem xs={2}>
                  Total - ₹{productPrice * quantity}
                </MyGridItem>

                {/* Status
                  *
                    Make a separate component to do this.
                    Because there will be some logic for writing msg and choosing icon color
                 */}
                <MyGridItem xs={4}>
                  {/*Status Name And The icon , */}

                  <OrderStatus orderStatus={orderStatus} />

                  <MyButtonComponent
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={(e) => {
                      Navigate(`review/${productId}`);

                      // well , it worked but don't know how
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className={classes.rateAndReviewButton}>
                    <MyIcon className={classes.staricon}>
                      {"star_border_Icon"}
                    </MyIcon>
                    Rate And Review
                  </MyButtonComponent>
                </MyGridItem>
              </MyGridContainer>
            </Link>
          </MyPaper>
        );
      })}
    </div>
  );
};

export default withRouter(OrderedProductList);

// to change second into date Format
