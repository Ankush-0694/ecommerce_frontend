import React from "react";
import { Route } from "react-router-dom";
import AdminNavbar from "../components/layout/Navbar/AdminNavbar";
import UserNavbar from "../components/layout/Navbar/UserNavbar";

/** This file should be called Public routes  */

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

/** PublicCustomerRoute */
const PublicCustomerRoute = ({ component: Component, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={(routeProps) => {
        return (
          <>
            <UserNavbar {...routeProps} />
            <Component {...routeProps} />
          </>
        );
      }}
    />
  );
};

export { PublicCustomerRoute, PublicAdminRoute, PublicVendorRoute };
