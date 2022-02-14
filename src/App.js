import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/user/Home/Home";
import SingleProduct from "./components/pages/user/Products/SingleProduct/SingleProduct";
import Cart from "./components/pages/user/Cart/Cart";
import Signup from "./components/pages/auth/Signup/Signup";
import Login from "./components/pages/auth/Login/Login";
import VendorProduct from "./components/pages/vendor/Product/VendorProduct";
import AdminDashboard from "./components/pages/admin/Dashboard/AdminDashboard";
import CheckoutMultiple from "./components/pages/user/Checkout/CheckoutMultiple";
import CheckoutSingle from "./components/pages/user/Checkout/CheckoutSingle";
import Orders from "./components/pages/user/Orders/AllOrders/Orders";
import OrderDetails from "./components/pages/user/Orders/OrderDetails/OrderDetails";
import MyToolbar from "./components/design/MyToolbar";
import { GET_ME } from "./queries/user/userQueries";
import { useQuery } from "@apollo/client";
import Unauthorized from "./components/layout/ErrorComponent/Unauthorized";

import {
  ProtectedAdminRoute,
  ProtectedCustomerRoute,
  ProtectedVendorRoute,
} from "./helpers/Routing/ProtectedRoute";

import {
  PublicCustomerRoute,
  PublicVendorRoute,
  PublicAdminRoute,
} from "./helpers/Routing/PublicRoutes";

import ShowLoading from "./components/layout/LoadingComponent/ShowLoading";
import NetworkError from "./components/layout/ErrorComponent/NetworkError";
import MyProfile from "./components/pages/user/Profile/MyProfile";
import ShopBy from "./components/pages/user/ShopBy/ShopBy";
import GeneratePassword from "./components/pages/vendor/GeneratePassword/GeneratePassword";
import VendorProfile from "./components/pages/vendor/VendorProfile/VendorProfile";
import AddReview from "./components/pages/user/Review/AddReview";
import ProfileInformation from "./components/pages/user/Profile/Component/ProfileInformation/ProfileInformation";
import AddressContainer from "./components/pages/user/Checkout/AddressContainer";
import RatingAndReview from "./components/pages/user/Profile/Component/RatingAndReview/RatingAndReview";
import Customers from "./components/pages/admin/Dashboard/Component/UserListComponents/Customers/Customers";
import Vendors from "./components/pages/admin/Dashboard/Component/UserListComponents/Vendors/Vendors";
import ProductList from "./components/pages/admin/Dashboard/Component/ProductListComponent/ProductList";

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
  // console.log(getMeData);

  return (
    <BrowserRouter>
      {/** Toolbar added to make content below app bar because
        app bar is fixed */}
      <MyToolbar />

      {/* This styling for stop responsiveness */}
      <div>
        <Routes>
          {/* Customer Routes */}

          {/*  Need to pass these state to use in navbar , login and logout */}
          
          <Route
            path="/login"
            element={
            <PublicCustomerRoute
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              Component={Login} 
            />
            }
          />

           <Route
            path="/Signup"
            element={
              <PublicCustomerRoute
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                Component={Signup} 
              />
            }
          />

          <Route
            path="/"
            element={
              <PublicCustomerRoute
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                Component={Home} 
              />
            }
          />

          <Route
            path="/Products/:id"
            element={
              <PublicCustomerRoute
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                Component={SingleProduct} 
                user={getMeData}
              />
            }
          />


          <Route
            path="/ShopBy"
            element={
              <PublicCustomerRoute
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                Component={ShopBy}
              />
            }
          />


          <Route
            path="/cart"
            element={
              <ProtectedCustomerRoute
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                user={getMeData}
                Component={Cart}
              />
            }
          />


          <Route
            path="/review/:productId"
            element={
              <ProtectedCustomerRoute
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                user={getMeData}
                Component={AddReview}
              />
            }
          />

          <Route
            path="/checkout/:id"
            element={
              <ProtectedCustomerRoute
                Component={CheckoutSingle}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                user={getMeData}
              />
            }
          />

          <Route
            path="/checkout"
            element={
              <ProtectedCustomerRoute
                Component={CheckoutMultiple}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                user={getMeData}
              />
            }
          />

          <Route
            path="/orders"
            element={
              <ProtectedCustomerRoute
                Component={Orders}
                isAuthenticated={isAuthenticated}
                user={getMeData}
                setIsAuthenticated={setIsAuthenticated}
              />
            } 
          />

          <Route
            exact
            path="/orders/details"
            element={
              <ProtectedCustomerRoute
                Component={OrderDetails}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                user={getMeData}
              />
            }
          />

          {/* This route have nested routes for my account and used using Outlet  */}
          <Route
            path="/account"
            element={
              <ProtectedCustomerRoute
                Component={MyProfile}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                user={getMeData}
              />
            }
          >

            <Route path="/account/"  element={
                <ProfileInformation userData={getMeData && getMeData.getMe} />
              }
            />
            <Route path="/account/address" element={
                <div style={{ marginTop: "24px" }}>
                  <AddressContainer />
                 </div>
              }
            />
            <Route path="/account/review" element={
                <RatingAndReview userData={getMeData && getMeData.getMe} />
              }
            />

          </Route> 

          {/* Vendor Routes */}

          <Route
            exact
            path="/vendor/login"
            element={
              <PublicVendorRoute
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                Component={Login}
              />
            }
          />

          <Route
            exact
            path="/vendor/products"
            element={
              <ProtectedVendorRoute
                Component={VendorProduct}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                user={getMeData}
              />
            } 
          />

          <Route
            exact
            path="/Vendor/account"
            element={
              <ProtectedVendorRoute
                Component={VendorProfile}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                user={getMeData}
              />
            }
          />
          
          {/*
            <PublicVendorRoute
              exact
              path="/vendor/generatePassword/:token"
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              component={GeneratePassword}
            />
          */}

          {/* Admin Routes */}

          <Route
            path="/admin/login"
            element={
              <PublicAdminRoute
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                Component={Login}
              />
            }
            
          />

          {/* This route have nested routes for my account and used using Outlet  */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedAdminRoute
                Component={AdminDashboard}
                user={getMeData}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          >

            <Route path="/admin/dashboard/" element={<Customers />} />
            <Route path="/admin/dashboard/vendors" element={<Vendors />} />
            <Route path="/admin/dashboard/products" element={<ProductList />} />

          </Route>

          {/* InValid Route */}
          <Route path="/unAuth" element={<Unauthorized/>} />
          <Route path="/NetworkError" element={<NetworkError/>} />
          <Route path="*" element={<h1>Invalid URL</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
