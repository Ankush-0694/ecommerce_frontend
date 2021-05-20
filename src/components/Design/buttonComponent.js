import React from "react";
import { Button } from "@material-ui/core";

const MyButtonComponent = ({ userFunction, userStyle, children, type }) => {
  return (
    <Button
      variant="contained"
      onClick={userFunction}
      style={userStyle}
      type={type}
      color="primary"
      className="my-button-component">
      {children}
    </Button>
  );
};

export default MyButtonComponent;

//className can be used for adding css(by adding new .css file) to this component.
// there is no need to pass all options in the props
