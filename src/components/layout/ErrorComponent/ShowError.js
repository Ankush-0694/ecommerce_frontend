import { ErrorRounded } from "@material-ui/icons";
import React from "react";

const ShowError = ({ children }) => {
  return (
    <div
      style={{
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}>
      <ErrorRounded style={{ color: "red", marginRight: "10px" }} />
      <span style={{ color: "red" }}>{children}</span>
    </div>
  );
};

export default ShowError;
