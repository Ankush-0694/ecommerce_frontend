import React, { useEffect } from "react";

import PriceLayout from "../../../Cart/Component/CartPriceDetails/PriceLayout/PriceLayout";

/** This component is common to the single and  multiple checkout
 *  We Separate the logic based on the quantity props.
 
 * If Quantity is false (it means we are using for multiple) , then we need to calculate
 *  price for multiple product else for single product
 */
const CheckoutPriceDetails = ({
  productDataProp, // this is coming from checkout multiple ((null for checkout Multiple))
  cartDataProp, //this is coming from checkout multiple (null for checkout single)
  quantityProp,
  setTotalPriceOfOrder,
}) => {
  /* Total amount for order */
  let totalPrice = 0;

  /* No of unique items in the list */
  let totalItems;

  /* Total quantity means , sum of all individual quantity */
  let totalQuantity = 0;

  /* This means that quantity has been passed from the single Product Checkout */
  if (quantityProp !== false) {
    totalItems = 1;
    totalQuantity = quantityProp;
    totalPrice = productDataProp.productPrice * quantityProp;
  }

  //this means we are calculating for checkout Multiple (checkout multiple sending cartData as a prop with name of productData)
  else {
    /* No of product items */
    totalItems = cartDataProp.length;

    /* Need to map and sum the quantity , Hence we got the total Quantity 
      And do the same for calculating the product price
    */
    cartDataProp.map((mappedCartData) => {
      const { quantity, productData } = mappedCartData;

      const { productPrice } = productData;

      totalQuantity += quantity;
      totalPrice += productPrice * quantity;
    });
  }

  /** Passed from checkout page as a props , to store price during adding order
   *
   * Using useEffect to prevent Error
   */

  useEffect(() => {
    setTotalPriceOfOrder(totalPrice);
  }, [totalPrice]);

  let deliveryCharge = 0;
  if (totalPrice < 500) deliveryCharge = 40;

  /** using priceLayout so need to pass
   * tableData according to that layout
   */
  const tableData = [
    {
      id: 1,
      rowName: `Price(${totalItems} Item)`,
      rowValue: totalPrice,
    },
    {
      id: 2,
      rowName: "Total Quantity",
      rowValue: totalQuantity,
    },
    {
      id: 3,
      rowName: "Delivery Charge",
      rowValue: deliveryCharge,
    },
    {
      id: 4,
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
export default CheckoutPriceDetails;
