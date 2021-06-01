import React from "react";
import { Link } from "react-router-dom";

import { Typography, Button } from "@material-ui/core"; // need to make My Design file

import { MyCardContainer } from "../../../Design/MyCardComponents/CardContainer";
import { MyCardContent } from "../../../Design/MyCardComponents/CardContent";
import { MyCardMedia } from "../../../Design/MyCardComponents/CardMedia";
import { MyCardActions } from "../../../Design/MyCardComponents/CardActions";
import { MyGridItem } from "../../../Design/MyGrid";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    // marginBottom: theme.spacing(2),
  },
  cardDescription: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    // marginBottom: theme.spacing(2),
  },
}));

const ProductCard = ({ details, link }) => {
  const classes = useStyles();
  const { productName, productDescription, productPrice } = details;

  return (
    <MyGridItem xs={12} sm={4} md={3}>
      <Link to={link} style={{ textDecoration: "none" }}>
        <MyCardContainer>
          <MyCardMedia
            height="140"
            title="IMAGE"
            image="https://source.unsplash.com/collection/190727/1600x900"
          />

          <MyCardContent>
            <div className={classes.cardDescription}>
              <Typography component="h3" variant="h6" color="textPrimary">
                {productName}
              </Typography>
            </div>
            <div className={classes.cardPricing}>
              <Typography component="p" variant="body2" color="textPrimary">
                Price - {productPrice}$
              </Typography>
            </div>
          </MyCardContent>
          <MyCardActions>
            <Button fullWidth variant="outlined" size="small" color="primary">
              ADD TO CART
            </Button>
            <Button fullWidth variant="outlined" size="small" color="primary">
              BUY NOW
            </Button>
          </MyCardActions>
        </MyCardContainer>
      </Link>
    </MyGridItem>
  );
};

export { ProductCard };
