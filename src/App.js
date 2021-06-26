import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/user/Home/Home";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
// import Products from "./components/pages/user/Products/Products";
import SingleProduct from "./components/pages/user/Products/SingleProduct/SingleProduct";
import AddProduct from "./components/pages/vendor/Product/VendorProduct";
import Checkout from "./components/pages/user/Checkout/Checkout";
// import PrivateRoute from "./components/routing/PrivateRoute";
import Cart from "./components/pages/user/Cart/Cart";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

const link = createUploadLink({ uri: "http://localhost:4010/graphql" });
const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

console.log(cache);

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
            <Route exact path="/checkout/:id" component={Checkout} />
            <Route exact path="/Vendor/addProducts" component={AddProduct} />
          </Switch>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
