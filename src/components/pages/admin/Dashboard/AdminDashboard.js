import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route } from "react-router-dom";
import Customers from "./Component/DrawerContent/Customers/Customers";
import Vendors from "./Component/DrawerContent/Vendors/Vendors";
import SideDrawerList from "./Component/SideDrawerList/SideDrawerList";
import { AdminDashboardStyles } from "./CSS/AdminDashboardStyles";
import ProductList from "./Component/DrawerContent/ProductListComponent/ProductList";
import { MySideDrawer } from "../../../Design/MySideDrawer";

// this dashboard could be created using verical tab component in material ui
const AdminDashboard = () => {
  const classes = AdminDashboardStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* Side Drawer implmented in separate design component */}
      <MySideDrawer>
        {/** List content heading to add in the side drawer */}
        <SideDrawerList />
      </MySideDrawer>

      {/* The main content at the Admin pages */}
      <div style={{ flexGrow: 2 }}>
        {/* Used IIFE's to use IF else syntax in the jsx */}
        {(() => {
          {
            /* To show home dashboard at "/dashboard" and "/dashboard/"
             */
          }
          if (
            window.location.href.split("/").pop() === "dashboard" ||
            window.location.href.split("/").pop() === ""
          ) {
            return <div>Make a welcome thing or something for admin page</div>;
          }
        })()}

        <Route exact path="/admin/dashboard/customers" component={Customers} />
        <Route exact path="/admin/dashboard/vendors" component={Vendors} />
        <Route exact path="/admin/dashboard/products" component={ProductList} />
      </div>
    </div>
  );
};

export default AdminDashboard;
