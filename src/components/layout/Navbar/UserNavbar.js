import React, { useEffect } from "react";
import { MyNavbar } from "../../design/MyNavbar";
import { MyTypography } from "../../design/MyTypography";
import { MyButtonComponent } from "../../design/MyButtonComponent";
import { Link, Redirect, withRouter } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useQuery } from "@apollo/client";
import { GET_CART_BY_CUSTOMERID } from "../../../queries/Cart/cartQueries";
import { StyledBadge, userNavbarStyles } from "./Css/UserNavbarStyles";
import UserNavbarSearch from "./Component/UserNavbarSearch";
import ShowLoading from "../LoadingComponent/ShowLoading";
import { GET_ME } from "../../../queries/user/userQueries";
import { useApolloClient } from "@apollo/client";

const UserNavbar = ({ history, isAuthenticated, setIsAuthenticated }) => {
  const classes = userNavbarStyles();

  const client = useApolloClient(); // getting client to clear cache on logout

  /** Getting cart to show number of items in the cart on the navbar */
  const {
    error: getCartError,
    loading: getCartLoading,
    data: getCartData,
  } = useQuery(GET_CART_BY_CUSTOMERID, {
    skip: !isAuthenticated,
    //Error and loading handlend at the cart nav button
  });

  /**
   *  Need to use this because we may need to show the tabs (logout) only to the customer
   * Not to vendor and not to admin
   *
   * It will get this from apollo cache
   */
  const {
    error: getMeError,
    loading: getMeLoading,
    data: getMeData,
  } = useQuery(GET_ME, {
    skip: !isAuthenticated, //we need to skip this query if there is no token
    onError: () => {}, // if this query we can still see the navbar on the ui due to this
  });

  if (getMeLoading) {
    return <ShowLoading />;
  }

  /**
   * Restricting vendor and Admin to access the customer side public Route
   *
   * Pass a Msg that you need to logout first
   *
   * first condition there is a token and there is someone who logged in
   *
   * in inner condition we are checking who it is.
   */
  if (getMeData) {
    if (getMeData.getMe.role === "vendor") {
      history.push({
        pathname: "/vendor/products", // redirecting to main page of vendor
        state: { message: "You Need to Logout First" },
      });
    }

    if (getMeData.getMe.role === "admin") {
      history.push({
        pathname: "/admin/dashboard", // redirecting to main page of admin
        state: { message: "You Need to Logout First" },
      });
    }
  }

  return (
    <MyNavbar className={classes.navbarRoot}>
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

          {/** added badge to the Cart Button to show cart Count  
            Showing this button only if cart data is available, means query is called
          */}

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
                badgeContent={
                  getCartData && getCartData.getCartByCustomerId.length
                } /// showing this badge if only query is called
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

                /** Logout - Removing token , authentication False, Redirected to User login Page */

                localStorage.removeItem("token");
                setIsAuthenticated(false);

                client.clearStore(); // important step to do because we need to clear the cache or else it will be give same data to another if we don't reload

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
