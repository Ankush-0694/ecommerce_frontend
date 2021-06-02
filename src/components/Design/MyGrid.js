import { Grid } from "@material-ui/core";

const MyGridItem = ({ children, xs, sm, md, userStyle }) => {
  return (
    <Grid item xs={xs} sm={sm} md={md} style={userStyle}>
      {children}
    </Grid>
  );
};

const MyGridContainer = ({ children, justify, spacing }) => {
  return (
    <Grid container justify={justify} spacing={spacing}>
      {children}
    </Grid>
  );
};

export { MyGridItem, MyGridContainer };
