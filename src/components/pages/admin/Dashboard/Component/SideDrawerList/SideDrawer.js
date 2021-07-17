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
import { MyIcon } from "../../../../../Design/MyIcons";
import { Fragment } from "react";

const SideDrawerList = ({ history }) => {
  const classes = SideDrawerStyles();

  /** 
   * @param  {Object[]} :  this data array to avoiding to write MyListContainer
      for every item  so now it will be easy to add a object to listData 
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
    <div>
      <div className={classes.toolbar} style={{ backgroundColor: "#3F51BB" }}>
        Menu {/*  it will not show becasue navbar is over it */}
      </div>
      <div>
        {listData.map((item, index) => {
          return (
            <Fragment key={index}>
              <Divider />
              <MyListContainer>
                <MyListItem
                  button
                  onClick={() => {
                    history.push(item.url);
                  }}>
                  <MyListItemIcon>
                    <MyIcon>{item.icon}</MyIcon>
                  </MyListItemIcon>
                  <MyListItemText primary={item.Name} />
                </MyListItem>
              </MyListContainer>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(SideDrawerList);
