import { makeStyles } from "@material-ui/core";

const MultiStepFromStyles = makeStyles((theme) => ({
  root: {
    border: `8px solid ${theme.palette.common.white}`,
    margin: 16,
    minWidth: "400px",
    padding: "36px 0 0",
    background: `rgba(255,255,255,0.9)`,
    boxShadow: [
      `0px 16px 26px -10px ${theme.palette.primary.main}99`,
      theme.shadows[15],
    ],
  },
  navigation: {
    width: 100,
    fontSize: 12,
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      width: 90,
    },
  },
  prevBtn: {
    color: theme.palette.grey[700],
    background: theme.palette.common.white,
    boxShadow: theme.shadows[5],
  },
}));

export { MultiStepFromStyles };
