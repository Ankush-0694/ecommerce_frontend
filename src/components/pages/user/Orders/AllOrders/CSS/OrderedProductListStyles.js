import { makeStyles } from "../../../../../Design/MyUseStyles";

const OrderedProductListStyles = makeStyles({
  orderedProductLinks: {
    width: "100%",
    textDecoration: "none",
    color: "black",
    "&:hover": {
      textDecoration: "none",
      color: "black",
    },
    marginBottom: "8px",
    padding: "16px",
    display: "block",
  },
  ImageDiv: {
    height: "75px",
    width: "75px",
    margin: "auto",
  },
  imgStyle: {
    height: "75px",
    width: "75px",
    objectFit: "cover",
  },
  productName: {
    marginBottom: "5px",
    fontWeight: "500",
  },
  productDesc: {
    maxWidth: "70%",
  },
  productPrice: {
    maxWidth: "70%",
    fontWeight: "800",
  },
  statusName: {
    marginBottom: "10px",
  },
  statusicon: {
    marginRight: "8px",
  },
});

export { OrderedProductListStyles };
