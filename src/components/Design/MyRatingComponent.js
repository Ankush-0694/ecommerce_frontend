import React from "react";
import { Typography, Box } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const MyRatingComponent = ({ value, setValue, readOnly }) => {
  return (
    <Box component="fieldset" mb={3} borderColor="transparent">
      {/* <Typography component="legend">Rating</Typography> */}
      <Rating
        name="simple-controlled"
        value={value}
        readOnly={readOnly}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
};

export { MyRatingComponent };