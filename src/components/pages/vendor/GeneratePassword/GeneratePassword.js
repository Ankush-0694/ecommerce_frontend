import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router";
import { GENERATE_PASSWORD } from "../../../../queries/user/userMutations";
import MyAlert from "../../../design/MyAlert";
import { MyButtonComponent } from "../../../design/MyButtonComponent";
import { MyTextInput } from "../../../design/MyFormFieldComponent";
import { MyFullScreenBox } from "../../../design/MyFullScreenBox";

const GeneratePassword = ({ history }) => {
  const { token } = useParams();

  // can add a query to check,  is there any refresh token or not  , then we show a component with a msg

  const [passwordState, setPasswordState] = useState({
    password: "",
    confirmPassword: "",
  });

  const { password, confirmPassword } = passwordState;

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
      history.push({
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

  const onFocus = () => {};

  const onSubmit = (e) => {
    e.preventDefault();
    generatePassword({
      variables: {
        password,
        verifyToken: token,
      },
    });

    setPasswordState({
      password: "",
      confirmPassword: "",
    });
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
              //   error={passwordError !== ""}
              //   helperText={passwordError}
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
              //   error={passwordError !== ""}
              //   helperText={passwordError}
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

export default GeneratePassword;
