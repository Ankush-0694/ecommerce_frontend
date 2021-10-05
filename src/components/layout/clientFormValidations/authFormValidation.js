/**
 * Validate Signup Form Fields
 */
const validateSignupForm = (userDetails, setUserDetails) => {
  const { firstName, lastName, email, password } = userDetails;

  let isError = false;

  // we spread it in userDetails after setting the error (this prevent us to do setUserDetails for every error)
  const errors = {
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
  };

  if (!email) {
    isError = true;
    errors.emailError = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    isError = true;
    errors.emailError = "Email invalid";
  }

  if (firstName === "") {
    isError = true;
    errors.firstNameError = "First Name is required";
  }

  if (firstName.length > 0) {
    const regex = /^\w+$/;
    if (!regex.test(firstName)) {
      isError = true;
      errors.firstNameError =
        "First Name should contain only letters,numbers and underscores";
    }
  }

  if (lastName === "") {
    isError = true;
    errors.lastNameError = "Last Name is required";
  }

  if (lastName.length > 0) {
    const regex = /^\w+$/;
    if (!regex.test(lastName)) {
      isError = true;
      errors.lastNameError =
        "Last Name should contain only letters,numbers and underscores";
    }
  }

  if (password.length < 6) {
    isError = true;
    errors.passwordError = "Password should have atleast 6 characters";
  }

  setUserDetails({
    ...userDetails,
    ...errors,
  });

  return isError;
};

const validateLoginForm = (userDetails, setUserDetails) => {
  const { email, password } = userDetails;

  let isError = false;

  const errors = {
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
  };

  // if (!email) {
  //   isError = true;
  //   errors.emailError = "Email is required";
  // } else if (!/\S+@\S+\.\S+/.test(email)) {
  //   isError = true;
  //   errors.emailError = "Email invalid";
  // }

  setUserDetails({
    ...userDetails,
    ...errors,
  });

  return isError;
};

const validateGeneratePassword = (passwordState, setPasswordState) => {
  const { password, confirmPassword } = passwordState;

  let isError = false;

  const errors = {
    passwordError: "",
    confirmPasswordError: "",
  };

  if (password.length < 6) {
    isError = true;
    errors.passwordError = "Password should have atleast 6 characters";
  }

  if (password !== confirmPassword) {
    isError = true;
    errors.confirmPasswordError = "You must enter same password again";
  }

  setPasswordState({
    ...passwordState,
    ...errors,
  });

  return isError;
};

export { validateSignupForm, validateLoginForm, validateGeneratePassword };
