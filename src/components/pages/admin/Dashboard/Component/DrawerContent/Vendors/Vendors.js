import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../../../../../../../queries/admin/adminQueries";
import UserList from "../UserListComponent/UserList";
import { makeStyles } from "@material-ui/core/styles";
import { MyTypography } from "../../../../../../Design/MyTypography";
import { MyPaper } from "../../../../../../Design/MyPaper";
import {
  MyTableContainer,
  MyTable,
  MyTableHead,
  MyTableBody,
  MyTableCell,
  MyTableRow,
} from "../../../../../../Design/MyTableComponents";
import CreateVendor from "../CreateVendor/CreateVendor";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

const Vendors = () => {
  const classes = useStyles();
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

  const columns = [
    { id: "SNo.", label: "S.No.", minWidth: 170 },
    { id: "firstname", label: "FirstName", minWidth: 170 },
    { id: "lastname", label: "LastName", minWidth: 170 },
    {
      id: "email",
      label: "Email",
      minWidth: 170,
    },
    {
      id: "role",
      label: "Role",
      minWidth: 170,
    },
  ];

  return (
    <div>
      <div style={{ margin: "20px" }}>
        <CreateVendor />
      </div>

      <Divider />
      <div style={{ textAlign: "center", padding: "20px 0px" }}>
        <MyTypography variant="h3" component="h2">
          Vendors
        </MyTypography>
      </div>
      <MyPaper className={classes.root}>
        <MyTableContainer className={classes.container}>
          <MyTable stickyHeader aria-label="sticky table">
            <MyTableHead>
              <MyTableRow>
                {columns.map((column) => (
                  <MyTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: "bolder" }}>
                    {column.label}
                  </MyTableCell>
                ))}
              </MyTableRow>
            </MyTableHead>
            <MyTableBody>
              {dataToRender.map((customer, index) => {
                return (
                  <UserList
                    key={customer.id}
                    customerData={customer}
                    serialNo={index}
                  />
                );
              })}
            </MyTableBody>
          </MyTable>
        </MyTableContainer>
      </MyPaper>
    </div>
  );
};

export default Vendors;
