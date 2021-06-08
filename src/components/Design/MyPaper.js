import { Paper } from "@material-ui/core";

const MyPaper = ({ children, elevation, className }) => {
  return (
    <Paper className={className} elevation={elevation}>
      {children}
    </Paper>
  );
};

export { MyPaper };
