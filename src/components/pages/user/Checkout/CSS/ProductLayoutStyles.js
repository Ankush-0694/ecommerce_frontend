import { makeStyles } from "../../../../Design/MyUseStyles";

const ProductLayoutStyles = makeStyles({
  productDiv: {
    //child selector
    "& > *": {
      margin: "10px 0",
    },
  },
  productDetailsPaper: {
    display: "flex",
    padding: "16px",
  },

  checkoutProductDetails: {
    marginLeft: "16px",
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
  },

  quantityDiv: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },

  quantityInput: {
    width: "30px",
    height: "30px",
    margin: "0px 5px 0px 5px",
    textAlign: "center",
    borderRadius: "50%",
    border: "1px solid black",
  },
  quantityButton: {
    maxWidth: "30px",
    maxHeight: "30px",
    minWidth: "30px",
    minHeight: "30px",
    borderRadius: "15px",
    "&:hover": {
      backgroundColor: "#f50057",
      color: "white",
    },
    "&:focus": {
      border: "none",
      outline: "none",
    },
  },
});

export { ProductLayoutStyles };
