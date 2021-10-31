import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

//changin color for color=primary props
const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "rgb(2, 62, 138)",
      // dark: will be calculated from palette.primary.main,
      // contrastText: "rgb(255,255,255)",
    },
  },
});

const useStyles = makeStyles({
  buttonStyle: {},
});

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
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
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
        className={`${className} ${classes.buttonStyle}`}>
        {children}
      </Button>
    </ThemeProvider>
  );
};

export { MyButtonComponent };

//className can be used for adding css(by adding new .css file) to this component.
// there is no need to pass all options in the props
