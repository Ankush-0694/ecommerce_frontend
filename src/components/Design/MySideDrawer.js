import { makeStyles, useTheme } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const MySideDrawer = ({ children }) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="permanent"
      anchor="left">
      {children}
      {/** This is the content List we need to show in the side */}
    </Drawer>
  );
};

export { MySideDrawer };
