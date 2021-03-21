import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Navbar from "./components/layout/Navbar";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Products from "./components/pages/user/Products/Products";
import AddProduct from "./components/pages/vendor/Product/AddProduct";

const client = new ApolloClient({
  uri: "http://localhost:4001/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <div>
          Welcome
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Vendor/Products" component={AddProduct} />
          </Switch>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
