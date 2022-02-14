import React from "react";
import { Route } from "react-router-dom";
import MyToolbar from "../../components/design/MyToolbar";
import AdminNavbar from "../../components/layout/Navbar/AdminNavbar";
import UserNavbar from "../../components/layout/Navbar/UserNavbar";
import VendorNavbar from "../../components/layout/Navbar/VendorNavbar";

const NavbarMap = {
  "admin": AdminNavbar,
  "vendor": VendorNavbar,
  "customer": UserNavbar,
}


/**
 * Need to have access of isAuthenticated in public route to check which tabs we need to show
 *
 * Need to have setAuthenticated on Public route to set isAuth to false when customer logout
 */

/** Public Route */
const PublicRoute = (props) => {
  console.log({props})
  const { isAuthenticated, setIsAuthenticated,  Component,  user, role } = props;

  const NavbarComponent = NavbarMap[role];

  return ( 
    <>
      {/** Toolbar added to make content below app bar because
        app bar is fixed */}
      <MyToolbar />
      <NavbarComponent
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
       
      />
      {/* {Component} */}
      <Component
        userData={user && user.getMe}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated} // need to pass for use in login page
      />
    </>    
  )
};

export { PublicRoute };
