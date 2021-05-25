import { supportsResultCaching } from "@apollo/client/cache/inmemory/entityStore";
import { Grid } from "@material-ui/core";

const MyGridItem = ({ children, xs, sm, md }) => {
  return (
    <Grid item xs={xs} sm={sm} md={md}>
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
