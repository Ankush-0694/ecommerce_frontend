import React from "react";
import { makeStyles } from "../../Design/MyUseStyles";
import { MyButtonComponent } from "../../Design/MyButtonComponent";
import { withRouter } from "react-router";
import { MyNavbar } from "../../Design/MyNavbar";
import { MyTypography } from "../../Design/MyTypography";
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
        <MyTypography variant="h6" noWrap>
          Admin Dashboard
        </MyTypography>
      </MyButtonComponent>
    </MyNavbar>
  );
};

export default withRouter(AdminNavbar);
