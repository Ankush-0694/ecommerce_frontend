import React from "react";
import {
  MySideDrawerContainer,
  MySideDrawerList,
} from "../../../Design/MySideDrawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route } from "react-router-dom";
import Customers from "../../admin/Dashboard/Component/UserListComponents/Customers/Customers";
import { makeStyles } from "@material-ui/core";
import PersonalInformation from "./Component/PersonalInformation";
import AddressContainer from "../Checkout/AddressContainer";
import ProductReviewList from "../Products/SingleProduct/Component/ProductReviewList/ProductReviewList";
import RatingAndReview from "./Component/RatingAndReview";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const MyProfile = () => {
  const classes = useStyles();
  const listData = [
    {
      Name: "Personal Information",
      url: "/account",
      icon: "account_circle_Icon",
    },
    {
      Name: "Manage Address",
      url: "/account/address",
      icon: "business_icon",
    },

    {
      Name: "My Review and Ratings",
      url: "/account/review",
      icon: "star_icon",
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

      <div style={{ flexGrow: 2, marginLeft: "20px" }}>
        {/* This is working because we remove exact from app.js in this route
            And we are using exact here
         */}
        <Route exact path="/account" component={PersonalInformation} />

        {/* Coming From /user/checkout/addressContainer */}
        <Route exact path="/account/address" component={AddressContainer} />
        <Route exact path="/account/review" component={RatingAndReview} />
      </div>
    </div>
  );
};

export default MyProfile;
