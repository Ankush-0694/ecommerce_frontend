import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/user/Home/Home";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import SingleProduct from "./components/pages/user/Products/SingleProduct/SingleProduct";
// import PrivateRoute from "./components/routing/PrivateRoute";
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

import {
  RouteWithAdminNavbar,
  RouteWithUserNavbar,
  RouteWithVendorNavbar,
} from "./ReactRouter/Routes";

import { authLink, errorLink, httplink } from "./ApolloLinks";

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httplink)),
  cache,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        {/** Toolbar added to make content below app bar because
        app bar is fixed */}
        <MyToolbar />
        {/* This styling for stop responsiveness */}
        <div style={{ minWidth: "940px" }}>
          <Switch>
            {/* Customer Routes */}

            <RouteWithUserNavbar exact path="/login" component={Login} />
            <RouteWithUserNavbar exact path="/Signup" component={Signup} />
            <RouteWithUserNavbar exact path="/" component={Home} />
            <RouteWithUserNavbar exact path="/cart" component={Cart} />
            <RouteWithUserNavbar exact path="/orders" component={Orders} />
            <RouteWithUserNavbar
              exact
              path="/orders/details"
              component={OrderDetails}
            />
            <RouteWithUserNavbar
              exact
              path="/Products/:id"
              component={SingleProduct}
            />
            <RouteWithUserNavbar
              exact
              path="/checkout"
              component={CheckoutMultiple}
            />
            <RouteWithUserNavbar
              exact
              path="/checkout/:id"
              component={CheckoutSingle}
            />

            {/* Vendor Routes */}

            <RouteWithVendorNavbar
              exact
              path="/vendor/login"
              component={Login}
            />

            <RouteWithVendorNavbar
              exact
              path="/Vendor/addProducts"
              component={VendorProduct}
            />

            {/* Admin Routes */}

            <RouteWithAdminNavbar exact path="/admin/login" component={Login} />

            <RouteWithAdminNavbar
              path="/admin/Dashboard"
              component={AdminDashboard}
            />

            {/* InValid Route */}

            <Route render={() => <h1>Invalid URL</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
