import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Delete } from "@material-ui/icons";

const MyMenuIcon = () => {
  return <MenuIcon />;
};
const MyHomeIcon = () => {
  return <HomeIcon />;
};

const MyDirectionsWalkIcon = () => {
  return <DirectionsWalkIcon />;
};

const MyEmojiPeopleIcon = () => {
  return <EmojiPeopleIcon />;
};

const MyAddIcon = () => {
  return <AddIcon />;
};

const MyFiberManualRecordIcon = () => {
  return <FiberManualRecordIcon />;
};

const MyDeleteIcon = () => {
  return <Delete />;
};

/** passed material ui icon name
 * Must be separeated by underscore and all letter small except i of icon
 */
const MyIcon = ({ children }) => {
  return <Icon>{children}</Icon>;
};

export {
  MyMenuIcon,
  MyHomeIcon,
  MyDirectionsWalkIcon,
  MyEmojiPeopleIcon,
  MyAddIcon,
  MyFiberManualRecordIcon,
  MyDeleteIcon,
  MyIcon,
};
