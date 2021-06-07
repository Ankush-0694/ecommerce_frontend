import { Button } from "@material-ui/core";
import React from "react";
import { MyNavbar } from "../Design/MyNavbar";
import { MyTypography } from "../Design/MyTypography";
import { MyButtonComponent } from "../Design/MyButtonComponent";
import { MyIconButton } from "../Design/MyIconButton";
import { MyMenuAppBar } from "../Design/MyMenuAppBar";
import { MyMenuItem } from "../Design/MyMenuItem";
import { MyMenuIcon } from "../Design/MyIcons";
import { Link } from "react-router-dom";

//these 2 imports should not be here
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  console.log(isMobile);

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
          News
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
                <Link
                  to="/cart"
                  style={{ textDecoration: "none", color: "Black" }}>
                  Cart
                </Link>
              </MyMenuItem>
              <MyMenuItem onClick={handleClose}>
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "Black" }}>
                  Signup
                </Link>
              </MyMenuItem>
              <MyMenuItem onClick={handleClose}>
                <Link
                  to="/Login"
                  style={{ textDecoration: "none", color: "Black" }}>
                  Login
                </Link>
              </MyMenuItem>
            </MyMenuAppBar>
          </div>
        ) : (
          <div>
            <MyButtonComponent color="inherit">
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "white" }}>
                Cart
              </Link>
            </MyButtonComponent>
            <MyButtonComponent color="inherit">
              <Link
                to="/Signup"
                style={{ textDecoration: "none", color: "white" }}>
                Signup
              </Link>
            </MyButtonComponent>
            <MyButtonComponent color="inherit">
              <Link
                to="/Login"
                style={{ textDecoration: "none", color: "white" }}>
                Login
              </Link>
            </MyButtonComponent>
          </div>
        )}
      </div>
    </MyNavbar>
  );
};

export default Navbar;
