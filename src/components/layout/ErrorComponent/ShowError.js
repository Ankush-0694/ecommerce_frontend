import React from "react";

const ShowError = ({ children }) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {children}
    </div>
  );
};

export default ShowError;
