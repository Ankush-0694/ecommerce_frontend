
import React from "react";
import {makeStyles, useTheme } from "../design/MyUseStyles";

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      minHeight: "100px",
    },
  },
}));

const MyToolbar = ({ style }) => {
  const theme = useTheme()
  const classes = useStyles(theme);
  return <div style={style} className={classes.toolbar}></div>;
};

export default MyToolbar;
