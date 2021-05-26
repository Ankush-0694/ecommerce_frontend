import React from "react";
import { Link } from "react-router-dom";

import { MyFullScreenBox } from "../../../Design/FullScreenBox";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <MyFullScreenBox display="flex" width="100%" height="50vh">
        <h1 style={{ margin: "auto" }}>Welcome to the Website</h1>
      </MyFullScreenBox>
      <MyFullScreenBox display="flex" width="100%">
        <h1 style={{ margin: "auto" }}>Products</h1>
      </MyFullScreenBox>
      <MyFullScreenBox display="flex" width="100%" height="50vh">
        {/* <Products /> */}
      </MyFullScreenBox>
    </div>
  );
};

export default Home;
