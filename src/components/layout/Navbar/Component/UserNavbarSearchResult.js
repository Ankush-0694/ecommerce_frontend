import { makeStyles } from "@material-ui/core";
import React from "react";
import MyDivider from "../../../Design/MyDivider";
import { MyPaper } from "../../../Design/MyPaper";

const useStyles = makeStyles({
  resultPaper: {
    position: "absolute",
    top: "42px",
    width: "calc(100% - 72px)",
    padding: "8px 10px",
    marginLeft: "2px",
  },
});

const UserNavbarSearchResult = () => {
  const classes = useStyles();
  return (
    <MyPaper className={classes.resultPaper}>
      <div>
        <div>Result</div>
        <hr></hr>
        <div>Result</div>
        <hr></hr>
        <div>Result</div>
        <hr></hr>
        <div>Result</div>
      </div>
    </MyPaper>
  );
};

export default UserNavbarSearchResult;
