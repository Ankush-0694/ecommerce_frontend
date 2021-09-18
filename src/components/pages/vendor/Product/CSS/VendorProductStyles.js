import { makeStyles } from "../../../../Design/MyUseStyles";

const VendorProductStyles = makeStyles({
  AddProductGrid: {},
  flexcontainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  productHeading: {
    padding: "16px 0px",
    marginLeft: "18px",
    fontWeight: "300",
  },
  productListContainer: {
    paddingTop: "0px",
    height: "80vh",
    overflow: "auto",
  },
});

export { VendorProductStyles };
