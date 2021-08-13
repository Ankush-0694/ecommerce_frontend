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
        <h3 style={{ fontWeight: 550 }}>
          Email Address
          {/* Button in Heading - Value depend on Edit State  */}
          <span style={{ marginLeft: "20px" }}>
            <MyButtonComponent
              variant="outlined"
              color="primary"
              size="small"
              onClick={() => {
                !editEmailState
                  ? setEditEmailState(true)
                  : setEditEmailState(false);
              }}>
              {!editEmailState ? "Edit" : "Cancel"}
            </MyButtonComponent>
          </span>
        </h3>
      </div>

      {/* Email Information  Content */}

      <div className="personalInfoContent">
        {/* Showing Content depend on  EditState value is true or false */}
        {!editEmailState ? (
          <div className={classes.NameContainer}>
            <div className={classes.NameDiv}>Email - ankush1234@gmail.com</div>
          </div>
        ) : (
          <div>
            {/* Edit Personal Information  Form */}
            <form>
              <MyTextInput type="text" label="Email" name="email" />

              <MyButtonComponent variant="outlined" color="primary">
                Save
              </MyButtonComponent>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailInformation;
