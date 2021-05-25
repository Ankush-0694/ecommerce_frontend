import { Box } from "@material-ui/core";

// for making the child to the center we need to
// add style ={{margin : auto }}

//we can give them these children height and width to change the size of
// centerlised component

const MyFullScreenBox = ({ display, width, height, children }) => {
  return (
    <Box display={display} width={width} height={height}>
      {children}
    </Box>
  );
};

export { MyFullScreenBox };