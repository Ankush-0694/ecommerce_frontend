 import { makeStyles } from '@mui/styles';

const ProfileInformationStyles = makeStyles({
  Container: {
    marginTop: "10px",
  },

  personalInfoHeading: {
    marginBottom: "20px",
    fontWeight: 550,
    padding: "20px",
    margin: "0px",
    color: "black",
    // background:
    //   "linear-gradient(to right, #3f51b5, #3f51b5, #a6b8d9, #cfd1e3, #eeeeee)",
  },
  editCancelBtn: {
    marginLeft: "20px",

    "&:focus": {
      outline: "none",
    },
  },
  NameContainer: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
  },
  NameDiv: {
    fontSize: "15px",
    marginLeft: "15px",
    padding: "15px",
    paddingTop: "0px",
  },
  emailDiv: {
    fontSize: "24px",
    fontWeight: "300",
    marginLeft: "15px",
    padding: "15px",
    paddingTop: "0px",
  },

  ProfileFormDiv: {
    padding: "0px 20px 10px",
  },
});

export { ProfileInformationStyles };
