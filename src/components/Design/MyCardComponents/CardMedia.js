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

const MyCardMedia = ({ height, title, image }) => {
  const classes = useStyles();
  return (
    <CardMedia
      height={height}
      title={title}
      image={image}
      component="img"
      className={classes.cardMedia}
    />
  );
};

export { MyCardMedia };
