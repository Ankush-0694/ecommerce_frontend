import React from "react";
import { Link } from "react-router-dom";
import { MyCardContainer } from "../../../../../../Design/MyCardComponents";
import { MyCardContent } from "../../../../../../Design/MyCardComponents";
import { MyCardMedia } from "../../../../../../Design/MyCardComponents";
import { MyCardActions } from "../../../../../../Design/MyCardComponents";
import { MyGridItem } from "../../../../../../Design/MyGrid";
import { MyTypography } from "../../../../../../Design/MyTypography";
import { MyButtonComponent } from "../../../../../../Design/MyButtonComponent";
import { addToCartMutation } from "../../../../../../../queries/Cart/cartMutations";
import { useMutation } from "@apollo/client";
import { getCartQuery } from "../../../../../../../queries/Cart/cartQueries";
import { ProductCardStyles } from "../../CSS/ProductCardStyles";

const ProductCard = ({ details, link }) => {
  const classes = ProductCardStyles();
  const { id, productName, productDescription, productPrice } = details;

  const [addToCart, { error, data: cartData }] = useMutation(
    addToCartMutation,
    {
      refetchQueries: [{ query: getCartQuery }],
    }
  );

  const onClickAddCart = (e) => {
    e.preventDefault();
    addToCart({
      variables: {
        productName,
        productDescription,
        productPrice,
      },
    });
    if (error) {
      throw error;
    } else {
      alert("added to cart");
    }
  };

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
            color="primary"
            onClick={onClickAddCart}>
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
