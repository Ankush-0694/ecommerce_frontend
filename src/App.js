import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/user/Home/Home";
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
// import Products from "./components/pages/user/Products/Products";
import SingleProduct from "./components/pages/user/Products/SingleProduct/SingleProduct";
import Checkout from "./components/pages/user/Checkout/Checkout";
// import PrivateRoute from "./components/routing/PrivateRoute";
import Cart from "./components/pages/user/Cart/Cart";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import VendorProduct from "./components/pages/vendor/Product/VendorProduct";
import Dashboard from "./components/pages/admin/Dashboard/Dashboard";
import CheckoutMultiple from "./components/pages/user/Checkout/CheckoutMultiple";
import CheckoutSingle from "./components/pages/user/Checkout/CheckoutSingle";
const httplink = createUploadLink({ uri: "http://localhost:4010/graphql" });

const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httplink),
  cache,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/admin/login" component={Login} />
            <Route exact path="/admin/Signup" component={Signup} />
            <Route exact path="/vendor/login" component={Login} />
            <Route exact path="/vendor/Signup" component={Signup} />
            <Route exact path="/cart" component={Cart} />
            {/* <Route exact path="/Products" component={Products} /> */}
            <Route exact path="/Products/:id" component={SingleProduct} />
            <Route exact path="/checkout" component={CheckoutMultiple} />
            <Route exact path="/checkout/:id" component={CheckoutSingle} />
            <Route exact path="/Vendor/addProducts" component={VendorProduct} />
            <Route path="/admin/Dashboard" component={Dashboard} />
            <Route render={() => <h1>Invalid URL</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
