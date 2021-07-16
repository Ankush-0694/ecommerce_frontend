import React from "react";
import { OrderedProductListStyles } from "../../CSS/OrderedProductListStyles";
import { MyFiberManualRecordIcon } from "../../../../../../Design/MyIcons";
import { MyTypography } from "../../../../../../Design/MyTypography";

/** This component will be used in OrderedProductList
 * to show the current status of the order with an color icon
 *  */
const OrderStatus = ({ orderStatus }) => {
  /** Will be decide on the basis of the status */
  let iconColor = "black"; // default(returned or any Other)

  /** Decide on the basic what type of order Status */
  let statusMessage = "";

  if (orderStatus === "delivered") {
    iconColor = "green";
    statusMessage = "Your Item has been delivered";
  }
  if (orderStatus === "cancelled") {
    iconColor = "red";
    statusMessage = "You cancelled your order";
  }
  if (orderStatus === "pending") {
    iconColor = "#D9512C";
    statusMessage = "Please wait for confirmation of the order";
  }
  if (orderStatus === "returned") {
    iconColor = "orange";
    statusMessage = "You returned this order";
  }

  const classes = OrderedProductListStyles;

  return (
    <div>
      <div className={classes.statusName}>
        <span className={classes.statusicon} style={{ color: iconColor }}>
          <MyFiberManualRecordIcon />
        </span>
        {orderStatus}
      </div>

      {/* Status Message */}

      <MyTypography variant="body2" className="statusMsg">
        {/* THis message will be depend on the status */}
        {statusMessage}
      </MyTypography>
    </div>
  );
};

export default OrderStatus;