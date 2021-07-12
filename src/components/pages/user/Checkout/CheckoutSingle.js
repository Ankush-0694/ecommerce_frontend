import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { ADD_ORDER } from "../../../../queries/Order/orderMutations";
import { useMutation } from "@apollo/client";
import { MyGridContainer, MyGridItem } from "../../../Design/MyGrid";
import PriceDetails from "./Component/PriceDetails/PriceDetails";
import { MyTypography } from "../../../Design/MyTypography";
import { CheckoutStyles } from "./CSS/CheckoutStyles";
import { MyButtonComponent } from "../../../Design/MyButtonComponent";
import AddressContainer from "./AddressContainer";
import SingleProductDetails from "./Component/ProductDetails/SingleProductDetails";
import { GET_SINGLE_PRODUCT } from "../../../../queries/Product/productQueries";

/**
 * When we are trying to buy only single item directly without going to cart.
 * Fetching data using productid(which is passed from params)
 */
const CheckoutSingle = (props) => {
  const classes = CheckoutStyles();

  // it is total quantity of the order for single product
  const [quantity, setQuantity] = useState(1);

  /* We pass this state as a prop to addressContainer component then
   * set it based on the choosen address using radio address list
   */
  const [selectedAddress, setSelectedAddress] = useState("");

  /**
   * This id passed through param by which we can fetch the product
   * @type {string} - Contain id of the product
   */
  const productid = props.match.params.id.split(":")[1];

  // getting single cart item which is just previously added
  // replace it using getSingleProduct
  const {
    error: getSingleProductError,
    loading: getSingleProductLoading,
    data: getSingleProductData,
  } = useQuery(GET_SINGLE_PRODUCT, {
    variables: {
      id: productid,
    },
  });

  const [addOrder, { data: addOrderData }] = useMutation(ADD_ORDER);

  if (getSingleProductError) {
    return <div>Error while Fetching products</div>;
  }
  if (getSingleProductLoading) {
    return <div>Loading Products...</div>;
  }

  /**
   * This data will be mapped to rendered the order summary data
   * @type {Array} - Contains Array of objects
   */
  let productData = getSingleProductData.getProductById;

  const OnPlaceOrder = (e) => {
    addOrder({
      variables: {
        productDetailsWithQuantity: [
          { productDetails: productid, quantity: quantity },
        ],
        totalQuantity: Number(quantity),
        addressID: "60eab4576148bf0e74bd3159",
        totalPrice: 4000,
      },
    });
    console.log(addOrderData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <MyGridContainer justify="center" spacing={4}>
        <MyGridItem xs={8} sm={6} className="product-details">
          <MyTypography variant="h4" component="h2">
            Orders Summary
          </MyTypography>

          <div>
            <SingleProductDetails
              productData={productData}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>
        </MyGridItem>
        <MyGridItem xs={8} sm={4} className="price-details">
          <div className={classes.priceDetailsContainer}>
            <PriceDetails productData={productData} quantity={quantity} />
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
      <div style={{ textAlign: "center", margin: "10px" }}>
        {/* <h3>TotalQuantity : {totalQuantity}</h3> */}
      </div>
      <hr></hr>

      <div>
        <AddressContainer />
      </div>
      <br></br>
    </div>
  );
};

export default CheckoutSingle;
