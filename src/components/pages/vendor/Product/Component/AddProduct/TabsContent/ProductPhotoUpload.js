import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "../../../../../../../queries/Product/productMutations";

const ProductPhotoUpload = () => {
  const [uploadFile, { error, loading, data }] = useMutation(UPLOAD_FILE);

  const [File, setFile] = useState(null);

  const onChange = ({
    target: {
      validity,
      files: [file],
    },
  }) => {
    setFile(file);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    uploadFile({
      variables: {
        file: File,
      },
    });
  };

  return (
    <>
      <input type="file" required onChange={onChange} />
      <button type="submit">submit</button>
    </>
  );
};

export default ProductPhotoUpload;
