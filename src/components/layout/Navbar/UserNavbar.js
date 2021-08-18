import React, { useEffect } from "react";
import { MyNavbar } from "../../Design/MyNavbar";
import { MyTypography } from "../../Design/MyTypography";
import { MyButtonComponent } from "../../Design/MyButtonComponent";
import { Link, withRouter } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useQuery } from "@apollo/client";
import { GET_CART } from "../../../queries/Cart/cartQueries";
import { StyledBadge, userNavbarStyles } from "./Css/UserNavbarStyles";
import UserNavbarSearch from "./Component/UserNavbarSearch";

const UserNavbar = ({ history, isAuthenticated, setIsAuthenticated }) => {
  const classes = userNavbarStyles();

  /** Getting cart to show number of items in the cart on the navbar */
  const {
    error: getCartError,
    loading: getCartLoading,
    data,
  } = useQuery(GET_CART);

  //Error and loading handlend at the cart tab

  return (
    <MyNavbar className={classes.navbar}>
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
          <UserNavbarSearch />
        </div>
      </div>

      {/* Navbar Tabs  */}

      <div className={classes.NavbarTabsContainer}>
        <div>
          {/* Order Tab */}

          <MyButtonComponent
            className={classes.NavbarLink}
            onClick={() => {
              history.push("/orders");
            }}
            color="inherit">
            My Orders
          </MyButtonComponent>

          {/** added badge to the Cart Button to show cart Count */}

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
              <StyledBadge badgeContent={data.getCart.length} color="secondary">
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
      </div>
    </MyNavbar>
  );
};

export default withRouter(UserNavbar);

// These are for menu item for small screen

// import { MyIconButton } from "../../Design/MyIconButton";
// import { MyMenuAppBar } from "../../Design/MyMenuAppBar";
// import { MyMenuItem } from "../../Design/MyMenuItem";
// import { MyMenuIcon } from "../../Design/MyIcons";
// import { useTheme } from "@material-ui/core/styles";
// import { useMediaQuery } from "@material-ui/core";

// const theme = useTheme();
// const [anchorEl, setAnchorEl] = React.useState(null);
// const open = Boolean(anchorEl);
// const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

// const handleMenu = (event) => {
//   setAnchorEl(event.currentTarget);
// };
// const handleClose = () => {
//   setAnchorEl(null);
// };

// {isMobile ? (
//           /** From here small screen Navbar Starts */

//           <div>
//             <MyIconButton onClick={handleMenu}>
//               <MyMenuIcon />
//             </MyIconButton>
//             <MyMenuAppBar onClose={handleClose} open={open} anchorEl={anchorEl}>
//               <MyMenuItem onClick={handleClose}>
//                 <Link to="/orders" className={classes.MenuLinkStyle}>
//                   My Orders
//                 </Link>
//               </MyMenuItem>
//               <MyMenuItem onClick={handleClose}>
//                 <Link to="/cart" className={classes.MenuLinkStyle}>
//                   Cart
//                 </Link>
//               </MyMenuItem>
//               <MyMenuItem onClick={handleClose}>
//                 <Link to="/signup" className={classes.MenuLinkStyle}>
//                   Signup
//                 </Link>
//               </MyMenuItem>
//               <MyMenuItem onClick={handleClose}>
//                 <Link to="/Login" className={classes.MenuLinkStyle}>
//                   Login
//                 </Link>
//               </MyMenuItem>
//             </MyMenuAppBar>
//           </div>
//         ) : (
