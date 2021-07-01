import React, { useState } from "react";
import { MyButtonComponent } from "../Design/MyButtonComponent";
import { MyTextInput, MyCheckbox } from "../Design/FormFieldComponent";
import { MyFullScreenBox } from "../Design/FullScreenBox";
import { createAdminMutation } from "../../queries/admin/adminMutations";
import { useMutation } from "@apollo/client";

const Signup = (props) => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // console.log(props.history.location.pathname.split("/")[1]);
  const identity = props.history.location.pathname.split("/")[1];

  const [createAdmin, createAdminObject] = useMutation(createAdminMutation);
  const { error, loading, data } = createAdminObject;

  const { firstName, lastName, email, password } = userDetails;

  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (identity === "admin") {
      createAdmin({
        variables: {
          firstName,
          lastName,
          email,
          password,
        },
      });
    } else if (identity === "vendor") {
      console.log("this is vendor user");
    } else {
      console.log("this is user");
    }

    setUserDetails({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <MyFullScreenBox display="flex" width="100%" height="100vh">
        <form
          onSubmit={onSubmit}
          style={{
            width: "50%",
            height: "50vh",
            margin: "auto",
            maxWidth: "550px",
          }}>
          <div style={{ color: "black", width: "100%" }}>
            <h2 style={{ textAlign: "center", marginTop: "-20px" }}>SIGN UP</h2>
          </div>
          <div>
            <MyTextInput
              type="text"
              id="firstName"
              name="firstName"
              label="First Name"
              value={firstName}
              onChange={onChange}
            />
          </div>
          <div>
            <MyTextInput
              type="text"
              id="lastName"
              name="lastName"
              label="Last Name"
              value={lastName}
              onChange={onChange}
            />
          </div>
          <div>
            <MyTextInput
              type="text"
              id="email"
              name="email"
              label="Email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div>
            <MyTextInput
              type="password"
              id="password"
              name="password"
              label="Password"
              value={password}
              onChange={onChange}
            />
          </div>

          {/* <div>
            <MyCheckbox name="remember Me" label="Remember Me" />
          </div> */}

          <br></br>

          <div style={{ textAlign: "center" }}>
            <MyButtonComponent
              color="primary"
              variant="contained"
              type="submit">
              Signup
            </MyButtonComponent>
          </div>
        </form>
      </MyFullScreenBox>
    </div>
  );
};

export default Signup;
