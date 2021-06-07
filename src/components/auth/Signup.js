import React, { useState } from "react";
import axios from "axios";
import { MyButtonComponent } from "../Design/MyButtonComponent";
import { MyTextInput, MyCheckbox } from "../Design/FormFieldComponent";
import { MyFullScreenBox } from "../Design/FullScreenBox";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:4000/auth/signup",
      userDetails
    );
    console.log(res.data);
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
            <h2 style={{ textAlign: "center", marginTop: "-20px" }}>
              LOGO OR NAME
            </h2>
          </div>
          <div>
            <MyTextInput
              type="text"
              id="firstName"
              name="firstName"
              label="First Name"
              onChange={onChange}
            />
          </div>
          <div>
            <MyTextInput
              type="text"
              id="lastName"
              name="lastName"
              label="Last Name"
              onChange={onChange}
            />
          </div>
          <div>
            <MyTextInput
              type="text"
              id="email"
              name="email"
              label="Email"
              onChange={onChange}
            />
          </div>

          <div>
            <MyTextInput
              type="password"
              id="password"
              name="password"
              label="Password"
              onChange={onChange}
            />
          </div>

          <div>
            <MyCheckbox name="remember Me" label="Remember Me" />
          </div>

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
