import { makeStyles } from "../../../../Design/MyUseStyles";
const AllProductStyles = makeStyles({
  productItem: {
    margin: "10px",
    display: "flex",
    padding: "10px",
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

  delete_btn: {
    "&:focus": {
      border: "none",
      outline: "none",
    },
  },
  update_btn: {
    "&:focus": {
      border: "none",
      outline: "none",
    },
  },
});

export { AllProductStyles };
