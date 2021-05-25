import { Card } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    maxWidth: 345,
    border: "1px solid black",
  },
}));

const MyCardContainer = ({ children }) => {
  const classes = useStyles();
  return <Card className={classes.cardStyle}>{children}</Card>;
};

export { MyCardContainer };
