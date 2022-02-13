import React from "react";
import { Route } from "react-router-dom";
import AdminNavbar from "../../components/layout/Navbar/AdminNavbar";
import UserNavbar from "../../components/layout/Navbar/UserNavbar";
import VendorNavbar from "../../components/layout/Navbar/VendorNavbar";

/**
 * Need to have access of isAuthenticated in public route to check which tabs we need to show
 *
 * Need to have setAuthenticated on Public route to set isAuth to false when customer logout
 *
 * Same Logic applied to the vendor and admin route
 */

/** Public Customer Route */
const PublicCustomerRoute = (props) => {
  console.log({props})
  const { isAuthenticated, setIsAuthenticated,  Component,  user } = props;

  return ( 
    <>
      <UserNavbar
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

/** Public Vendor Route */
const PublicVendorRoute = (props) => {
  const { isAuthenticated, setIsAuthenticated ,Component } = props;
  return (
    <>
      <VendorNavbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Component
        setIsAuthenticated={setIsAuthenticated} // need to pass for use in login page
      />
    </>     
  );
};

/** Public Admin Route */
const PublicAdminRoute = (props) => {
  const { isAuthenticated, setIsAuthenticated , Component }= props;
  return (
    <>
      <AdminNavbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />

      <Component setIsAuthenticated={setIsAuthenticated}
      />
    </>
  );
};

export { PublicCustomerRoute, PublicAdminRoute, PublicVendorRoute };
