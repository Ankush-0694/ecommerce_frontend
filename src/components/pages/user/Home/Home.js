import React from "react";
import HomeSlider from "./Component/HomeTopSlider/HomeSlider";
import { MyFullScreenBox } from "../../../Design/MyFullScreenBox";
import Products from "../Products/AllProducts/Products";
import FirstProductSlider from "./Component/FirstProductSlider/FirstProductSlider";

const Home = () => {
  return (
    <div>
      <div style={{ backgroundColor: "black" }}>
        <HomeSlider />
      </div>
      <div>
        <MyFullScreenBox display="flex" width="100%">
          <h1 style={{ margin: "20px auto" }}>Products</h1>
        </MyFullScreenBox>

        <section
          style={{
            margin: "20px",
            maxWidth: "90%",
            margin: "auto",
          }}>
          <FirstProductSlider />
        </section>
      </div>
    </div>
  );
};

export default Home;

/** this can be used to show all products on a single page */
//  <MyFullScreenBox display="flex" width="100%">
//    {/* <Products /> */}
//  </MyFullScreenBox>;
