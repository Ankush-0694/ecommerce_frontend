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

const MyMultiItemCarousel = () => {
  <Carousel
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    centerMode={false}
    className=""
    containerClass="container"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    partialVisible
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024,
        },
        items: 3,
        partialVisibilityGutter: 40,
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0,
        },
        items: 1,
        partialVisibilityGutter: 30,
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464,
        },
        items: 2,
        partialVisibilityGutter: 30,
      },
    }}
    showDots={false}
    sliderClass=""
    slidesToSlide={1}
    swipeable></Carousel>;
};

//www.npmjs.com/package/react-multi-carousel
//https://w3js.com/react-multi-carousel

export { MyCarousel, MyMultiItemCarousel };
