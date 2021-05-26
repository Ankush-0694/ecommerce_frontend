import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const MyIconButton = ({ children, onClick }) => {
  const classes = useStyles();

  return (
    <IconButton
      className={classes.menuButton}
      color="inherit"
      aria-haspopup="true"
      onClick={onClick}
      aria-label="menu"
      aria-controls="menu-appbar">
      {children}
    </IconButton>
  );
};

export { MyIconButton };
