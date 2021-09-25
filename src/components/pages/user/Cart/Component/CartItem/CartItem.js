import React, { useEffect, useState } from "react";
import { MyCardMedia } from "../../../../../design/MyCardComponents";
import { MyTypography } from "../../../../../design/MyTypography";
import { MyButtonComponent } from "../../../../../design/MyButtonComponent";
import { MyPaper } from "../../../../../design/MyPaper";
import { CartItemStyles } from "../../CSS/CartItemStyles";
import {
  DELETE_CART,
  UPDATE_CART_QUANTITY,
} from "../../../../../../queries/Cart/cartMutations";
import { useMutation } from "@apollo/client";
import { GET_CART_BY_CUSTOMERID } from "../../../../../../queries/Cart/cartQueries";
import { MyDeleteIcon } from "../../../../../design/MyIcons";

const CartItem = ({ cartItemData }) => {
  const classes = CartItemStyles();

  /** mapped Single cart Data  */
  const { id, quantity } = cartItemData;

  /** cartItemData has product Data in the productData Object
   * Because we used ref using product in the MongoDB
   */
  const { productName, productPrice, productDescription, productImageUrl } =
    cartItemData.productData;

  /** State to update individual quantity of the every cart item
   * When it changes , useEffect will run and call the setQuantity function to
   * update quantity in the backend
   */
  const [quantityCount, setQuantityCount] = useState(quantity);

  // mutation to chaning the quantity of cart item
  const [
    updateCartQuantity,
    { error: updateError, loading: updateLoading, data: updateCartData },
  ] = useMutation(UPDATE_CART_QUANTITY);

  //Delete Cart Mutation
  const [
    deleteCart,
    { error: deleteError, loading: deleteLoading, data: deletedCartData },
  ] = useMutation(DELETE_CART);

  /**
   * This function is called from useEffect when we change the quantity of the item
   * @param {string} id -an ID- The id of the cart Item.
   * @param {string} quantity - New updated Quantity of the cart item
   */
  const setQuantityById = (id, quantity) => {
    updateCartQuantity({
      variables: {
        cartID: id,
        quantity: quantity,
      },
    });
  };

  // need to add method on which this use effect only call on update , not onMount
  /// solution - using useRef , check stack overflow
  //https://stackoverflow.com/questions/55075604/react-hooks-useeffect-only-on-update
  useEffect(() => {
    //eslint
    if (quantityCount > 0 && quantityCount != "") {
      setQuantityById(id, quantityCount);
    }
  }, [quantityCount]);

  /** Removing cart from backend by calling mutation and update the cache after that */
  const onRemoveCart = () => {
    deleteCart({
      variables: {
        cartID: id,
      },
      update: (cache, { data: { deleteCart } }) => {
        let data = cache.readQuery({ query: GET_CART_BY_CUSTOMERID });

        // need to newData var because we need to add a
        // new instance of all data , we can not use data var direclty
        let dataToUpdate = data.getCartByCustomerId;
        dataToUpdate = dataToUpdate.filter((singleCartItem) => {
          return singleCartItem.id !== deleteCart.id;
        });

        cache.writeQuery({
          query: GET_CART_BY_CUSTOMERID,
          data: { ...data, getCartByCustomerId: dataToUpdate },
        });
      },
    });
  };

  return (
    <MyPaper elevation={0} className={classes.cartItem}>
      <div>
        <div className={classes.MediaImgDiv}>
          <MyCardMedia
            height="150"
            //don't remove this styles
            style={{ borderRadius: "10px", minWidth: "100px", width: "150px" }}
            title="IMAGE"
            image={productImageUrl}
          />
        </div>
      </div>
      <div className={classes.cartDetails}>
        <div className={classes.cartDetailsInner}>
          {/* product Name */}

          <div style={{ fontWeight: "550", fontSize: "1.2rem" }}>
            {productName}
          </div>

          {/* Description */}

          <div style={{ fontWeight: "300" }}>{productDescription}</div>

          {/* Price */}

          <MyTypography variant="h6" component="h6">
            ₹ {productPrice}
          </MyTypography>
          <div>
            <MyButtonComponent
              variant="outlined"
              // color="secondary"
              className={classes.remove_btn}
              onClick={onRemoveCart}>
              <MyDeleteIcon />
            </MyButtonComponent>
          </div>
        </div>
        <div className={classes.quantityButtonDiv}>
          <MyButtonComponent
            variant="contained"
            color="primary"
            style={{ outline: "none" }}
            disabled={quantityCount <= 1 && true}
            onClick={(e) => {
              setQuantityCount(quantityCount - 1); // this is updating the state , then useEffect will comes into effect
            }}
            className={classes.quantityButton}>
            -
          </MyButtonComponent>

          <input
            className={classes.quantityInput}
            value={quantityCount}
            onChange={() => {
              // console.log("Will Handle it Later");
            }}
            // for doing onChange we need to handle the situation when input is empty,
            // we need to make sure that req does not send to server if input is empty
            // onChange={(e) => {
            //   setQuantityCount(Number(e.target.value));
            // }}
          />

          <MyButtonComponent
            variant="contained"
            color="primary"
            onClick={(e) => {
              setQuantityCount(quantityCount + 1); // this is updating the state , then useEffect will comes into effect
            }}
            className={classes.quantityButton}>
            +
          </MyButtonComponent>
        </div>
      </div>
    </MyPaper>
  );
};

export default CartItem;
