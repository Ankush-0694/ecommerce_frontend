import React from "react";
import { MyNavbar } from "../../Design/MyNavbar";
import { MyTypography } from "../../Design/MyTypography";
import { MyButtonComponent } from "../../Design/MyButtonComponent";
import { MyIconButton } from "../../Design/MyIconButton";
import { MyMenuAppBar } from "../../Design/MyMenuAppBar";
import { MyMenuItem } from "../../Design/MyMenuItem";
import { MyMenuIcon } from "../../Design/MyIcons";
import { Link, withRouter } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

//these 2 imports should not be here
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },

  /* Menu Bar when screen is small */
  MenuLinkStyle: {
    "&:hover": {
      textDecoration: "none",
    },
    textDecoration: "none",
    color: "Black",
    padding: "6px 16px",
  },

  /* Nav Bar when screen is Large */
  NavbarLink: {
    "&:hover": {
      background: "white",
      color: "black",
    },
  },
  NavbarTabsContainer: {
    flexGrow: 1,
    justifySelf: "flex-end",
  },

  /* Search Bar Styles */
  searchOutDiv: {
    flexGrow: 2,
    marginRight: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchInnerDiv: {
    display: "flex",
  },
  searchInput: {
    flexGrow: 1,
    padding: "8px",
    borderRadius: "5px",
    marginRight: "5px",
  },
  searchIcon: {
    border: "1px solid black",
  },
}));

const UserNavbar = ({ history }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MyNavbar>
      {/* Heading of the Navbar */}
      <div className={classes.title}>
        <MyTypography variant="h6">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Ecommerce
          </Link>
        </MyTypography>
      </div>

      {/* Search Box of the Navbar */}

      <div className={classes.searchOutDiv}>
        <div className={classes.searchInnerDiv}>
          <input
            className={classes.searchInput}
            placeholder="Search Product..."
          />
          <MyButtonComponent
            color="primary"
            variant="contained"
            className={classes.searchIcon}>
            <SearchIcon />
          </MyButtonComponent>
        </div>
      </div>

      {/* Navbar Content based on the screen size  */}
      <div className={classes.NavbarTabsContainer}>
        {isMobile ? (
          /** From here small screen Navbar Starts */

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
          /** From here big screen Navbar Starts */

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

export default withRouter(UserNavbar);
