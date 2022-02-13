import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";


export function MyNavbar({ children }) {

  return (
    <AppBar style={{ backgroundColor:"#023e8a", zIndex: "20000" }} position="fixed" color="transparent">
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
}
