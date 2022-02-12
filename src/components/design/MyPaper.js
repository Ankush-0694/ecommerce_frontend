import { Paper } from "@mui/material";

const MyPaper = ({ children, elevation, className, style }) => {
  return (
    <Paper className={className} elevation={elevation} style={style}>
      {children}
    </Paper>
  );
};

export { MyPaper };
