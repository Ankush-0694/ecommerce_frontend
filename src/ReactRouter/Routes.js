import React from "react";
import { Route } from "react-router-dom";
import AdminNavbar from "../components/layout/AdminNavbar";
import Navbar from "../components/layout/Navbar";

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
            <Navbar {...routeProps} />
            {/** add Vendor Navbar here */}
            <Component {...routeProps} />
          </>
        );
      }}
    />
  );
};

const RouteWithUserNavbar = ({
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
            <Navbar {...routeProps} />
            <Component {...routeProps} />
          </>
        );
      }}
    />
  );
};

export { RouteWithUserNavbar, RouteWithAdminNavbar, RouteWithVendorNavbar };
