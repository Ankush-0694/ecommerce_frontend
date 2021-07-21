import React from "react";
import MyDivider from "../../../../../../Design/MyDivider";
import { MyCheckbox } from "../../../../../../Design/MyFormFieldComponent";
import { MyPaper } from "../../../../../../Design/MyPaper";
import { MyTypography } from "../../../../../../Design/MyTypography";
import { OrderFilterStyles } from "../../CSS/OrderFilterStyles";

const OrderFilter = () => {
  const classes = OrderFilterStyles();

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
    { name: "onWay", label: "On the Way" },
    { name: "delivered", label: "Delivered" },
    { name: "cancelled", label: "Cancelled" },
    { name: "returned", label: "Returned" },
  ];

  return (
    <MyPaper className={classes.filterPaper}>
      <div style={{ marginBottom: "8px" }}>
        <MyTypography variant="h6">Filters</MyTypography>
      </div>
      <MyDivider></MyDivider>

      {/**  Filter based on Order Status  */}

      <div className={classes.onStatusCheckbox}>
        <h6>OrderStatus</h6>
        <div className="inputFields">
          {orderStatusFilter.map(({ name, label }, index) => {
            return (
              <div key={index}>
                <MyCheckbox
                  className={classes.checkbox}
                  label={label}
                  name={name}
                />
              </div>
            );
          })}
        </div>
      </div>
      <MyDivider></MyDivider>

      {/**  Filter based on Order Time */}

      <div className={classes.onStatusCheckbox}>
        <h6>Order Time</h6>
        <div className="inputFields">
          {orderTimeFilter.map(({ name, label }, index) => {
            return (
              <div key={index}>
                <MyCheckbox
                  className={classes.checkbox}
                  label={label}
                  name={name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </MyPaper>
  );
};

export default OrderFilter;
