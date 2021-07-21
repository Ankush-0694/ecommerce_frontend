import React, { useState, useEffect } from "react";
import { MyButtonComponent } from "../Design/MyButtonComponent";
import { MyTextInput, MyCheckbox } from "../Design/MyFormFieldComponent";
import { MyFullScreenBox } from "../Design/MyFullScreenBox";
import { useMutation } from "@apollo/client";
import { ADMIN_LOGIN } from "../../queries/admin/adminMutations";
import { validateLoginForm } from "../layout/FormValidation";

const Login = (props) => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
  });
  const { email, emailError, password, passwordError } = userDetails;

  const identity = props.history.location.pathname.split("/")[1];

  // const [adminLogin, { data: adminLoginData }] = useMutation(ADMIN_LOGIN, {
  //   onCompleted: (data) => {
  //     const token = data.adminLogin.token;
  //     localStorage.setItem("token", token);
  //   },
  // });

  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  /** this function is added to remove that input error when user
   * focus on that input
   */
  const onFocus = (e) => {
    let targetError = e.target.name + "Error";
    setUserDetails({ ...userDetails, [targetError]: "" });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    /**  this is validate the fields and set the error state and return a boolean
     * If any error found it will send the true
     * @param userDetails To validate all fields in the state
     * @param setUserDetails after validate the state we set the state
     *@returns Boolean
     */
    const validationError = validateLoginForm(userDetails, setUserDetails);

    /** If No error found then Do our task and reset the form (state)  */
    if (!validationError) {
      /*  Do any task */
      // adminLogin({
      //   variables: {
      //     email: email,
      //     password,
      //   },
      // });

      setUserDetails({
        email: "",
        emailError: "",
        password: "",
        passwordError: "",
      });
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
              error={emailError !== ""}
              helperText={emailError}
              onFocus={onFocus}
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
              error={passwordError !== ""}
              helperText={passwordError}
              onFocus={onFocus}
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
