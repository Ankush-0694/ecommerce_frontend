import React from "react";
import ProductLayout from "./ProductLayout/ProductLayout";
import { withRouter } from "../../../../../../helpers/HOC/withRouter";


/* Used to show order Summary on the Single checkout page */
const SingleProductDetails = ({
  productData,
  showQuantitySection = true,
  quantity,
  setQuantity,
}) => {
  return (
    <div>
      <ProductLayout
        productData={productData}
        quantity={quantity}
        setQuantity={setQuantity}
        showQuantitySection={showQuantitySection}
      />
    </div>
  );
};
export default withRouter(SingleProductDetails);
