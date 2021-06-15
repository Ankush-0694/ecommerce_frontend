import { makeStyles } from "../../../../Design/MyUseStyles";
const CartItemStyles = makeStyles({
  cartItem: {
    // border: "1px solid blue",
    margin: "10px",
    display: "flex",
    padding: "10px",
  },
  MediaImg: {
    // width: "100%",
    // maxWidth: "150px",
  },
  cartDetails: {
    margin: "10px",
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
  },
  quantityButtonDiv: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  quantityInput: {
    width: "50px",
    height: "30px",
    margin: "0px 5px 0px 5px",
    textAlign: "center",
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
    "&:focus": {
      border: "none",
      outline: "none",
    },
  },
});

export { CartItemStyles };
