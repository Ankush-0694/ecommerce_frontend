import { ButtonGroup } from "@mui/material";
import React from "react";

const MyButtonGroup = ({ children, variant, color, arialabel, size }) => {
  return (
    <ButtonGroup
      size={size}
      aria-label={arialabel}
      color={color}
      variant={variant}>
      {children}
    </ButtonGroup>
  );
};

export { MyButtonGroup };
