import { makeStyles } from "../../../../../Design/MyUseStyles";

const ProductCardStyles = makeStyles({
  productDetails: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
  },
  rating: {
    position: "absolute",
    top: "0",
    right: "0",
    padding: "4px",
    backgroundColor: "white",
    color: "black",
    borderRadius: "15%",
  },
});

export { ProductCardStyles };
