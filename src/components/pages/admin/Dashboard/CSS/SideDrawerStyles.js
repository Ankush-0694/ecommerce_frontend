import { makeStyles } from "../../../../Design/MyUseStyles";

const SideDrawerStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));
export { SideDrawerStyles };
