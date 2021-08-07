import React, { useState, useEffect } from "react";
import { MyButtonComponent } from "../Design/MyButtonComponent";
import { MyTextInput, MyCheckbox } from "../Design/MyFormFieldComponent";
import { MyFullScreenBox } from "../Design/MyFullScreenBox";
import { useMutation } from "@apollo/client";
import { validateLoginForm } from "../layout/ClientFormValidations/FormValidation";
import { USER_LOGIN } from "../../queries/user/userMutations";
import MyAlert from "../Design/MyAlert";
import { errorVar } from "../../ReactiveVariables/ReactiveVariables";

const Login = (props) => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
  });
  const { email, emailError, password, passwordError } = userDetails;

  /** Fetching user identity from url then doing user login according to that */
  const identity = props.history.location.pathname.split("/")[1];

  /** Mutation for User Login */
  const [userLogin, { data: userLoginData, error: userLoginError }] =
    useMutation(USER_LOGIN, {
      onError: (error) => {
        //handling the rejected promise when calling mutation
        // console.log(error);
      },
      onCompleted: (data) => {
        const token = data.userLogin.token;
        localStorage.setItem("token", token);

        /**
         * Passed From restProps - PublicRoutes
         *
         * Need to set this state to make Authenticated true after Login
         */
        props.setIsAuthenticated(true);

        /**This push will depend on the identity of the user
         * If user is vendor then push to his product
         * if admin then push to dashboard
         */
        if (identity === "admin") {
          props.history.push("/admin/dashboard");
        } else if (identity === "vendor") {
          props.history.push("/vendor/products");
        } else {
          props.history.push("/");
        }
      },
    });

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

      userLogin({
        variables: {
          email,
          password,
          // role: identity,
        },
      });

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
      {/** Using reactive variable which is set at global level and show it using Myalert
       * Only if there are any error
       */}
      {userLoginError && <MyAlert type="error">{errorVar()}</MyAlert>}

      {/** if we access a protected route without login then we pass a error msg in state while redirecting
       *  And Show that message as an alert
       */}
      {props.location.state && props.location.state.errorMsg && (
        <MyAlert type="error">{props.location.state.errorMsg}</MyAlert>
      )}

      {/* Clearing the state passed from redirection to prevent it from showing error on reload */}
      {window.history.replaceState({}, document.title)}

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
