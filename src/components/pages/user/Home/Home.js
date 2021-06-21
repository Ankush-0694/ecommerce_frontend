import React from "react";
import HomeSlider from "./Component/HomeSlider/HomeSlider";

import { MyFullScreenBox } from "../../../Design/FullScreenBox";
import Products from "../Products/AllProducts/Products";

const Home = () => {
  return (
    <div>
      <div style={{ backgroundColor: "black" }}>
        <HomeSlider />
      </div>
      <div>
        <MyFullScreenBox display="flex" width="100%">
          <h1 style={{ margin: "auto" }}>Products</h1>
        </MyFullScreenBox>
        <MyFullScreenBox display="flex" width="100%" height="50vh">
          <Products />
        </MyFullScreenBox>
      </div>
    </div>
  );
};

export default Home;
