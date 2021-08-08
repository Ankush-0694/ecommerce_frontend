import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { Badge } from "@material-ui/core";

const userNavbarStyles = makeStyles((theme) => ({
  NavbarLink: {
    minWidth: "940px",
  },
  title: {
    flexGrow: 1,
  },

  /* Menu Bar when screen is small */
  MenuLinkStyle: {
    "&:hover": {
      textDecoration: "none",
    },
    textDecoration: "none",
    color: "Black",
    padding: "6px 16px",
  },

  /* Nav Bar when screen is Large */
  NavbarLink: {
    "&:hover": {
      background: "white",
      color: "black",
    },
  },
  NavbarTabsContainer: {
    flexGrow: 1,
    justifySelf: "flex-end",
    minWidth: "500px", // to prevent shrink of tabs
  },

  /* Search Bar Styles */
  searchOutDiv: {
    flexGrow: 2,
    marginRight: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchInnerDiv: {
    display: "flex",
    position: "relative",
  },
  searchInput: {
    flexGrow: 1,
    padding: "8px",
    borderRadius: "5px",
    marginRight: "5px",
  },
  searchIcon: {
    border: "1px solid black",
  },
}));

// For styling  Cart Badge
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export { userNavbarStyles, StyledBadge };
