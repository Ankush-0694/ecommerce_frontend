import { makeStyles } from "@material-ui/core";

const ProfileInformationStyles = makeStyles({
  Container: {
    marginTop: "10px",
  },
  personalInfo: {
    padding: "20px",
  },
  personalInfoHeading: {
    marginBottom: "20px",
  },
  NameContainer: {
    display: "flex",
    width: "80%",
  },
  NameDiv: {
    fontSize: "15px",
    marginLeft: "15px",
    border: "1px solid black",
    padding: "15px",
    flexGrow: 1,
  },
});

export { ProfileInformationStyles };
