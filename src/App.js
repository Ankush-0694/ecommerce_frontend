import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/user/Home/Home";
import SingleProduct from "./components/pages/user/Products/SingleProduct/SingleProduct";
import Cart from "./components/pages/user/Cart/Cart";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import VendorProduct from "./components/pages/vendor/Product/VendorProduct";
import AdminDashboard from "./components/pages/admin/Dashboard/AdminDashboard";
import CheckoutMultiple from "./components/pages/user/Checkout/CheckoutMultiple";
import CheckoutSingle from "./components/pages/user/Checkout/CheckoutSingle";
import Orders from "./components/pages/user/Orders/AllOrders/Orders";
import OrderDetails from "./components/pages/user/Orders/OrderDetails/OrderDetails";
import MyToolbar from "./components/Design/MyToolbar";
import { GET_ME } from "./queries/user/userQueries";
import { useQuery } from "@apollo/client";
import Unauthorized from "./components/layout/ErrorComponent/Unauthorized";

import {
  ProtectedAdminRoute,
  ProtectedCustomerRoute,
  ProtectedVendorRoute,
} from "./Routing/ProtectedRoute";

import {
  PublicCustomerRoute,
  PublicVendorRoute,
  PublicAdminRoute,
} from "./Routing/PublicRoutes";

import ShowLoading from "./components/layout/LoadingComponent/ShowLoading";
import NetworkError from "./components/layout/ErrorComponent/NetworkError";
import MyProfile from "./components/pages/user/Profile/MyProfile";
import ShopBy from "./components/pages/user/ShopBy/ShopBy";
import ShowError from "./components/layout/ErrorComponent/ShowError";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token")
  );

  /** To fetch user details to pass it in protected routes props */
  const {
    error: getMeError,
    loading: getMeLoading,
    data: getMeData,
  } = useQuery(GET_ME, {
    skip: !isAuthenticated, //we need to skip this query if there is no token
    onError: () => {}, // error handled here instead of show error on Ui
  });

  if (getMeLoading) {
    return <ShowLoading />;
  }
  console.log(getMeData);

  return (
    <BrowserRouter>
      {/** Toolbar added to make content below app bar because
        app bar is fixed */}
      <MyToolbar />

      {/* This styling for stop responsiveness */}
      <div style={{ minWidth: "940px" }}>
        <Switch>
          {/* Customer Routes */}

          {/*  Need to pass these state to use in navbar , login and logout */}

          <PublicCustomerRoute
            exact
            path="/login"
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
            component={Login}
          />

          <PublicCustomerRoute
            exact
            path="/Signup"
            component={Signup}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />

          <PublicCustomerRoute
            exact
            path="/"
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
            component={Home}
          />
          <PublicCustomerRoute
            exact
            path="/Products/:id"
            component={SingleProduct}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />

          <PublicCustomerRoute
            exact
            path="/ShopBy"
            component={ShopBy}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />

          <ProtectedCustomerRoute
            exact
            path="/cart"
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
            user={getMeData}
            component={Cart}
          />

          <ProtectedCustomerRoute
            exact
            path="/orders"
            component={Orders}
            isAuthenticated={isAuthenticated}
            user={getMeData}
            setIsAuthenticated={setIsAuthenticated}
            user={getMeData}
          />

          <ProtectedCustomerRoute
            exact
            path="/orders/details"
            component={OrderDetails}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
            user={getMeData}
          />

          <ProtectedCustomerRoute
            exact
            path="/checkout"
            component={CheckoutMultiple}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
            user={getMeData}
          />

          <ProtectedCustomerRoute
            exact
            path="/checkout/:id"
            component={CheckoutSingle}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
            user={getMeData}
          />
          <ProtectedCustomerRoute
            path="/account"
            component={MyProfile}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
            user={getMeData}
          />

          {/* Vendor Routes */}

          <PublicVendorRoute
            exact
            path="/vendor/login"
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
            component={Login}
          />

          <ProtectedVendorRoute
            exact
            path="/Vendor/products"
            component={VendorProduct}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
            user={getMeData}
          />

          {/* Admin Routes */}

          <PublicAdminRoute
            exact
            path="/admin/login"
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
            component={Login}
          />

          <ProtectedAdminRoute
            path="/admin/Dashboard"
            component={AdminDashboard}
            user={getMeData}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />

          {/* InValid Route */}
          <Route exact path="/unAuth" component={Unauthorized} />
          <Route exact path="/NetworkError" component={NetworkError} />
          <Route render={() => <h1>Invalid URL</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
