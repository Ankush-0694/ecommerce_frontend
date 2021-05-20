import React from "react";
import MyButtonComponent from "../Design/ButtonComponent";

const Login = () => {
  return (
    <div>
      <form>
        <div className="group log-input">
          <input type="text" id="email" name="email" placeholder="Email" />
        </div>

        <div className="group log-input">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <span className="check left-align">
          <input type="checkbox" />
          <label>Remember Me</label>
        </span>

        <a className="right-align" href="#">
          Forgot Password
        </a>

        <br></br>

        <div className="container-log-btn">
          <MyButtonComponent type="submit">Login</MyButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default Login;
