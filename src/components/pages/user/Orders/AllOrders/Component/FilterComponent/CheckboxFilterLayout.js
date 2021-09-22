import React from "react";
import { makeStyles } from "@material-ui/core";
import { MyCheckbox } from "../../../../../../Design/MyFormFieldComponent";

const useStyles = makeStyles({
  onStatusCheckbox: {
    marginTop: "10px",
  },
  checkbox: {
    fontSize: "1rem",
    fontWeight: 400,
    display: "block-flex",
  },
});

/** Used on Shop By Page And Order Filter Pages */
const CheckBoxFilterLayout = ({
  FilterHeading,
  FilterByArray,
  checkboxName,
  onFilterChange,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.onStatusCheckbox}>
      <h6>{FilterHeading}</h6>
      <div className="inputFields">
        {FilterByArray.map(({ label, value }, index) => {
          return (
            <div key={index}>
              <MyCheckbox
                className={classes.checkbox}
                label={label}
                name={checkboxName}
                value={value}
                onChange={onFilterChange}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckBoxFilterLayout;
