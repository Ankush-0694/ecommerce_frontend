import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getSingleProduct } from "../../../../queries/Product/productQueries";
import { addOrderMutation } from "../../../../queries/Order/orderMutations";
import { useMutation } from "@apollo/client";
import useAddAddressHook from "./Helpers/useAddressHook";
import { MyGridContainer, MyGridItem } from "../../../Design/MyGrid";
import ProductDetails from "./Helpers/ProductDetails";
import PriceDetails from "./Helpers/PriceDetails";
import { MyTypography } from "../../../Design/MyTypography";

const Checkout = (props) => {
  const productid = props.match.params.id.split(":")[1];

  const [quantity, setQuantity] = useState(1);

  const { addressFormData, setAddressFormData } = useAddAddressHook();

  const obj = useQuery(getSingleProduct, {
    variables: { id: productid },
  });

  const [addOrder, { data: OrderData }] = useMutation(addOrderMutation);
  console.log(OrderData);

  const { loading, error, data } = obj;
  // console.log(data);
  let productData;
  if (!loading) {
    productData = data.product;
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
  return (
    <div style={{ padding: "20px" }}>
      <MyGridContainer justify="center" spacing={4}>
        <MyGridItem xs={8} sm={6} className="product-details">
          <MyTypography variant="h4" component="h2">
            Orders Summary
          </MyTypography>
          {/* here we can add a modal which will show all the products in checkou when clicked */}
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
          {!loading && (
            <PriceDetails
              productPrice={productData.productPrice}
              quantity={quantity}
            />
          )}
        </MyGridItem>
      </MyGridContainer>
      {/*  */}
      <div className="grid-container2">
        <div className="added-address-xs12"></div>
        <div className="add-new-address-using-modal-xs12"></div>
      </div>
      <br></br>
      <div>
        Show some pre added address as options to choose then option to add
        delivery address (see the example like flipkart)
      </div>
      <h4>Add delivery Address </h4>

      <div>
        <br></br>
        <form id="add-address" onSubmit={onSubmit}>
          <div className="field">
            <label>Full Name</label>
            <input name="fullName" onChange={onChange} type="text" />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input name="phoneNumber" onChange={onChange} type="text" />
          </div>
          <div className="field">
            <label>Pincode</label>
            <input name="pincode" onChange={onChange} type="text" />
          </div>
          <div className="field">
            <label>State</label>
            <input name="state" onChange={onChange} type="text" />
          </div>
          <div className="field">
            <label>City</label>
            <input name="city" onChange={onChange} type="text" />
          </div>
          <div className="field">
            <label>House No.</label>
            <input name="HouseNo" onChange={onChange} type="text" />
          </div>
          <div className="field">
            <label>Area , Colony</label>
            <input name="area" onChange={onChange} type="text" />
          </div>
          <div className="field">
            <label>Add Nearby / Landmark</label>
            <input name="landmark" onChange={onChange} type="text" />
          </div>

          <button>Place Your order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
