import { makeStyles } from "../../../../Design/MyUseStyles";

const ProductStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 600,
    height: "90vh",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  subHeaderStyle: {
    height: "auto",
    textAlign: "center",
    marginTop: "20px",
    color: "black",
  },
  overide: {
    background: "rgba(0, 0, 0, 0.7)",
  },
});

export { ProductStyles };
