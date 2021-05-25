import { CardActions } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    maxWidth: 345,
  },
}));

const MyCardActions = ({ children }) => {
  const classes = useStyles();
  return <CardActions>{children}</CardActions>;
};

export { MyCardActions };
