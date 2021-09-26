import React from "react";
// import { makeStyles } from "../../Design/MyUseStyles";
import { MyButtonComponent } from "../../design/MyButtonComponent";
import { withRouter } from "react-router";
import { MyNavbar } from "../../design/MyNavbar";
import { MyTypography } from "../../design/MyTypography";
import { useQuery } from "@apollo/client";
import ShowLoading from "../LoadingComponent/ShowLoading";
import { GET_ME } from "../../../queries/user/userQueries";
import { VendorNavbarStyles } from "./Css/VendorNavbarStyles";
// const drawerWidth = 250;

const AdminNavbar = ({ history, isAuthenticated, setIsAuthenticated }) => {
  const classes = VendorNavbarStyles(); //same styling as vendor

  /** Need to use this because we may need to show the tabs (logout) only to the admin
   * Not to customer and not to vendor
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
   * Restricting customer and vendor to access the admin  Side public route
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

    if (getMeData.getMe.role === "vendor") {
      history.push({
        pathname: "/vendor/products", // redirecting to main page of vendor
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
            history.push("/admin/dashboard");
          }}
          color="inherit">
          <MyTypography variant="body1" noWrap>
            Dashboard
          </MyTypography>
        </MyButtonComponent>

        {/*  */}

        {!isAuthenticated ? (
          <MyButtonComponent
            className={classes.navBtn}
            onClick={() => {
              history.push("/admin/login");
            }}
            color="inherit">
            <MyTypography variant="body1" noWrap>
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
              history.push("/admin/login");
            }}
            color="inherit">
            <MyTypography variant="body1" noWrap>
              Logout
            </MyTypography>
          </MyButtonComponent>
        )}
      </div>
    </MyNavbar>
  );
};

export default withRouter(AdminNavbar);
