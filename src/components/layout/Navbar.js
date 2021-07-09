import React from "react";
import { MyNavbar } from "../Design/MyNavbar";
import { MyTypography } from "../Design/MyTypography";
import { MyButtonComponent } from "../Design/MyButtonComponent";
import { MyIconButton } from "../Design/MyIconButton";
import { MyMenuAppBar } from "../Design/MyMenuAppBar";
import { MyMenuItem } from "../Design/MyMenuItem";
import { MyMenuIcon } from "../Design/MyIcons";
import { Link, withRouter } from "react-router-dom";

//these 2 imports should not be here
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  MenuLinkStyle: {
    "&:hover": {
      textDecoration: "none",
    },
    textDecoration: "none",
    color: "Black",
    padding: "6px 16px",
  },
  NavbarLink: {
    "&:hover": {
      background: "white",
      color: "black",
    },
  },
}));

const Navbar = ({ history }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  // console.log(isMobile);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MyNavbar>
      <MyTypography variant="h6" className={classes.title}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Ecommerce
        </Link>
      </MyTypography>
      {/*  */}
      <div>
        {isMobile ? (
          <div>
            <MyIconButton onClick={handleMenu}>
              <MyMenuIcon />
            </MyIconButton>
            <MyMenuAppBar onClose={handleClose} open={open} anchorEl={anchorEl}>
              <MyMenuItem onClick={handleClose}>
                <Link to="/orders" className={classes.MenuLinkStyle}>
                  My Orders
                </Link>
              </MyMenuItem>
              <MyMenuItem onClick={handleClose}>
                <Link to="/cart" className={classes.MenuLinkStyle}>
                  Cart
                </Link>
              </MyMenuItem>
              <MyMenuItem onClick={handleClose}>
                <Link to="/signup" className={classes.MenuLinkStyle}>
                  Signup
                </Link>
              </MyMenuItem>
              <MyMenuItem onClick={handleClose}>
                <Link to="/Login" className={classes.MenuLinkStyle}>
                  Login
                </Link>
              </MyMenuItem>
            </MyMenuAppBar>
          </div>
        ) : (
          <div>
            <MyButtonComponent
              className={classes.NavbarLink}
              onClick={() => {
                history.push("/orders");
              }}
              color="inherit">
              My Orders
            </MyButtonComponent>
            <MyButtonComponent
              className={classes.NavbarLink}
              onClick={() => {
                history.push("/cart");
              }}
              color="inherit">
              Cart
            </MyButtonComponent>
            <MyButtonComponent
              className={classes.NavbarLink}
              onClick={() => {
                history.push("/signup");
              }}
              color="inherit">
              Signup
            </MyButtonComponent>
            <MyButtonComponent
              className={classes.NavbarLink}
              onClick={() => {
                history.push("/login");
              }}
              color="inherit">
              Login
            </MyButtonComponent>
          </div>
        )}
      </div>
    </MyNavbar>
  );
};

export default withRouter(Navbar);
