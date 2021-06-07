import { Button } from "@material-ui/core";

const MyButtonComponent = ({
  userFunction,
  userStyle,
  children,
  type,
  color,
  variant,
  fullWidth,
  size,
  component,
  to,
  disabled,
}) => {
  return (
    <Button
      variant={variant}
      onClick={userFunction}
      style={userStyle}
      type={type}
      color={color}
      fullWidth={fullWidth}
      size={size}
      component={component}
      to={to}
      disabled={disabled}
      className="my-button-component">
      {children}
    </Button>
  );
};

export { MyButtonComponent };

//className can be used for adding css(by adding new .css file) to this component.
// there is no need to pass all options in the props
