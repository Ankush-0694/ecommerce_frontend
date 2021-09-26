import { Email } from "@material-ui/icons";
import React, { useState } from "react";

import { ProfileInformationStyles } from "../../CSS/ProfileInformationStyles";

const EmailInformation = ({ userData }) => {
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
      <div>
        <h2 className={classes.personalInfoHeading}>
          Email Address <Email style={{ marginTop: "-8px" }} />
        </h2>
      </div>

      {/* Email Information  Content */}

      <div className="personalInfoContent">
        {/* Showing Content depend on  EditState value is true or false */}

        <div className={classes.NameContainer}>
          <div className={classes.emailDiv}>{userData.email}</div>
        </div>
      </div>
    </div>
  );
};

export default EmailInformation;
