import React from "react";
import Divider from "@material-ui/core/Divider";
import {
  MyListContainer,
  MyListItem,
  MyListItemIcon,
  MyListItemText,
} from "../../../../../Design/MyList";
import { withRouter } from "react-router";
import { SideDrawerStyles } from "../../CSS/SideDrawerStyles";
import {
  MyEmojiPeopleIcon,
  MyDirectionsWalkIcon,
  MyAddIcon,
} from "../../../../../Design/MyIcons";

const SideDrawer = ({ history }) => {
  const classes = SideDrawerStyles();
  return (
    <div>
      <div className={classes.toolbar} style={{ backgroundColor: "#3F51BB" }}>
        Menu
      </div>

      <Divider />

      <MyListContainer>
        <MyListItem
          button
          onClick={() => {
            console.log("je");
            history.push("/admin/dashboard/customers");
          }}>
          <MyListItemIcon>
            <MyDirectionsWalkIcon />
          </MyListItemIcon>
          <MyListItemText primary={"Customers"} />
        </MyListItem>
      </MyListContainer>

      <Divider />

      <MyListContainer>
        <MyListItem
          button
          onClick={() => {
            history.push("/admin/dashboard/vendors");
          }}>
          <MyListItemIcon>
            <MyEmojiPeopleIcon />
          </MyListItemIcon>
          <MyListItemText primary={"Vendors"} />
        </MyListItem>
      </MyListContainer>

      <Divider />

      <MyListContainer>
        <MyListItem
          button
          onClick={() => {
            history.push("/admin/dashboard/createVendor");
          }}>
          <MyListItemIcon>
            <MyAddIcon />
          </MyListItemIcon>
          <MyListItemText primary={"Create Vendor"} />
        </MyListItem>
      </MyListContainer>
    </div>
  );
};

export default withRouter(SideDrawer);
