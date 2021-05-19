import React from "react";
import { useQuery } from "@apollo/client";
import { getSingleProduct } from "../../../../queries/productQueries";
import { addOrderMutation } from "../../../../queries/orderQueries";
import { useMutation } from "@apollo/client";
import useAddAddressHook from "./useAddressHook";

const Checkout = (props) => {
  const productid = props.match.params.id.split(":")[1];

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
    setAddressFormData({
      ...addressFormData,
      [e.target.name]: e.target.value,
    });
  };

  const quantity = 1;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(addressFormData);
    const dataToStore = {
      // addressFormData,
      productName: productData.productName,
      productDescription: productData.productDescription,
      productPrice: productData.productPrice,
      quantity: quantity,
    };
    addOrder({
      variables: {
        productName: productData.productName,
        productDescription: productData.productDescription,
        productPrice: Number(productData.productPrice),
        quantity: Number(quantity),
      },
      //   refetchQueries: [{ query: getBooksQuery }],
    });
    console.log(dataToStore);
    console.log("submited");
  };
  return (
    // <div>
    //   When a user click buy now on prodcut in homepage or cart then it will
    //   redirect to this Page here user will enter the address and other details
    //  like quantity
    //   then he will directed to payment section
    // </div>
    <div>
      {!loading && (
        <div>
          {" "}
          {productData.productName}
          <br></br> {productData.productDescription}
          <br></br>
          {productData.productPrice}
        </div>
      )}
      <br></br>
      Add delivery Address
      <br></br>
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
