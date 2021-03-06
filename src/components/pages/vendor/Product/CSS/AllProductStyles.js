import { makeStyles } from "../../../../design/MyUseStyles";
const AllProductStyles = makeStyles({
  ListItemPaper: {
    padding: "20px",
    paddingLeft: "0px",
    width: "100%",
    // margin: "10px 0",
  },
  imgDiv: {
    minWidth: "100px",
    width: "75%",
    margin: "auto",
    maxWidth: "150px",
  },
  detailsDiv: {
    marginRight: "16px",
  },

  lightFont: {
    fontWeight: "300",
  },
  darkFont: {
    fontWeight: "550",
    fontSize: "1.2rem",
  },
  productDescription: {
    maxWidth: "300px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  update_btn: {
    marginRight: "8px!important",
    marginBottom: "8px",
  },
  delete_btn: {
    marginBottom: "8px",

    "&:focus": {
      outline: "none",
    },
  },

  buttonContainerParent: {
    height: "100%",
  },
  buttonContainerChild: {
    height: "100px",
    width: "100%",
    display: "table-cell",
    verticalAlign: "middle",
  },
});

export { AllProductStyles };
