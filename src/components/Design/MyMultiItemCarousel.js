import { makeStyles } from "@material-ui/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles({
  itemContainerDiv: {
    padding: "10px",
  },
});

const responsive = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1024 },
    items: 3,
    partialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const MyMultiCarousel = ({ children }) => {
  const classes = useStyles();

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
      itemClass="image-item"
      keyBoardControl
      minimumTouchDrag={200}
      keyBoardControl
      showDots={true}
      slidesToSlide={1}
      swipeable
      responsive={responsive}>
      {children}
    </Carousel>
  );
};

export { MyMultiCarousel };
