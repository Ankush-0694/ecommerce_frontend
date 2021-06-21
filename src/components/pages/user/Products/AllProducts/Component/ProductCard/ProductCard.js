import React from "react";
import { Link } from "react-router-dom";
import { MyCardContainer } from "../../../../../../Design/MyCardComponents/CardContainer";
import { MyCardContent } from "../../../../../../Design/MyCardComponents/CardContent";
import { MyCardMedia } from "../../../../../../Design/MyCardComponents/CardMedia";
import { MyCardActions } from "../../../../../../Design/MyCardComponents/CardActions";
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

  const [addToCart, { error, loading, data: cartData }] = useMutation(
    addToCartMutation,
    {
      refetchQueries: [{ query: getCartQuery }],
    }
  );
  console.log(cartData);

  const onClickAddCart = (e) => {
    console.log("clicked");
    e.preventDefault();
    addToCart({
      variables: {
        productName,
        productDescription,
        productPrice,
      },
    });
    if (error) {
      console.log(" error happpend " + error);
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
            userFunction={onClickAddCart}>
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
