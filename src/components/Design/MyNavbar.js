import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  /** Adding this to make admin navbar top of menu toolbar */
  navbar: {
    zIndex: "20000",
    backgroundColor: "#023e8a",
    // backgroundColor: "#3f51b5",
  },
}));

export function MyNavbar({ children }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="transparent" className={classes.navbar}>
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
}
