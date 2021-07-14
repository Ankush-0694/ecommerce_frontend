import { makeStyles } from "../../../../Design/MyUseStyles";

const AddressListStyles = makeStyles({
  addressLabelDiv: {
    margin: "10px",
    display: "flex",
  },
  addressDetails: {
    "&>*": {
      marginBottom: "5px",
    },
    // paddingBottom: "5px",
    // paddingLeft: "20px",
  },
  deliverHereBtnDiv: {
    // padding: "5px",s
    // marginLeft: "20px",
  },
  deliverBtn: {
    "&:focus": {
      outline: "none",
    },
  },
  EditBtn: {
    "&:focus": {
      outline: "none",
    },
  },
  root: {
    width: "90%",
    margin: 0,

    "& .MuiTypography-body1": {
      flexGrow: 1,
    },
  },
});

export { AddressListStyles };
