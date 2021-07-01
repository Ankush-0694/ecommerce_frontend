import React from "react";

const CustomerList = ({ customerData }) => {
  const { id, firstName, lastName, email } = customerData;
  return (
    <div>
      {firstName} {lastName} {email}
    </div>
  );
};

export default CustomerList;
