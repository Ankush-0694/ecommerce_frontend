import React from "react";
import { Route } from "react-router-dom";
import AdminNavbar from "../components/layout/Navbar/AdminNavbar";
import UserNavbar from "../components/layout/Navbar/UserNavbar";
import VendorNavbar from "../components/layout/Navbar/VendorNavbar";

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

/** PublicVendorRoute */
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
            {/** add Vendor Navbar here */}
            <VendorNavbar {...routeProps} />
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

/** PublicAdminRoute */
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
            <AdminNavbar {...routeProps} />

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
