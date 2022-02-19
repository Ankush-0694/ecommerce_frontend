import React from "react";
import { MyButtonComponent } from "../../design/MyButtonComponent";
import { MyNavbar } from "../../design/MyNavbar";
import { MyTypography } from "../../design/MyTypography";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../../../queries/user/userQueries";
import ShowLoading from "../LoadingComponent/ShowLoading";
import { VendorNavbarStyles } from "./Css/VendorNavbarStyles";
import { useApolloClient } from "@apollo/client";
import { MyIcon } from "../../design/MyIcons";
import { withRouter } from "../../../helpers/HOC/withRouter";

const VendorNavbar = (props) => {
  const classes = VendorNavbarStyles();
  const { Navigate, isAuthenticated, setIsAuthenticated } = props; 

  const client = useApolloClient(); // getting client to clear cache on logout

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
      Navigate('/', { state : { message: "You Need to Logout First"} })
    }

    if (getMeData.getMe.role === "admin") {
      Navigate('/admin/dashboard', { state : { message: "You Need to Logout First"} })
    }
  }

  // Logout user
  const onLogout = () => {
    // console.log("logout by deleting token from LS");

    /** Logout - Removing token , authentication False, Redirected to User login Page */

    localStorage.removeItem("token");
    setIsAuthenticated(false);

    client.clearStore(); // important step to do because we need to clear the cache or else it will be give same data to another if we don't reload

    Navigate("/vendor/login");
  };

  // tabs need to show when user is not logged in
  const PublicTabs = () => {
    return (
      <>
        <MyButtonComponent
          className={classes.navBtn}
          onClick={() => {
            Navigate("/vendor/login");
          }}
          color="inherit">
          <MyTypography variant="body1" noWrap>
            Login
          </MyTypography>
        </MyButtonComponent>
      </>
    );
  };

  // vice versa of public tabs comment
  const ProtectedTabs = () => {
    return (
      <>
        <MyButtonComponent
          className={classes.navBtn}
          onClick={()=>{
            Navigate("/vendor/trackOrder");
          }}
          color="inherit">
          <MyTypography variant="body1" noWrap>
            Track Orders
          </MyTypography>
        </MyButtonComponent>

        <MyButtonComponent
          className={classes.navBtn}
          onClick={() => {
            Navigate("/vendor/account");
          }}
          color="inherit">
          <MyIcon>account_circle_Icon</MyIcon>
        </MyButtonComponent>

        <MyButtonComponent
          className={classes.navBtn}
          onClick={onLogout}
          color="inherit">
          <MyTypography variant="body1" noWrap>
            Logout
          </MyTypography>
        </MyButtonComponent>
      </>
    );
  };

  return (
    <MyNavbar>
      <div className={classes.navbar}>
        <div>
          <MyButtonComponent
            className={classes.navBtn}
            onClick={() => {
              Navigate("/vendor/products");
            }}
            color="inherit">
            <MyTypography variant="body1" noWrap>
              ShopNox
            </MyTypography>
          </MyButtonComponent>
        </div>

        <div>{!isAuthenticated ? <PublicTabs /> : <ProtectedTabs />}</div>
      </div>
    </MyNavbar>
  );
};

export default withRouter(VendorNavbar);
