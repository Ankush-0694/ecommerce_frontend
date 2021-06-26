import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getSingleProduct } from "../../../../queries/Product/productQueries";
import { addOrderMutation } from "../../../../queries/Order/orderMutations";
import { useMutation } from "@apollo/client";
import useAddAddressHook from "./useAddressHook";
import { MyGridContainer, MyGridItem } from "../../../Design/MyGrid";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import PriceDetails from "./Component/PriceDetails/PriceDetails";
import { MyTypography } from "../../../Design/MyTypography";
import AddressForm from "./Component/AddressForm/AddressForm";
import AddressList from "./Component/AddressList/AddressList";
import { CheckoutStyles } from "./CSS/CheckoutStyles";
import { MyButtonComponent } from "../../../Design/MyButtonComponent";

const Checkout = (props) => {
  const classes = CheckoutStyles();
  console.log(props.match.params.id.split(":"));

  const productid = props.match.params.id.split(":")[1];

  const productIdArray = props.match.params.id.split(":");

  const [quantity, setQuantity] = useState(1);

  const { addressFormData, setAddressFormData } = useAddAddressHook();

  const singleProductObject = useQuery(getSingleProduct, {
    variables: { id: productid },
  });
  const { loading, error, data } = singleProductObject;

  const [addOrder, { data: OrderData }] = useMutation(addOrderMutation);
  console.log(OrderData);

  // console.log(data);
  let productData;
  if (!loading) {
    productData = data.getProductById;
  }

  const onChange = (e) => {
    let value = e.target.value;

    setAddressFormData({
      ...addressFormData,
      [e.target.name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    /////change of types of values in address object

    addressFormData["pincode"] = Number(addressFormData["pincode"]);
    addressFormData["phoneNumber"] = Number(addressFormData["phoneNumber"]);

    ////change of types of values in address object

    console.log(addressFormData);

    const dataToStore = {
      // addressFormData,
      productName: productData.productName,
      productDescription: productData.productDescription,
      productPrice: productData.productPrice,
      quantity: quantity,
      address: addressFormData,
    };

    addOrder({
      variables: {
        productName: productData.productName,
        productDescription: productData.productDescription,
        productPrice: Number(productData.productPrice),
        quantity: Number(quantity),
        address: addressFormData, // here we may need to specify type of every key of address object
      },
    });
    console.log(dataToStore);
    console.log("submited");
  };

  const addressData = [
    {
      id: 1,
      fullName: "Ankush Kumar",
      city: "Moradabad",
      state: "Uttar Pradesh",
    },
    {
      id: 2,
      fullName: "Ankush Kumar",
      city: "Moradabad",
      state: "Uttar Pradesh",
    },
  ];

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
                {addressData.map((data) => {
                  return <AddressList key={data.id} data={data} />;
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
                Add Delivery Address
              </MyTypography>
            </div>
            <div className={classes.addressFromContainer}>
              <AddressForm onChange={onChange} onSubmit={onSubmit} />
            </div>
          </div>
        </MyGridItem>
      </MyGridContainer>
      <br></br>
    </div>
  );
};

export default Checkout;
