import React, { useState } from "react";
import { MyButtonComponent } from "../../../../../../design/MyButtonComponent";
import MyDivider from "../../../../../../design/MyDivider";
import { MyPaper } from "../../../../../../design/MyPaper";
import { MyTypography } from "../../../../../../design/MyTypography";
import CheckBoxFilterLayout from "./CheckboxFilterLayout";

const OrderFilter = ({ filters, setFilters }) => {
  const { ByStatus, ByTime } = filters;

  /** This will map to the checkbox then we don't need to
   * Write checkbox comp. again and again for every field
   * @param value - value of the input Field
   * @param label - lable of the input Field
   */
  const orderStatusFilter = [
    { value: "On The Way", label: "On The Way" },
    { value: "delivered", label: "Delivered" },
    { value: "cancelled", label: "Cancelled" },
    { value: "returned", label: "Returned" },
    { value: "pending", label: "Pending" },
  ];

  /**
   * Same as orderStatusFilter docs
   */
  const orderTimeFilter = [
    { value: "last30Days", label: "Last 30 Days" },
    { value: "older", label: "Older" },
  ];

  /** this function will be used when we try to uncheck the
      checkbox and delete that value from array 
  */
  const deleteFromArray = (array, item) => {
    let index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
  };

  // handle filter for both status and time
  const onFilterChange = (e) => {
    //filter By Status
    if (e.target.name === "ByStatus") {
      if (e.target.checked) {
        setFilters({
          ...filters,
          ByStatus: [...ByStatus, e.target.value],
        });
      } else {
        setFilters({
          ...filters,
          ByStatus: deleteFromArray(ByStatus, e.target.value),
        });
      }
    }

    //filter By time
    if (e.target.name === "ByTime") {
      if (e.target.checked) {
        setFilters({
          ...filters,
          ByTime: [...ByTime, e.target.value],
        });
      } else {
        setFilters({
          ...filters,
          ByTime: deleteFromArray(ByTime, e.target.value),
        });
      }
    }
  };

  return (
    <MyPaper style={{ padding: "10px 20px" }}>
      <div style={{ marginBottom: "8px" }}>
        <MyTypography variant="h6">Filters</MyTypography>
      </div>
      <MyDivider></MyDivider>

      {/**  Filter based on Order Status  */}

      {/* Pass  heading and filter array to FilterLayout Component */}
      <CheckBoxFilterLayout
        FilterHeading="Order Status"
        checkboxName="ByStatus"
        FilterByArray={orderStatusFilter}
        onFilterChange={onFilterChange}
      />

      <MyDivider></MyDivider>

      {/**  Filter based on Order Time */}

      {/* Pass  heading and filter array to FilterLayout Component */}

      <CheckBoxFilterLayout
        FilterHeading="Order Time"
        checkboxName="ByTime"
        FilterByArray={orderTimeFilter}
        onFilterChange={onFilterChange}
      />

      <MyDivider></MyDivider>

      {/* Clear filter feature */}

      {/* <div style={{ textAlign: "center", marginTop: "16px" }}>
        <MyButtonComponent
          onClick={() => {
            setFilters({
              ByStatus: [],
              ByTime: [],
            });

            document.querySelectorAll("input[type=checkbox]").forEach((el) => {
              return (el.checked = false);
            });
          }}
          variant="contained"
          color="secondary">
          Clear Filters
        </MyButtonComponent>
      </div> */}
    </MyPaper>
  );
};

export default OrderFilter;
