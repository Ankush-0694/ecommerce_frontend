import React from "react";
import { Link } from "react-router-dom";
import { MyGridContainer, MyGridItem } from "../../../../../../Design/MyGrid";
import { MyFiberManualRecordIcon } from "../../../../../../Design/MyIcons";
import { MyPaper } from "../../../../../../Design/MyPaper";
import { MyTypography } from "../../../../../../Design/MyTypography";
import { OrderedProductListStyles } from "../../CSS/OrderedProductListStyles";

/** This Component will be mapped from order Data Array and
 *
 * And then Again mapped from the product array which are in the single Order
 */
const OrderedProductList = ({ productData, orderID }) => {
  const classes = OrderedProductListStyles();

  return (
    <div>
      {/* Here we again map the product Details which comes from product, because order can 
      have multiple products */}
      {productData.map((mappedProductData) => {
        {
          /* Mapped product data has nested object  */
        }
        const { productDetails, orderStatus } = mappedProductData;
        const {
          id: productId,
          productName,
          productDescription,
          productPrice,
        } = productDetails;

        const queryParameter = `orderId=${orderID}&productId=${productId}`;

        return (
          <MyPaper className="orderListItem">
            {/** Link added to go to the Detailed page of the order */}

            <Link
              className={classes.orderedProductLinks}
              to={`/orders/details/?${queryParameter}`}>
              <MyGridContainer className="orderItem">
                {/* Image and Product Details Item */}
                <MyGridItem xs={6}>
                  <MyGridContainer>
                    <MyGridItem xs={3}>
                      <div className={classes.ImageDiv}>
                        <img
                          className={classes.imgStyle}
                          src="https://source.unsplash.com/collection/190727/900x600"
                        />
                      </div>
                    </MyGridItem>
                    <MyGridItem xs={8}>
                      <div>
                        <div className={classes.productName}>{productName}</div>
                        <MyTypography
                          variant="body2"
                          className={classes.productDesc}>
                          {productDescription}
                        </MyTypography>
                      </div>
                    </MyGridItem>
                  </MyGridContainer>
                </MyGridItem>

                {/* Amount Paid */}

                <MyGridItem xs={2}> ₹{productPrice} </MyGridItem>

                {/* Status
                  *
                    Make a separate component to do this.
                    Because there will be some logic for writing msg and choosing icon color
                 */}
                <MyGridItem xs={4}>
                  {/*Status Name And The icon , */}

                  <div className={classes.statusName}>
                    <span
                      className={classes.statusicon}
                      style={
                        // Just an if else using ternary operator
                        orderStatus == "delivered"
                          ? { color: "green" }
                          : orderStatus == "cancelled"
                          ? { color: "red" }
                          : { color: "orange" }
                      }>
                      <MyFiberManualRecordIcon />
                    </span>
                    {orderStatus}
                  </div>

                  {/* Status Message */}

                  <MyTypography variant="body2" className="statusMsg">
                    {/* THis message will be depend on the status */}
                    Your order has been delivered
                  </MyTypography>
                </MyGridItem>
              </MyGridContainer>
            </Link>
          </MyPaper>
        );
      })}
    </div>
  );
};

export default OrderedProductList;

// to change second into date Format
