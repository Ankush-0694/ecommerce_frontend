import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getSingleProduct } from "../../../../queries/Product/productQueries";
import { addOrderMutation } from "../../../../queries/Order/orderMutations";
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
  console.log(props.match.params.id.split(":"));

  const productid = props.match.params.id.split(":")[1];

  const productIdArray = props.match.params.id.split(":");

  const [quantity, setQuantity] = useState(1);

  const [current, setCurrent] = useState(null);
  console.log(current);

  const singleProductObject = useQuery(getSingleProduct, {
    variables: { id: productid },
  });
  const { loading, error, data } = singleProductObject;

  const [addOrder, { data: OrderData }] = useMutation(addOrderMutation);
  console.log(OrderData);

  let productData;
  if (!loading) {
    productData = data.getProductById;
  }

  const OnPlaceOrder = (e) => {
    addOrder({
      variables: {
        productName: productData.productName,
        productDescription: productData.productDescription,
        productPrice: Number(productData.productPrice),
        quantity: Number(quantity),
      },
    });
    console.log("submited");
  };

  const {
    error: getAddressError,
    loading: getAddressLoading,
    data: addressData,
  } = useQuery(GET_ALL_ADDRESS);

  if (getAddressError) {
    return <div>Error while Fetching addresses</div>;
  }
  if (getAddressLoading) {
    return <div>Loading Adresses...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <MyGridContainer justify="center" spacing={4}>
        <MyGridItem xs={8} sm={6} className="product-details">
          <MyTypography variant="h4" component="h2">
            Orders Summary
          </MyTypography>

          {!loading && (
            <div>
              <ProductDetails
                productData={productData}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            </div>
          )}
        </MyGridItem>
        <MyGridItem xs={8} sm={4} className="price-details">
          <div className={classes.priceDetailsContainer}>
            {!loading && (
              <PriceDetails
                productPrice={productData.productPrice}
                quantity={quantity}
              />
            )}
          </div>
          <div className={classes.PlaceOrderbtn}>
            <MyButtonComponent variant="contained" color="default">
              Place Your order
            </MyButtonComponent>
          </div>
        </MyGridItem>
      </MyGridContainer>
      <hr></hr>
      {/*  */}
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
