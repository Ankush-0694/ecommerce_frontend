import { makeStyles } from "../../../../Design/MyUseStyles";
const CartItemStyles = makeStyles({
  cartItem: {
    // border: "1px solid blue",
    margin: "10px",
    display: "flex",
  },
  MediaImg: {
    width: "100%",
    maxWidth: "200px",
  },
  cartDetails: {
    margin: "10px",
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
  },
  quantityButton: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
});

export { CartItemStyles };
