import React, { useState } from "react";
import { MyButtonComponent } from "../../../design/MyButtonComponent";
import { MyTextInput } from "../../../design/MyFormFieldComponent";
import { MyFullScreenBox } from "../../../design/MyFullScreenBox";
import { useMutation } from "@apollo/client";
import { validateLoginForm } from "../../../layout/clientFormValidations/authFormValidation";
import { USER_LOGIN } from "../../../../queries/user/userMutations";
import MyAlert from "../../../design/MyAlert";
import { errorVar } from "../../../../helpers/ReactiveVariables/ReactiveVariables";
import { Link } from "react-router-dom";
import { withRouter } from "../../../../helpers/HOC/withRouter";

const Login = (props) => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
  });
  
  const { location, Navigate, setIsAuthenticated } = props;

  const { email, emailError, password, passwordError } = userDetails;

  /** Fetching user identity from url then doing user login according to that */

  let identity = location.pathname.split("/")[1];

  if (identity === "login") identity = "customer";

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
        setIsAuthenticated(true);

        /**This push will depend on the identity of the user
         * If user is vendor then push to his product
         * if admin then push to dashboard
         */
        if (identity === "admin") {
          Navigate("/admin/dashboard");
        } else if (identity === "vendor") {
          Navigate("/vendor/products");
        } else {
          Navigate("/");
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
          role: identity,
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
       * We don't need to pass prop to myAlert to clear state because it is coming from cache
       * it will be handle automatically
       */}
      {userLoginError && <MyAlert type="error">{errorVar()}</MyAlert>}
      {/** if we access a protected route without login then we pass a error msg in state while redirecting
       *  And Show that message as an alert
       *
       */}
      {location.state && location.state.errorMsg && (
        <MyAlert type="error">{location.state.errorMsg}</MyAlert>
      )}
      {/* if signup got successfull then we need to come to this page with a alert msg

       * state is cleared after using window.history
       */}
      {location.state && location.state.successMsg && (
        <MyAlert type="success">{location.state.successMsg}</MyAlert>
      )}
      {/* Clearing the state passed from redirection to prevent it from showing error on reload */}
      {window.history.replaceState({}, document.title)}

      <MyFullScreenBox display="flex" width="100%" height="90vh">
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
            <Link to={`/forgotPassword/${identity}`}>Forgot Password</Link>
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
      {/* //https://getwaves.io/ */}
      {/* <div style={{ marginTop: "-300px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#023e8a"
            fill-opacity="1"
            d="M0,192L80,202.7C160,213,320,235,480,240C640,245,800,235,960,229.3C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div> */}
    </div>
  );
};

export default withRouter(Login);
