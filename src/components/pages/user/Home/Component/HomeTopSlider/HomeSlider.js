import React, { useRef } from "react";
import { HomeSliderStyles } from "../../CSS/HomeSliderStyles";
import { MyCarousel } from "../../../../../design/MyCarousel";

import HomeSliderContent from "./HomeSliderContent";
import MyDivider from "../../../../../design/MyDivider";

const items = [
  {
    id: 1,
    link: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    link: "https://images.unsplash.com/photo-1523380677598-64d85d015339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    link: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 4,
    link: "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 5,
    link: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

const HomeSlider = () => {
  const classes = HomeSliderStyles();

  return (
    <div style={{ margin: "auto", width: "90%" }}>
      <MyCarousel
        className={classes.SecondExample}
        autoPlay={false}
        animation="slide"
        indicators={true}
        timeout={300}
        navButtonsAlwaysVisible={true}>
        {items.map((item, index) => {
          return <HomeSliderContent item={item} key={index} />;
        })}
      </MyCarousel>
      <MyDivider />
    </div>
  );
};

export default HomeSlider;
