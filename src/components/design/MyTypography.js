import React from "react";
import { Typography } from "@mui/material";

const MyTypography = ({
  children,
  variant,
  className,
  component,
  color,
  style,
  ...otherProps
}) => {
  return (
    <Typography
      className={className}
      color={color}
      component={component}
      style={style}
      variant={variant}
      {...otherProps}
      >
      {children}
    </Typography>
  );
};

export { MyTypography };
