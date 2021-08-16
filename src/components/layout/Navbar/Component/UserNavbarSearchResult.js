import { makeStyles } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import MyDivider from "../../../Design/MyDivider";
import { MyPaper } from "../../../Design/MyPaper";
import ShowError from "../../ErrorComponent/ShowError";
import ShowLoading from "../../LoadingComponent/ShowLoading";

const useStyles = makeStyles({
  resultPaper: {
    position: "absolute",
    top: "42px",
    width: "calc(100% - 72px)",
    padding: "5px 7px",
    marginLeft: "2px",
  },
  resultsLinks: {
    "&:hover": {
      textDecoration: "none",
    },
  },
});

const UserNavbarSearchResult = ({
  productData,
  searchError,
  searchLoading,
  history,
  searchText,
}) => {
  const classes = useStyles();

  if (searchError) {
    return <ShowError>Error</ShowError>;
  }

  if (searchLoading) {
    return <ShowLoading />;
  }

  const dataToRender = productData.getProductsBySearchText;

  /** If no match Found */
  if (dataToRender.length === 0) {
    return (
      <MyPaper className={classes.resultPaper}>No Match Found ...</MyPaper>
    );
  }

  return (
    <Fragment>
      <MyPaper className={classes.resultPaper}>
        <div>
          {dataToRender.map((mappedProduct) => {
            const { id, productName, productPrice } = mappedProduct;

            return (
              <div style={{ padding: "5px 0px" }} key={id}>
                <div
                  className={classes.resultsLinks}
                  style={{ color: "black" }}
                  onMouseDown={() => {
                    // this event is used to counter the onBlur event happen on search input
                    history.push(`/ShopBy?q=${searchText}`);
                  }}>
                  <div>
                    {productName} , Price - ₹{productPrice}
                  </div>
                </div>

                {
                  /** showing divider except for last Element  */
                  dataToRender[dataToRender.length - 1] !== mappedProduct && (
                    <MyDivider style={{ margin: "5px 0px" }} />
                  )
                }
              </div>
            );
          })}
        </div>
      </MyPaper>
    </Fragment>
  );
};

export default withRouter(UserNavbarSearchResult);
