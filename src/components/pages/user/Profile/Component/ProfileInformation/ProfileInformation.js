import React, { useState } from "react";
import { MyPaper } from "../../../../../Design/MyPaper";
import { ProfileInformationStyles } from "../../CSS/ProfileInformationStyles";
import EmailInformation from "./EmailInformation";
import PersonalInformation from "./PersonalInformation";

const ProfileInformation = () => {
  const classes = ProfileInformationStyles();

  return (
    <div className={classes.Container}>
      <MyPaper>
        {/* Personal Information */}
        <PersonalInformation />

        {/* Email Information */}
        <EmailInformation />
      </MyPaper>
    </div>
  );
};

export default ProfileInformation;
