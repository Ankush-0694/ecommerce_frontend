import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/user/Home/Home";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
// import Products from "./components/pages/user/Products/Products";
import SingleProduct from "./components/pages/user/Products/SingleProduct";
import AddProduct from "./components/pages/vendor/Product/AddProduct";
import Checkout from "./components/pages/user/Checkout/Checkout";
import PrivateRoute from "./components/routing/PrivateRoute";

import setAuthToken from "./components/util/setAuthToken";

const link = createUploadLink({ uri: "http://localhost:4010" });

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  // const loadUser = () => {
  //   // first we need to use loadUser Api to get the user details and findout where to store it
  //   setisAuthenticated(true);
  // };

  if (localStorage.getItem("token")) {
    console.log("token exist");
    const token = localStorage.getItem("token");
    setAuthToken(token);
    // setisAuthenticated(true); //loadUser
  }

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
              isAuthenticated={isAuthenticated}
            />
            <Route
              exact
              path="/login"
              render={(props) => (
                <Login
                  {...props}
                  isAuthenticated={isAuthenticated}
                  setisAuthenticated={setisAuthenticated}
                />
              )}
            />
            <Route exact path="/Signup" component={Signup} />
            {/* <Route exact path="/Products" component={Products} /> */}
            <Route exact path="/Products/:id" component={SingleProduct} />
            <Route exact path="/checkout/:id" component={Checkout} />
            <Route exact path="/Vendor/addProducts" component={AddProduct} />
          </Switch>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
