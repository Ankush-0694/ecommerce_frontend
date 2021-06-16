import { makeStyles } from "../../../../Design/MyUseStyles";

const ProductDetailsStyles = makeStyles({
  productDiv: {
    //child selector
    "& > *": {
      margin: "10px 0",
    },
  },
  MediaImg: {
    width: "100%",
    minWidth: "130px",
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
});

export { ProductDetailsStyles };
