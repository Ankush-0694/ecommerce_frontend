import React from "react";
import MyButtonComponent from "../Design/ButtonComponent";
import { MyTextInput, MyCheckbox } from "../Design/FormFieldComponent";
import { MyFullScreenBox } from "../Design/FullScreenBox";

const Login = () => {
  return (
    <div>
      <MyFullScreenBox display="flex" width="100%" height="100vh">
        <form
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
              id="email"
              name="email"
              label="Email"
              // onChange=""
            />
          </div>
          <div>
            <MyTextInput
              type="password"
              id="password"
              name="password"
              label="Password"
              // onChange=""
            />
          </div>
          <div>
            <MyCheckbox name="remember Me" label="Remember Me" />
          </div>
          <div>
            <a href="#">Forgot Password</a>
          </div>
          <br></br>
          <div className="container-log-btn" style={{ textAlign: "center" }}>
            <MyButtonComponent type="submit">Login</MyButtonComponent>
          </div>
        </form>
      </MyFullScreenBox>
    </div>
  );
};

export default Login;
