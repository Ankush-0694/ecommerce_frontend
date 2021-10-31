import React from "react";
import { Box } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const MyRatingComponent = ({ name, value, setValue, readOnly }) => {
  return (
    <Box component="fieldset" mb={3} borderColor="transparent">
      {/* <Typography component="legend">Rating</Typography> */}
      <Rating
        name={name}
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
