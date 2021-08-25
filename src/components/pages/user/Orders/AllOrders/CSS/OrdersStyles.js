import { makeStyles } from "../../../../../Design/MyUseStyles";

const OrderStyles = makeStyles({
  pageContainer: {
    padding: "0px 16px",
  },
  marginTopDiv: {
    marginTop: "20px",
  },
  orderHeading: {
    margin: "10px",
    marginBottom: "15px",
  },
  FilterAndOrderListContainer: {
    display: "flex",
  },

  filterContainer: {
    width: "250px",
  },
  orderListContainer: {
    width: "calc(100% - 250px)",
    paddingLeft: "16px",
  },
  SearchBoxContainer: {
    display: "flex",
    marginRight: "10%",
    marginBottom: "16px",
    borderRadius: "4px 0 0 4px",
  },

  inputDiv: {
    flexGrow: 1,
  },
  inputSearchField: {
    width: "100%",
    height: "40px",
    paddingLeft: "10px",
  },
  orderLinks: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      textDecoration: "none",
      color: "black",
    },
    marginBottom: "8px",
    padding: "16px",
  },
});

export { OrderStyles };
