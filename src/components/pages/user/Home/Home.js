import React from "react";
import { Link } from "react-router-dom";

// import { makeStyles } from "@material-ui/core/styles";
import { MyFullScreenBox } from "../../../Design/FullScreenBox";

const Home = () => {
  return (
    <MyFullScreenBox display="flex" width="100%" height="100vh">
      <div style={{ margin: "auto" }}>
        1. Box (margin: auto) - Welcome to the Website and{" "}
        <Link to="Products">products</Link>
      </div>
    </MyFullScreenBox>
  );
};

export default Home;
