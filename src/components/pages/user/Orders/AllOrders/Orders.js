import React from "react";
import { MyPaper } from "../../../../Design/MyPaper";
import { MyTypography } from "../../../../Design/MyTypography";
import OrderedProductList from "./Component/OrderedProductList/OrderedProductList";
import { MyButtonComponent } from "../../../../Design/MyButtonComponent";
import { useQuery } from "@apollo/client";
import { GET__ORDERS_BY_CUSTOMERID } from "../../../../../queries/Order/orderQueries";
import { OrderStyles } from "./CSS/OrdersStyles";
import OrderFilter from "./Component/FilterComponent/OrderFilter";
import ShowError from "../../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../../layout/LoadingComponent/ShowLoading";

const Orders = () => {
  const classes = OrderStyles();

  const {
    error: getOrdersError,
    loading: getOrdersLoading,
    data: getOrdersData,
  } = useQuery(GET__ORDERS_BY_CUSTOMERID);

  if (getOrdersError) {
    return <ShowError>Error Occured While getting Orders</ShowError>;
  }

  if (getOrdersLoading) {
    return <ShowLoading />;
  }
  /** This data will be rendered but before we need
   * to destructure that cause of nested productDetails
   * @type {array} - Every Order further have productDetailsWithQuantity Array
   */

  const orderData = getOrdersData.getOrdersByCustomerId;

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
          <OrderFilter />
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

          {orderData
            .slice(0)
            .reverse()
            .map((mappedOrderData) => {
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
