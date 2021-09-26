import React, { useState } from "react";
import MyDivider from "../../../../../design/MyDivider";
import { MyPaper } from "../../../../../design/MyPaper";
import { ProfileInformationStyles } from "../../CSS/ProfileInformationStyles";
import EmailInformation from "./EmailInformation";
import PersonalInformation from "./PersonalInformation";

const ProfileInformation = ({ userData }) => {
  const classes = ProfileInformationStyles();

  return (
    <div className={classes.Container}>
      <MyPaper>
        {/* Personal Information */}
        <PersonalInformation userData={userData} />

        <MyDivider />

        {/* Email Information */}
        <EmailInformation userData={userData} />
      </MyPaper>
    </div>
  );
};

export default ProfileInformation;
