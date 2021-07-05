import React from "react";
import HomeSlider from "./Component/HomeSlider/HomeSlider";
import { MyFullScreenBox } from "../../../Design/MyFullScreenBox";
import Products from "../Products/AllProducts/Products";

const Home = () => {
  // this should not here
  // const userVar = makeVar({});
  // const { error, loading, data } = useQuery(getMeQuery);
  // if (!loading) {
  //   userVar(data.getMe);
  // }
  // console.log(userVar());

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
          {/* https://material-ui.com/components/grid-list/ */}
          <Products />
        </MyFullScreenBox>
      </div>
    </div>
  );
};

export default Home;
