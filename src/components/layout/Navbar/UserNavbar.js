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
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

//these 2 imports should not be here
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { Badge, useMediaQuery } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { GET_CART } from "../../../queries/Cart/cartQueries";

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

// For styling  Cart Badge
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const UserNavbar = ({ history, isAuthenticated, setIsAuthenticated }) => {
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

  /** Getting cart to show number of items in the cart on the navbar */
  const {
    error: getCartError,
    loading: getCartLoading,
    data,
  } = useQuery(GET_CART);

  // if (getCartError) {
  //   return <div>Error</div>;
  // }
  // if (getCartLoading) {
  //   return <div>Loading</div>;
  // }

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

            {/** added badge to the Cart Button */}

            <MyButtonComponent
              className={classes.NavbarLink}
              onClick={() => {
                history.push("/cart");
              }}
              color="inherit">
              {/* If error just show the text */}
              {getCartError && <>Cart</>}

              {/* Showing cart count only when query success */}
              {!getCartLoading && !getCartError && (
                <StyledBadge
                  badgeContent={data.getCart.length}
                  color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              )}
            </MyButtonComponent>

            {/* Profile Tab */}

            <MyButtonComponent
              className={classes.NavbarLink}
              onClick={() => {
                history.push("/account");
              }}
              color="inherit">
              My Account
            </MyButtonComponent>

            {/** Showing signup button only if user is not logged in */}

            {!isAuthenticated && (
              <MyButtonComponent
                className={classes.NavbarLink}
                onClick={() => {
                  history.push("/signup");
                }}
                color="inherit">
                Signup
              </MyButtonComponent>
            )}

            {/** Showing Login or Logout button based on isAuthenticated */}

            {!isAuthenticated ? (
              <MyButtonComponent
                className={classes.NavbarLink}
                onClick={() => {
                  history.push("/login");
                }}
                color="inherit">
                Login
              </MyButtonComponent>
            ) : (
              <MyButtonComponent
                className={classes.NavbarLink}
                onClick={() => {
                  // console.log("logout by deleting token from LS");

                  /** Logout - Removing token , authentication False, Redirected to User Page */

                  localStorage.removeItem("token");
                  setIsAuthenticated(false);
                  history.push("/login");
                }}
                color="inherit">
                Logout
              </MyButtonComponent>
            )}
          </div>
        )}
      </div>
    </MyNavbar>
  );
};

export default withRouter(UserNavbar);
