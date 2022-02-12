import { CardActions } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";

import {useTheme, makeStyles} from './MyUseStyles';

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
  const theme = useTheme(); 
  const classes = useStyles(theme);
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
