import React from "react";
import { ProductStyles } from "../../../CSS/ProductListStyle";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../../../../../../queries/Product/productQueries";
import { Avatar } from "@material-ui/core";
import {
  MyListContainer,
  MyListItem,
  MyListItemAvatar,
  MyListItemText,
} from "../../../../../../Design/MyList";
import { MyTypography } from "../../../../../../Design/MyTypography";
import { MyAvatar } from "../../../../../../Design/MyAvatars";

const ProductList = () => {
  const classes = ProductStyles();
  const {
    error: getProductsDataError,
    loading: getProductsDataLoading,
    data: getProductsData,
  } = useQuery(GET_ALL_PRODUCTS);

  if (getProductsDataError) {
    return <div>Error while Fetching Product Data</div>;
  }
  if (getProductsDataLoading) {
    return <div>Product are loading.....</div>;
  }

  const dataToRender = getProductsData.getAllProducts;

  if (!dataToRender) {
    return <div>No Data Available</div>;
  }

  const tile = {
    img: "https://source.unsplash.com/collection/190727/1600x700",
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <h2>Products</h2>
      </div>
      <div className={classes.ListContainer}>
        <MyListContainer className={classes.root}>
          {dataToRender.map((item) => {
            return (
              <MyListItem
                key={item.id}
                alignItems="center"
                className={classes.listItem}>
                <MyListItemAvatar>
                  <MyAvatar
                    className={classes.avatar}
                    alt="Remy Sharp"
                    src={tile.img}
                  />
                </MyListItemAvatar>
                <MyListItemText
                  primary={item.productName}
                  secondary={
                    <>
                      <MyTypography
                        component="span"
                        variant="body2"
                        color="textPrimary">
                        {item.productDescription}
                      </MyTypography>
                      <br />
                      <MyTypography
                        component="span"
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary">
                        Price - {item.productPrice}
                      </MyTypography>
                    </>
                  }
                />
              </MyListItem>
            );
          })}
        </MyListContainer>
      </div>
    </div>
  );
};

export default ProductList;
