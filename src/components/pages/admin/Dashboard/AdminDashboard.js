import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route } from "react-router-dom";
import { AdminDashboardStyles } from "./CSS/AdminDashboardStyles";
import {
  MySideDrawerContainer,
  MySideDrawerList,
} from "../../../Design/MySideDrawer";
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
      url: "/admin/dashboard/customers",
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
      <div style={{ flexGrow: 2, marginLeft: "20px" }}>
        {/* This is working we remove exact from app.js in this route
            And we are using exact here
         */}

        {/* <Route exact path="/admin/dashboard" component={Customers} /> */}
        <Route exact path="/admin/dashboard/customers" component={Customers} />
        <Route exact path="/admin/dashboard/vendors" component={Vendors} />
        <Route exact path="/admin/dashboard/products" component={ProductList} />
      </div>
    </div>
  );
};

export default AdminDashboard;
