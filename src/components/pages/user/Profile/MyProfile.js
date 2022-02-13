import React from "react";
import {
  MySideDrawerContainer,
  MySideDrawerList,
} from "../../../design/MySideDrawer";
import { Outlet, Route, Routes } from "react-router-dom";
 import { makeStyles } from '@mui/styles';
import ProfileInformation from "./Component/ProfileInformation/ProfileInformation";
import AddressContainer from "../Checkout/AddressContainer";
import RatingAndReview from "./Component/RatingAndReview/RatingAndReview";

const useStyles = makeStyles({
  root: {
    display: "flex",
    marginRight: "20px",
  },

  addressContainerDiv: {
    marginTop: "24px",
  },
});

const MyProfile = ({ userData }) => {
  const classes = useStyles();
  const listData = [
    {
      Name: "Profile Information",
      url: "/account",
      icon: "account_circle_Icon",
    },
    {
      Name: "Manage Address",
      url: "/account/address",
      icon: "business_icon",
    },

    {
      Name: "My Reviews and Ratings",
      url: "/account/review",
      icon: "star_icon",
    },
  ];

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      {/* Side Drawer implmented in separate design component */}
      <MySideDrawerContainer>
        {/** List content heading to add in the side drawer */}
        <MySideDrawerList listData={listData} />
      </MySideDrawerContainer>

      <div style={{ flexGrow: 2, marginLeft: "20px" }}>
        {/* This is working because we remove exact from app.js in this route
            And we are using exact here
         */}
        {/* <Routes>
          <Route
            path="/account"
            element={
              <ProfileInformation userData={userData} />
            }
          /> */}

          {/* Coming From /user/checkout/addressContainer */}

          {/* <Route
            path="/account/address"
            element={
              <div className={classes.addressContainerDiv}>
                <AddressContainer />
              </div>
            }
          />

          <Route
            exact
            path="/account/review"
            element={
              <RatingAndReview userData={userData} />
            }
          />
          
          
        </Routes> */}
        <Outlet/>
      </div>
    </div>
  );
};

export default MyProfile;
// component={AddressContainer}
//
