import { Button } from "@mui/material";

const MyButtonComponent = ({
  onClick,
  onMouseDown,
  style,
  children,
  type,
  color,
  variant,
  fullWidth,
  size,
  component,
  to,
  disabled,
  className,
}) => {

  return (
      <Button
        disableRipple
        variant={variant}
        onClick={onClick}
        onMouseDown={onMouseDown}
        style={style}
        type={type}
        color={color}
        fullWidth={fullWidth}
        size={size}
        component={component}
        to={to}
        disabled={disabled}
        className={className}>
        {children}
      </Button>
    
  );
};

export { MyButtonComponent };

//className can be used for adding css(by adding new .css file) to this component.
// there is no need to pass all options in the props
