import React from "react";
import { Route, Redirect } from "react-router-dom";
import AdminNavbar from "../components/layout/Navbar/AdminNavbar";
import UserNavbar from "../components/layout/Navbar/UserNavbar";

const ProtectedCustomerRoute = ({
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
                pathname: "/login",
                state: { errorMsg: "You are not Logged in" },
              }}
            />
          );
        } else {
          return (
            <>
              <UserNavbar {...routeProps} />
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
              <UserNavbar {...routeProps} />
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
