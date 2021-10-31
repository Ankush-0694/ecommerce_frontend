// import { makeStyles } from "@material-ui/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// const useStyles = makeStyles({
//   itemContainerDiv: {
//     padding: "10px",
//   },
// });

const responsive = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 4,
    partialVisibilityGutter: 60,
  },
  desktop: {
    breakpoint: { max: 1400, min: 960 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 960, min: 600 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 550, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const MyMultiCarousel = ({ children }) => {
  // const classes = useStyles();

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      // autoPlay
      // autoPlaySpeed={4000}

      containerClass="container-with-dots"
      dotListClass="dots"
      partialVisible
      // infinite
      // itemClass="image-item"
      itemClass="slider-image-item"
      keyBoardControl
      minimumTouchDrag={200}
      showDots={true}
      slidesToSlide={1}
      swipeable
      responsive={responsive}>
      {children}
    </Carousel>
  );
};

export { MyMultiCarousel };
