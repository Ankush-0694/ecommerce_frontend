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

export default useAddAddressHook;
