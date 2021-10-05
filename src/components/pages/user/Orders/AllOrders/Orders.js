import React, { useState } from "react";
import { MyTypography } from "../../../../design/MyTypography";
import OrderedProductList from "./Component/OrderedProductList/OrderedProductList";
import { MyButtonComponent } from "../../../../design/MyButtonComponent";
import { useQuery } from "@apollo/client";
import { GET__ORDERS_BY_CUSTOMERID } from "../../../../../queries/Order/orderQueries";
import { OrderStyles } from "./CSS/OrdersStyles";
import OrderFilter from "./Component/FilterComponent/OrderFilter";
import ShowError from "../../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../../layout/LoadingComponent/ShowLoading";
import { MyTextInput } from "../../../../design/MyFormFieldComponent";

const Orders = () => {
  const classes = OrderStyles();

  /**
   * This state passed orderFilter to set them
   *
   * And passed to OrderProductList to use this filter and filter the list
   */
  const [filters, setFilters] = useState({
    ByStatus: [],
    ByTime: [],
  });

  const [searchOrderKeyword, setSearchOrderKeyword] = useState("");

  /* this filter will use in this component because we can filter an order
   we don't need to filter every product */

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

  let orderData = getOrdersData.getOrdersByCustomerId;

  // console.log(priorDate);

  // code for printing date from given seconds
  // console.log(new Date(
  //   Number(singleOrder.orderedDate)
  // ).toDateString());

  if (filters.ByTime.length > 0) {
    let today = new Date();
    let priorDate;

    // let priorDataArray;

    // ByTime.map((timeFilter) => {
    //   if (timeFilter === "last30Days") {
    //     priorDataArray.push(new Date().setDate(today.getDate() - 10));
    //   }
    //   if (timeFilter === "older") {
    //     priorDataArray.push(new Date().setDate(today.getDate() - 10));
    //   }
    // });

    // filteredOrderData = orderData.filter((singleOrder) => {

    //   priorDataArray.map((priorDate) => {
    //     return singleOrder.orderedDate >= priorDate;
    //   });

    // });

    if (filters.ByTime.includes("last30Days")) {
      priorDate = new Date().setDate(today.getDate() - 10);
      orderData = orderData.filter((singleOrder) => {
        return singleOrder.orderedDate >= priorDate;
      });
    }
  }

  // we will filter orders using searchOrder state value
  const SearchOrderByKeyword = (e) => {
    e.preventDefault();
    const searchKeyword = searchOrderKeyword;

    orderData = orderData.map((singleOrder) => {
      const regex = new RegExp(`${searchKeyword}`, "gi");

      // singleOrder.productDetailsWithQuantity =

      // return {
      //   ...singleOrder,
      //   productDetailsWithQuantity:
      //     singleOrder.productDetailsWithQuantity.filter((singleProduct) => {
      //       const { productName, productDescription } =
      //         singleProduct.productDetails;
      //       // console.log(singleProduct.productDetails);
      //       // return productName.match(regex) || productDescription.match(regex);
      //       return true;
      //     }),
      // };
    });
  };

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
          <OrderFilter filters={filters} setFilters={setFilters} />
        </div>

        {/* Order Related , Right PART */}

        <div className={classes.orderListContainer}>
          {/* Search  component */}
          <div className={classes.SearchBoxContainer}>
            <div className={classes.inputDiv} style={{ marginRight: "5px" }}>
              <input
                onChange={(e) => {
                  setSearchOrderKeyword(e.target.value);
                }}
                name="searchOrder"
                value={searchOrderKeyword}
                placeholder="Search your order here"
                className={classes.inputSearchField}
              />
            </div>
            <MyButtonComponent
              variant="contained"
              color="primary"
              onClick={SearchOrderByKeyword}>
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
                  filters={filters}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
