import React from "react";
import MyButtonComponent from "../Design/buttonComponent";

const Login = () => {
  const myFunction = (e) => {
    alert("yeah my button component on click");
  };
  const myStyle = {
    background: "red",
  };

  return (
    <div>
      <MyButtonComponent userFunction={myFunction} userStyle={myStyle}>
        Hi This is my component Button
      </MyButtonComponent>
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
          <button type="submit" name="btn_submit" className="log-form-btn">
            <span>Login</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
