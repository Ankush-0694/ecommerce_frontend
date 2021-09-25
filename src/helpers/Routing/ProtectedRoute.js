import React from "react";
import { Route, Redirect } from "react-router-dom";
import AdminNavbar from "../../components/layout/Navbar/AdminNavbar";
import UserNavbar from "../../components/layout/Navbar/UserNavbar";
import VendorNavbar from "../../components/layout/Navbar/VendorNavbar";

/**
 * Need to pass user details here to check the role
 * if role does not our given role then redirect to unAuthorized Page
 *
 * if no logged in then redirect to appropiate route
 */

/** Customer Protected Route Logic */
const ProtectedCustomerRoute = ({
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
        //if not logged in
        if (!isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { errorMsg: "You are not Logged in" },
              }}
            />
          );
        }
        //if Role does not match to require role then redirect to unAuth page
        else if (user && user.getMe.role !== "customer") {
          return <Redirect to="/unAuth" />;
        }
        // else show the component we want to access
        else {
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

/** Vendor Protected Route Logic */
const ProtectedVendorRoute = ({
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
                pathname: "/vendor/login",
                state: { errorMsg: "You are not Logged in" },
              }}
            />
          );
        } else if (user && user.getMe.role !== "vendor") {
          return <Redirect to="/unAuth" />;
        } else {
          return (
            <>
              <VendorNavbar
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

/** Admin Protected Route Logic */
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
              <AdminNavbar
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

export { ProtectedCustomerRoute, ProtectedVendorRoute, ProtectedAdminRoute };

/* For showing navbar just change the Route to RoutewithNavbar */
// https://stackoverflow.com/questions/61855638/different-navbar-for-a-component-in-react-router
