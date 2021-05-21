import React from "react";
import MyButtonComponent from "../Design/ButtonComponent";
import { MyTextInput, MyCheckbox } from "../Design/FormFieldComponent";

const Login = () => {
  return (
    <div style={{ background: "white" }}>
      <form>
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

        <div className="container-log-btn">
          <MyButtonComponent type="submit">Login</MyButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default Login;
