import React from "react";
import HomeSlider from "./Component/HomeTopSlider/HomeSlider";
import FirstProductSlider from "./Component/FirstProductSlider/FirstProductSlider";
import { MyPaper } from "../../../Design/MyPaper";
import MyDivider from "../../../Design/MyDivider";
import { HomeStyles } from "./CSS/HomeStyles";
import SecondProductSlider from "./Component/SecondAndThirdSlider/CateogrySubCategorySlider";

const Home = () => {
  const classes = HomeStyles();
  return (
    <div>
      {/* Top Carousel  */}
      <div>
        <HomeSlider />
      </div>

      {/* Show Products Itself */}
      <div className="FirstProductSection">
        <MyPaper className={classes.SliderPaper}>
          <div className={classes.SliderHeading}>Products</div>
          <MyDivider />
          <section>
            <FirstProductSlider />
          </section>
        </MyPaper>
      </div>

      {/* Shop By Category ,  dataProp is used to have same component for Category And SubCategory */}

      <div className="SecondProductSection">
        <MyPaper className={classes.SliderPaper}>
          <div className={classes.SliderHeading}>Shop By Category</div>
          <MyDivider />
          <section>
            <SecondProductSlider dataProp="category" />
          </section>
        </MyPaper>
      </div>

      {/* Shop By Sub Category */}

      <div className="ThirdProductSection">
        <MyPaper className={classes.SliderPaper}>
          <div className={classes.SliderHeading}>Shop By Sub Category</div>
          <MyDivider />
          <section>
            <SecondProductSlider dataProp="subcategory" />
          </section>
        </MyPaper>
      </div>
    </div>
  );
};

export default Home;

/** this can be used to show all products on a single page */
//  <MyFullScreenBox display="flex" width="100%">
//    {/* <Products /> */}
//  </MyFullScreenBox>;
