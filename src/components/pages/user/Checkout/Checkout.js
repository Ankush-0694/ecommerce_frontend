import React, { useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_MULTIPLE_PRODUCTS } from "../../../../queries/Product/productQueries";
import { ADD_ORDER } from "../../../../queries/Order/orderMutations";
import { useMutation } from "@apollo/client";
import { MyGridContainer, MyGridItem } from "../../../Design/MyGrid";
import MultipleProductDetails from "./Component/ProductDetails/MultipleProductDetails";
import PriceDetails from "./Component/PriceDetails/PriceDetails";
import { MyTypography } from "../../../Design/MyTypography";
import AddressForm from "./Component/AddressForm/AddressForm";
import AddressList from "./Component/AddressList/AddressList";
import { CheckoutStyles } from "./CSS/CheckoutStyles";
import { MyButtonComponent } from "../../../Design/MyButtonComponent";
import { GET_ALL_ADDRESS } from "../../../../queries/address/addressQueries";
import { GET_CART } from "../../../../queries/Cart/cartQueries";

const Checkout = (props) => {
  const classes = CheckoutStyles();

  const [totalQuantity, setTotalQuantity] = useState(1);

  const [current, setCurrent] = useState(null); // to know the form state is add or update

  /**
   * This Array will contains all the ids of products which are in the cart , Or a single Id which we need to buyNow
   * @type {string[]} ID's
   */
  const productIDArray = props.history.location.state;

  /**
   * Checking if there is mutiple id in state Array or not , we skip one query depend on that
   * @type {Bool}
   */
  let mutipleProductIds = false;
  if (productIDArray !== undefined && productIDArray.length > 1) {
    mutipleProductIds = true;
  }

  // getting all cart item because we place order from the  cart
  const {
    loading: getCartLoading,
    error: getCartError,
    data: getCartData,
  } = useQuery(GET_CART, {
    skip: !mutipleProductIds, // if skip is true then this query will not be called
  });

  // We can get singleProduct also but it is okay here for now , because we are getting the product
  /// and it is also using id to fetch
  // don't be confused with muitpleProducts, we used it to fetch multiple product using ID array
  const {
    error: getMutipleProductError,
    loading: getMutipleProductLoading,
    data: getMutipleProductData,
  } = useQuery(GET_MULTIPLE_PRODUCTS, {
    variables: {
      productIDArray,
      skip: mutipleProductIds,
    },
  });

  const {
    error: getAddressError,
    loading: getAddressLoading,
    data: addressData,
  } = useQuery(GET_ALL_ADDRESS);

  const [addOrder, { data: addOrderData }] = useMutation(ADD_ORDER);

  if (getCartLoading || getMutipleProductLoading) {
    return <div>Loading Fetching products</div>;
  }
  if (getCartError || getMutipleProductError) {
    return <div>Error on fetching Products...</div>;
  }

  if (getAddressError) {
    return <div>Error while Fetching addresses</div>;
  }
  if (getAddressLoading) {
    return <div>Loading Adresses...</div>;
  }

  // if in case user enter url himself ,
  // in this case state will be undefined
  if (productIDArray === undefined) {
    // for single item into checkout
    // change from param to query
    // const productid = props.match.params.id.split(":")[1];

    //for muitple item comes from cart into checkout
    // const productIdArray = props.match.params.id.split(":");
    return (
      <div>
        Feature will be added Soon For without sending the state details
      </div>
    );
  }

  /**
   * This data will be mapped to rendered the order summary data
   * @type {Array} - Contains Array of objects
   */
  let productData;
  if (getCartData !== undefined) {
    productData = getCartData.getCart;
  } else {
    productData = getMutipleProductData.getMultipleProducts;
  }

  const OnPlaceOrder = (e) => {
    addOrder({
      variables: {
        ProductDetails: productIDArray,
        totalQuantity: Number(totalQuantity),
      },
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <MyGridContainer justify="center" spacing={4}>
        <MyGridItem xs={8} sm={6} className="product-details">
          <MyTypography variant="h4" component="h2">
            Orders Summary
          </MyTypography>

          <div>
            {productData.map((mappedProductData) => {
              return {
                /* <ProductDetails
                  key={mappedProductData.id}
                  productData={mappedProductData}
                /> */
              };
            })}
          </div>
        </MyGridItem>
        <MyGridItem xs={8} sm={4} className="price-details">
          <div className={classes.priceDetailsContainer}>
            PriceDetails
            {/* <PriceDetails
              productPrice={productData.productPrice}
              quantity={quantity}
            /> */}
          </div>
          <div className={classes.PlaceOrderbtn}>
            <MyButtonComponent variant="contained" color="default">
              Place Your order
            </MyButtonComponent>
          </div>
        </MyGridItem>
      </MyGridContainer>
      <div style={{ textAlign: "center", margin: "10px" }}>
        <h3>TotalQuantity : {totalQuantity}</h3>
      </div>
      <hr></hr>

      {/* Delivery Address List  */}

      <MyGridContainer justify="center">
        <MyGridItem xs={10}>
          <div style={{ border: "1px solid black" }}>
            <div className={classes.DeliveryAddressHeading}>
              <MyTypography variant="h4" component="h3">
                Delivery Address
              </MyTypography>
            </div>

            <div className="addressList">
              <MyGridContainer>
                {addressData.getAllAddress.map((data) => {
                  return (
                    <AddressList
                      key={data.id}
                      data={data}
                      current={current}
                      setCurrent={setCurrent}
                    />
                  );
                })}
              </MyGridContainer>
            </div>
          </div>
          <hr></hr>
        </MyGridItem>

        {/* Address Form  */}

        <MyGridItem xs={10}>
          <div style={{ border: "1px solid black" }}>
            <div className={classes.DeliveryAddressHeading}>
              <MyTypography variant="h5" component="h3">
                {!current ? "Add Delivery Address" : "Update Delivery Address"}
              </MyTypography>
            </div>
            <div className={classes.addressFromContainer}>
              <AddressForm current={current} setCurrent={setCurrent} />
            </div>
          </div>
        </MyGridItem>
      </MyGridContainer>
      <br></br>
    </div>
  );
};

export default Checkout;
