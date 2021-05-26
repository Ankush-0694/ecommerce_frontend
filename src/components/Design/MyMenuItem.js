import { MenuItem } from "@material-ui/core";
import React from "react";

const MyMenuItem = React.forwardRef((props, ref) => {
  return (
    <MenuItem ref={ref} onClick={props.onClick}>
      {props.children}
    </MenuItem>
  );
});

export { MyMenuItem };
