import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:4000/auth/signup",
      userDetails
    );
    console.log(res.data);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="group log-input">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            onChange={onChange}
          />
        </div>
        <div className="group log-input">
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            onChange={onChange}
          />
        </div>
        <div className="group log-input">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
          />
        </div>

        <div className="group log-input">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
          />
        </div>

        {/* <span className="check left-align">
          <input type="checkbox" />
          <label>Remember Me</label>
        </span> */}

        {/* <a className="right-align" href="#">
          Forgot Password
        </a> */}

        <br></br>

        <div className="container-log-btn">
          <button type="submit" name="btn_submit" className="log-form-btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
