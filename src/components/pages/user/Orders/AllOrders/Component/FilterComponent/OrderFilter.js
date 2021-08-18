import React from "react";
import MyDivider from "../../../../../../Design/MyDivider";
import { MyPaper } from "../../../../../../Design/MyPaper";
import { MyTypography } from "../../../../../../Design/MyTypography";
import FilterLayout from "./FilterLayout";

const OrderFilter = () => {
  /** This will map to the checkbox then we don't need to
   * Write checkbox comp. again and again for every field
   * @param name - Name of the input Field
   * @param label - lable of the input Field
   */
  const orderStatusFilter = [
    { name: "onWay", label: "On the Way" },
    { name: "delivered", label: "Delivered" },
    { name: "cancelled", label: "Cancelled" },
    { name: "returned", label: "Returned" },
  ];

  /**
   * Same as orderStatusFilter docs
   */
  const orderTimeFilter = [
    { name: "last30Days", label: "Last 30 Days" },
    { name: "older", label: "Older" },
  ];

  return (
    <MyPaper style={{ padding: "10px 20px" }}>
      <div style={{ marginBottom: "8px" }}>
        <MyTypography variant="h6">Filters</MyTypography>
      </div>
      <MyDivider></MyDivider>

      {/**  Filter based on Order Status  */}

      {/* Pass and heading and filter array to FilterLayout Component */}

      <FilterLayout
        FilterHeading="Order Status"
        FilterByArray={orderStatusFilter}
      />
      <MyDivider></MyDivider>

      {/**  Filter based on Order Time */}

      {/* Pass and heading and filter array to FilterLayout Component */}

      <FilterLayout
        FilterHeading="Order Time"
        FilterByArray={orderTimeFilter}
      />
    </MyPaper>
  );
};

export default OrderFilter;
