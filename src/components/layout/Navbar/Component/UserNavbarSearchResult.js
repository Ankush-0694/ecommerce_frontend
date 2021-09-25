import { makeStyles } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import MyDivider from "../../../design/MyDivider";
import { MyPaper } from "../../../design/MyPaper";
import ShowError from "../../ErrorComponent/ShowError";
import ShowLoading from "../../LoadingComponent/ShowLoading";

const useStyles = makeStyles({
  resultPaper: {
    position: "absolute",
    top: "42px",
    width: "calc(100% - 72px)",
    // padding: "5px 0px",
    marginLeft: "2px",
  },
  hoverEffect: {
    "&:hover": {
      backgroundColor: "#e6f2ff",
      cursor: "pointer",
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
      <MyPaper className={classes.resultPaper}>
        <div style={{ padding: "8px 7px" }}>No Match Found ...</div>
      </MyPaper>
    );
  }

  return (
    <Fragment>
      <MyPaper className={classes.resultPaper}>
        <div>
          {dataToRender.map((mappedProduct) => {
            const { id, productName, productPrice } = mappedProduct;

            return (
              <Fragment key={id}>
                <div
                  className={classes.hoverEffect}
                  style={{ padding: "8px 7px" }}>
                  <div
                    onMouseDown={() => {
                      // this event is used to counter the onBlur event happen on search input
                      history.push(`/ShopBy?q=${searchText}`);
                    }}>
                    <div>
                      {productName} , Price - ₹{productPrice}
                    </div>
                  </div>
                </div>
                {
                  /** showing divider except for last Element  */
                  dataToRender[dataToRender.length - 1] !== mappedProduct && (
                    <MyDivider />
                  )
                }
              </Fragment>
            );
          })}
        </div>
      </MyPaper>
    </Fragment>
  );
};

export default withRouter(UserNavbarSearchResult);
