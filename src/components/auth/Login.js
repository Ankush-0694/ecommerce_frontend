import React, { useState, useEffect } from "react";
import { MyButtonComponent } from "../Design/MyButtonComponent";
import { MyTextInput, MyCheckbox } from "../Design/FormFieldComponent";
import { MyFullScreenBox } from "../Design/FullScreenBox";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { isAuthenticated, setisAuthenticated } = props;
  // console.log(setisAuthenticated);

  // console.log(props);

  useEffect(() => {
    if (isAuthenticated) {
      console.log("auth");
      history.push("/");
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:4000/auth/login",
      userDetails
    );

    console.log(res.data); // this is token object

    if (res.data.token) {
      setisAuthenticated(true); //load User
      localStorage.setItem("token", res.data.token);
    }
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
          <div>
            <a href="#">Forgot Password</a>
          </div>
          <br></br>
          <div className="container-log-btn" style={{ textAlign: "center" }}>
            <MyButtonComponent
              color="primary"
              variant="contained"
              type="submit">
              Login
            </MyButtonComponent>
          </div>
        </form>
      </MyFullScreenBox>
    </div>
  );
};

export default Login;
