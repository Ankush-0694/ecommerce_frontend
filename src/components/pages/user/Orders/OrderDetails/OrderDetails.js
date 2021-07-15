import React from "react";
import queryString from "query-string";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_ORDER_BY_ID } from "../../../../../queries/Order/orderQueries";
import { MyTypography } from "../../../../Design/MyTypography";
import { OrderDetailsStyles } from "./CSS/OrderDetailsStyles";
import { MyPaper } from "../../../../Design/MyPaper";

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

  const orderData = getSingleOrderData.getOrderById;

  const {
    address: { fullName, state, city, area, phoneNumber, pincode },
  } = orderData;

  return (
    <div className={classes.pageContainer}>
      <div className={classes.marginTopDiv}></div>
      <div className={classes.orderHeading}>
        <MyTypography component="h3" variant="h6">
          My Orders {">"} Order ID : {orderId}
        </MyTypography>
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
    </div>
  );
};

export default OrderDetails;
