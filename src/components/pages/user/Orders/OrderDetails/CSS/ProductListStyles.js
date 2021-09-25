import { makeStyles } from "../../../../../design/MyUseStyles";

const ProductListStyles = makeStyles({
  clickProductDiv: {
    margin: "10px 0px",
  },
  productItemPaper: {
    padding: "20px",
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
  productLink: {
    width: "100%",
    textDecoration: "none",
    color: "black",
    "&:hover": {
      textDecoration: "none",
    },

    display: "block",
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
});

export { ProductListStyles };
