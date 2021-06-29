import React, { useState, useEffect } from "react";
import { MyButtonComponent } from "../Design/MyButtonComponent";
import { MyTextInput, MyCheckbox } from "../Design/FormFieldComponent";
import { MyFullScreenBox } from "../Design/FullScreenBox";
import { useMutation } from "@apollo/client";
import { adminLoginMutation } from "../../queries/admin/adminMutation";
import { isLoggedInVar } from "../../clientSchema/ReactiveVaribles";

const Login = (props) => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userDetails;

  // const identity = props.history.location.pathname.split("/")[1];

  const [adminLogin, { error, loading, data }] = useMutation(
    adminLoginMutation,
    {
      onCompleted: (data) => {
        const token = data.adminLogin.token;
        localStorage.setItem("token", token);
        isLoggedInVar(true);
        console.log(token);
      },
    }
  );

  if (error) {
    return <div>Error Occured</div>;
  }

  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    adminLogin({
      variables: {
        email,
        password,
      },
    });
    setUserDetails({
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
            <h2 style={{ textAlign: "center", marginTop: "-20px" }}>LOGIN</h2>
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
