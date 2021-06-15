import { makeStyles } from "../../../../Design/MyUseStyles";

const CartStyles = makeStyles({
  once: {
    width: "100px",
  },
  cartContainer: {
    display: "flex",
    padding: "20px",
  },
  productHeading: {
    textAlign: "center",
    margin: "0px",
    padding: "5px",
    backgroundColor: "#DCDCDC",
    borderBottom: "1px solid black",
    marginBottom: "20px",
  },
  item1: {
    width: "60%",
    border: "1px solid black",

    height: "80vh",
    overflow: "auto",
  },
  item2: {
    width: "30%",
    position: "fixed",
    minWidth: "200px",
    right: "20px",
    border: "1px solid black",
    textAlign: "center",
  },
  MediaImg: {
    width: "100%",
    minWidth: "130px",
  },
  placeOrder: {
    border: "1px solid black",
    textAlign: "center",
  },
  placeOrderbtn: {
    padding: "10px 0px",
    borderRadius: "0px",
  },
});

export { CartStyles };

//need to add media queries after less than 700px
