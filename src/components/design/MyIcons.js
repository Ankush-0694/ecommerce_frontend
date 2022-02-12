import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import AddIcon from "@mui/icons-material/Add";
import Icon from "@mui/material/Icon";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Delete } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";

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

const MyEditButton = () => {
  return <EditIcon />;
};

/** passed material ui icon name
 * Must be separeated by underscore and all letter small except i of icon
 */
const MyIcon = ({ children, ...otherprops }) => {
  return <Icon {...otherprops}>{children}</Icon>;
};

export {
  MyMenuIcon,
  MyHomeIcon,
  MyDirectionsWalkIcon,
  MyEmojiPeopleIcon,
  MyAddIcon,
  MyFiberManualRecordIcon,
  MyDeleteIcon,
  MyEditButton,
  MyIcon,
};
