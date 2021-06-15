import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const MyTypography = ({
  children,
  variant,
  className,
  component,
  color,
  style,
}) => {
  return (
    <Typography
      className={className}
      color={color}
      component={component}
      style={style}
      variant={variant}>
      {children}
    </Typography>
  );
};

export { MyTypography };
