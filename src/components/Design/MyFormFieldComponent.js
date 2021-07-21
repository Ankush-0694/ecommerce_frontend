import {
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { makeStyles } from "@material-ui/core/styles";
import { useRef } from "react";

// we will override these styles using other classes instead of this in our component, (this is for example)

// https://stackblitz.com/edit/material-ui-custom-outline-color?file=ValidField.js - this is the all thing which i need

const useStyles = makeStyles({
  root: {
    margin: "10px 0px",

    //We can change input css from here
    "& .MuiInputBase-input": {
      backgroundColor: "white",
    },

    //We can change label css from here
    // "& .MuiFormLabel-root": {

    // },
  },

  MultiLineRoot: {
    "& .MuiInputBase-root": {
      backgroundColor: "white",
    },
  },
});

const theme = createMuiTheme({
  // overrides: {
  //   // Style sheet name ⚛️
  //   "": {
  //     // Name of the rule
  //     border: "10px solid black",
  //   },
  // },
});

const MyTextInput = ({ style, onChange, ...others }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <TextField
        {...others}
        onChange={onChange}
        style={style}
        variant="outlined"
        fullWidth
        className={classes.root}
        size="medium"

        // inputProps={{
        //   style: { color: "black" },
        // }} // input props are  to overide pre defined css
      />
    </ThemeProvider>
  );
};

const MyMultilineInput = ({
  id,
  label,
  rows,
  variant,
  type,
  name,
  value,
  onChange,
  autoFocus,
}) => {
  const classes = useStyles();
  return (
    <TextField
      autoFocus={autoFocus}
      id={id}
      type={type}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      fullWidth
      multiline
      rows={rows}
      variant={variant}
      className={classes.MultiLineRoot}
    />
  );
};

const MyCheckbox = ({ name, label, className }) => {
  return (
    <FormControlLabel
      control={<Checkbox name={name} />}
      label={
        <Typography
          className={className}
          variant="h6"
          style={{ color: "Black" }}>
          {label}
        </Typography>
      }
    />
  );
};

export { MyTextInput, MyCheckbox, MyMultilineInput };
