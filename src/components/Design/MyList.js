import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const MyListContainer = ({ children }) => {
  return <List>{children}</List>;
};

const MyListItem = ({ button, onClick, children }) => {
  return (
    <ListItem button={button ? true : false} onClick={onClick}>
      {children}
    </ListItem>
  );
};

const MyListItemIcon = ({ children }) => {
  return <ListItemIcon>{children}</ListItemIcon>;
};

const MyListItemText = ({ primary }) => {
  return <ListItemText primary={primary} />;
};

export { MyListContainer, MyListItem, MyListItemIcon, MyListItemText };
