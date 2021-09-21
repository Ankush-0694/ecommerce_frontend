import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import MyDivider from "../../../../../../Design/MyDivider";
import {
  MyTable,
  MyTableBody,
  MyTableCell,
  MyTableContainer,
  MyTableRow,
} from "../../../../../../Design/MyTableComponents";
import { MyTypography } from "../../../../../../Design/MyTypography";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontSize: "2rem",
    padding: "12px 0px",
    fontWeight: "300",
  },
}));

/**
 *
 * @param {} Array It should have id, rowName ,rowValue as an object for every array element
 * @returns
 */
const PriceLayout = ({ tableData }) => {
  const classes = useStyles();

  return (
    <div>
      <MyTableContainer component={Paper}>
        <div>
          <MyTypography variant="h6" component="h6" className={classes.title}>
            Price Details
          </MyTypography>
        </div>
        <MyDivider />
        <MyTable className={classes.table} aria-label="simple table">
          <MyTableBody>
            {/* row are mapped using table data */}

            {tableData.map(({ id, rowName, rowValue }) => (
              <MyTableRow key={id}>
                <MyTableCell component="th" scope="row">
                  {rowName}
                </MyTableCell>
                <MyTableCell align="right">{rowValue}</MyTableCell>
              </MyTableRow>
            ))}
          </MyTableBody>
        </MyTable>
      </MyTableContainer>
    </div>
  );
};

export default PriceLayout;
