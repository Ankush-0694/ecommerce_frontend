 import { makeStyles } from '@mui/styles';
import React from "react";
import MyDivider from "../../../../design/MyDivider";

import { MyPaper } from "../../../../design/MyPaper";

const useStyles = makeStyles({
  ratingFilterContainer: {
    padding: "16px",
  },
  inputContainer: {
    padding: "8px 0px",
  },
  radio: {
    fontSize: "1rem",
    fontWeight: 400,
    display: "block-flex",
    marginRight: "8px",
  },
});

const ProductFilter = ({ onFilterChange }) => {
  const classes = useStyles();

  /** This will map to the checkbox then we don't need to
   * Write checkbox comp. again and again for every field
   * @param name - Name of the input Field
   * @param label - lable of the input Field
   */
  const productRatingFilter = [
    { label: "4 star and above", value: 4 },
    { label: "3 star and above", value: 3 },
    { label: "2 star and above", value: 2 },
    { label: "1 star and above", value: 1 },
  ];

  return (
    <MyPaper style={{ minWidth: "250px" }}>
      <div style={{ padding: "8px", textAlign: "center", fontSize: "1.5rem" }}>
        Filters
      </div>
      <MyDivider></MyDivider>

      <div className={classes.ratingFilterContainer}>
        <h6>Customer Rating</h6>
        <div className="inputFields">
          {productRatingFilter.map(({ label, value }, index) => {
            return (
              <div className={classes.inputContainer} key={index}>
                <input
                  type="radio"
                  className={classes.radio}
                  name="rating"
                  value={value}
                  onChange={onFilterChange}
                />
                <label>{label}</label>
              </div>
            );
          })}
        </div>
      </div>
    </MyPaper>
  );
};

export default ProductFilter;
