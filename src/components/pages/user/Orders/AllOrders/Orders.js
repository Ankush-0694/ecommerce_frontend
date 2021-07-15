import React from "react";
import { MyPaper } from "../../../../Design/MyPaper";
import { MyTypography } from "../../../../Design/MyTypography";
import OrderedProductList from "./Component/OrderedProductList/OrderedProductList";
import { MyButtonComponent } from "../../../../Design/MyButtonComponent";
import { useQuery } from "@apollo/client";
import { GET_ALL_ORDERS } from "../../../../../queries/Order/orderQueries";
import { OrderStyles } from "./CSS/OrdersStyles";

const Orders = () => {
  const classes = OrderStyles();

  const {
    error: getOrdersError,
    loading: getOrdersLoading,
    data: getOrdersData,
  } = useQuery(GET_ALL_ORDERS);

  if (getOrdersError) {
    return <div>Error Occured While getting Orders</div>;
  }

  if (getOrdersLoading) {
    return <div>Loading Orders....</div>;
  }
  /** This data will be rendered but before we need
   * to destructure that cause of nested productDetails
   * @type {array} - Every Order further have productDetailsWithQuantity Array
   */

  const orderData = getOrdersData.getAllOrders;

  return (
    <div className={classes.pageContainer}>
      <div className={classes.marginTopDiv}></div>
      <div className={classes.orderHeading}>
        <MyTypography component="h3" variant="h4">
          My Orders
        </MyTypography>
      </div>
      <div className={classes.FilterAndOrderListContainer}>
        {/* Filter  component , LEFT PART */}

        <div className={classes.filterContainer}>
          <MyPaper>Hello</MyPaper>
        </div>

        {/* Order Related , Right PART */}

        <div className={classes.orderListContainer}>
          {/* Search  component */}
          <div className={classes.SearchBoxContainer}>
            <div className={classes.inputDiv} style={{ marginRight: "5px" }}>
              <input
                placeholder="Search your order here"
                className={classes.inputSearchField}
              />
            </div>
            <MyButtonComponent variant="contained" color="primary">
              Search Order
            </MyButtonComponent>
          </div>

          {/* Order List Item component by mapping all orders */}

          {orderData.map((mappedOrderData) => {
            /** type@ {Array} */
            const { id, productDetailsWithQuantity } = mappedOrderData;

            return (
              <OrderedProductList
                key={id}
                orderID={id}
                productData={productDetailsWithQuantity}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
