import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { ADD_ORDER } from "../../../../queries/Order/orderMutations";
import { useMutation } from "@apollo/client";
import { MyGridContainer, MyGridItem } from "../../../Design/MyGrid";
import CheckoutPriceDetails from "./Component/CheckoutPriceDetails/CheckoutPriceDetails";
import { CheckoutStyles } from "./CSS/CheckoutStyles";
import { MyButtonComponent } from "../../../Design/MyButtonComponent";
import AddressContainer from "./AddressContainer";
import SingleProductDetails from "./Component/CheckoutProductDetails/SingleProductDetails";
import { GET_SINGLE_PRODUCT } from "../../../../queries/Product/productQueries";
import { ADD_TO_CART } from "../../../../queries/Cart/cartMutations";
import MyAlert from "../../../Design/MyAlert";
import ShowError from "../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../layout/LoadingComponent/ShowLoading";
import { GET__ORDERS_BY_CUSTOMERID } from "../../../../queries/Order/orderQueries";

/**
 * When we are trying to buy only single item directly without going to cart.
 * Fetching data using productid(which is passed from params)
 * Also passed a state from the pages we came (to check if it got reloaded or user cut and paste the url into other tab)
 */
const CheckoutSingle = (props) => {
  const classes = CheckoutStyles();

  /** we check , if history.location.state have any array or not , if not then just push to cart Checkout (as flipkart)  */
  const productIdStateArray = props.history.location.state;
  if (!productIdStateArray) props.history.push("/checkout");

  /** it is also  total quantity of the order for single product */
  const [quantity, setQuantity] = useState(1);

  /* We pass this state as a prop to addressContainer component then
   * set it based on the choosen address using radio address list
   */
  const [selectedAddress, setSelectedAddress] = useState(null);

  /** we use this state to check user clicked on submit button or not
   * so when user clicked on submit button it became true and alert
   *  generate if he didn't choose the address
   * We again make this state to false , when alert get closed
   */
  const [orderSubmitEvent, setOrderSubmitEvent] = useState(false); // we can use "" also instead of false and set a message

  /**  total Price Variable, It will pass to price details as a prop  */
  const [totalPriceOfOrder, setTotalPriceOfOrder] = useState(0);

  /**
   * This id passed through param by which we can fetch the product
   * @type {string} - Contain id of the product
   */
  const productid = props.match.params.id.split(":")[1];

  /**  getting single product item  */
  const {
    error: getSingleProductError,
    loading: getSingleProductLoading,
    data: getSingleProductData,
  } = useQuery(GET_SINGLE_PRODUCT, {
    variables: {
      id: productid,
    },
    fetchPolicy:
      "cache-first" /* cache-first is prevent network call if data is available in cache  */,
  });

  const [addOrder, { data: addOrderData }] = useMutation(ADD_ORDER, {
    onError: () => {},
    onCompleted: () => {
      setOrderSubmitEvent("Order Placed Successfully !");
    },
    refetchQueries: [{ query: GET__ORDERS_BY_CUSTOMERID }], // updating order afeter we placed order
  });

  /* We call this mutation on Mount to add the checkouted product to the cart */
  const [addToCart, { error: addToCartError, data: cartData }] =
    useMutation(ADD_TO_CART);

  if (getSingleProductError) {
    return <ShowError>Error while Fetching products</ShowError>;
  }
  if (getSingleProductLoading) {
    return <ShowLoading />;
  }

  /**
   * This data will be mapped to rendered the order summary data
   * @type {Array} - Contains Array of objects
   */
  let productData = getSingleProductData.getProductByProductId;

  /** Called when we click place order button */
  const OnPlaceOrder = (e) => {
    /** it means we clicked the order button -
     *  this will be used to check address is selected or not
     *
     * this state will also used to fill the message of order place success in the onComplete callback function of mutation
     *
     *  */
    setOrderSubmitEvent(true);

    /* If user does not select the address and try to place order */

    if (selectedAddress === null) {
      return;
    }

    addOrder({
      variables: {
        productDetailsWithQuantity: [
          { productDetails: productid, quantity: quantity },
        ],
        totalQuantity: Number(quantity),
        addressID: selectedAddress,
        totalPrice: totalPriceOfOrder,
      },
    });
  };

  return (
    <div>
      {/** Needed to pass the setOrderSubmitEvent to make it again false  */}

      {/* if address is not Selected and we enter the button  */}
      {orderSubmitEvent && selectedAddress === null && (
        <MyAlert type="error" stateToClear={setOrderSubmitEvent}>
          Select the Address First
        </MyAlert>
      )}

      {/* For showing sucess alert message when we placed the order successfully   */}

      {orderSubmitEvent && selectedAddress && (
        <MyAlert type="success" stateToClear={setOrderSubmitEvent}>
          {orderSubmitEvent}
        </MyAlert>
      )}

      <div className={classes.orderSummaryHeading}>Order Summary</div>

      <MyGridContainer justify="center">
        <MyGridItem xs={8} sm={6} className="product-details">
          <div style={{ margin: "8px 12px 0px 0px" }}>
            <SingleProductDetails
              productData={productData}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>
        </MyGridItem>

        <MyGridItem xs={8} sm={4} className="price-details">
          <div className={classes.priceDetailsContainer}>
            <CheckoutPriceDetails
              productDataProp={productData}
              quantityProp={quantity}
              setTotalPriceOfOrder={setTotalPriceOfOrder}
            />
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

export default CheckoutSingle;
