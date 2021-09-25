import { makeStyles } from "../../../../design/MyUseStyles";

const AddressFormStyles = makeStyles({
  addressInputContainer: {
    "&>div": {
      width: "40%",
    },
    display: "flex",
    justifyContent: "space-around",
  },
  SaveAddressbtnDiv: {
    paddingTop: "20px",
    textAlign: "center",
  },
});

export { AddressFormStyles };
