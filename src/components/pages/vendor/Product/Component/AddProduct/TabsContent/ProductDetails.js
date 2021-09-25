import React from "react";
import {
  MyMultilineInput,
  MyTextInput,
} from "../../../../../../design/MyFormFieldComponent";

const ProductDetails = (props) => {
  const { productFormData, onChange } = props;
  const { productName, productPrice, productDescription } = productFormData;

  return (
    <div>
      <div className="field">
        <MyTextInput
          name="productName"
          onChange={onChange}
          value={productName}
          type="text"
          label="Product Name"
        />
      </div>
      <div className="field">
        <MyMultilineInput
          rows={3}
          variant="outlined"
          name="productDescription"
          value={productDescription}
          onChange={onChange}
          label="Product Description"
          type="text"
        />
      </div>
      <div className="field">
        <MyTextInput
          name="productPrice"
          value={productPrice}
          onChange={onChange}
          label="Product Price"
          type="text"
        />
      </div>
    </div>
  );
};

export default ProductDetails;
