import React from "react";
import queryString from "query-string";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_ORDER_BY_ID } from "../../../../../queries/Order/orderQueries";
import { MyTypography } from "../../../../Design/MyTypography";
import { OrderDetailsStyles } from "./CSS/OrderDetailsStyles";
import { MyPaper } from "../../../../Design/MyPaper";
import ProductList from "./Component/ProductList/ProductList";
import OrderedProductList from "../AllOrders/Component/OrderedProductList/OrderedProductList";

const OrderDetails = (props) => {
  const classes = OrderDetailsStyles();
  /* Get order details using order id but must use cache first */

  /**
   * @type {Object}
   * @param {ID} orderId Id of the Order
   * @param {ID} productId ProductID of that Product on Which we have click to check the status
   */
  const queryParameter = queryString.parse(props.location.search);

  const { orderId, productId } = queryParameter;

  const {
    error: getSingleOrderError,
    loading: getSingleOrderLoading,
    data: getSingleOrderData,
  } = useQuery(GET_SINGLE_ORDER_BY_ID, {
    variables: {
      orderID: orderId,
    },
  });

  if (getSingleOrderError) {
    return <div>Error Occured While getting Order Detail</div>;
  }

  if (getSingleOrderLoading) {
    return <div>Loading Order....</div>;
  }

  /* Have only single order but may have multiple products */
  const orderData = getSingleOrderData.getOrderById;

  const {
    address: { fullName, state, city, area, phoneNumber, pincode },
    totalPrice,
  } = orderData;

  /** These items will be shown to the bottom ,
   * As Heading will be Other items in the order
   * We are deleleting that product which have already shown on this page
   * @type {array}
   */
  const otherItemsToShow = orderData.productDetailsWithQuantity.filter(
    (mappedData) => {
      return mappedData.productDetails.id !== productId;
    }
  );

  return (
    <div className={classes.pageContainer}>
      <div className={classes.marginTopDiv}></div>
      {/* Heading */}
      <div className={classes.orderHeading}>
        <MyTypography component="h3" variant="h6">
          My Orders {">"} Order ID : {orderId}
        </MyTypography>
      </div>

      {/* Total Price For the Order */}

      <div className={classes.TotalPrice}>
        <MyPaper className={classes.totalPricePaper}>
          Total Amount Paid : {totalPrice}
        </MyPaper>
      </div>

      {/* Address Details */}

      <div className="addressContainer">
        <MyPaper elevation={3} className={classes.addressPaper}>
          <MyTypography
            component="h3"
            variant="h5"
            className={classes.addressHeading}>
            Delivery Address
          </MyTypography>
          <hr></hr>
          <div className="addressContent">
            <MyTypography component="h3" variant="h6">
              {fullName}
            </MyTypography>
            <div className={classes.addressDetail}>
              {area},{city},{state}-{pincode}
            </div>
            <div>
              <span style={{ fontWeight: "700" }}>PhoneNumber : </span>
              {phoneNumber}
            </div>
          </div>
        </MyPaper>
      </div>

      {/* Product Detail , which passed from param */}
      <div className="clickProductDetails">
        {/* Doing this logic and map , to pass only that product whose id passed through
            Query Parameter
         */}
        {orderData.productDetailsWithQuantity.map((mappedData) => {
          if (mappedData.productDetails.id === productId) {
            return (
              <ProductList
                productData={mappedData}
                orderedDate={orderData.orderedDate}
              />
            );
          }
        })}
      </div>

      {/* Other Product details which ordered with this product */}

      <div className="otherProduct">
        {/** This condition is needed to because if order have only single product then 
      we don't need to show anything */}
        {otherItemsToShow.length > 0 && (
          <MyPaper>
            <MyTypography className={classes.otherItemsHeading} variant="h5">
              Other Items in the Order
            </MyTypography>
            <div className="otherItemDiv">
              <OrderedProductList
                productData={otherItemsToShow}
                orderID={orderId}
              />
            </div>
          </MyPaper>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;

// .slice(0)
//                 .reverse()
