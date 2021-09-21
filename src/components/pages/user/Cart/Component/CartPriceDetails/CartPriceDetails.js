import React from "react";
import PriceLayout from "./PriceLayout/PriceLayout";

const CartPriceDetails = ({ quantity, itemCount, totalPrice }) => {
  let deliveryCharge = 0;
  if (totalPrice < 500 && totalPrice > 0) {
    deliveryCharge = 40;
  } else {
    deliveryCharge = 0;
  }

  const tableData = [
    {
      id: 1,
      rowName: `Price(${itemCount} Item)`,
      rowValue: totalPrice,
    },
    {
      id: 2,
      rowName: "Delivery Charge",
      rowValue: deliveryCharge,
    },
    {
      id: 3,
      rowName: "Total Amount",
      rowValue: totalPrice + deliveryCharge,
    },
  ];

  return (
    <div>
      <PriceLayout tableData={tableData} />
    </div>
  );
};
export default CartPriceDetails;
