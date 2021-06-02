import React from "react";
import { Link } from "react-router-dom";

import { Typography, Button } from "@material-ui/core"; // need to make My Design file

import { MyCardContainer } from "../../../../Design/MyCardComponents/CardContainer";
import { MyCardContent } from "../../../../Design/MyCardComponents/CardContent";
import { MyCardMedia } from "../../../../Design/MyCardComponents/CardMedia";
import { MyCardActions } from "../../../../Design/MyCardComponents/CardActions";
import { MyGridItem } from "../../../../Design/MyGrid";

import { makeStyles } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/dom";
import { MyTypography } from "../../../../Design/MyTypography";
import { TrendingUpRounded } from "@material-ui/icons";
import { MyButtonComponent } from "../../../../Design/ButtonComponent";

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
  const { id, productName, productDescription, productPrice } = details;

  return (
    <MyGridItem xs={8} sm={4} md={3}>
      <MyCardContainer>
        <Link to={link} style={{ textDecoration: "none" }}>
          <MyCardMedia
            height="140"
            title="IMAGE"
            image="https://source.unsplash.com/collection/190727/1600x900"
          />
          <MyCardContent>
            <div className={classes.cardDescription}>
              <MyTypography component="h3" variant="h6" color="textPrimary">
                {productName}
              </MyTypography>
            </div>
            <div className={classes.cardPricing}>
              <MyTypography component="p" variant="body2" color="textPrimary">
                Price - {productPrice}$
              </MyTypography>
            </div>
          </MyCardContent>
        </Link>

        <MyCardActions>
          <MyButtonComponent
            fullWidth={true}
            variant="outlined"
            size="small"
            color="primary">
            ADD TO CART
          </MyButtonComponent>
          <MyButtonComponent
            fullWidth={true}
            variant="outlined"
            size="small"
            color="primary">
            BUY NOW
          </MyButtonComponent>
        </MyCardActions>
      </MyCardContainer>
    </MyGridItem>
  );
};

export { ProductCard };
