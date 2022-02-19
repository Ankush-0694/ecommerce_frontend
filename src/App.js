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
import Unauthorize  from "./components/layout/ErrorComponent/Unauthorize";

import { ProtectedRoute } from "./helpers/Routing/ProtectedRoutes";

import {
  PublicRoute
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
import TrackOrders from "./components/pages/vendor/TrackOrders/TrackOrders";

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
      
      

      {/* This styling for stop responsiveness */}
      <div>
        <Routes>
          {/* Customer Routes */}

          {/*  Need to pass these state to use in navbar , login and logout */}
          
          <Route
            path="/login"
            element={
              <PublicRoute
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                Component={Login} 
                role="customer"
              />
            }
          />

           <Route
            path="/Signup"
            element={
              <PublicRoute
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                Component={Signup} 
                role="customer"
              />
            }
          />

          <Route
            path="/"
            element={
              <PublicRoute
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                Component={Home} 
                role="customer"
              />
            }
          />

          <Route
            path="/Products/:id"
            element={
              <PublicRoute
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                Component={SingleProduct} 
                user={getMeData}
                role="customer"
              />
            }
          />


          <Route
            path="/ShopBy"
            element={
              <PublicRoute
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                Component={ShopBy}
                role="customer"
              />
            }
          />


          <Route
            path="/cart"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                user={getMeData}
                Component={Cart}
                role="customer"
              />
            }
          />


          


          <Route
            path="/review/:productId"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                user={getMeData}
                Component={AddReview}
                role="customer"
              />
            }
          />

          <Route
            path="/checkout/:id"
            element={
              <ProtectedRoute
                Component={CheckoutSingle}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                user={getMeData}
                role="customer"
              />
            }
          />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute
                Component={CheckoutMultiple}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                user={getMeData}
                role="customer"
              />
            }
          />

          <Route
            path="/orders"
            element={
              <ProtectedRoute
                Component={Orders}
                isAuthenticated={isAuthenticated}
                user={getMeData}
                setIsAuthenticated={setIsAuthenticated}
                role="customer"
              />
            } 
          />

          <Route
            exact
            path="/orders/details"
            element={
              <ProtectedRoute
                Component={OrderDetails}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                user={getMeData}
                role="customer"
              />
            }
          />

          {/* This route have nested routes for my account and used using Outlet  */}
          <Route
            path="/account"
            element={
              <ProtectedRoute
                Component={MyProfile}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                user={getMeData}
                role="customer"
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
              <PublicRoute
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                Component={Login}
                role="vendor"
              />
            }
          />

          <Route
            exact
            path="/vendor/products"
            element={
              <ProtectedRoute
                Component={VendorProduct}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                user={getMeData}
                role="vendor"
              />
            } 
          />

          <Route
            exact
            path="/vendor/account"
            element={
              <ProtectedRoute
                Component={VendorProfile}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                user={getMeData}
                role="vendor"
              />
            }
          />
         

           <Route
            exact
            path="/vendor/trackOrder"
            element={
              <ProtectedRoute
                Component={TrackOrders}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                user={getMeData}
                role="vendor"
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
              <PublicRoute
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                Component={Login}
                role="admin"
              />
            }
            
          />

          {/* This route have nested routes for my account and used using Outlet  */}
          
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute
                Component={AdminDashboard}
                user={getMeData}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                role="admin"
              />
            }
          >

            <Route path="/admin/dashboard/" element={<Customers />} />
            <Route path="/admin/dashboard/vendors" element={<Vendors />} />
            <Route path="/admin/dashboard/products" element={<ProductList />} />

          </Route>

          {/* InValid Route */}
          <Route path="/unAuthorize" element={<Unauthorize />} />
          <Route path="/NetworkError" element={<NetworkError/>} />
          <Route path="*" element={<h1>Invalid URL</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
