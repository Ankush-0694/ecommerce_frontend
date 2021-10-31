import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const MyListContainer = ({ className, children }) => {
  return <List className={className}>{children}</List>;
};

const MyListItem = ({ button, onClick, children, alignItems, className }) => {
  return (
    <ListItem
      alignItems={alignItems}
      className={className}
      button={button ? true : false}
      onClick={onClick}>
      {children}
    </ListItem>
  );
};

const MyListItemIcon = ({ children }) => {
  return <ListItemIcon>{children}</ListItemIcon>;
};

const MyListItemText = ({ primary, secondary }) => {
  return <ListItemText primary={primary} secondary={secondary} />;
};

const MyListItemAvatar = ({ children }) => {
  return <ListItemAvatar>{children}</ListItemAvatar>;
};

export {
  MyListContainer,
  MyListItem,
  MyListItemIcon,
  MyListItemText,
  MyListItemAvatar,
};
