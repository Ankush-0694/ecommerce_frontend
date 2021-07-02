import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { ProductStyles } from "../../../CSS/ProductListStyle";
import { useQuery } from "@apollo/client";
import { getProductsQuery } from "../../../../../../../queries/Product/productQueries";

const ProductList = () => {
  const classes = ProductStyles();
  const {
    error: getProductsDataError,
    loading: getProductsDataLoading,
    data,
  } = useQuery(getProductsQuery);

  if (getProductsDataError) {
    return <div>Error while Fetching Product Data</div>;
  }
  if (getProductsDataLoading) {
    return <div>Product are loading.....</div>;
  }

  const dataToRender = data.getAllProducts;

  if (!dataToRender) {
    return <div>No Data Available</div>;
  }

  const tile = {
    img: "https://source.unsplash.com/collection/190727/1600x700",
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile
          key="Subheader"
          rows={0.2}
          cols={2}
          className={classes.subHeaderStyle}>
          <ListSubheader component="div">
            <h1 style={{ color: "Black" }}>Products</h1>
          </ListSubheader>
        </GridListTile>
        {dataToRender.map((item, index) => (
          <GridListTile key={index}>
            <img src={tile.img} alt={item.productName} />

            <GridListTileBar
              className={classes.overide}
              title={<div>{item.productName}</div>}
              subtitle={
                <div>
                  <div style={{ paddingBottom: "5px" }}>
                    {item.productDescription}
                  </div>{" "}
                  <div style={{ fontSize: "15px" }}>
                    {" "}
                    Price : {item.productPrice}
                  </div>{" "}
                </div>
              }
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default ProductList;
