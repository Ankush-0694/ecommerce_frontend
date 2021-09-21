import React from "react";
import { withRouter } from "react-router-dom";
import ProductLayout from "./ProductLayout/ProductLayout";

/* Used to show order Summary on the Single checkout page */
const SingleProductDetails = ({ productData, quantity, setQuantity }) => {
  return (
    <div>
      <ProductLayout
        productData={productData}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
};
export default withRouter(SingleProductDetails);
