import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/user/Home/Home";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
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
import FileUpload from "./components/pages/vendor/FileUpload/FileUpload";

import {
  ProtectedAdminRoute,
  ProtectedCustomerRoute,
  ProtectedVendorRoute,
} from "./Routing/ProtectedRoute";

import {
  RouteWithCustomerNavbar,
  RouteWithVendorNavbar,
  RouteWithAdminNavbar,
} from "./Routing/Routes";

import { GET_ME } from "./queries/user/userQueries";

import { authLink, errorLink, httplink } from "./ApolloLinks/ApolloLinks";

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httplink)),
  cache,
});

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // how we will make it true after fetching the user or using LocalStorage

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

            <RouteWithCustomerNavbar exact path="/login" component={Login} />
            <RouteWithCustomerNavbar exact path="/Signup" component={Signup} />
            <RouteWithCustomerNavbar exact path="/" component={Home} />

            <ProtectedCustomerRoute
              exact
              path="/cart"
              isAuthenticated={isAuthenticated}
              component={Cart}
            />

            <ProtectedCustomerRoute
              exact
              path="/orders"
              component={Orders}
              isAuthenticated={isAuthenticated}
            />

            <ProtectedCustomerRoute
              exact
              path="/orders/details"
              component={OrderDetails}
            />
            <ProtectedCustomerRoute
              exact
              path="/Products/:id"
              component={SingleProduct}
            />
            <ProtectedCustomerRoute
              exact
              path="/checkout"
              component={CheckoutMultiple}
            />
            <ProtectedCustomerRoute
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

            <ProtectedVendorRoute
              exact
              path="/Vendor/products"
              component={VendorProduct}
            />

            <ProtectedVendorRoute
              exact
              path="/vendor/file"
              component={FileUpload}
            />

            {/* Admin Routes */}

            <RouteWithAdminNavbar exact path="/admin/login" component={Login} />

            <ProtectedAdminRoute
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
