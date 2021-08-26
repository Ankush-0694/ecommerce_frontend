import React from "react";
import { makeStyles } from "../../Design/MyUseStyles";
import { MyButtonComponent } from "../../Design/MyButtonComponent";
import { withRouter } from "react-router";
import { MyNavbar } from "../../Design/MyNavbar";
import { MyTypography } from "../../Design/MyTypography";
const NavbarStyles = makeStyles((theme) => ({}));

const VendorNavbar = ({ history }) => {
  return (
    <MyNavbar>
      <MyButtonComponent
        onClick={() => {
          history.push("/vendor/products");
        }}
        userStyle={{ color: "white", textTransform: "capitalize" }}>
        <MyTypography variant="h6" noWrap>
          Home
        </MyTypography>
      </MyButtonComponent>
    </MyNavbar>
  );
};

export default withRouter(VendorNavbar);
