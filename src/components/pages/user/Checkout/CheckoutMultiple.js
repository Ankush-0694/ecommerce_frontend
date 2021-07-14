import React, { useState } from "react";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { ADD_ORDER } from "../../../../queries/Order/orderMutations";
import { useMutation } from "@apollo/client";
import { MyGridContainer, MyGridItem } from "../../../Design/MyGrid";
import MultipleProductDetails from "./Component/ProductDetails/MultipleProductDetails";
import PriceDetails from "./Component/PriceDetails/PriceDetails";
import { MyTypography } from "../../../Design/MyTypography";
import { CheckoutStyles } from "./CSS/CheckoutStyles";
import { MyButtonComponent } from "../../../Design/MyButtonComponent";
import { GET_CART } from "../../../../queries/Cart/cartQueries";
import AddressContainer from "./AddressContainer";

/* It render we checkout from using cart Page */
const CheckoutMultiple = (props) => {
  const classes = CheckoutStyles();

  /* We pass this state as a prop to address container then
   * set it based on the choosen address using radio address list
   * This will contain id of address only.
   */
  const [selectedAddress, setSelectedAddress] = useState(null);

  /**
   * This Array will contains all the ids of products which are in the cart
   * Can be useful if things go south
   * @type {string[]} ID's
   */
  const productIDArray = props.history.location.state || [];

  // getting all cart item because we place order from the  cart
  const {
    loading: getCartLoading,
    error: getCartError,
    data: getCartData,
  } = useQuery(GET_CART, {
    fetchPolicy: "cache-first",
  }); /* cache-first is prevent network call if data is available in cache  */

  const [addOrder, { data: addOrderData }] = useMutation(ADD_ORDER);

  if (getCartLoading) {
    return <div>Error while Fetching products</div>;
  }
  if (getCartError) {
    return <div>Loading Products...</div>;
  }

  /**
   * This data will be mapped to rendered the order summary data (it is coming from cart)
   * @type {Array} - Contains Array of objects
   */

  let productData = getCartData.getCart;

  /**  This is called when we click on place order
   *  We also compute the total quantity and map individual quantity with product id
   */
  const OnPlaceOrder = (e) => {
    /* If user does not select the address and try to place order */
    if (selectedAddress === null) {
      alert("select address first");
      return;
    }
    /**
     * Maping individual to the every product id from cart
     * @type {Object}
     *
     *  */
    let ProductDetailsWithQuantity = [];

    /**
     * total quantity for the order to be placed
     */
    let totalQuantity = 0;

    /* mapping the product data to get total quantity and set productDetailsWithQuantity */
    productData.map((mappedData) => {
      totalQuantity += mappedData.quantity;
      ProductDetailsWithQuantity.push({
        productDetails: mappedData.productID,
        quantity: mappedData.quantity,
      });
    });

    addOrder({
      variables: {
        productDetailsWithQuantity: ProductDetailsWithQuantity,
        totalQuantity: Number(totalQuantity),
        addressID: selectedAddress,
        totalPrice: 4000,
      },
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <MyTypography variant="h4" component="h2" style={{ textAlign: "center" }}>
        Order Summary
      </MyTypography>
      <MyGridContainer justify="center" spacing={4}>
        <MyGridItem xs={8} sm={6} className="product-details">
          <div style={{ maxHeight: "500px", overflow: "auto" }}>
            {productData.map((mappedProductData) => {
              return (
                <MultipleProductDetails
                  key={mappedProductData.id}
                  productData={mappedProductData}
                />
              );
            })}
          </div>
        </MyGridItem>
        <MyGridItem xs={8} sm={4} className="price-details">
          <div className={classes.priceDetailsContainer}>
            {/* We are sending total Quantity false because product data is from cart
            and we can calculate the quantity in the price details itself for multiple products */}
            <PriceDetails productData={productData} quantity={false} />
          </div>
          <div className={classes.PlaceOrderbtn}>
            <MyButtonComponent
              variant="contained"
              color="default"
              onClick={OnPlaceOrder}>
              Place Your order
            </MyButtonComponent>
          </div>
        </MyGridItem>
      </MyGridContainer>
      <div style={{ textAlign: "center", margin: "10px" }}></div>
      <hr></hr>

      <div>
        <AddressContainer
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
        />
      </div>
      <br></br>
    </div>
  );
};

export default CheckoutMultiple;
