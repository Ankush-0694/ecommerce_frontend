import { CardActions } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    maxWidth: 345,
    border: "1px solid black",
  },
  cardContent: {
    padding: "10px",
  },
  cardMedia: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
}));

const MyCardActions = ({ children, style }) => {
  // const classes = useStyles();
  return <CardActions style={style}>{children}</CardActions>;
};

const MyCardContainer = ({ children }) => {
  const classes = useStyles();
  return <Card className={classes.cardStyle}>{children}</Card>;
};

const MyCardContent = ({ children }) => {
  const classes = useStyles();
  return <CardContent className={classes.cardContent}>{children}</CardContent>;
};

const MyCardMedia = ({ height, title, image, style }) => {
  const classes = useStyles();
  return (
    <CardMedia
      height={height}
      title={title}
      image={image}
      style={style}
      component="img"
      className={classes.cardMedia}
    />
  );
};

export { MyCardActions, MyCardContainer, MyCardContent, MyCardMedia };
