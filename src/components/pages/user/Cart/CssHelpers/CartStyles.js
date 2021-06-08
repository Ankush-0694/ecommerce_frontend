import { makeStyles } from "../../../../Design/MyUseStyles";

const CartStyles = makeStyles({
  once: {
    width: "100px",
  },
  cartContainer: {
    display: "flex",
    padding: "20px",
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
    padding: "10px",
  },
  placeOrderbtn: {
    padding: "5px 15px",
  },
});

export { CartStyles };

//need to add media queries after less than 700px
