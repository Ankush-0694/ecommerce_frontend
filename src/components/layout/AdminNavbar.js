import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "../Design/MyUseStyles";
import IconButton from "@material-ui/core/IconButton";
import { MyButtonComponent } from "../Design/MyButtonComponent";
import { withRouter } from "react-router";
const drawerWidth = 250;
const NavbarStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const AdminNavbar = ({ mobileOpen, setMobileOpen, history }) => {
  const classes = NavbarStyles();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      style={{ zIndex: "10000" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}>
          <MenuIcon />
        </IconButton>

        <MyButtonComponent
          onClick={() => {
            history.push("/admin/dashboard");
          }}
          variant="filled"
          userStyle={{ color: "white", textTransform: "capitalize" }}>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </MyButtonComponent>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(AdminNavbar);
