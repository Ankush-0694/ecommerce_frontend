import { makeStyles, useTheme } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  drawerPaper: {
    width: drawerWidth,
  },
}));

const MySideDrawer = ({
  mobileOpen,
  setMobileOpen,
  handleDrawerToggle,
  children,
}) => {
  const theme = useTheme();

  const classes = useStyles();

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          {children}
          {/** This is the content List we need to show in the side */}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open>
          {children}
          {/** This is the content List we need to show in the side */}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export { MySideDrawer };
