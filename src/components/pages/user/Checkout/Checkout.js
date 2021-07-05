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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  AccordionSummary,
  Accordion,
  AccordionDetails,
} from "@material-ui/core";

const Checkout = (props) => {
  const classes = CheckoutStyles();

  const productid = props.match.params.id.split(":")[1];

  const productIdArray = props.match.params.id.split(":");

  const [quantity, setQuantity] = useState(1);

  const [current, setCurrent] = useState(null); // to know the form state is add or update

  const {
    error: getProductError,
    loading: getProductLoading,
    data: getProductData,
  } = useQuery(getSingleProduct, {
    variables: { id: productid },
  });

  const {
    error: getAddressError,
    loading: getAddressLoading,
    data: addressData,
  } = useQuery(GET_ALL_ADDRESS);

  const [addOrder, { data: addOrderData }] = useMutation(addOrderMutation);

  if (getProductError) {
    return <div>Error while Fetching products</div>;
  }
  if (getProductLoading) {
    return <div>Loading Products...</div>;
  }

  if (getAddressError) {
    return <div>Error while Fetching addresses</div>;
  }
  if (getAddressLoading) {
    return <div>Loading Adresses...</div>;
  }

  const productData = getProductData.getProductById; // this data will be render

  const OnPlaceOrder = (e) => {
    addOrder({
      variables: {
        productName: productData.productName,
        productDescription: productData.productDescription,
        productPrice: Number(productData.productPrice),
        quantity: Number(quantity),
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
            <ProductDetails
              productData={productData}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>
        </MyGridItem>
        <MyGridItem xs={8} sm={4} className="price-details">
          <div className={classes.priceDetailsContainer}>
            <PriceDetails
              productPrice={productData.productPrice}
              quantity={quantity}
            />
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

          {/* <div className={classes.root}>
            <Accordion>
              <AccordionSummary
                className={classes.AddDeliveryAddressHeading}
                expandIcon={<ExpandMoreIcon color="secondary" />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <MyTypography variant="h5" component="h3">
                  {!current
                    ? "Add Delivery Address"
                    : "Update Delivery Address"}
                </MyTypography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={classes.addressFromContainer}>
                  <AddressForm current={current} setCurrent={setCurrent} />
                </div>
              </AccordionDetails>
            </Accordion>
          </div> */}
        </MyGridItem>
      </MyGridContainer>
      <br></br>
    </div>
  );
};

export default Checkout;
