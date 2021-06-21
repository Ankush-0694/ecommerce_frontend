import { makeStyles } from "../../../../Design/MyUseStyles";

const AddressListStyles = makeStyles({
  addressDetails: {
    paddingBottom: "5px",
    paddingLeft: "20px",
  },
  deliverHereBtnDiv: {
    padding: "10px",
    marginLeft: "20px",
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
});

export { AddressListStyles };
