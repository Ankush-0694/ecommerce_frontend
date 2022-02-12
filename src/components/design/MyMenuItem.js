import { MenuItem } from "@mui/material";
import React from "react";

const MyMenuItem = React.forwardRef((props, ref) => {
  return (
    <MenuItem ref={ref} style={{ padding: 0 }} onClick={props.onClick}>
      {props.children}
    </MenuItem>
  );
});

export { MyMenuItem };
