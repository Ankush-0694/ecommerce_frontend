import { makeStyles } from "@material-ui/core";

const HomeSliderContentStyles = makeStyles({
  CheckButton: {
    color: "white",
    border: "3px solid white",
    textTransform: "capitalize",
  },
  Project: {
    position: "relative",
    height: "400px",
    marginTop: "40px",
    overflow: "hidden",
    padding: " 20px",
  },
  slider_details: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "50%",
    margin: "auto",
    overflow: "scroll",
  },
});

export { HomeSliderContentStyles };
