import React, { useState } from "react";
import { MyButtonComponent } from "../../../../../Design/MyButtonComponent";
import { MyTextInput } from "../../../../../Design/MyFormFieldComponent";
import { ProfileInformationStyles } from "../../CSS/ProfileInformationStyles";

const PersonalInformation = () => {
  const classes = ProfileInformationStyles();

  /** To Change content if we click on Edit Button -
   *  Show A form if Edit Button Clicked
   *  */
  const [editState, setEditState] = useState(false);

  return (
    <div className={classes.personalInfo}>
      {/* Personal Information  Heading */}
      <div className={classes.personalInfoHeading}>
        <h3 style={{ fontWeight: 550 }}>
          Personal Information
          {/* Button in Heading - Value depend on Edit State  */}
          <span style={{ marginLeft: "20px" }}>
            <MyButtonComponent
              variant="outlined"
              color="primary"
              size="small"
              onClick={() => {
                !editState ? setEditState(true) : setEditState(false);
              }}>
              {!editState ? "Edit" : "Cancel"}
            </MyButtonComponent>
          </span>
        </h3>
      </div>

      {/* Personal Information  Content */}

      <div className="personalInfoContent">
        {/* Showing Content depend on  EditState value is true or false */}
        {!editState ? (
          <div className={classes.NameContainer}>
            <div className={classes.NameDiv}>First Name - Ankush </div>
            <div className={classes.NameDiv}>Last Name - Kumar </div>
          </div>
        ) : (
          <div>
            {/* Edit Personal Information  Form */}
            <form>
              <MyTextInput type="text" label="First Name" name="firstName" />

              <MyTextInput type="text" label="Last Name" name="lastName" />

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

export default PersonalInformation;
