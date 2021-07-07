import React from "react";
import { Link, withRouter } from "react-router-dom";
import { MyCardContainer } from "../../../../../../Design/MyCardComponents";
import { MyCardContent } from "../../../../../../Design/MyCardComponents";
import { MyCardMedia } from "../../../../../../Design/MyCardComponents";
import { MyCardActions } from "../../../../../../Design/MyCardComponents";
import { MyGridItem } from "../../../../../../Design/MyGrid";
import { MyTypography } from "../../../../../../Design/MyTypography";
import { MyButtonComponent } from "../../../../../../Design/MyButtonComponent";
import { ADD_TO_CART } from "../../../../../../../queries/Cart/cartMutations";
import { useMutation } from "@apollo/client";
import { GET_CART } from "../../../../../../../queries/Cart/cartQueries";
import { ProductCardStyles } from "../../CSS/ProductCardStyles";

const ProductCard = ({ details, link, history }) => {
  const classes = ProductCardStyles();
  const { id, productName, productDescription, productPrice } = details;

  const [addToCart, { error: addToCartError, data: addedCartData }] =
    useMutation(ADD_TO_CART);

  const onClickAddCart = (e) => {
    e.preventDefault();

    //  giving warning  when we try to add same product to cart item which is already in cart
    // will solved when we handle duplication in backend
    addToCart({
      variables: {
        productName,
        productDescription,
        productPrice,
      },
      update: (cache, { data: addedCartData }) => {
        const data = cache.readQuery({ query: GET_CART });
        // need to newData var because we need to add a
        // new instance of all data , we can not use data var direclty
        let dataToUpdate = data.getCart;
        dataToUpdate = [...dataToUpdate, addedCartData];

        cache.writeQuery({
          query: GET_CART,
          data: { ...data, getCart: { dataToUpdate } },
        });
      },
    });
    if (!addToCartError) {
      // history.push("/cart"); // can send a state message like added to cart and show it on cart page to as an alert
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

export default withRouter(ProductCard);
