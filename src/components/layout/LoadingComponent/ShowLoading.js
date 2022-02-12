import { CircularProgress } from "@mui/material";
import React from "react";

const ShowLoading = ({ Notfullscreen = false }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: !Notfullscreen && "100vh",
      }}>
      <CircularProgress />
    </div>
  );
};

export default ShowLoading;
