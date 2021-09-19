import React, { useState } from "react";
import { MyMultilineInput } from "../../../../../../Design/MyFormFieldComponent";

const ProductPhotoUpload = ({ onChange, productImageUrl }) => {
  return (
    <div>
      <h3>Add Image Link</h3>

      {/* We can use textAreaAutoSize of material ui */}
      <MyMultilineInput
        onChange={onChange}
        name="productImageUrl"
        value={productImageUrl}
        rows={3}
        variant="outlined"
      />

      <p>
        <a href="https://unsplash.com/" rel="noreferrer" target="_blank">
          Unsplash Link
        </a>
      </p>
    </div>
  );
};

export default ProductPhotoUpload;
