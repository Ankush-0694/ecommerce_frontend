import React, { useState } from "react";
import { MyButtonComponent } from "../../../../../design/MyButtonComponent";
import MyDivider from "../../../../../design/MyDivider";
import { MyTextInput } from "../../../../../design/MyFormFieldComponent";
import { ProfileInformationStyles } from "../../CSS/ProfileInformationStyles";

const PersonalInformation = ({ userData }) => {
  const classes = ProfileInformationStyles();

  /** To Change content if we click on Edit Button -
   *  Show A form if Edit Button Clicked
   *  */
  const [editState, setEditState] = useState(false);

  const [personalInfoForm, setPersonalInfoForm] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
  });

  const { firstName, lastName } = personalInfoForm;

  const onChange = (e) => {
    setPersonalInfoForm({
      ...personalInfoForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("form Submitted");
  };

  return (
    <div className={classes.personalInfo}>
      {/* Personal Information  Heading */}
      <div>
        <h2 className={classes.personalInfoHeading}>
          Personal Information
          {/* Button in Heading - Value depend on Edit State  */}
          <span style={{ marginLeft: "20px" }}>
            <MyButtonComponent
              className={classes.editCancelBtn}
              variant="contained"
              color={editState ? "secondary" : "primary"}
              size="small"
              onClick={() => {
                !editState ? setEditState(true) : setEditState(false);
              }}>
              {!editState ? "Edit" : "Cancel"}
            </MyButtonComponent>
          </span>
        </h2>
      </div>

      {/* Personal Information  Content */}

      <div className="personalInfoContent">
        {/* Showing Content depend on  EditState value is true or false */}
        {!editState ? (
          <div className={classes.NameContainer}>
            <div className={classes.NameDiv}>
              <span style={{ fontWeight: "700" }}> First Name - </span>
              {firstName.toUpperCase()}
            </div>
            <div className={classes.NameDiv}>
              <span style={{ fontWeight: "700" }}> Last Name - </span>
              {lastName.toUpperCase()}
            </div>
          </div>
        ) : (
          <div className={classes.ProfileFormDiv}>
            {/* Edit Personal Information  Form */}

            <form onSubmit={onSubmit}>
              <MyTextInput
                onChange={onChange}
                type="text"
                label="First Name"
                name="firstName"
                value={firstName}
              />

              <MyTextInput
                onChange={onChange}
                type="text"
                label="Last Name"
                name="lastName"
                value={lastName}
              />

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
