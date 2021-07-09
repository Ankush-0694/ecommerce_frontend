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
        <div>
          <h2>{props.item.name}</h2>
          <p>{props.item.description}</p>
          <MyButtonComponent className={classes.CheckButton}>
            Check it out!
          </MyButtonComponent>
        </div>
      </div>
    </MyPaper>
  );
};

export default HomeSliderContent;
