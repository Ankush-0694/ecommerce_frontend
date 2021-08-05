import React from "react";
import { Route } from "react-router-dom";
import AdminNavbar from "../components/layout/Navbar/AdminNavbar";
import UserNavbar from "../components/layout/Navbar/UserNavbar";

/** PublicCustomerRoute */
const PublicCustomerRoute = ({
  component: Component,
  isAuthenticated,
  setIsAuthenticated,
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
              setIsAuthenticated={setIsAuthenticated}
              {...routeProps}
            />
          </>
        );
      }}
    />
  );
};

/** PublicAdminRoute */
const PublicAdminRoute = ({
  exact,
  path,
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
            <AdminNavbar {...routeProps} />
            <Component {...routeProps} />
          </>
        );
      }}
    />
  );
};

/** PublicVendorRoute */
const PublicVendorRoute = ({
  exact,
  path,
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
            {/** add Vendor Navbar here */}
            <UserNavbar {...routeProps} />
            <Component {...routeProps} />
          </>
        );
      }}
    />
  );
};

export { PublicCustomerRoute, PublicAdminRoute, PublicVendorRoute };
