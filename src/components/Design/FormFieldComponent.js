import {
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

// still need to figure how to change border color and fontsize etc...  // border radius - 50px is awesome
// using themeprovider and withStyles ( both are in a single video)

const useStyles = makeStyles({
  root: {
    margin: "10px 0px",
  },
});

const MyTextInput = ({
  type,
  id,
  name,
  value,
  label,
  userstyle,
  onChange,
  children,
}) => {
  const classes = useStyles();
  return (
    <TextField
      type={type}
      id={id}
      name={name}
      value={value}
      label={label}
      onChange={onChange}
      style={userstyle}
      variant="outlined"
      fullWidth
      className={classes.root}
      size="medium"
      inputProps={{
        style: { color: "black" },
      }} // input props are  to overide pre defined css
    />
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
}) => {
  return (
    <TextField
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
    />
  );
};

const MyCheckbox = ({ name, label }) => {
  return (
    <FormControlLabel
      control={<Checkbox name={name} />}
      label={
        <Typography variant="h6" style={{ color: "Black" }}>
          {label}
        </Typography>
      }
    />
  );
};

export { MyTextInput, MyCheckbox, MyMultilineInput };
