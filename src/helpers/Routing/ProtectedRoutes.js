import React from "react";
import { Navigate } from "react-router-dom";
import MyToolbar from "../../components/design/MyToolbar";
import AdminNavbar from "../../components/layout/Navbar/AdminNavbar";
import UserNavbar from "../../components/layout/Navbar/UserNavbar";
import VendorNavbar from "../../components/layout/Navbar/VendorNavbar";


const NavbarAndRedirectMap = {
  "admin": { NavbarComponent : AdminNavbar , redirectRoute : "/admin/login"},
  "vendor":  { NavbarComponent : VendorNavbar , redirectRoute : "/vendor/login"},
  "customer":  { NavbarComponent : UserNavbar , redirectRoute : "/login"},
}


/**
 * Need to pass user details here to check the role
 * if role does not our given role then Navigate to unAuthorized Page
 *
 * if no logged in then Navigate to appropiate route
 */

/**Protected Route Logic */
const ProtectedRoute = (props) => {
  const { Component, isAuthenticated, setIsAuthenticated, user, role } = props;

  const { NavbarComponent , redirectRoute } = NavbarAndRedirectMap[role];

  if (!isAuthenticated) {
    return (
      <Navigate to={redirectRoute}  state={{ errorMsg: "You must login to access this page" }} />
    );
  }
  //if Role does not match to require role then Navigate to unAuthorize page
  else if (user && user.getMe.role !== role) {
    return <Navigate to="/unAuthorize" />;
  }
  // else show the component we want to access
  else {
    return (
      <>
        {/** Toolbar added to make content below app bar because
        app bar is fixed */}
        <MyToolbar />
        <NavbarComponent
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
        <Component userData={user && user.getMe} />
      </>
    );
  }
};

export { ProtectedRoute };

/* For showing navbar just change the Route to RoutewithNavbar */
// https://stackoverflow.com/questions/61855638/different-navbar-for-a-component-in-react-router
