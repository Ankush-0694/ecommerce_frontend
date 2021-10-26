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
const PublicCustomerRoute = ({
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
        return (
          <>
            <UserNavbar
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              {...routeProps}
            />
            <Component
              userData={user && user.getMe}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated} // need to pass for use in login page
              {...routeProps}
            />
          </>
        );
      }}
    />
  );
};

/** Public Vendor Route */
const PublicVendorRoute = ({
  exact,
  path,
  isAuthenticated,
  setIsAuthenticated,
  component: Component,
  ...restProps
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      {...restProps}
      render={(routeProps) => {
        return (
          <>
            <VendorNavbar
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              {...routeProps}
            />
            <Component
              {...routeProps}
              setIsAuthenticated={setIsAuthenticated} // need to pass for use in login page
            />
          </>
        );
      }}
    />
  );
};

/** Public Admin Route */
const PublicAdminRoute = ({
  exact,
  path,
  isAuthenticated,
  setIsAuthenticated,
  component: Component,
  ...restProps
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      {...restProps}
      render={(routeProps) => {
        return (
          <>
            <AdminNavbar
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              {...routeProps}
            />

            <Component
              {...routeProps}
              setIsAuthenticated={setIsAuthenticated}
            />
          </>
        );
      }}
    />
  );
};

export { PublicCustomerRoute, PublicAdminRoute, PublicVendorRoute };
