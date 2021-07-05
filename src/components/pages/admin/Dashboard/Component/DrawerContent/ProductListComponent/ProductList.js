import React, { Fragment } from "react";
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
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  List,
} from "@material-ui/core";
import { Divider } from "@material-ui/core";

const ProductList = () => {
  const classes = ProductStyles();
  const {
    error: getProductsDataError,
    loading: getProductsDataLoading,
    data: getProductsData,
  } = useQuery(getProductsQuery);

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
        <List className={classes.root}>
          {dataToRender.map((item) => {
            return (
              <ListItem alignItems="center" className={classes.listItem}>
                <ListItemAvatar>
                  <Avatar
                    className={classes.avatar}
                    alt="Remy Sharp"
                    src={tile.img}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={item.productName}
                  secondary={
                    <Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary">
                        {item.productDescription}
                      </Typography>
                      <br />
                      <Typography
                        component="span"
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary">
                        Price - {item.productPrice}
                      </Typography>
                    </Fragment>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default ProductList;

// <div className={classes.root}>
//       <GridList cellHeight={300} className={classes.gridList}>
//         <GridListTile
//           key="Subheader"
//           rows={0.2}
//           cols={2}
//           className={classes.subHeaderStyle}>
//           <ListSubheader component="div">
//             <h1 style={{ color: "Black" }}>Products</h1>
//           </ListSubheader>
//         </GridListTile>
//         {dataToRender.map((item, index) => (
//           <GridListTile key={index} cols={0.4} style={{ margin: " 0 10px" }}>
//             <img src={tile.img} alt={item.productName} />

//             <GridListTileBar
//               className={classes.overide}
//               title={<div>{item.productName}</div>}
//               subtitle={
//                 <div>
//                   <div style={{ paddingBottom: "5px" }}>
//                     {item.productDescription}
//                   </div>{" "}
//                   <div style={{ fontSize: "15px" }}>
//                     {" "}
//                     Price : {item.productPrice}
//                   </div>{" "}
//                 </div>
//               }
//               actionIcon={
//                 <IconButton
//                   aria-label={`info about ${tile.title}`}
//                   className={classes.icon}>
//                   <InfoIcon />
//                 </IconButton>
//               }
//             />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
