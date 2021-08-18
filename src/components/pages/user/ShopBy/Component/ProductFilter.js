import React from "react";
import MyDivider from "../../../../Design/MyDivider";
import { MyPaper } from "../../../../Design/MyPaper";
import { MyTypography } from "../../../../Design/MyTypography";
import FilterLayout from "../../Orders/AllOrders/Component/FilterComponent/FilterLayout";
import OrderFilter from "../../Orders/AllOrders/Component/FilterComponent/OrderFilter";

const ProductFilter = () => {
  /** This will map to the checkbox then we don't need to
   * Write checkbox comp. again and again for every field
   * @param name - Name of the input Field
   * @param label - lable of the input Field
   */
  const productRatingFilter = [
    { label: "4 star and above", name: "On the Way" },
    { label: "3 star and above", name: "Delivered" },
    { label: "2 star and above", name: "Cancelled" },
    { label: "1 star and above", name: "Returned" },
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
        FilterHeading="Customer Rating"
        FilterByArray={productRatingFilter}
      />
    </MyPaper>
  );
};

export default ProductFilter;
