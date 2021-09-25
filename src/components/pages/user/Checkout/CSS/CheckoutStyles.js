import { makeStyles } from "../../../../design/MyUseStyles";

const CheckoutStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    border: "1px solid black",
    marginTop: "10px",
  },

  orderSummaryHeading: {
    maxWidth: "82vw",
    margin: "0px auto",
    padding: "8px 0px",
    fontSize: "2rem",
    fontWeight: "300",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  AddDeliveryAddressHeading: {
    backgroundColor: "#003c8f",
    color: "white",
    paddingLeft: "10px",
  },
  DeliveryAddressHeading: {
    backgroundColor: "#003c8f",
    color: "white",
    padding: "10px",
  },
  priceDetailsContainer: {
    border: "1px solid black",
    marginTop: "10px",
  },
  PlaceOrderbtn: {
    "&>button": {
      color: "white",
      backgroundColor: "#003c8f",
    },
    textAlign: "center",
    padding: "10px",
    border: "1px solid black",
    borderTop: "none",
  },
  addressFromContainer: {
    padding: "20px",
    width: "100%",
  },
}));

export { CheckoutStyles };
