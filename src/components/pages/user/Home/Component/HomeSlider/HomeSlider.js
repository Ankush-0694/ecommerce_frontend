import React, { useRef } from "react";
import { HomeSliderStyles } from "../../CSS/HomeSliderStyles";
import { MyCarousel } from "../../../../../Design/MyCarousel";

import HomeSliderContent from "./HomeSliderContent";

const items = [
  {
    id: 1,
    name: "Lear Music Reader",
    description: "A PDF Reader specially designed for musicians.",
    color: "#64ACC8",
  },
  {
    id: 2,
    name: "Hash Code 2019",
    description:
      "My Solution on the 2019 Hash Code by Google Slideshow My Solution on the 2019 Hash Code by Google Slideshow problem.My Solution on the 2019 Hash Code by Google Slideshow problem.My Solution on the 2019 Hash Code by Google Slideshow problem.My Solution on the 2019 Hash Code by Google Slideshow problem.My Solution on the 2019 Hash Code by Google Slideshow problem.My Solution on the 2019 Hash Code by Google Slideshow problem.",
    color: "#7D85B1",
  },
  {
    id: 3,
    name: "Terrio",
    description: "A exciting mobile game game made in the Unity Engine.",
    color: "#CE7E78",
  },
  {
    id: 4,
    name: "React Carousel",
    description: "A Generic carousel UI component for React using material ui.",
    color: "#C9A27E",
  },
];

const HomeSlider = () => {
  const classes = HomeSliderStyles();

  return (
    <div style={{ color: "#494949", margin: "auto", width: "95%" }}>
      <MyCarousel
        className={classes.SecondExample}
        autoPlay={true}
        animation="fade"
        indicators={true}
        timeout={300}
        navButtonsAlwaysVisible={true}
        navButtonsAlwaysInvisible={false}>
        {items.map((item, index) => {
          return <HomeSliderContent item={item} key={item.id} />;
        })}
      </MyCarousel>
    </div>
  );
};

export default HomeSlider;
