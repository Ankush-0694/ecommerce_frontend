import { CardMedia } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
}));

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

export { MyCardMedia };
//classes.cardMedia
