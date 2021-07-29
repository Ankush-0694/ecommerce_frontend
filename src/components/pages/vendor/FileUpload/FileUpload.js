import { useMutation } from "@apollo/client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UPLOAD_FILE } from "../../../../queries/Product/productMutations";

const FileUpload = () => {
  const [uploadFile, { error, loading, data }] = useMutation(UPLOAD_FILE);

  if (!loading) {
    console.log(data);
  }

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
  console.log(File);

  return (
    <form onSubmit={onSubmit}>
      <input type="file" required onChange={onChange} />
      <button type="submit">submit</button>
    </form>
  );
};

export default FileUpload;
