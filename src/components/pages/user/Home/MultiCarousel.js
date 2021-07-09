import { makeStyles } from "@material-ui/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { Image } from "semantic-ui-react";

const useStyles = makeStyles({
  itemContainerDiv: {
    padding: "10px",
  },
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
//https://codesandbox.io/s/72s9o?file=/src/Slider.js:2274-2280
const Simple = () => {
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
      <div className={classes.itemContainerDiv}>
        <img
          draggable={false}
          style={{ width: "100%", height: "100%" }}
          src={images[0]}
        />
        <p>Product Name 1</p>
        <p>Product Name </p>
        <p>Product Name </p>
      </div>
      <div className={classes.itemContainerDiv}>
        <img
          // draggable={false}
          style={{ width: "100%", height: "100%" }}
          src={images[0]}
        />
        <p>Product Name 2</p>
        <p>Product Name </p>
        <p>Product Name </p>
      </div>

      <div className={classes.itemContainerDiv}>
        <img
          // draggable={false}
          style={{ width: "100%", height: "100%" }}
          src={images[0]}
        />
        <p>Product Name 3</p>
        <p>Product Name </p>
        <p>Product Name </p>
      </div>
      <div className={classes.itemContainerDiv}>
        <img
          // draggable={false}
          style={{ width: "100%", height: "100%" }}
          src={images[0]}
        />
        <p>Product Name 4 </p>
        <p>Product Name </p>
        <p>Product Name </p>
      </div>
      <div className={classes.itemContainerDiv}>
        <img
          // draggable={false}
          style={{ width: "100%", height: "100%" }}
          src={images[0]}
        />
        <p>Product Name 5 </p>
        <p>Product Name </p>
        <p>Product Name </p>
      </div>
    </Carousel>
  );
};

export default Simple;
