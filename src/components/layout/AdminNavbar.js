import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "../Design/MyUseStyles";
import IconButton from "@material-ui/core/IconButton";
import { MyButtonComponent } from "../Design/MyButtonComponent";
import { withRouter } from "react-router";
import { MyNavbar } from "../Design/MyNavbar";
const drawerWidth = 250;
const NavbarStyles = makeStyles((theme) => ({}));

const AdminNavbar = ({ history }) => {
  const classes = NavbarStyles();

  return (
    <MyNavbar>
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
    </MyNavbar>
  );
};

export default withRouter(AdminNavbar);
