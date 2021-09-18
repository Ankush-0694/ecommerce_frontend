import { makeStyles } from "../../../../Design/MyUseStyles";

const CartStyles = makeStyles({
  once: {
    width: "100px",
  },
  cartHeading: {
    textAlign: "center",
    marginTop: "10px",
    padding: "1rem 0px",
    fontSize: "3rem",
    fontWeight: "300",
  },
  cartContainer: {
    display: "flex",
    padding: "20px",
    justifyContent: "space-around",
  },
  productHeading: {
    marginLeft: "32px",
    padding: "12px 0px",
    fontSize: "2rem",
    fontWeight: "300",
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

  EmptyCart: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export { CartStyles };

//need to add media queries after less than 700px
