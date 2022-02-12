import { useTheme,  } from "@mui/material/styles";
import {  makeStyles, withStyles } from "@mui/styles";

export const VendorNavbarStyles = makeStyles({
  navbar: {
    display: "flex",
    width: "90%",
    margin: "0px auto",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navBtn: {
    marginLeft: "8px",
    color: "white",
    "&:focus": {
      border: "none",
      outline: "none",
    },
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
});
