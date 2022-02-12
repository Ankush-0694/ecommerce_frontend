import { IconButton } from "@mui/material";
import {useTheme, makeStyles} from './MyUseStyles';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const MyIconButton = ({ children, onClick }) => {
  const theme = useTheme(); 
  const classes = useStyles(theme);


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
