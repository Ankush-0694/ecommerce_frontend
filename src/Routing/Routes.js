import React from "react";
import { Route } from "react-router-dom";
import AdminNavbar from "../components/layout/Navbar/AdminNavbar";
import UserNavbar from "../components/layout/Navbar/UserNavbar";

const RouteWithAdminNavbar = ({
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

const RouteWithVendorNavbar = ({
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

const RouteWithCustomerNavbar = ({ component: Component, ...restProps }) => {
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

export { RouteWithCustomerNavbar, RouteWithAdminNavbar, RouteWithVendorNavbar };
