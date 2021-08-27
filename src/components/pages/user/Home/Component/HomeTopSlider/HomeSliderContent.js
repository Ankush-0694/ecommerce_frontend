import React, { useRef } from "react";
import { HomeSliderContentStyles } from "../../CSS/HomeSliderContentStyles";
import { MyPaper } from "../../../../../Design/MyPaper";
import { MyButtonComponent } from "../../../../../Design/MyButtonComponent";

const HomeSliderContent = (props) => {
  const classes = HomeSliderContentStyles();

  return (
    <MyPaper
      className={classes.Project}
      style={{
        backgroundColor: props.item.color,
      }}
      elevation={10}>
      <div className={classes.slider_details}>
        <h1 style={{ color: "white", fontSize: "4rem" }}>Coming Soon</h1>
      </div>
    </MyPaper>
  );
};

export default HomeSliderContent;
