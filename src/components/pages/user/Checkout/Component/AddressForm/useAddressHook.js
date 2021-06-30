import React, { useState } from "react";

const useAddAddressHook = () => {
  const [addressFormData, setAddressFormData] = useState({
    fullName: "",
    phoneNumber: "",
    pincode: "",
    state: "",
    city: "",
    HouseNo: "",
    area: "",
    landmark: "",
  });
  return { addressFormData, setAddressFormData };
};

const emptyAddressState = {
  fullName: "",
  phoneNumber: "",
  pincode: "",
  state: "",
  city: "",
  HouseNo: "",
  area: "",
  landmark: "",
};

export { useAddAddressHook, emptyAddressState };
