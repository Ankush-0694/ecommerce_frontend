import { CircularProgress } from "@material-ui/core";
import React from "react";

const ShowLoading = ({ children }) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <CircularProgress />
    </div>
  );
};

export default ShowLoading;
