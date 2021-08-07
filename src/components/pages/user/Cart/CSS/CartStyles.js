import { makeStyles } from "../../../../Design/MyUseStyles";

const CartStyles = makeStyles({
  once: {
    width: "100px",
  },
  cartContainer: {
    display: "flex",
    padding: "20px",
    justifyContent: "space-between",
  },
  productHeading: {
    textAlign: "center",
    margin: "0px",
    padding: "5px",
    borderBottom: "1px solid black",
  },
  item1: {
    width: "60%",

    height: "84vh",
    overflow: "auto",
  },
  item2: {
    width: "30%",
    minWidth: "200px",
    right: "20px",
    marginTop: "10px",
    textAlign: "center",
  },
  MediaImg: {
    width: "100%",
    minWidth: "130px",
  },
  checkout: {
    border: "1px solid black",
    textAlign: "center",
  },
  checkoutbtn: {
    padding: "10px 0px",
    borderRadius: "0px",
  },
});

export { CartStyles };

//need to add media queries after less than 700px
