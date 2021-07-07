import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useTheme } from "../../../Design/MyUseStyles";
import { Route } from "react-router-dom";
import Customers from "./Component/DrawerContent/Customers/Customers";
import Vendors from "./Component/DrawerContent/Vendors/Vendors";
import SideDrawer from "./Component/SideDrawer/SideDrawer";
import { DashboardStyles } from "./CSS/DashboardStyles";
import AdminNavbar from "../../../layout/AdminNavbar";
import CreateVendor from "./Component/DrawerContent/CreateVendor/CreateVendor";
import ProductList from "./Component/DrawerContent/ProductListComponent/ProductList";

// this dashboard could be created using verical tab component in material ui
const ResponsiveDrawer = () => {
  const classes = DashboardStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AdminNavbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
            <SideDrawer />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open>
            <SideDrawer />
          </Drawer>
        </Hidden>
      </nav>
      <div style={{ flexGrow: 2 }}>
        {/* Used IIFE's to use IF else syntax in the jsx */}
        {(() => {
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

export default ResponsiveDrawer;

// window.location.href.split("/").pop() === "dashboard" ||
//               (window.location.href.split("/").pop() === "" && (
//                 <div>Make a welcome thing or something for admin page</div>
//               ));
