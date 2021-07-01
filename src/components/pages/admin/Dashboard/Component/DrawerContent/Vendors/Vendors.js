import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_USERS } from "../../../../../../../queries/admin/adminQueries";
import UserList from "../ListComponent/UserList";

const Vendors = () => {
  const {
    error: getAllUsersError,
    loading: getAllUsersLoading,
    data: AllUsersData,
  } = useQuery(GET_ALL_USERS, {
    variables: { role: "vendor" },
  });

  if (getAllUsersError) {
    return <div>Error Occured</div>;
  }
  if (getAllUsersLoading) {
    return <div>Loading .... Getting Vendors</div>;
  }

  const dataToRender = AllUsersData.getAllUsers;

  return (
    <div>
      {dataToRender.map((customer) => {
        return <UserList key={customer.id} customerData={customer} />;
      })}
    </div>
  );
};

export default Vendors;
