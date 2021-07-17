import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

const MyToolbar = () => {
  const classes = useStyles();
  return <div className={classes.toolbar}></div>;
};

export default MyToolbar;
