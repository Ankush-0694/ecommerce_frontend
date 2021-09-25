import React, { useRef } from "react";
import { HomeSliderContentStyles } from "../../CSS/HomeSliderContentStyles";
import { MyPaper } from "../../../../../design/MyPaper";
import { MyButtonComponent } from "../../../../../design/MyButtonComponent";

const HomeSliderContent = (props) => {
  const classes = HomeSliderContentStyles();

  return (
    <MyPaper
      className={classes.carouselItemPaper}
      style={{ width: "100%", height: "30vw" }}>
      <img
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
        src={props.item.link}
      />
    </MyPaper>
  );
};

export default HomeSliderContent;
