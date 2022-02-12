import { Divider } from "@mui/material";
import {makeStyles, useTheme } from "../design/MyUseStyles";
import Drawer from "@mui/material/Drawer";
import { Fragment } from "react";
import { withRouter } from "../../helpers/customHooks/withRouter";
import { MyIcon } from "./MyIcons";
import {
  MyListContainer,
  MyListItem,
  MyListItemIcon,
  MyListItemText,
} from "./MyList";

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginLeft: "10px",
  },
}));

/** container for side Drawer */
const MySideDrawerContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="permanent"
      anchor="left">
      {children}
      {/** This is the content List we need to show in the side */}
    </Drawer>
  );
};

/** toolbar to make content below app Bar */
const SideDrawerStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

/** List Item  for side Drawer */
const MySideDrawerList = withRouter(({ history, listData }) => {
  const theme = useTheme();
  const classes = SideDrawerStyles(theme);

  return (
    <div>
      {/* This toolbar is neccessary to make the drawer list below navbar */}
      <div
        className={classes.toolbar}
        style={{ backgroundColor: "#3F51BB" }}></div>

      <div>
        {listData.map((item, index) => {
          return (
            <Fragment key={index}>
              <Divider />
              <MyListContainer>
                <MyListItem
                  button
                  onClick={() => {
                    history.push(item.url);
                  }}>
                  {item.icon && (
                    <MyListItemIcon>
                      <MyIcon>{item.icon}</MyIcon>
                    </MyListItemIcon>
                  )}
                  <MyListItemText primary={item.Name} />
                </MyListItem>
              </MyListContainer>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
});

export { MySideDrawerContainer, MySideDrawerList };
