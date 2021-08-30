import { Email } from "@material-ui/icons";
import React, { useState } from "react";
import { MyButtonComponent } from "../../../../../Design/MyButtonComponent";
import { MyTextInput } from "../../../../../Design/MyFormFieldComponent";
import { ProfileInformationStyles } from "../../CSS/ProfileInformationStyles";

const EmailInformation = () => {
  /**
   * // Styling is same as Personal Information so don't confuse with classes
   */
  const classes = ProfileInformationStyles();

  /** To Change content if we click on Edit Button -
   *  Show A form if Edit Button Clicked
   *  */
  const [editEmailState, setEditEmailState] = useState(false);

  return (
    <div className={classes.personalInfo}>
      {/* Personal Information  Heading */}
      <div className={classes.personalInfoHeading}>
        <h2 style={{ fontWeight: 550 }}>
          Email Address <Email />
        </h2>
      </div>

      {/* Email Information  Content */}

      <div className="personalInfoContent">
        {/* Showing Content depend on  EditState value is true or false */}

        <div className={classes.NameContainer}>
          <div className={classes.NameDiv}>ankush1234@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default EmailInformation;
