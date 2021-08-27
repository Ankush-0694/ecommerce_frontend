import React from "react";
import { MyButtonComponent } from "../../Design/MyButtonComponent";
import { withRouter } from "react-router";
import { MyNavbar } from "../../Design/MyNavbar";
import { MyTypography } from "../../Design/MyTypography";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../../../queries/user/userQueries";
import ShowLoading from "../LoadingComponent/ShowLoading";
import { VendorNavbarStyles } from "./Css/VendorNavbarStyles";

const VendorNavbar = ({ history, isAuthenticated, setIsAuthenticated }) => {
  const classes = VendorNavbarStyles();

  /** Need to use this because we may need to show the tabs (logout) only to the vendor
   * Not to customer and not to admin
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
   * Restricting customer and Admin to access the vendor  Side public route
   *
   * Pass a Msg that you need to logout first
   *
   * first condition there is a token and there is someone who logged in
   *
   * in inner condition we are checking who it is.
   */
  if (getMeData) {
    if (getMeData.getMe.role === "customer") {
      history.push({
        pathname: "/", // redirecting to main page of customer
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
    <MyNavbar>
      <div className={classes.navbar}>
        <MyButtonComponent
          className={classes.navBtn}
          onClick={() => {
            history.push("/vendor/products");
          }}
          color="inherit">
          <MyTypography variant="h6" noWrap>
            Dashboard
          </MyTypography>
        </MyButtonComponent>

        {/*  */}

        {!isAuthenticated ? (
          <MyButtonComponent
            className={classes.navBtn}
            onClick={() => {
              history.push("/vendor/login");
            }}
            color="inherit">
            <MyTypography variant="h6" noWrap>
              Login
            </MyTypography>
          </MyButtonComponent>
        ) : (
          <MyButtonComponent
            className={classes.navBtn}
            onClick={() => {
              // console.log("logout by deleting token from LS");

              /** Logout - Removing token , authentication False, Redirected to User login Page */

              localStorage.removeItem("token");
              setIsAuthenticated(false);
              history.push("/vendor/login");
            }}
            color="inherit">
            <MyTypography variant="h6" noWrap>
              Logout
            </MyTypography>
          </MyButtonComponent>
        )}
      </div>
    </MyNavbar>
  );
};

export default withRouter(VendorNavbar);
