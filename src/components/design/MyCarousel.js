import React from "react";
import Carousel from "react-material-ui-carousel";

const MyCarousel = ({
  className,
  autoPlay,
  animation,
  indicators,
  timeout,
  navButtonsAlwaysVisible,
  navButtonsAlwaysInvisible,
  children,
}) => {
  return (
    <Carousel
      className={className}
      autoPlay={autoPlay}
      animation={animation}
      indicators={indicators}
      timeout={timeout}
      navButtonsAlwaysVisible={navButtonsAlwaysVisible}
      navButtonsAlwaysInvisible={navButtonsAlwaysInvisible}>
      {children}
    </Carousel>
  );
};

export { MyCarousel };
