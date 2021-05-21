import {
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@material-ui/core";

const MyTextInput = ({
  type,
  id,
  name,
  value,
  label,
  userStyle,
  onChange,
  children,
}) => {
  return (
    <TextField
      type={type}
      id={id}
      name={name}
      value={value}
      label={label}
      onChange={onChange}
      userStyle={userStyle}
      variant="outlined"
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

export { MyTextInput, MyCheckbox };
