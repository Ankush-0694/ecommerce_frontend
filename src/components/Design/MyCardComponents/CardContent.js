import { CardContent } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    padding: "10px",
  },
}));

const MyCardContent = ({ children }) => {
  const classes = useStyles();
  return <CardContent className={classes.cardContent}>{children}</CardContent>;
};

export { MyCardContent };
