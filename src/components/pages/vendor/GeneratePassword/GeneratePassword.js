import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { withRouter } from "../../../../helpers/HOC/withRouter";
import { GENERATE_PASSWORD } from "../../../../queries/user/userMutations";
import MyAlert from "../../../design/MyAlert";
import { MyButtonComponent } from "../../../design/MyButtonComponent";
import { MyTextInput } from "../../../design/MyFormFieldComponent";
import { MyFullScreenBox } from "../../../design/MyFullScreenBox";
import { validateGeneratePassword } from "../../../layout/clientFormValidations/authFormValidation";

const GeneratePassword = (props) => {
  const { params : {token} , Navigate  } = props;


  // can add a query to check,  is there any refresh token or not  , then we show a component with a msg

  const [passwordState, setPasswordState] = useState({
    password: "",
    passwordError: "",
    confirmPassword: "",
    confirmPasswordError: "",
  });

  const { password, passwordError, confirmPassword, confirmPasswordError } =
    passwordState;

  const [generatePasswordAlert, setGeneratePassword] = useState("");

  const [generatePassword, { data }] = useMutation(GENERATE_PASSWORD, {
    onError: (error) => {
      //   console.log(error.message);
      setGeneratePassword({
        type: "error",
        msg: error.message,
      });
    },
    onCompleted: (data) => {
      Navigate({
        pathname: "/vendor/login",
        state: {
          successMsg: data.generatePassword.successMsg,
        },
      });
    },
  });

  const onChange = (e) => {
    setPasswordState({
      ...passwordState,
      [e.target.name]: e.target.value,
    });
  };

  const onFocus = (e) => {
    let targetError = e.target.name + "Error";
    setPasswordState({ ...passwordState, [targetError]: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const validationError = validateGeneratePassword(
      passwordState,
      setPasswordState
    );

    if (!validationError) {
      generatePassword({
        variables: {
          password,
          verifyToken: token,
        },
      });

      setPasswordState({
        password: "",
        passwordError: "",
        confirmPassword: "",
        confirmPasswordError: "",
      });
    }
  };

  return (
    <div>
      {generatePasswordAlert && (
        <MyAlert type={generatePasswordAlert.type}>
          {generatePasswordAlert.msg}
        </MyAlert>
      )}
      <MyFullScreenBox display="flex" width="100%" height="80vh">
        <form
          onSubmit={onSubmit}
          style={{
            width: "50%",
            height: "50vh",
            margin: "auto",
            maxWidth: "550px",
          }}>
          <div style={{ color: "black", width: "100%" }}>
            <div
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: 300,
              }}>
              Generate Your Password
            </div>
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

          <div>
            <MyTextInput
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              label="Confrim Password"
              value={confirmPassword}
              onChange={onChange}
              error={confirmPasswordError !== ""}
              helperText={confirmPasswordError}
              onFocus={onFocus}
            />
          </div>

          <br></br>
          <div className="container-log-btn" style={{ textAlign: "center" }}>
            <MyButtonComponent
              color="primary"
              variant="contained"
              type="submit">
              Generate Password
            </MyButtonComponent>
          </div>
        </form>
      </MyFullScreenBox>
    </div>
  );
};

export default withRouter(GeneratePassword);
