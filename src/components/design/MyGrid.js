import { Grid } from "@material-ui/core";

const MyGridItem = ({ children, xs, sm, md, style, className }) => {
  return (
    <Grid item xs={xs} sm={sm} md={md} style={style} className={className}>
      {children}
    </Grid>
  );
};

const MyGridContainer = ({ children, style, justify, spacing, className }) => {
  return (
    <Grid
      container
      style={style}
      justifyContent={justify}
      spacing={spacing}
      className={className}>
      {children}
    </Grid>
  );
};

export { MyGridItem, MyGridContainer };
