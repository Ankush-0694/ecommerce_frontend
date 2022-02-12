import {
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

import { makeStyles } from '@mui/styles';



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


const MyTextInput = ({ style, onChange, ...others }) => {
  const classes = useStyles();
  return (
    
      <TextField
        {...others}
        onChange={onChange}
        style={style}
        variant="outlined"
        fullWidth
        className={classes.root}
        size="medium"
        margin="normal"

        // inputProps={{
        //   style: { color: "black" },
        // }} // input props are  to overide pre defined css
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

const MyCheckbox = ({ name, label, className, onChange, value, checked }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          name={name}
          onChange={onChange}
          value={value}
          checked={checked}
        />
      }
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

// const MySelect = ({ onChange, value, InputLabelText }) => {
//   return (
//     <>
//       <InputLabel id="demo-simple-select-outlined-label">
//         {InputLabelText}
//       </InputLabel>
//       <Select
//         labelId="demo-simple-select-outlined-label"
//         id="demo-simple-select-outlined"
//         value={value}
//         onChange={onChange}>
//         <MenuItem value="">
//           <em>None</em>
//         </MenuItem>
//         <MenuItem value={10}>Ten</MenuItem>
//         <MenuItem value={20}>Twenty</MenuItem>
//         <MenuItem value={30}>Thirty</MenuItem>
//       </Select>
//     </>
//   );
// };

export { MyTextInput, MyCheckbox, MyMultilineInput };
