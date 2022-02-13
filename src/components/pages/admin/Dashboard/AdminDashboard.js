import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import { AdminDashboardStyles } from "./CSS/AdminDashboardStyles";
import {
  MySideDrawerContainer,
  MySideDrawerList,
} from "../../../design/MySideDrawer";
import Customers from "./Component/UserListComponents/Customers/Customers";
import Vendors from "./Component/UserListComponents/Vendors/Vendors";
import ProductList from "./Component/ProductListComponent/ProductList";

// this dashboard could be created using verical tab component in material ui
const AdminDashboard = () => {
  const classes = AdminDashboardStyles();

  /**
   * This data Array Needed to pass to drawer list to show Side Bar
   */
  const listData = [
    {
      Name: "Customers",
      url: "/admin/dashboard",
      icon: "directions_walk_Icon",
    },
    {
      Name: "Vendors",
      url: "/admin/dashboard/vendors",
      icon: "emoji_people_Icon",
    },

    {
      Name: "Products",
      url: "/admin/dashboard/products",
      icon: "card_giftcard_Icon",
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* Side Drawer implmented in separate design component */}
      <MySideDrawerContainer>
        {/** List content heading to add in the side drawer */}
        <MySideDrawerList listData={listData} />
      </MySideDrawerContainer>

      {/* The main content at the Admin pages */}
      <div style={{ flexGrow: 2 }}>
        {/* This is working we remove exact from app.js in this route
            And we are using exact here
         */}
         
        <Routes>
          <Route exact path="/admin/dashboard" component={Customers} />
          <Route exact path="/admin/dashboard/vendors" component={Vendors} />
          <Route exact path="/admin/dashboard/products" component={ProductList} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
