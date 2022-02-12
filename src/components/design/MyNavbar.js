import React from "react";
import { makeStyles} from './MyUseStyles';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const useStyles = makeStyles(() => ({
  /** Adding this to make admin navbar top of menu toolbar */
  navbar: {
    zIndex: "20000",
    // backgroundColor: "#023e8a",
    backgroundColor: "red",
    // backgroundColor: "#3f51b5",
  },
}));

export function MyNavbar({ children }) {
  const classes = useStyles();

  return (
    <AppBar style={{backgroundColor:"#023e8a"}} position="fixed" color="transparent" className={classes.navbar}>
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
}
