import React from "react";
import { Link, withRouter } from "react-router-dom";
import { MyCardContainer } from "../../../../../../Design/MyCardComponents";
import { MyCardContent } from "../../../../../../Design/MyCardComponents";
import { MyCardMedia } from "../../../../../../Design/MyCardComponents";
import { MyGridItem } from "../../../../../../Design/MyGrid";
import { MyTypography } from "../../../../../../Design/MyTypography";
import { ProductCardStyles } from "../../CSS/ProductCardStyles";

const ProductCard = ({ details, link, history }) => {
  const classes = ProductCardStyles();
  const { id, productName, productPrice, productImageUrl } = details;

  return (
    <MyGridItem xs={8} sm={4} md={3}>
      <MyCardContainer>
        <Link to={link} style={{ textDecoration: "none" }}>
          <MyCardMedia height="140" title="IMAGE" image={productImageUrl} />
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
      </MyCardContainer>
    </MyGridItem>
  );
};

export default withRouter(ProductCard);
