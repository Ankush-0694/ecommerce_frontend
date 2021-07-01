import { makeStyles } from "../../../../Design/MyUseStyles";

const drawerWidth = 250;
const DashboardStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  drawerPaper: {
    width: drawerWidth,
  },
}));

export { DashboardStyles };
