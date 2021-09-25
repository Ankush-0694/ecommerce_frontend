import React, { useEffect, useState } from "react";

import { UPDATE_CART_QUANTITY } from "../../../../../../queries/Cart/cartMutations";
import { useMutation } from "@apollo/client";
import ProductLayout from "./ProductLayout/ProductLayout";
import { makeStyles } from "../../../../../design/MyUseStyles";

const useStyles = makeStyles({
  productDiv: {
    //child selector
    "& > *": {
      margin: "10px 0",
    },
  },
});

const MultipleProductDetails = ({ cartDataProp }) => {
  const classes = useStyles();

  /**  This is single cart data  */
  const { quantity, id: cartID, productData } = cartDataProp;

  /** Destructuring futher productData to show the data on ui */

  /**  State to show quantity on UI and when it changes , we can call updateQuantity on update */
  const [quantityCount, setQuantityCount] = useState(quantity);

  // mutation to chaning the quantity of cart item
  const [updateCartQuantity, { data: updateCartData }] = useMutation(
    UPDATE_CART_QUANTITY,
    {
      onError: () => {},
    }
  );

  /**
   * This function is called from useEffect when we change the quantity of the item
   * @param {string} id -an ID- The id of the cart Item.
   * @param {string} quantity - New updated Quantity of the cart item
   */
  const setQuantityById = (cartID, quantity) => {
    updateCartQuantity({
      variables: {
        cartID: cartID,
        quantity: quantity,
      },
    });
  };

  /** Whenever quantity changes , we call the setQuantity function  */
  useEffect(() => {
    //eslint
    //setting quantity only if it is valid
    if (quantityCount > 0 && quantityCount != "") {
      setQuantityById(cartID, quantityCount);
    }
  }, [quantityCount]);

  return (
    <div className={classes.productDiv}>
      <ProductLayout
        productData={productData}
        quantity={quantityCount}
        setQuantity={setQuantityCount}
      />
    </div>
  );
};
export default MultipleProductDetails;
