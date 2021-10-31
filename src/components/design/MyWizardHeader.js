import React from "react";
import { Grid, ButtonBase, makeStyles } from "@material-ui/core";

const wizardHeaderStyles = makeStyles((theme) => ({
  root: {
    overflow: "visible",
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    borderRadius: theme.shape.borderRadius,
    position: "relative",
    padding: 0,
    textTransform: "uppercase",
    height: 32,
    width: "calc(100% )",
    margin: "24px 0px",
    [theme.breakpoints.down("xs")]: {
      height: 28,
    },
  },
  tab: {
    overflow: "visible",
    width: "100%",
    padding: 8,
    color: theme.palette.primary.main,
    opacity: 0.5,
    textTransform: "uppercase",
    fontSize: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: 8,
    },
  },
  indicator: {
    height: 32,
    position: "absolute",
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: [
      `0px 16px 26px -10px ${theme.palette.primary.main}a5`,
      theme.shadows[5],
    ],
    borderRadius: theme.shape.borderRadius,
    backgroundImage: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
    opacity: 1,
    color: theme.palette.primary.main,
    fontSize: 10,
    transform: "scale(1.1)",

    transition: theme.transitions.create("all", {
      easing: "cubic-bezier(0.29, 1.42, 0.79, 1)",
    }),
    [theme.breakpoints.down("sm")]: {
      fontSize: 8,
    },
    "& span": { color: theme.palette.primary.contrastText },
  },
}));

const WizardHeader = ({ activeStep, handleChange, tabs }) => {
  const tabWidth = 100 / tabs.length;
  const indicatorLeft = activeStep * tabWidth;
  const indicatorStyle = {
    width: `${tabWidth}%`,
    left: `${indicatorLeft}%`,
  };
  const classes = wizardHeaderStyles();

  return (
    <Grid container className={classes.root}>
      {tabs.map((tab, index) => (
        <Grid item key={index} style={{ width: `${tabWidth}%` }}>
          <ButtonBase className={classes.tab} onClick={handleChange(index)}>
            {tab}
          </ButtonBase>
        </Grid>
      ))}

      <div style={indicatorStyle} className={classes.indicator}>
        <span>{tabs[activeStep]}</span>
      </div>
    </Grid>
  );
};
export default WizardHeader;
