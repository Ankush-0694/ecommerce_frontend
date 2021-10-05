import { makeStyles } from "@material-ui/core";
import React from "react";

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
  const classes = useStyles();
  return <div style={style} className={classes.toolbar}></div>;
};

export default MyToolbar;
