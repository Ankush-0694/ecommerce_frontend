import { Avatar } from "@mui/material";
import React from "react";

const MyAvatar = ({ className, alt, src }) => {
  return <Avatar className={className} alt={alt} src={src} />;
};

export { MyAvatar };
