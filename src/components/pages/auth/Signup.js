import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_USER } from "../../../queries/user/userMutations";
import { errorVar } from "../../../helpers/ReactiveVariables/ReactiveVariables";
import { MyButtonComponent } from "../../design/MyButtonComponent";
import { MyTextInput, MyCheckbox } from "../../design/MyFormFieldComponent";
import { MyFullScreenBox } from "../../design/MyFullScreenBox";
import MyAlert from "../../design/MyAlert";
import { validateSignupForm } from "../../layout/ClientFormValidations/FormValidation";

const Signup = (props) => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
  });

  const {
    firstName,
    firstNameError,
    lastName,
    lastNameError,
    email,
    emailError,
    password,
    passwordError,
  } = userDetails;

  const [createUser, { data, error: createUserError }] = useMutation(
    CREATE_USER,
    {
      onError: (error) => {
        //handling the rejected promise when calling mutation
      },
      onCompleted: (data) => {
        props.history.push({
          pathname: "/login",
          state: { successMsg: "SignUp Successful, Please Login..." },
        });
      },
    }
  );

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
     * @param setUserDetails after validate the state we set the error state
     *@returns Boolean
     */
    const validationError = validateSignupForm(userDetails, setUserDetails);

    /** If No error found then Do our task and reset the form (state)  */
    if (!validationError) {
      /** Calling signup Mutation */
      createUser({
        variables: {
          firstName,
          lastName,
          email,
          password,
          role: "customer", // Signup Form only for customer
        },
      });

      // clear from after createUser calling
      setUserDetails({
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
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
      {createUserError && <MyAlert type="error">{errorVar()}</MyAlert>}

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
            <h2 style={{ textAlign: "center", marginTop: "-20px" }}>SIGN UP</h2>
          </div>
          <div>
            <MyTextInput
              type="text"
              id="firstName"
              name="firstName"
              label="First Name"
              value={firstName}
              onChange={onChange}
              error={firstNameError !== ""} // Need to enable error if any error exist
              helperText={firstNameError} // This is the error text which will be shown to user
              onFocus={onFocus}
            />
          </div>
          <div>
            <MyTextInput
              type="text"
              id="lastName"
              name="lastName"
              label="Last Name"
              value={lastName}
              onChange={onChange}
              error={lastNameError !== ""}
              helperText={lastNameError}
              onFocus={onFocus}
            />
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
