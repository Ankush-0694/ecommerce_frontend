import { Menu } from "@material-ui/core";
import React from "react";

const MyMenuAppBar = React.forwardRef((props, ref) => {
  return (
    <Menu
      ref={ref}
      id="menu-appbar"
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={props.open}
      onClose={props.onClose}>
      {props.children}
    </Menu>
  );
});

export { MyMenuAppBar };
