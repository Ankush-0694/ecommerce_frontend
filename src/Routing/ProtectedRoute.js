import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import AdminNavbar from "../components/layout/Navbar/AdminNavbar";
import UserNavbar from "../components/layout/Navbar/UserNavbar";
import VendorNavbar from "../components/layout/Navbar/VendorNavbar";

/**
 * Need to pass user details here to check the role
 * if role does not our given role then redirect to unAuthorized Page
 */

const ProtectedCustomerRoute = ({
  component: Component,
  isAuthenticated,
  setIsAuthenticated,
  ...restProps
}) => {
  return (
    <Route
      {...restProps}
      render={(routeProps) => {
        if (!isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { errorMsg: "You are not Logged in" },
              }}
            />
          );
        } else {
          return (
            <>
              <UserNavbar
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                {...routeProps}
              />
              <Component {...routeProps} />
            </>
          );
        }
      }}
    />
  );
};

const ProtectedVendorRoute = ({
  component: Component,
  isAuthenticated,
  ...restProps
}) => {
  return (
    <Route
      {...restProps}
      render={(routeProps) => {
        if (!isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: "/vendor/login",
                state: { errorMsg: "You are not Logged in" },
              }}
            />
          );
        } else {
          return (
            <>
              <VendorNavbar {...routeProps} />
              <Component {...routeProps} />
            </>
          );
        }
      }}
    />
  );
};

const ProtectedAdminRoute = ({
  component: Component,
  isAuthenticated,
  setIsAuthenticated,
  user,
  ...restProps
}) => {
  return (
    <Route
      {...restProps}
      render={(routeProps) => {
        if (!isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: "/admin/login",
                state: { errorMsg: "You are not Logged in" },
              }}
            />
          );
        } else if (user && user.getMe.role !== "admin") {
          /** Routed to unauth page if user role is not admin */
          return <Redirect to="/unAuth" />;
        } else {
          return (
            <>
              <AdminNavbar {...routeProps} />
              <Component {...routeProps} />
            </>
          );
        }
      }}
    />
  );
};

export { ProtectedCustomerRoute, ProtectedVendorRoute, ProtectedAdminRoute };

/* For showing navbar just change the Route to RoutewithNavbar */
// https://stackoverflow.com/questions/61855638/different-navbar-for-a-component-in-react-router
