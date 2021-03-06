import React from "react";
import { useQuery } from "@apollo/client";
import UserList from "../UserTableBody/UserTableBody";
import { makeStyles } from '@mui/styles';
import { MyTypography } from "../../../../../../design/MyTypography";
import { MyPaper } from "../../../../../../design/MyPaper";
import {
  MyTableContainer,
  MyTable,
  MyTableHead,
  MyTableBody,
  MyTableCell,
  MyTableRow,
} from "../../../../../../design/MyTableComponents";
import CreateVendor from "../CreateVendor/CreateVendor";
import { Divider } from "@mui/material";
import { GET_ALL_USERS_BY_ROLE } from "../../../../../../../queries/user/userQueries";
import ShowError from "../../../../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../../../../layout/LoadingComponent/ShowLoading";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    // maxHeight: 440,
  },
});

const Vendors = () => {
  const classes = useStyles();
  const {
    error: getAllUsersError,
    loading: getAllUsersLoading,
    data: AllUsersData,
  } = useQuery(GET_ALL_USERS_BY_ROLE, {
    variables: { role: "vendor" },
  });

  if (getAllUsersError) {
    return <ShowError>Error while Fetching Vendors</ShowError>;
  }
  if (getAllUsersLoading) {
    return <ShowLoading />;
  }

  const dataToRender = AllUsersData.getAllUsersByRole;

  const columns = [
    { id: "SNo.", label: "S.No.", minWidth: 50 },
    { id: "firstname", label: "FirstName", minWidth: 100 },
    { id: "lastname", label: "LastName", minWidth: 100 },
    {
      id: "email",
      label: "Email",
      minWidth: 170,
    },
    {
      id: "role",
      label: "Role",
      minWidth: 50,
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

      <div style={{ padding: "0px 16px" }}>
        <MyPaper className={classes.root}>
          <MyTableContainer className={classes.container}>
            <MyTable stickyHeader aria-label="sticky table">
              <MyTableHead>
                <MyTableRow>
                  {columns.map((column) => (
                    <MyTableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        fontWeight: "bolder",
                      }}>
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
    </div>
  );
};

export default Vendors;
