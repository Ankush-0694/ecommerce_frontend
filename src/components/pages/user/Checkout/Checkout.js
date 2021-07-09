import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_MULTIPLE_PRODUCTS } from "../../../../queries/Product/productQueries";
import { ADD_ORDER } from "../../../../queries/Order/orderMutations";
import { useMutation } from "@apollo/client";
import { MyGridContainer, MyGridItem } from "../../../Design/MyGrid";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import PriceDetails from "./Component/PriceDetails/PriceDetails";
import { MyTypography } from "../../../Design/MyTypography";
import AddressForm from "./Component/AddressForm/AddressForm";
import AddressList from "./Component/AddressList/AddressList";
import { CheckoutStyles } from "./CSS/CheckoutStyles";
import { MyButtonComponent } from "../../../Design/MyButtonComponent";
import { GET_ALL_ADDRESS } from "../../../../queries/address/addressQueries";

const Checkout = (props) => {
  const classes = CheckoutStyles();

  const [totalQuantity, setTotalQuantity] = useState(1);

  const [current, setCurrent] = useState(null); // to know the form state is add or update

  // destructuring of the props to get state property
  // state will be an array, because cart will have mutlitple items
  const {
    history: {
      location: { state: productIDArray },
    },
  } = props;

  // query for getting multiple product using
  // array of id's passing throught history state
  const {
    error: getMutipleProductError,
    loading: getMutipleProductLoading,
    data: getMutipleProductData,
  } = useQuery(GET_MULTIPLE_PRODUCTS, {
    variables: {
      productIDArray,
    },
  });

  const {
    error: getAddressError,
    loading: getAddressLoading,
    data: addressData,
  } = useQuery(GET_ALL_ADDRESS);

  const [addOrder, { data: addOrderData }] = useMutation(ADD_ORDER);

  if (getMutipleProductError) {
    return <div>Error while Fetching products</div>;
  }
  if (getMutipleProductLoading) {
    return <div>Loading Products...</div>;
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

  const productData = getMutipleProductData.getMultipleProducts; // this data will be rendered

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
              return (
                <ProductDetails
                  key={mappedProductData.id}
                  productData={mappedProductData}
                  quantity={totalQuantity}
                  setQuantity={setTotalQuantity}
                />
              );
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
