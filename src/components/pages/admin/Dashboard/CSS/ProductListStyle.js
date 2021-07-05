import { makeStyles } from "../../../../Design/MyUseStyles";

const ProductStyles = makeStyles({
  ListContainer: {},
  root: {
    width: "70%",
    margin: "auto",
    // backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    width: "100px",
    height: "100px",
    marginRight: "10px",
  },
  listItem: {
    border: "1px solid black",
    margin: "10px 0",
    width: "100%",
    padding: "10px",
  },
});

export { ProductStyles };

// root: {
//   display: "flex",
//   flexWrap: "wrap",
//   justifyContent: "space-around",
//   // overflow: "hidden",
//   // backgroundColor: theme.palette.background.paper,
// },
// gridList: {
//   width: "100%",
//   height: "90vh",
// },
// icon: {
//   color: "rgba(255, 255, 255, 0.54)",
// },
// subHeaderStyle: {
//   height: "auto",
//   textAlign: "center",
//   marginTop: "20px",
//   color: "black",
// },
// overide: {
//   background: "rgba(0, 0, 0, 0.7)",
// },
