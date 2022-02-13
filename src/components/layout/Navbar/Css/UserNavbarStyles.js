import {  makeStyles, withStyles } from "@mui/styles";
import { Badge } from "@mui/material";

const userNavbarStyles = makeStyles((theme) => ({
  
  /* Doubt - May be use in vendor navbar */
  NavbarContainer: {
    width: "90%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  Navbartitle: {
    alignSelf: "center",
    "&:hover": {
      color: "#f50057",
    },
  },

  /* Nav Bar when screen is Large */
  NavbarTabsContainer: {
    alignSelf: "center",
  },

  NavbarLink: {
    color: "white!important",
    padding: "6px 3px",
    "&:hover": {
      color: "#f50057!important",
    },
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "8px",
      minWidth: "48px",
    },
    [theme.breakpoints.down(350)]: {
      padding: "0px",
    },
  },

  /* Search Bar Styles */
  searchOutDiv: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      order: 3,
      margin: "4px 0px",
    },
  },
  searchInnerDiv: {
    maxWidth: "550px",
    margin: "0 auto",
    display: "flex",
    position: "relative",
  },
  searchInput: {
    flexGrow: 1,
    padding: "4px",
    borderRadius: "5px",
    marginRight: "5px",
    borderRadius: "0px",
    "&:focus": {
      outline: "1px solid black",
    },
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
    padding: "0",
  },
}))(Badge);

export { userNavbarStyles, StyledBadge };

// MenuLinkStyle: {
//   "&:hover": {
//     textDecoration: "none",
//   },
//   textDecoration: "none",
//   color: "Black",
//   padding: "6px 16px",
// },
