import { makeStyles } from "../../../../design/MyUseStyles";
const CartItemStyles = makeStyles({
  cartItem: {
    margin: "10px",
    display: "flex",
    padding: "10px",
  },

  MediaImgDiv: {
    padding: "8px",
  },

  cartDetails: {
    margin: "10px",
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
  },
  cartDetailsInner: {
    "& > * ": {
      marginBottom: "5px",
    },
  },
  quantityButtonDiv: {
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

    "&:focus": {
      outline: "none",
    },
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
  remove_btn: {
    padding: "4px 0px",
    color: "red",
    "&:focus": {
      border: "none",
      outline: "none",
    },
  },
});

export { CartItemStyles };
