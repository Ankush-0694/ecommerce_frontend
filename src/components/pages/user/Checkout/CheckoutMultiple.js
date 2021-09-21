import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { ADD_ORDER } from "../../../../queries/Order/orderMutations";
import { useMutation } from "@apollo/client";
import { MyGridContainer, MyGridItem } from "../../../Design/MyGrid";
import MultipleProductDetails from "./Component/CheckoutProductDetails/MultipleProductDetails";
import CheckoutPriceDetails from "./Component/CheckoutPriceDetails/CheckoutPriceDetails";
import { CheckoutStyles } from "./CSS/CheckoutStyles";
import { MyButtonComponent } from "../../../Design/MyButtonComponent";
import { GET_CART_BY_CUSTOMERID } from "../../../../queries/Cart/cartQueries";
import AddressContainer from "./AddressContainer";
import MyAlert from "../../../Design/MyAlert";
import ShowError from "../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../layout/LoadingComponent/ShowLoading";
import { GET__ORDERS_BY_CUSTOMERID } from "../../../../queries/Order/orderQueries";

/* It render we checkout from using cart Page */
const CheckoutMultiple = (props) => {
  const classes = CheckoutStyles();

  /* We pass this state as a prop to address container then
   * set it based on the choosen address using radio address list
   * This will contain id of address only.
   */
  const [selectedAddress, setSelectedAddress] = useState(null);

  /**  total Price Variable, It will pass to price details as a prop  */
  const [totalPriceOfOrder, setTotalPriceOfOrder] = useState(0);

  /** we use this state to check user clicked on submit button or not
   * so when user clicked on submit button it became true and alert
   *  generate if he didn't choose the address
   * We again make this state to false , when alert get closed
   *
   * We also use it in onComplete callback in mutations
   */
  const [orderSubmitEvent, setOrderSubmitEvent] = useState(false);

  /**
   * This Array will contains all the ids of products which are in the cart
   * Can be useful if things go south
   * @type {string[]} ID's
   */
  // const productIDArray = props.history.location.state || [];

  // getting all cart item because we place order from the  cart
  const {
    loading: getCartLoading,
    error: getCartError,
    data: getCartData,
  } = useQuery(GET_CART_BY_CUSTOMERID, {
    fetchPolicy: "cache-first",
  }); /* cache-first is prevent network call if data is available in cache  */

  const [addOrder, { data: addOrderData }] = useMutation(ADD_ORDER, {
    onError: () => {},
    onCompleted: () => {
      setOrderSubmitEvent("Order Placed Successfully !");
    },
    refetchQueries: [{ query: GET__ORDERS_BY_CUSTOMERID }], // updating order afeter we placed order
  });

  if (getCartLoading) {
    return <ShowError>Error while Fetching Cart Data</ShowError>;
  }
  if (getCartError) {
    return <ShowLoading />;
  }

  /**
   * This data will be mapped to rendered the order summary data (it is coming from cart)
   * @type {Array} - Contains Array of objects
   */

  let cartData = getCartData.getCartByCustomerId;

  /**  This is called when we click on place order
   *  We also compute the total quantity and map individual quantity with product id
   */
  const OnPlaceOrder = (e) => {
    /* If user does not select the address and try to place order */

    setOrderSubmitEvent(true); // to use it in an alert

    if (selectedAddress === null) {
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

    /* mapping the cart data to get total quantity and set productDetailsWithQuantity */
    cartData.map((mappedData) => {
      /** productData is coming after populate as an object in cart schema */
      const { quantity, productData } = mappedData;

      totalQuantity += quantity; // Calculating total quantity of the order(every item may have different quantity)

      /** this object will pass to order to store productData with individual quantity */
      ProductDetailsWithQuantity.push({
        productDetails: productData.id,
        quantity: quantity,
      });
    });

    //Finally placing the order after hard work
    addOrder({
      variables: {
        productDetailsWithQuantity: ProductDetailsWithQuantity,
        totalQuantity: Number(totalQuantity),
        addressID: selectedAddress,
        totalPrice: totalPriceOfOrder,
      },
    });
  };

  return (
    <div>
      {/** Needee to pass the setOrderSubmitEvent to make it again false  */}

      {/* if address is not Selected and we enter the button  */}
      {orderSubmitEvent && selectedAddress === null && (
        <MyAlert type="error" stateToClear={setOrderSubmitEvent}>
          Select the Address First
        </MyAlert>
      )}

      {/* For showing sucess alert message when wep placed the order   */}

      {orderSubmitEvent && selectedAddress && (
        <MyAlert type="success" stateToClear={setOrderSubmitEvent}>
          {orderSubmitEvent}
        </MyAlert>
      )}

      <div className={classes.orderSummaryHeading}>Order Summary</div>

      <MyGridContainer justify="center">
        {/* Product Details on order Summary */}

        <MyGridItem xs={8} sm={6} className="product-details">
          <div
            style={{
              maxHeight: "500px",
              overflow: "auto",
              paddingRight: "20px",
            }}>
            {/* Mapping cart to show product details on order summary  */}

            {cartData.map((mappedCartData) => {
              return (
                <MultipleProductDetails
                  key={mappedCartData.id} // this is cart id
                  cartDataProp={mappedCartData}
                />
              );
            })}
          </div>
        </MyGridItem>

        {/* Price Details on order Summary */}

        <MyGridItem xs={8} sm={4} className="price-details">
          <div className={classes.priceDetailsContainer}>
            {/* We are sending total Quantity false because product data is from cart
            and we can calculate the quantity in the price details itself for multiple products */}
            <CheckoutPriceDetails
              cartDataProp={cartData} // this same prop is passed from checkoutSingle so we name it the same
              quantityProp={false}
              setTotalPriceOfOrder={setTotalPriceOfOrder}
            />
          </div>
          <div className={classes.PlaceOrderbtn}>
            <MyButtonComponent
              variant="contained"
              color="default"
              // disabled={submitEvent && selectedAddress === null}
              onClick={OnPlaceOrder}>
              Place Your order
            </MyButtonComponent>
          </div>
        </MyGridItem>
      </MyGridContainer>
      <div style={{ textAlign: "center", margin: "10px" }}></div>
      <hr></hr>

      {/* Address List and Form */}

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
